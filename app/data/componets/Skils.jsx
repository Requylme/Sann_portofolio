
"use client";

import { skills } from "../portofolioData";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section__title">
        <span></span> Skills
      </h2>

      <p className="section__sub">
        Teknologi dan kemampuan yang saya pelajari melalui
        pembelajaran mandiri dan proyek nyata.
      </p>

      <div className="skills">
        {skills.map((skill) => (
          <div key={skill.id} className="skill-row">
            <div className="skill-card">
              <span className="skill-card__icon">
                {skill.icon}
              </span>

              <span className="skill-card__name">
                {skill.name}
              </span>
            </div>

            <div className="skill-detail is-visible">
              <div className="skill-detail__inner">
                <h4>
                  Bagaimana saya belajar {skill.name}
                </h4>

                <p>{skill.story}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
