"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, ZoomIn, Upload, ImageOff } from "lucide-react";
import { GALLERY_ITEMS, GALLERY_CATEGORIES, COMPANY } from "@/lib/data";
import type { GalleryItem } from "@/lib/data";

export default function Gallery() {
  const [filter, setFilter] = useState<string>("Semua");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered =
    filter === "Semua"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === filter);

  const waLink = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
    "Halo Dunia Pool & Pond, saya ingin melihat portfolio lengkap proyek Anda."
  )}`;

  return (
    <section
      id="galeri"
      className="relative py-20 lg:py-28 bg-gradient-to-b from-white to-sky-50 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-100/40 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12"
        >
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-cyan-100 text-cyan-700 text-xs font-semibold tracking-wider uppercase rounded-full mb-4">
              Galeri Proyek
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-sky-950 leading-tight">
              Portofolio Karya{" "}
              <span className="text-gradient-water">Dunia Pool & Pond</span>
            </h2>
            <p className="mt-5 text-slate-600 text-base lg:text-lg leading-relaxed">
              Jelajahi beragam proyek kolam renang yang telah kami selesaikan —
              dari hunian pribadi hingga fasilitas komersial bintang lima.
            </p>
          </div>

          {/* Upload notice */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-4 border border-cyan-100 shadow-sm max-w-xs"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center shrink-0">
                <Upload className="w-5 h-5 text-cyan-600" />
              </div>
              <div>
                <div className="text-sm font-semibold text-sky-950">
                  Punya Proyek untuk Dibagikan?
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Foto proyek terbaru kami terus diperbarui di galeri ini.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-gradient-to-r from-sky-700 to-cyan-600 text-white shadow-md shadow-cyan-500/30"
                  : "bg-white text-slate-600 hover:bg-sky-50 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4"
        >
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.button
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setLightbox(item)}
                className={`group relative overflow-hidden rounded-2xl bg-slate-200 shadow-sm hover:shadow-xl transition-all ${
                  item.id % 5 === 1 ? "col-span-2 row-span-2" : ""
                }`}
              >
                <div
                  className={`relative w-full ${
                    item.id % 5 === 1 ? "aspect-square" : "aspect-square"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-950/80 via-sky-950/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                  {/* Zoom icon */}
                  <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4 text-white" />
                  </div>

                  {/* Category tag */}
                  <span className="absolute top-3 left-3 bg-cyan-500 text-white text-[10px] font-semibold px-2 py-1 rounded-full">
                    {item.category}
                  </span>

                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-left translate-y-2 group-hover:translate-y-0 transition-transform">
                    <h3 className="text-white font-semibold text-sm leading-tight">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <MapPin className="w-3 h-3 text-cyan-300" />
                      <span className="text-xs text-sky-100">
                        {item.location}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <ImageOff className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-500">Belum ada foto pada kategori ini.</p>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-sky-600 text-white font-semibold px-7 py-4 rounded-full shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            Lihat Portfolio Lengkap via WhatsApp
          </a>
        </div>
      </div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] bg-sky-950/95 backdrop-blur-sm flex items-center justify-center p-4 lg:p-8"
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 lg:top-6 lg:right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="relative">
                <img
                  src={lightbox.image}
                  alt={lightbox.title}
                  className="w-full max-h-[70vh] object-contain bg-sky-950"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-sky-950/90 to-transparent">
                  <span className="inline-block bg-cyan-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                    {lightbox.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    {lightbox.title}
                  </h3>
                  <div className="flex items-center gap-1 mt-2">
                    <MapPin className="w-4 h-4 text-cyan-300" />
                    <span className="text-sm text-sky-100">
                      {lightbox.location}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
