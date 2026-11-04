"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "../portofolioData";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const mid = window.scrollY + window.innerHeight / 3;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el && el.offsetTop <= mid && el.offsetTop + el.offsetHeight > mid) {
          setActive(link.id);
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <button className="navbar__brand" onClick={() => go("home")}>
        {profile.name.split(" ")[0]}<span>.</span>
      </button>

      <button
        className="navbar__toggle"
        onClick={() => setOpen((o) => !o)}
        aria-label="Buka menu"
      >
        {open ? "✕" : "☰"}
      </button>

      <nav className={`navbar__links ${open ? "is-open" : ""}`}>
        {navLinks.map((l) => (
          <button
            key={l.id}
            className={active === l.id ? "is-active" : ""}
            onClick={() => go(l.id)}
          >
            {l.label}
          </button>
        ))}
      </nav>
    </header>
  );
}