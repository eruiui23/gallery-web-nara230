import Image from "next/image";
import { getImagesFromFolder, Photo } from "@/lib/cloudinary";

export default async function GalleryPage() {
  const photos = await getImagesFromFolder("Nara230/Test");

  return (
      <div>

      </div>
  );
}
