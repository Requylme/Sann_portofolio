"use client";

import { profile } from "../portofolioData";

export default function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} {profile.name}. react
    </footer>
  );
}