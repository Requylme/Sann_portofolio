"use client";

import useTyping from "../../hooks/useTyping";
import { profile } from "../portofolioData";

export default function Hero() {
  const typed = useTyping(profile.roles);

  return (
    <section id="home" className="hero">
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />

      <p className="hero__hello">Halo, saya</p>
      <h1 className="hero__name">{profile.name}</h1>
      <p className="hero__role">
        {typed}
        <span className="caret" />
      </p>
      <p className="hero__hint">{profile.tagline}</p>

      <div className="hero__cta">
        <button
          className="btn btn--primary"
          onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
        >
          Lihat Project
        </button>
        <button
          className="btn btn--ghost"
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          Hubungi Saya
        </button>
      </div>

      <div className="hero__scroll" aria-hidden="true"></div>
    </section>
  );
}