import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export interface Photo {
  id: string;
  src: string;
  width: number;
  height: number;
}

// Interface representing the shape of an asset returned by Cloudinary's Search API
interface CloudinarySearchResult {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
  [key: string]: unknown; // Allows other Cloudinary properties without throwing errors
}

export async function getImagesFromFolder(folderName: string) : Promise<Photo[]>{
  try {
    const results = await cloudinary.search
      .expression(`folder:"${folderName}"`)
      // Sort by newest uploaded or public_id
      .sort_by('public_id', 'desc')
      // Maximum number of images to return (default: 50, max: 500)
      .max_results(100)
      .execute();

    // Mapping the results into a clean array
    const photos = results.resources.map((file : CloudinarySearchResult) => ({
      id: file.public_id,
      src: file.secure_url,
      width: file.width,
      height: file.height,
      format: file.format,
    }));

    return photos;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
}

// export const getGalleryPhotos = unstable_cache(
//   async (): Promise<Photo[]> => {
//     try {
//       const results = await cloudinary.search
//         .expression('folder:/Nara230')
//         .sort_by('public_id', 'desc')
//         .max_results(100)
//         .execute();

//       return results.resources.map((file: CloudinarySearchResult) => ({
//         id: file.public_id,
//         src: file.secure_url,
//         width: file.width,
//         height: file.height,
//       }));
//     } catch (error: unknown) {
//       console.error('Error fetching Cloudinary images:', error);
//       return [];
//     }
//   },
//   ['cloudinary-gallery-photos'],
//   { revalidate: 86400 }
// );
