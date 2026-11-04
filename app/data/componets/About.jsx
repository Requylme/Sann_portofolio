"use client";

import { profile } from "../portofolioData";

export default function About() {
  return (
    <section id="about" className="section">
      <h2 className="section__title">
         About Me
      </h2>

      <div className="about">
        <div className="about__avatar">
          <div className="about__avatar-ring">
          </div>
          <p className="about__location">📍 {profile.location}</p>
        </div>

        <div className="about__text">
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <div className="about__stats">
            {profile.stats.map((s) => (
              <div key={s.label} className="stat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}