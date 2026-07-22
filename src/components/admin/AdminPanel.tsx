"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useAuthStore } from "@/lib/auth-store";
import AdminLogin from "@/components/admin/AdminLogin";
import AdminDashboard from "@/components/admin/AdminDashboard";

// ============================================================
// ADMIN PANEL — main controller
// Access ONLY via URL hash: http://localhost:3000#admin
// No visible button on the page (hidden access for security)
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
          setShowLogin(false);
          setShowDashboard(true);
        } else {
          setShowLogin(true);
          setShowDashboard(false);
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
      history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }
  };

  return (
    <AnimatePresence>
      {showLogin && !isAuth && (
        <AdminLogin
          open={showLogin}
          onClose={closeAll}
          onSuccess={() => {
            // Auth state already updated via store; trigger re-check
            setShowLogin(false);
            // Use rAF to ensure React processes the auth state change first
            requestAnimationFrame(() => {
              setShowDashboard(true);
            });
          }}
        />
      )}
      {showDashboard && isAuth && (
        <AdminDashboard onClose={closeAll} />
      )}
    </AnimatePresence>
  );
}
