"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
  Briefcase,
  MessageCircle,
  RefreshCw,
  Users,
  type LucideIcon,
} from "lucide-react";
import { TESTIMONIALS, TESTIMONIAL_STATS, COMPANY } from "@/lib/data";

const STATS_ICON_MAP: Record<string, LucideIcon> = {
  RefreshCw,
  Star,
  Users,
  MapPin,
};

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [autoPlay, setAutoPlay] = useState(true);

  const testimonial = TESTIMONIALS[active];

  const goNext = useCallback(() => {
    setDirection(1);
    setActive((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  // Auto-play
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(goNext, 6000);
    return () => clearInterval(interval);
  }, [autoPlay, goNext, active]);

  const waLink = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
    "Halo Dunia Pool & Pond, saya ingin melihat referensi proyek & testimoni klien lebih lengkap."
  )}`;

  return (
    <section
      id="testimoni"
      className="relative py-20 lg:py-28 bg-gradient-to-br from-sky-50 via-white to-cyan-50 overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-100/40 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-100 text-cyan-700 text-xs font-semibold tracking-wider uppercase rounded-full mb-4">
            <Star className="w-3.5 h-3.5 fill-cyan-500 text-cyan-500" />
            Testimoni Klien
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-sky-950 leading-tight">
            Apa Kata{" "}
            <span className="text-gradient-water">Klien Kami</span>
          </h2>
          <p className="mt-5 text-slate-600 text-base lg:text-lg leading-relaxed">
            Lebih dari 1.000 klien di seluruh Indonesia telah mempercayakan
            proyek kolam mereka kepada kami. Berikut beberapa testimoni nyata
            beserta proyek yang telah kami selesaikan.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14 max-w-5xl mx-auto"
        >
          {TESTIMONIAL_STATS.map((stat, idx) => {
            const Icon = STATS_ICON_MAP[stat.icon] || Star;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -5, scale: 1.03 }}
                className="bg-white rounded-2xl p-5 border border-sky-100 shadow-sm text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-cyan-50 to-sky-100 flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6 text-cyan-600" />
                </div>
                <div className="text-2xl lg:text-3xl font-extrabold text-gradient-water">
                  {stat.value}
                </div>
                <div className="text-xs lg:text-sm text-slate-500 mt-1">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main testimonial carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          {/* Background decorative quote */}
          <Quote
            className="absolute -top-6 -left-6 w-32 h-32 text-cyan-100 z-0"
            strokeWidth={1}
          />

          <div className="relative bg-white rounded-3xl shadow-2xl shadow-sky-900/10 border border-sky-100 overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={testimonial.id}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
                transition={{ duration: 0.4 }}
                className="grid lg:grid-cols-2 gap-0"
              >
                {/* Left: Project Image */}
                <div className="relative h-72 sm:h-96 lg:h-full min-h-[400px] overflow-hidden">
                  <img
                    src={testimonial.projectImage}
                    alt={testimonial.projectTitle}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-950/85 via-sky-950/30 to-transparent" />

                  {/* Project type badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-cyan-500 to-sky-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                      <Briefcase className="w-3.5 h-3.5" />
                      {testimonial.projectType}
                    </span>
                  </div>

                  {/* Project info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6 text-white">
                    <h3 className="text-xl lg:text-2xl font-bold leading-tight">
                      {testimonial.projectTitle}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-sky-100">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-cyan-300" />
                        {testimonial.projectLocation}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-cyan-300" />
                        Selesai {testimonial.completionYear}
                      </span>
                    </div>
                  </div>

                  {/* Decorative gradient accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-bl-full" />
                </div>

                {/* Right: Client info + Testimonial */}
                <div className="p-6 lg:p-10 flex flex-col justify-between">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + i * 0.08 }}
                      >
                        <Star
                          className={`w-5 h-5 ${
                            i < testimonial.rating
                              ? "text-amber-400 fill-amber-400"
                              : "text-slate-300"
                          }`}
                        />
                      </motion.div>
                    ))}
                    <span className="ml-2 text-sm font-semibold text-slate-600">
                      5.0
                    </span>
                  </div>

                  {/* Quote */}
                  <div className="relative">
                    <Quote className="w-10 h-10 text-cyan-200 mb-3 fill-cyan-100" />
                    <blockquote className="text-slate-700 text-sm lg:text-base leading-relaxed">
                      &ldquo;{testimonial.testimonial}&rdquo;
                    </blockquote>
                  </div>

                  {/* Client info */}
                  <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-4">
                    <div className="relative shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-sky-600 rounded-full blur-sm opacity-50" />
                      <img
                        src={testimonial.clientPhoto}
                        alt={testimonial.clientName}
                        className="relative w-14 h-14 lg:w-16 lg:h-16 rounded-full object-cover border-2 border-white shadow-lg"
                      />
                      {/* Verified badge */}
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-cyan-500 rounded-full border-2 border-white flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold text-sky-950 text-base lg:text-lg">
                        {testimonial.clientName}
                      </div>
                      <div className="text-sm text-slate-500 mt-0.5">
                        {testimonial.clientRole}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={goPrev}
            className="absolute top-1/2 -translate-y-1/2 -left-3 lg:-left-6 w-12 h-12 rounded-full bg-white shadow-xl border border-sky-100 flex items-center justify-center text-sky-700 hover:bg-sky-50 hover:scale-110 transition-all z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goNext}
            className="absolute top-1/2 -translate-y-1/2 -right-3 lg:-right-6 w-12 h-12 rounded-full bg-white shadow-xl border border-sky-100 flex items-center justify-center text-sky-700 hover:bg-sky-50 hover:scale-110 transition-all z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots indicator + counter */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > active ? 1 : -1);
                  setActive(idx);
                }}
                className={`transition-all rounded-full ${
                  idx === active
                    ? "w-8 h-2 bg-gradient-to-r from-cyan-500 to-sky-600"
                    : "w-2 h-2 bg-sky-200 hover:bg-sky-300"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="text-center mt-4 text-sm text-slate-500">
            <span className="font-semibold text-sky-700">
              {String(active + 1).padStart(2, "0")}
            </span>
            <span className="mx-1">/</span>
            <span>{String(TESTIMONIALS.length).padStart(2, "0")}</span>
            <span className="ml-2 text-xs">Testimoni Klien</span>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-sky-600 text-white font-semibold px-7 py-4 rounded-full shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            Jadilah Klien Berikutnya
          </a>
        </motion.div>
      </div>
    </section>
  );
}
