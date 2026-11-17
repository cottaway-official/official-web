"use client";

import { useEffect } from "react";

export default function SiteInteractions() {
  useEffect(() => {
    const menuButton = document.querySelector<HTMLButtonElement>(".menu-toggle");
    const navWrap = document.querySelector<HTMLElement>(".nav-wrap");
    const navLinks = document.querySelectorAll<HTMLAnchorElement>(".main-nav a");

    const toggleMenu = () => {
      if (!menuButton || !navWrap) return;
      const isOpen = navWrap.classList.toggle("menu-open");
      menuButton.classList.toggle("is-open", isOpen);
      menuButton.setAttribute("aria-expanded", String(isOpen));
    };

    menuButton?.addEventListener("click", toggleMenu);
    navLinks.forEach((link) => link.addEventListener("click", () => {
      navWrap?.classList.remove("menu-open");
      menuButton?.classList.remove("is-open");
      menuButton?.setAttribute("aria-expanded", "false");
    }));

    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 },
    );

    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

    return () => {
      menuButton?.removeEventListener("click", toggleMenu);
      revealObserver.disconnect();
    };
  }, []);

  return null;
}
