"use client";

import { motion } from "framer-motion";
import { Quote, CheckCircle2 } from "lucide-react";
import { LEADER } from "@/lib/data";

export default function LeaderMessage() {
  return (
    <section
      id="pimpinan"
      className="relative py-20 lg:py-28 bg-sky-950 overflow-hidden"
    >
      {/* Decorative water pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/20 via-transparent to-sky-700/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl" />
      </div>

      {/* Watermark quote */}
      <Quote
        className="absolute top-10 right-10 w-40 h-40 text-cyan-500/5"
        strokeWidth={1}
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Photo side (left) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Decorative frame */}
              <div className="absolute -inset-3 bg-gradient-to-br from-cyan-400/30 to-sky-600/30 rounded-3xl blur-xl" />

              {/* Photo card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
                <img
                  src={LEADER.photo}
                  alt={`${LEADER.name} - ${LEADER.role}`}
                  className="w-full aspect-[3/4] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-950/90 via-sky-950/20 to-transparent" />

                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold">{LEADER.name}</h3>
                    <p className="text-cyan-300 text-sm mt-1 font-medium">
                      {LEADER.role}
                    </p>
                    <div className="mt-3 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                      <span className="text-xs text-sky-100">
                        Founder sejak 1997
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Signature accent */}
              <div className="absolute -bottom-4 -right-4 bg-cyan-500 text-white rounded-2xl px-4 py-3 shadow-xl">
                <div className="text-xs uppercase tracking-wider opacity-90">
                  Pengalaman
                </div>
                <div className="text-2xl font-extrabold">25+ Tahun</div>
              </div>
            </div>
          </motion.div>

          {/* Message side (right) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <span className="inline-block px-4 py-1.5 bg-cyan-500/20 text-cyan-300 text-xs font-semibold tracking-wider uppercase rounded-full mb-4">
              Pesan dari Pimpinan
            </span>

            <Quote className="w-12 h-12 text-cyan-400/60 mb-6" />

            <blockquote className="text-sky-50 text-lg lg:text-xl leading-relaxed font-light italic">
              {LEADER.message}
            </blockquote>

            {/* Highlights */}
            <div className="mt-8 space-y-3">
              {LEADER.highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span className="text-sky-100 text-sm lg:text-base">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Signature line */}
            <div className="mt-10 pt-6 border-t border-white/10 flex items-end gap-4">
              <div>
                <div
                  className="text-3xl text-cyan-300"
                  style={{ fontFamily: "cursive, sans-serif" }}
                >
                  Agus Setiawan
                </div>
                <div className="text-sky-200 text-sm mt-1">
                  Founder & Direktur Utama, Dunia Pool & Pond
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
