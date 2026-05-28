"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "../styles/globals.css";
import Sidebar from "../components/layout/sidebar";
import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import MobileNav from "../components/layout/mobile-nav";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <html lang="en">
      <body className="bg-[#0B0F19] text-white min-h-screen">
        <div className="flex min-h-screen w-full">
          {!isLoginPage && (
            <Sidebar mobileOpen={menuOpen} onClose={() => setMenuOpen(false)} />
          )}

          <div className="flex flex-col flex-grow w-full min-w-0 relative">
            {!isLoginPage && (
              <Navbar onOpenMenu={() => setMenuOpen(true)} />
            )}

            <main
              className={`flex-grow w-full overflow-x-hidden ${
                !isLoginPage ? "pb-[4.5rem] lg:pb-0" : ""
              }`}
            >
              {children}
            </main>

            {!isLoginPage && <Footer />}
          </div>
        </div>

        {!isLoginPage && (
          <MobileNav />
        )}
      </body>
    </html>
  );
}
