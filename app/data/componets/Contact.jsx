"use client";

import { useState } from "react";
import { profile, socials } from "../portofolioData";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSent(false);
  };

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = "Nama wajib diisi";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = "Email tidak valid";
    if (form.message.trim().length < 10) err.message = "Pesan minimal 10 karakter";
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length) return;

    // Membuka aplikasi email dengan pesan yang sudah terisi
    const subject = encodeURIComponent(`Pesan dari ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;

    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section">
      <h2 className="section__title">
        <span></span> Contact
      </h2>
      <p className="section__sub">Punya ide atau tawaran kerja sama? Kirim pesan ya!</p>

      <div className="contact">
        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <label>
            Nama
            <input name="name" value={form.name} onChange={handleChange} placeholder="Nama kamu" />
            {errors.name && <small className="form-error">{errors.name}</small>}
          </label>
          <label>
            Email
            <input name="email" value={form.email} onChange={handleChange} placeholder="email@contoh.com" />
            {errors.email && <small className="form-error">{errors.email}</small>}
          </label>
          <label>
            Pesan
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              placeholder="Tulis pesan..."
            />
            {errors.message && <small className="form-error">{errors.message}</small>}
          </label>
          <button type="submit" className="btn btn--primary">Kirim Pesan</button>
          {sent && <p className="form-success">✅ Aplikasi email dibuka, tinggal tekan kirim.</p>}
        </form>

        <div className="contact__info">
          <p>📧 {profile.email}</p>
          <p>📍 {profile.location}</p>
          <div className="contact__socials">
            {socials.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noreferrer">
                <span>{s.icon}</span> {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}