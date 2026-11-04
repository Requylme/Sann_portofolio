// ==========================================================
//  EDIT DATA DI SINI — semua isi portofolio ada di file ini
// ==========================================================

export const profile = {
  name: "Santuri Requylme Simatupang",
  roles: ["Full-stack Developer", "React Enthusiast", "Problem Solver", "Lifelong Learner"],
  tagline: "Halo saya adalah seseorang yang sangat tertarik dengan dunia teknologi dan pemrograman, Saya selalu berusaha untuk belajar hal baru dan mengembangkan kemampuan saya di bidang ini. Mau lebih dekat scroll kebawah",
  email: "sannrequilme1@gmail.com",
  location: "Surabaya, Indonesia",
  about: [
    "Halo! Saya seorang developer yang suka membangun aplikasi web yang rapi, cepat, dan nyaman dipakai.",
    "Saya belajar lewat proyek nyata: mulai dari ide kecil, dibuat, dirusak, lalu diperbaiki sampai berjalan baik.",
    "Di luar coding, saya senang membaca dokumentasi, mencoba teknologi baru, dan berbagi apa yang saya pelajari.",
  ],
  stats: [
    { label: "Proyek", value: "10+" },
    { label: "Teknologi", value: "8+" },
    { label: "Sertifikat", value: "5+" },
  ],
};

export const navLinks = [
  { id: "home", label: "Beranda" },
  { id: "about", label: "Tentang" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Project" },
  { id: "certificates", label: "Sertifikat" },
  { id: "contact", label: "Kontak" },
];

export const skills = [
  {
    id: "html-css",
    name: "HTML & CSS",
    icon: "",
    story:
      "Saya mulai dari sini. Belajar dari tutorial dan membuat ulang tampilan website favorit, sampai paham layout, flexbox, grid, dan responsive design.",
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: "",
    story:
      "Belajar JavaScript lewat latihan kecil seperti to-do list dan kalkulator, lalu naik ke DOM, async/await, dan fetch API untuk mengambil data dari server.",
  },
  {
    id: "react",
    name: "React",
    icon: "",
    story:
      "Saya belajar React dari dokumentasi resmi, lalu membangun beberapa proyek untuk memahami komponen, state, props, dan hooks seperti useState dan useEffect.",
  },
  {
    id: "nodejs",
    name: "Node.js & Express",
    icon: "",
    story:
      "Mempelajari backend supaya bisa membuat aplikasi utuh: membuat REST API, routing, middleware, dan autentikasi sederhana.",
  },
  {
    id: "database",
    name: "MySQL & MongoDB",
    icon: "",
    story:
      "Belajar mendesain tabel, relasi, dan query di MySQL, lalu mencoba MongoDB untuk data yang lebih fleksibel pada proyek-proyek kecil.",
  },
  {
    id: "git",
    name: "Git & GitHub",
    icon: "",
    story:
      "Mulai memakai Git agar riwayat kode terjaga dan bisa kolaborasi. Sekarang saya rutin memakai branch, commit yang rapi, dan pull request.",
  },
];

export const projects = [
  {
    id: 1,
    title: "Aplikasi Todo Pintar",
    description:
      "Aplikasi manajemen tugas dengan kategori, filter, dan penyimpanan lokal. Dibuat untuk melatih state management di React.",
    tags: ["React", "CSS", "LocalStorage"],
    demo: "https://example.com",
    repo: "https://github.com/username/todo-pintar",
  },
  {
    id: 2,
    title: "Toko Online Mini",
    description:
      "Website e-commerce sederhana dengan katalog produk, keranjang belanja, dan halaman checkout.",
    tags: ["React", "Node.js", "MongoDB"],
    demo: "https://example.com",
    repo: "https://github.com/username/toko-mini",
  },
  {
    id: 3,
    title: "Dashboard Cuaca",
    description:
      "Menampilkan prakiraan cuaca berdasarkan kota dengan data dari API publik dan tampilan grafik yang ringkas.",
    tags: ["JavaScript", "REST API", "Chart"],
    demo: "https://example.com",
    repo: "https://github.com/username/dashboard-cuaca",
  },
];

// Sertifikat awal (bisa ditambah langsung dari website lewat tombol "Tambah Sertifikat")
// Isi "image" dengan URL/gambar di folder public, misal "/sertifikat/react.jpg". Boleh dikosongkan.
export const defaultCertificates = [
  {
    id: "c1",
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    year: "2025",
    image: "",
  },
  {
    id: "c2",
    title: "React Fundamentals",
    issuer: "Online Course",
    year: "2025",
    image: "",
  },
];

export const socials = [
  { name: "GitHub", url: "https://github.com/username", icon: "🐙" },
  { name: "LinkedIn", url: "https://linkedin.com/in/username", icon: "💼" },
  { name: "Instagram", url: "https://instagram.com/username", icon: "📸" },
];