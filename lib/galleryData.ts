export type GalleryItem = {
  title: string;
  src: string;
  href: string;
};

export type TabCategory = {
  id: string;
  label: string;
  items: GalleryItem[];
};

export const galleryTabsContent: TabCategory[] = [
  {
    id: "street",
    label: "street",
    items: [
      {
        title: "New Year's Eve 2024",
        src: "https://res.cloudinary.com/dgvu6ny5a/image/upload/v1786507388/DSCF5988_web_edltpj.jpg",
        href: "/gallery/MalamTahunBaru2024",
      },
    ],
  },
  {
    id: "highschool",
    label: "high school",
    items: [
      {
        title: "New Year's Eve 2024",
        src: "https://res.cloudinary.com/dgvu6ny5a/image/upload/v1786507388/DSCF5988_web_edltpj.jpg",
        href: "/gallery/MalamTahunBaru2024",
      },
    ],
  },
  {
    id: "college",
    label: "College",
    items: [
      {
        title: "New Year's Eve 2024",
        src: "https://res.cloudinary.com/dgvu6ny5a/image/upload/v1786507388/DSCF5988_web_edltpj.jpg",
        href: "/gallery/MalamTahunBaru2024",
      },
      {
        title: "Classmeet",
        src: "https://res.cloudinary.com/dgvu6ny5a/image/upload/v1773988817/DSCF7425_web_uv4cun.jpg",
        href: "/gallery/classmeet",
      },
      {
        title: "uprak",
        src: "https://res.cloudinary.com/dgvu6ny5a/image/upload/v1786507500/DSCF6732_web_xzbt1h.jpg",
        href: "/gallery/Uprak",
      },
    ],
  },
];
