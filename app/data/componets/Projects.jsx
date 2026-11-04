"use client";

import { projects } from "../portofolioData";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section__title">
        <span></span> Project
      </h2>

      <div className="projects">
        {projects.map((p) => (
          <article key={p.id} className="project-card">
            <div className="project-card__thumb">
              <span>{"</>"}</span>
            </div>

            <div className="project-card__body">
              <h3>{p.title}</h3>
              <p>{p.description}</p>

              <ul className="tags">
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>

              <div className="project-card__actions">
                <a className="btn btn--primary" href={p.demo} target="_blank" rel="noreferrer">
                  🚀 Lihat Demo
                </a>
                <a className="btn btn--ghost" href={p.repo} target="_blank" rel="noreferrer">
                  📂 Lihat Repository
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}