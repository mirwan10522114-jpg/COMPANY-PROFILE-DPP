"use client";

import { Waves, MapPin, Phone, Mail, Instagram, Globe, Award, Lock } from "lucide-react";
import { COMPANY, NAV_LINKS } from "@/lib/data";

export default function Footer() {
  const waLink = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
    "Halo Dunia Pool & Pond, saya ingin berkonsultasi."
  )}`;

  const targetClients = [
    "Rumah Pribadi",
    "Villa & Resort",
    "Hotel",
    "Sekolah",
    "Apartemen",
    "Instansi",
    "Developer",
    "Tempat Wisata",
  ];

  return (
    <footer className="relative bg-sky-950 text-slate-300 overflow-hidden">
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-500 to-cyan-400" />

      {/* Background blobs */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-600 to-cyan-500 flex items-center justify-center shadow-lg">
                <Waves className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <div className="font-bold text-lg text-white">
                  Dunia Pool <span className="text-cyan-400">& Pond</span>
                </div>
                <div className="text-[10px] text-sky-300">
                  Sejak 10 Agustus 1997
                </div>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Spesialis konstruksi, renovasi, perawatan kolam renang & kolam
              hias. Solusi end-to-end dengan standar internasional, dipercaya
              lebih dari 1.000 klien di 34 provinsi seluruh Indonesia.
            </p>

            {/* Partner badge */}
            <div className="mt-6 inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <Award className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <div className="text-xs text-slate-400">Mitra Resmi</div>
                <div className="text-sm font-semibold text-white">
                  {COMPANY.partner}
                </div>
                <div className="text-[10px] text-cyan-300">
                  {COMPANY.partnerOrigin}
                </div>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Navigasi
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-cyan-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Target clients */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Klien Kami
            </h4>
            <ul className="space-y-2">
              {targetClients.map((client) => (
                <li
                  key={client}
                  className="text-sm text-slate-400 flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-cyan-400 rounded-full" />
                  {client}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Hubungi Kami
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-400">
                  {COMPANY.currentAddress}
                </span>
              </li>
              <li>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-cyan-300 transition-colors"
                >
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-cyan-300 transition-colors"
                >
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-cyan-300 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-cyan-400 shrink-0" />
                  {COMPANY.instagram}
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-cyan-300 transition-colors"
                >
                  <Globe className="w-4 h-4 text-cyan-400 shrink-0" />
                  {COMPANY.website}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} {COMPANY.name}. All Rights
            Reserved. Didirikan oleh {COMPANY.founder} pada{" "}
            {COMPANY.establishedDate}.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              Melayani 34 provinsi seluruh Indonesia
            </div>
            {/* Admin access — discreet */}
            <a
              href="#admin"
              className="inline-flex items-center gap-1 text-[10px] text-slate-500 hover:text-cyan-400 transition-colors border border-slate-700 hover:border-cyan-500 rounded-full px-2 py-1"
              title="Admin Panel"
            >
              <Lock className="w-2.5 h-2.5" />
              Admin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
