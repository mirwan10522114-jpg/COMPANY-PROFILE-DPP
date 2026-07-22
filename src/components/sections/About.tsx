"use client";

import { motion } from "framer-motion";
import { Award, TrendingUp, Globe2, HandshakeIcon } from "lucide-react";
import { STATS, COMPANY } from "@/lib/data";

export default function About() {
  return (
    <section
      id="tentang"
      className="relative py-20 lg:py-28 bg-gradient-to-b from-white via-sky-50/50 to-white overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-100/40 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-block px-4 py-1.5 bg-cyan-100 text-cyan-700 text-xs font-semibold tracking-wider uppercase rounded-full mb-4">
            Tentang Kami
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-sky-950 leading-tight">
            Dari Cisarua ke{" "}
            <span className="text-gradient-water">Seluruh Indonesia</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-sky-900/20 aspect-[4/5] sm:aspect-[5/4]">
              <img
                src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80"
                alt="Proyek kolam renang villa oleh Dunia Pool & Pond"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-950/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xs uppercase tracking-widest text-cyan-300 mb-1">
                  Featured Project
                </p>
                <p className="text-lg font-bold">
                  Proyek Kolam Renang Villa
                </p>
                <p className="text-sm text-sky-100">Dunia Pool & Pond</p>
              </div>
            </div>

            {/* Floating experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -top-6 -right-6 lg:-right-10 bg-white rounded-2xl shadow-xl p-5 border border-sky-100 max-w-[180px]"
            >
              <div className="text-4xl font-extrabold text-gradient-water">
                25+
              </div>
              <div className="text-sm text-slate-600 mt-1 font-medium">
                Tahun Membangun Kepercayaan Klien
              </div>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <p className="text-slate-600 text-base lg:text-lg leading-relaxed">
              <span className="font-semibold text-sky-950">
                Dunia Pool & Pond
              </span>{" "}
              lahir pada{" "}
              <span className="font-semibold text-cyan-700">
                {COMPANY.establishedDate}
              </span>{" "}
              di {COMPANY.establishedLocation} — bermula dari tekad seorang
              pengusaha lokal untuk menghadirkan konstruksi kolam renang yang
              benar-benar berkualitas di tengah pasar yang saat itu masih minim
              standar.
            </p>
            <p className="text-slate-600 text-base lg:text-lg leading-relaxed mt-4">
              Selama lebih dari 25 tahun, kami bertumbuh dari kontraktor lokal
              menjadi solusi end-to-end berskala nasional: mulai dari konsultasi
              desain awal, pembangunan struktur, instalasi sistem sirkulasi,
              hingga perawatan berkala dan purna jual.
            </p>
            <p className="text-slate-600 text-base lg:text-lg leading-relaxed mt-4">
              Lebih dari 1.000 proyek kolam telah kami selesaikan di seluruh
              Indonesia — menjadikan angka ini bukan sekadar statistik, melainkan
              bukti nyata kepercayaan yang dibangun proyek demi proyek. Di balik
              setiap pencapaian tersebut, kemitraan resmi kami bersama{" "}
              <span className="font-semibold text-sky-950">
                {COMPANY.partner}, {COMPANY.partnerOrigin}
              </span>{" "}
              memastikan bahwa standar internasional hadir di setiap detail
              pekerjaan.
            </p>

            {/* Inline stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {STATS.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white rounded-xl p-4 border border-sky-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <div className="text-2xl lg:text-3xl font-extrabold text-gradient-water">
                    {stat.value}
                  </div>
                  <div className="text-xs lg:text-sm text-slate-500 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
