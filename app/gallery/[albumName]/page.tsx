import ImageWall from "@/components/ImageWall";


type Props = {
    params: Promise<{ albumName: string }>;
};



export async function generateStaticParams() {
  return [];
}

export default async function Album({ params }: Props) {
    const { albumName } = await params;

    return (
        <div className="mt-30 min-h-screen">
            <div className="flex flex-col gap-5">
                <ImageWall
                    folderName={`Nara230/Gallery/${albumName}`}
                ></ImageWall>
            </div>
        </div>
    );
}
