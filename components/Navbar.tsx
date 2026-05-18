"use client";

import { navLinks } from "@/lib/data";
import { MenuOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      document.querySelectorAll("section[id]").forEach((s) => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 120) {
          setActive(s.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id: string) =>
    `text-sm font-medium transition-colors duration-200 ${
      active === id ? "text-accent" : "text-muted hover:text-slate-300"
    }`;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 lg:px-12 xl:px-20 py-4 transition-all duration-300 ${
          scrolled ? "bg-[rgba(6,11,20,0.92)]" : "bg-[rgba(6,11,20,0.7)]"
        } backdrop-blur-xl border-b border-white/10`}
      >
        <div className="font-syne font-black text-xl tracking-tight text-accent">
          AM.
        </div>

        <ul className="hidden lg:flex gap-6 xl:gap-9 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={linkClass(link.href.slice(1))}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Button
            type="primary"
            href="#contact"
            className="hidden sm:inline-flex !font-bold !text-black"
          >
            Hire me
          </Button>
          <Button
            type="text"
            icon={<MenuOutlined className="!text-white" />}
            className="lg:!hidden"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          />
        </div>
      </nav>

      <Drawer
        title={<span className="font-syne font-black text-accent">AM.</span>}
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
      >
        <ul className="flex flex-col gap-6 list-none mt-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={linkClass(link.href.slice(1))}
                onClick={() => setDrawerOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <Button
          type="primary"
          href="#contact"
          block
          className="mt-8 !font-bold !text-black"
          onClick={() => setDrawerOpen(false)}
        >
          Hire me
        </Button>
      </Drawer>
    </>
  );
}
