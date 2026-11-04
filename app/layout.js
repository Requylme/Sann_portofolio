import "./globals.css";

export const metadata = {
  title: "Portofolio",
  description: "Portofolio pribadi: tentang saya, skills, project, sertifikat, dan kontak.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}