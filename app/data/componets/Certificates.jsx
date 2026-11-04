"use client";

import { useEffect, useState } from "react";
import { defaultCertificates } from "../portofolioData";

const STORAGE_KEY = "portfolio-certificates";

const emptyForm = { title: "", issuer: "", year: "", image: "" };

/**
 * Fitur sertifikat:
 * - tambah sertifikat (judul, penerbit, tahun, upload gambar)
 * - klik gambar untuk memperbesar
 * - hapus sertifikat
 * Data tersimpan di localStorage browser.
 */
export default function Certificates() {
  const [certs, setCerts] = useState(defaultCertificates);
  const [loaded, setLoaded] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");

  // baca data tersimpan setelah komponen tampil di browser
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setCerts(JSON.parse(saved));
    } catch {}
    setLoaded(true);
  }, []);

  // simpan setiap ada perubahan (setelah data awal selesai dibaca)
  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(certs));
    } catch {
      setError("Penyimpanan penuh, gambar terlalu besar untuk disimpan.");
    }
  }, [certs, loaded]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setError("File harus berupa gambar.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setForm((f) => ({ ...f, image: reader.result }));
      setError("");
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) {
      setError("Judul sertifikat wajib diisi.");
      return;
    }
    setCerts([{ ...form, id: `c${Date.now()}` }, ...certs]);
    setForm(emptyForm);
    setShowForm(false);
    setError("");
  };

  const remove = (id) => setCerts(certs.filter((c) => c.id !== id));

  return (
    <section id="certificates" className="section">
      <h2 className="section__title">
        <span></span> Certificates
      </h2>

      <button className="btn btn--primary" onClick={() => setShowForm((s) => !s)}>
        {showForm ? "Tutup Form" : "＋ Tambah Sertifikat"}
      </button>

      {showForm && (
        <form className="cert-form" onSubmit={handleSubmit}>
          <input name="title" placeholder="Judul sertifikat" value={form.title} onChange={handleChange} />
          <input name="issuer" placeholder="Penerbit (mis. Dicoding)" value={form.issuer} onChange={handleChange} />
          <input name="year" placeholder="Tahun" value={form.year} onChange={handleChange} />
          <label className="cert-form__file">
            {form.image ? "✅ Gambar dipilih" : "📎 Pilih gambar sertifikat"}
            <input type="file" accept="image/*" onChange={handleFile} hidden />
          </label>
          {form.image && <img className="cert-form__preview" src={form.image} alt="Pratinjau" />}
          <button type="submit" className="btn btn--primary">Simpan</button>
        </form>
      )}

      {error && <p className="form-error">{error}</p>}

      {certs.length === 0 && <p className="section__sub">Belum ada sertifikat.</p>}

      <div className="certs">
        {certs.map((c) => (
          <figure key={c.id} className="cert-card">
            <button
              className="cert-card__img"
              onClick={() => c.image && setPreview(c)}
              style={{ cursor: c.image ? "zoom-in" : "default" }}
            >
              {c.image ? <img src={c.image} alt={c.title} /> : <span>🏅</span>}
            </button>
            <figcaption>
              <strong>{c.title}</strong>
              <small>
                {[c.issuer, c.year].filter(Boolean).join(" • ")}
              </small>
            </figcaption>
            <button className="cert-card__remove" onClick={() => remove(c.id)} aria-label="Hapus">
              ✕
            </button>
          </figure>
        ))}
      </div>

      {preview && (
        <div className="lightbox" onClick={() => setPreview(null)}>
          <img src={preview.image} alt={preview.title} />
          <p>{preview.title}</p>
        </div>
      )}
    </section>
  );
}