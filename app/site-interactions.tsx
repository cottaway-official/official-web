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

    const parallaxElements = document.querySelectorAll<HTMLElement>("[data-parallax]");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let parallaxFrame = 0;

    const updateParallax = () => {
      parallaxFrame = 0;
      if (reducedMotion.matches) return;

      const viewportCenter = window.innerHeight / 2;
      parallaxElements.forEach((element) => {
        const container = element.parentElement?.getBoundingClientRect();
        if (!container) return;

        const speed = Number(element.dataset.parallax ?? 0.12);
        const distanceFromCenter = viewportCenter - (container.top + container.height / 2);
        const offset = Math.max(-64, Math.min(64, distanceFromCenter * speed));
        element.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`);
      });
    };

    const requestParallaxUpdate = () => {
      if (!parallaxFrame) parallaxFrame = window.requestAnimationFrame(updateParallax);
    };

    requestParallaxUpdate();
    window.addEventListener("scroll", requestParallaxUpdate, { passive: true });
    window.addEventListener("resize", requestParallaxUpdate);
    reducedMotion.addEventListener("change", requestParallaxUpdate);

    return () => {
      menuButton?.removeEventListener("click", toggleMenu);
      revealObserver.disconnect();
      window.removeEventListener("scroll", requestParallaxUpdate);
      window.removeEventListener("resize", requestParallaxUpdate);
      reducedMotion.removeEventListener("change", requestParallaxUpdate);
      if (parallaxFrame) window.cancelAnimationFrame(parallaxFrame);
    };
  }, []);

  return null;
}
