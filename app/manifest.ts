import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "شركة الواحة الهندسية - استشارات هندسية ومعمارية متميزة",
    short_name: "الواحة الهندسية",
    description: "شركة رائدة في مجال الاستشارات الهندسية والمعمارية في المملكة العربية السعودية",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#111827",
    orientation: "portrait",
    categories: ["business", "engineering", "architecture"],
    lang: "ar",
    dir: "rtl",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcuts: [
      {
        name: "حجز موعد",
        short_name: "حجز",
        description: "احجز موعد استشارة مع خبرائنا",
        url: "/booking",
        icons: [{ src: "/icon-192x192.png", sizes: "192x192" }],
      },
      {
        name: "مشاريعنا",
        short_name: "مشاريع",
        description: "اطلع على مشاريعنا المكتملة",
        url: "/projects",
        icons: [{ src: "/icon-192x192.png", sizes: "192x192" }],
      },
      {
        name: "تواصل معنا",
        short_name: "تواصل",
        description: "تواصل معنا للاستفسار",
        url: "/contact",
        icons: [{ src: "/icon-192x192.png", sizes: "192x192" }],
      },
    ],
  }
}
