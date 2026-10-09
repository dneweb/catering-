"use client";

import React from "react";
import Image from "next/image";
import styles from "./EventCatering.module.css";
import { ArrowRightIcon } from "./Icons";
import { getWhatsAppUrl } from "@/utils/whatsapp";

interface EventCateringProps {
  onOpenQuoteModal?: () => void;
}

export default function EventCatering({ onOpenQuoteModal }: EventCateringProps) {
  return (
    <section id="catering" className={styles.cateringSection}>
      {/* Right-Bleeding Full Height Buffet Backdrop & Image */}
      <div className={styles.imageWrapper}>
        <Image
          src="/images/buffet.webp"
          alt="Grand event catering buffet with luxury silver and brass chafing dishes"
          fill
          priority
          unoptimized
          className={styles.buffetImage}
          sizes="(max-width: 900px) 100vw, 60vw"
        />
        {/* Atmospheric seamless dark blend into left text area */}
        <div className={styles.fadeOverlay} aria-hidden="true" />
      </div>

      {/* Left Foreground Content */}
      <div className={styles.contentContainer}>
        <div className={styles.contentBox}>
          {/* Tag with horizontal accent line */}
          <div className={styles.tagWrapper}>
            <span className={styles.tag}>Event Catering</span>
            <span className={styles.tagLine} aria-hidden="true" />
          </div>

          {/* 2-Line Editorial Headline */}
          <h2 className={styles.heading}>
            <span className={styles.headingLine1}>You Bring the Guests.</span>
            <span className={styles.headingLine2}>We&apos;ll Bring the Good Food.</span>
          </h2>

          {/* Description */}
          <p className={styles.description}>
            From intimate gatherings to grand celebrations, our catering service adds
            flavour to your special moments with authentic Indian cuisine and warm
            hospitality.
          </p>

          {/* CTA Pill Button */}
          <a
            href={getWhatsAppUrl("Hi Pooja's Kitchen, I would like to get a catering quote for an upcoming gathering / celebration!")}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
            aria-label="Get a Catering Quote"
          >
            <span>Get a Catering Quote</span>
            <ArrowRightIcon size={14} strokeWidth={2.4} className={styles.buttonArrow} />
          </a>
        </div>
      </div>
    </section>
  );
}
