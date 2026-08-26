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
        title: "Tunjungan - 2",
        src: "https://res.cloudinary.com/dgvu6ny5a/image/upload/v1787578296/R0011374_web_kduwpf.jpg",
        href: "/gallery/Tunjungan2",
      },
      {
        title: "Sunday Morning",
        src: "https://res.cloudinary.com/dgvu6ny5a/image/upload/v1787583527/R0010561_web_hyjbzl.jpg",
        href: "/gallery/SundayMorning",
      },
      {
        title: "Tunjungan - 1",
        src: "https://res.cloudinary.com/dgvu6ny5a/image/upload/v1787577819/DSCF9719_web_sfk5jc.jpg",
        href: "/gallery/Tunjungan1",
      },
      {
        title: "New Year's Eve 2024",
        src: "https://res.cloudinary.com/dgvu6ny5a/image/upload/v1786507406/DSCF5566_web_itbdxa.jpg",
        href: "/gallery/MalamTahunBaru2024",
      },
      {
        title: "Blok M - 2",
        src: "https://res.cloudinary.com/dgvu6ny5a/image/upload/v1787565401/DSCF8893_web_dauedu.jpg",
        href: "/gallery/BlokM2",
      },
      {
        title: "Tebet",
        src: "https://res.cloudinary.com/dgvu6ny5a/image/upload/v1787575682/DSCF3285_web_kjbdvh.jpg",
        href: "/gallery/Tebet",
      },
      {
        title: "Comifuro 16",
        src: "https://res.cloudinary.com/dgvu6ny5a/image/upload/v1787570906/DSCF4239_web_syvr4p.jpg",
        href: "/gallery/Comifuro16",
      },
      {
        title: "Blok M - 1",
        src: "https://res.cloudinary.com/dgvu6ny5a/image/upload/v1787564769/DSCF3032_web_ep8qcd.jpg",
        href: "/gallery/BlokM1",
      },
      {
        title: "Cawang",
        src: "https://res.cloudinary.com/dgvu6ny5a/image/upload/v1787565858/DSCF1489_web_o7kvmq.jpg",
        href: "/gallery/Cawang",
      },
    ],
  },
  {
    id: "highschool",
    label: "high school",
    items: [
      {
        title: "Graduation",
        src: "https://res.cloudinary.com/dgvu6ny5a/image/upload/v1787593197/DSCF7668_web_shihab.jpg",
        href: "/gallery/Graduation",
      },
      {
        title: "Paskah",
        src: "https://res.cloudinary.com/dgvu6ny5a/image/upload/v1787591929/DSCF7256_web_iuaqbx.jpg",
        href: "/gallery/Paskah",
      },
      {
        title: "Sebelum US",
        src: "https://res.cloudinary.com/dgvu6ny5a/image/upload/v1787596495/DSCF6977_web_r8g7no.jpg",
        href: "/gallery/B4US",
      },
      {
        title: "Classmeet",
        src: "https://res.cloudinary.com/dgvu6ny5a/image/upload/v1787586786/DSCF3817_web_xyz1h7.jpg",
        href: "/gallery/classmeet",
      },
      {
        title: "uprak",
        src: "https://res.cloudinary.com/dgvu6ny5a/image/upload/v1787589880/DSCF6762_web_gxhmok.jpg",
        href: "/gallery/Uprak",
      },
    ],
  },
  {
    id: "college",
    label: "College",
    items: [
      {
        title: "SW 133",
        src: "https://res.cloudinary.com/dgvu6ny5a/image/upload/v1787576088/R0012792_aaxwb7.jpg",
        href: "/gallery/SW133",
      },
      {
        title: "C28",
        src: "https://res.cloudinary.com/dgvu6ny5a/image/upload/v1787560261/R0011649_web_x6whh8.jpg",
        href: "/gallery/C28",
      },
      {
        title: "Mendaki",
        src: "https://res.cloudinary.com/dgvu6ny5a/image/upload/v1787563119/R0011625_web_xwawzi.jpg",
        href: "/gallery/Mendaki",
      },
      {
        title: "Main ke Tunjungan",
        src: "https://res.cloudinary.com/dgvu6ny5a/image/upload/v1787578578/R0011343_web_yjrml9.jpg",
        href: "/gallery/MainKeTunjungan",
      },
    ],
  },
];

export const carouselData = [
    {
        id: 1,
        src: "https://res.cloudinary.com/dgvu6ny5a/image/upload/v1751960002/DSCF5566_ndu7yj.jpg",
        alt: "Portrait of a person",
        title: "Shadows",
        category: "Portrait",
        preload: true
    },
    {
        id: 2,
        src: "https://res.cloudinary.com/dgvu6ny5a/image/upload/v1751959941/DSCF5988_u4hrb3.png",
        alt: "Portrait of a person",
        title: "Shadows",
        category: "Portrait",
        preload: true
    },
    {
        id: 3,
        src: "https://res.cloudinary.com/dgvu6ny5a/image/upload/v1751959516/DSCF9719_q2qjbk.jpg",
        alt: "Street photography in Tokyo",
        title: "Tokyo Drift",
        category: "Street",
    },
    {
        id: 4,
        src: "https://res.cloudinary.com/dgvu6ny5a/image/upload/v1751959517/DSCF4239_ukkxqn.jpg",
        alt: "Portrait of a person",
        title: "Shadows",
        category: "Portrait",
    },
    {
        id: 5,
        src: "https://res.cloudinary.com/dgvu6ny5a/image/upload/v1774258126/R0011276_web_hm9yy5.jpg",
        alt: "Portrait of a person",
        title: "Shadows",
        category: "Portrait",
    },
    {
        id: 6,
        src: "https://res.cloudinary.com/dgvu6ny5a/image/upload/v1774258114/R0011267_web_ggv9pu.jpg",
        alt: "Portrait of a person",
        title: "Shadows",
        category: "Portrait",
    },
    {
        id: 7,
        src: "https://res.cloudinary.com/dgvu6ny5a/image/upload/v1774258113/R0010561-2_web_qycdo5.jpg",
        alt: "Portrait of a person",
        title: "Shadows",
        category: "Portrait",
    },
    {
        id: 8,
        src: "https://res.cloudinary.com/dgvu6ny5a/image/upload/v1774258113/R0011374_web_o9s3dw.jpg",
        alt: "Portrait of a person",
        title: "Shadows",
        category: "Portrait",
        preload: true
    },
];
