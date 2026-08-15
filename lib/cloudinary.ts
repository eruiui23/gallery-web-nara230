"use server"
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

interface CloudinaryResponse {
   photos: Photo[]
   next_cursor?: string
}

export async function getImagesFromFolder(folderName: string, cursor?: string) : Promise<CloudinaryResponse>{
  try {
    let query = cloudinary.search
      .expression(`folder:"${folderName}"`)
      .sort_by('public_id', 'asc')
      .max_results(25)

      if (cursor) {
          query = query.next_cursor(cursor)
        }

        const results = await query.execute()

    // Mapping the results into a clean array
    const photos = results.resources.map((file : CloudinarySearchResult) => ({
      id: file.public_id,
      src: file.secure_url,
      width: file.width,
      height: file.height,
    }));

    return {
        photos: photos,
        next_cursor: results.next_cursor

    }
  } catch (error) {
    console.error('Error fetching images:', error);
    return { photos: []};
  }
}
