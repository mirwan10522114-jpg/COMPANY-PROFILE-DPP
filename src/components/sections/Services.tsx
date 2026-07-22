"use client";

import { motion } from "framer-motion";
import {
  HardHat,
  Droplets,
  Settings2,
  Wrench,
  ArrowUpRight,
  Check,
} from "lucide-react";
import { SERVICES } from "@/lib/data";
import { COMPANY } from "@/lib/data";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  HardHat,
  Droplets,
  Settings2,
  Wrench,
};

export default function Services() {
  const waLink = (service: string) =>
    `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
      `Halo Dunia Pool & Pond, saya tertarik dengan layanan "${service}". Mohon info lebih lanjut.`
    )}`;

  return (
    <section
      id="layanan"
      className="relative py-20 lg:py-28 bg-white overflow-hidden"
    >
      <div className="absolute top-20 left-0 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-cyan-100 text-cyan-700 text-xs font-semibold tracking-wider uppercase rounded-full mb-4">
            Layanan Kami
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-sky-950 leading-tight">
            Solusi End-to-End untuk{" "}
            <span className="text-gradient-water">Kolam Anda</span>
          </h2>
          <p className="mt-5 text-slate-600 text-base lg:text-lg leading-relaxed">
            Empat pilar layanan terintegrasi — dari pembangunan hingga perawatan
            harian, semua ditangani oleh satu mitra terpercaya.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service, idx) => {
            const Icon = ICON_MAP[service.icon] || HardHat;
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-sky-900/10 transition-all duration-500 hover:-translate-y-1"
              >
                {/* Top: image + number overlay */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-950/80 via-sky-900/30 to-transparent" />

                  {/* Number badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2">
                    <div className="text-2xl font-extrabold text-gradient-water">
                      {service.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:rotate-6 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-xl font-bold text-white">
                      {service.title}
                    </h3>
                    <p className="text-cyan-300 text-sm font-medium mt-0.5">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="mt-5 space-y-2">
                    {service.features.map((feat, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-slate-700"
                      >
                        <Check className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={waLink(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sky-700 font-semibold text-sm group/cta hover:gap-3 transition-all"
                  >
                    Konsultasi Layanan Ini
                    <ArrowUpRight className="w-4 h-4 group-hover/cta:rotate-12 transition-transform" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
