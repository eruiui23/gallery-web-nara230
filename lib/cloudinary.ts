"use server";
import { v2 as cloudinary } from "cloudinary";
import { getPlaiceholder } from "plaiceholder";

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
  color: string;
}

interface CloudinarySearchResult {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
  [key: string]: unknown;
}

interface CloudinaryResponse {
  photos: Photo[];
  next_cursor?: string;
}

export async function getImagesFromFolder(
  folderName: string,
  cursor?: string,
): Promise<CloudinaryResponse> {
  try {
    let query = cloudinary.search
      .expression(`folder:"${folderName}"`)
      .sort_by("public_id", "asc")
      .max_results(25);

    if (cursor) {
      query = query.next_cursor(cursor);
    }

    const results = await query.execute();

    const photos: Photo[] = [];

        for (const file of results.resources as CloudinarySearchResult[]) {
          try {
            const tinyImageUrl = file.secure_url.replace("/upload/", "/upload/w_10/");

            const response = await fetch(tinyImageUrl);

            if (!response.ok) {
              throw new Error(`Fetch failed with status: ${response.status}`);
            }

            const buffer = Buffer.from(await response.arrayBuffer());
            const { color } = await getPlaiceholder(buffer);

            photos.push({
              id: file.public_id,
              src: file.secure_url,
              width: file.width,
              height: file.height,
              color: color.hex,
            });
          } catch (innerError) {
            console.error(`Failed to generate color for ${file.public_id}:`, innerError);
            photos.push({
              id: file.public_id,
              src: file.secure_url,
              width: file.width,
              height: file.height,
              color: "#333333",
            });
          }
        }

    return {
      photos: photos,
      next_cursor: results.next_cursor,
    };
  } catch (error) {
    console.error("Error fetching images:", error);
    return { photos: [] };
  }
}
