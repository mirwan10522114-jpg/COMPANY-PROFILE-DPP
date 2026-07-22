"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuthStore } from "@/lib/auth-store";
import AdminLogin from "@/components/admin/AdminLogin";
import AdminDashboard from "@/components/admin/AdminDashboard";

// ============================================================
// ADMIN PANEL — main controller
// Listens for hash change (#admin) to open login
// ============================================================
export default function AdminPanel() {
  const isAuth = useAuthStore((s) => s.isAuthenticated);
  const [showLogin, setShowLogin] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  // Listen for #admin hash to open admin panel
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#admin") {
        if (isAuth) {
          setShowDashboard(true);
        } else {
          setShowLogin(true);
        }
      } else {
        setShowLogin(false);
        setShowDashboard(false);
      }
    };
    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, [isAuth]);

  const closeAll = () => {
    setShowLogin(false);
    setShowDashboard(false);
    if (window.location.hash === "#admin") {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  };

  return (
    <AnimatePresence>
      {showLogin && !isAuth && (
        <AdminLogin
          open={showLogin}
          onClose={closeAll}
          onSuccess={() => {
            setShowLogin(false);
            setShowDashboard(true);
          }}
        />
      )}
      {showDashboard && isAuth && (
        <AdminDashboard onClose={closeAll} />
      )}
    </AnimatePresence>
  );
}
