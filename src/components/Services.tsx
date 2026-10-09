"use client";

import React from "react";
import Image from "next/image";
import styles from "./Services.module.css";
import { TiffinIcon, CateringIcon, CheckIcon, ArrowRightIcon } from "./Icons";
import { getWhatsAppUrl } from "@/utils/whatsapp";

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const handleTiffinClick = (e: React.MouseEvent) => {
    if (onSelectService) {
      e.preventDefault();
      onSelectService("Daily Tiffin Service");
    }
  };

  const handleCateringClick = (e: React.MouseEvent) => {
    if (onSelectService) {
      e.preventDefault();
      onSelectService("Catering for Every Celebration");
    }
  };

  return (
    <section id="services" className={styles.servicesSection}>
      {/* Botanical Corner Leaves from public/images/leaf.webp */}
      <Image
        src="/images/leaf.webp"
        alt=""
        width={210}
        height={230}
        unoptimized
        className={`${styles.leafDecoration} ${styles.leafTopLeft}`}
        aria-hidden="true"
      />
      <Image
        src="/images/leaf.webp"
        alt=""
        width={210}
        height={230}
        unoptimized
        className={`${styles.leafDecoration} ${styles.leafTopRight}`}
        aria-hidden="true"
      />

      {/* Section Header */}
      <div className={styles.headerWrapper}>
        <div className={styles.tagWrapper}>
          <span className={styles.tagLine} />
          <span className={styles.tagText}>OUR SERVICES</span>
          <span className={styles.tagLine} />
        </div>
        <h2 className={styles.heading}>Good Food for Every Occasion</h2>
        <p className={styles.subtitle}>
          Whether it&apos;s your daily meals or a special celebration, we bring you authentic
          Indian food, made with care and delivered with trust.
        </p>
      </div>

      {/* Cards Grid */}
      <div className={styles.cardsGrid}>
        {/* Card 1: Daily Tiffin Service */}
        <article className={styles.card}>
          <div className={styles.cardImageWrapper}>
            <Image
              src="/images/service_tiffin.webp?v=8k"
              alt="Stainless steel tiffin meal containers with homestyle dal, sabzi, and rotis"
              fill
              unoptimized
              className={styles.cardImage}
              sizes="(max-width: 900px) 100vw, 580px"
            />
          </div>

          <div className={styles.cardBody}>
            <div className={styles.titleRow}>
              <div className={styles.iconBadge} aria-hidden="true">
                <TiffinIcon size={26} stroke="#7c5324" />
              </div>
              <h3 className={styles.cardTitle}>Daily Tiffin Service</h3>
            </div>

            <p className={styles.cardDescription}>
              Fresh, balanced meals for your everyday routine.
            </p>

            <ul className={styles.pillList} aria-label="Tiffin features">
              <li className={styles.pillItem}>
                <CheckIcon size={14} color="#b87e2b" />
                <span>Daily &amp; monthly plans</span>
              </li>
              <li className={styles.pillItem}>
                <CheckIcon size={14} color="#b87e2b" />
                <span>Veg options</span>
              </li>
              <li className={styles.pillItem}>
                <CheckIcon size={14} color="#b87e2b" />
                <span>Reliable delivery</span>
              </li>
            </ul>

            <a
              href={getWhatsAppUrl("Hi Pooja's Kitchen, I am interested in subscribing to your Daily Tiffin Service plan. Could you please share the details and weekly menu?")}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtn}
              id="view-tiffin-plans-btn"
            >
              <span>View Tiffin Plans</span>
              <ArrowRightIcon size={15} strokeWidth={2.4} className={styles.arrowIcon} />
            </a>
          </div>
        </article>

        {/* Card 2: Catering for Every Celebration */}
        <article className={styles.card}>
          <div className={styles.cardImageWrapper}>
            <Image
              src="/images/service_catering.webp?v=8k"
              alt="Buffet chafing dishes setup with floral arrangements and warm celebration lights"
              fill
              unoptimized
              className={styles.cardImage}
              sizes="(max-width: 900px) 100vw, 580px"
            />
          </div>

          <div className={styles.cardBody}>
            <div className={styles.titleRow}>
              <div className={styles.iconBadge} aria-hidden="true">
                <CateringIcon size={26} stroke="#7c5324" />
              </div>
              <h3 className={styles.cardTitle}>Catering for Every Celebration</h3>
            </div>

            <p className={styles.cardDescription}>
              Thoughtful menus for gatherings big and small.
            </p>

            <ul className={styles.pillList} aria-label="Catering features">
              <li className={styles.pillItem}>
                <CheckIcon size={14} color="#b87e2b" />
                <span>Birthdays &amp; weddings</span>
              </li>
              <li className={styles.pillItem}>
                <CheckIcon size={14} color="#b87e2b" />
                <span>Corporate events</span>
              </li>
              <li className={styles.pillItem}>
                <CheckIcon size={14} color="#b87e2b" />
                <span>Custom menus</span>
              </li>
            </ul>

            <a
              href={getWhatsAppUrl("Hi Pooja's Kitchen, I am planning an event and would like to discuss your Event Catering options and pricing!")}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtn}
              id="explore-catering-btn"
            >
              <span>Explore Catering</span>
              <ArrowRightIcon size={15} strokeWidth={2.4} className={styles.arrowIcon} />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
