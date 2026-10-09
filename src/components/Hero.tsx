"use client";

import React from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import { WhatsAppIcon, ArrowRightIcon, HandDrawnArrow } from "./Icons";
import { getWhatsAppUrl } from "@/utils/whatsapp";

interface HeroProps {
  onOpenOrderModal?: () => void;
}

export default function Hero({ onOpenOrderModal }: HeroProps) {
  const handleCtaClick = (e: React.MouseEvent) => {
    if (onOpenOrderModal) {
      e.preventDefault();
      onOpenOrderModal();
    }
  };

  const scrollToNext = (e: React.MouseEvent) => {
    e.preventDefault();
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollBy({
        top: window.innerHeight * 0.85,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className={styles.heroSection}>
      {/* Background Image: public/images/hero_bg.webp */}
      <div className={styles.heroBgWrapper}>
        <Image
          src="/images/hero_bg.webp"
          alt="Authentic Homestyle Indian Thali at Pooja's Kitchen"
          fill
          priority
          unoptimized
          className={styles.heroBgImage}
          sizes="100vw"
        />
      </div>

      <div className={styles.heroContainer}>
        {/* Left Content Area */}
        <div className={styles.heroContent}>
          {/* Overline Tag */}
          <div className={styles.overline}>
            <span>HOMEMADE FOOD</span>
            <span className={styles.bullet}>•</span>
            <span>WITH LOVE</span>
            <span className={styles.overlineArrow}>
              <span className={styles.overlineLine}></span>
              <span className={styles.overlineTip}>➔</span>
            </span>
          </div>

          {/* Main Headline */}
          <h1 className={styles.headline}>
            <span className={styles.headlineSerif}>Real Ingredients.</span>
            <span className={styles.headlineSerif}>Homemade Goodness.</span>
            <span className={styles.headlineScriptWrapper}>
              <span className={styles.headlineScript}>Always.</span>
              <span className={styles.heartIcon}>♡</span>
            </span>
          </h1>

          {/* Subtitle / Description */}
          <p className={styles.description}>
            At Pooja&apos;s Kitchen, we bring you the true taste of home with
            fresh ingredients, traditional flavors and a touch of love in every dish.
          </p>

          {/* Call To Action */}
          <div className={styles.ctaWrapper}>
            <a
              href={getWhatsAppUrl("Hi Pooja's Kitchen, I would like to order today's fresh homemade meal!")}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtn}
              id="hero-order-btn"
            >
              <WhatsAppIcon size={20} fill="#1C1917" />
              <span>Order on WhatsApp</span>
              <ArrowRightIcon size={16} strokeWidth={2.5} className={styles.arrowIcon} />
            </a>
          </div>
        </div>

        {/* Right Floating Handwritten Callout: Freshly Made With Love ♡ */}
        <div className={styles.handwrittenBadge} aria-hidden="true">
          <div className={styles.badgeText}>
            Freshly{"\n"}Made{"\n"}With Love ♡
          </div>
          <div className={styles.badgeArrowWrapper}>
            <HandDrawnArrow />
          </div>
        </div>
      </div>

      {/* Bottom Center: Scroll Down Indicator */}
      <a
        href="#services"
        onClick={scrollToNext}
        className={styles.scrollDownWrapper}
        aria-label="Scroll down to explore"
      >
        <span className={styles.scrollText}>Scroll Down</span>
        <div className={styles.mousePill}>
          <span className={styles.mouseWheel}></span>
        </div>
      </a>
    </section>
  );
}
