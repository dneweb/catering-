"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";
import {
  WhatsAppIcon,
  ArrowRightIcon,
  TiffinIcon,
  CateringIcon,
} from "./Icons";
import { getWhatsAppUrl } from "@/utils/whatsapp";

interface FooterProps {
  onOpenOrderModal?: (service?: string) => void;
}

export default function Footer({ onOpenOrderModal }: FooterProps) {
  return (
    <footer className={styles.footerSection} aria-label="Site Footer">
      {/* Dimmed Botanical Corner Leaves */}
      <Image
        src="/images/leaf.webp"
        alt=""
        width={130}
        height={140}
        unoptimized
        className={`${styles.leafDecoration} ${styles.leafTopLeft}`}
        aria-hidden="true"
      />
      <Image
        src="/images/leaf.webp"
        alt=""
        width={130}
        height={140}
        unoptimized
        className={`${styles.leafDecoration} ${styles.leafTopRight}`}
        aria-hidden="true"
      />

      <div className={styles.container}>
        <div className={styles.topGrid}>
          {/* Column 1: Brand / Logo */}
          <div className={styles.brandCol}>
            <div className={styles.logoRow}>
              <Image
                src="/images/logo.webp"
                alt="Pooja's Kitchen"
                width={135}
                height={135}
                unoptimized
                className={styles.logoImage}
              />
            </div>
            <h3 className={styles.tagline}>Good Food. Happy People.</h3>
            <p className={styles.brandDescription}>
              Fresh home-style meals for everyday and special moments.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.linksList}>
              <li>
                <Link href="/" className={styles.linkItem}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className={styles.linkItem}>
                  Our Menu
                </Link>
              </li>
              <li>
                <Link href="/#services" className={styles.linkItem}>
                  Tiffin Service
                </Link>
              </li>
              <li>
                <Link href="/#catering" className={styles.linkItem}>
                  Catering
                </Link>
              </li>
              <li>
                <Link href="/#reviews" className={styles.linkItem}>
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/#contact" className={styles.linkItem}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h4 className={styles.colTitle}>Our Services</h4>
            <ul className={styles.servicesList}>
              <li>
                <a
                  href={getWhatsAppUrl("Hi Pooja's Kitchen, I am interested in your Tiffin Subscription service!")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.serviceItem}
                >
                  <span className={styles.serviceIconWrap}>
                    <TiffinIcon size={16} stroke="#E5B869" />
                  </span>
                  <span>Tiffin Subscription</span>
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppUrl("Hi Pooja's Kitchen, I would like to inquire about your Event Catering service!")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.serviceItem}
                >
                  <span className={styles.serviceIconWrap}>
                    <CateringIcon size={16} stroke="#E5B869" />
                  </span>
                  <span>Event Catering</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div className={styles.touchCol}>
            <h4 className={styles.colTitle}>Get in Touch</h4>

            <a
              href={getWhatsAppUrl("Hi Pooja's Kitchen, I would like to place an order!")}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappButton}
              aria-label="Order on WhatsApp"
            >
              <WhatsAppIcon size={16} fill="#E5B869" />
              <span>Order on WhatsApp</span>
              <ArrowRightIcon size={13} strokeWidth={2.4} />
            </a>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.bottomText}>
            POOJA&apos;S KITCHEN &nbsp;•&nbsp; HOMEMADE FOOD &nbsp;•&nbsp; FRESH INGREDIENTS &nbsp;•&nbsp; WITH LOVE
          </p>
        </div>
      </div>
    </footer>
  );
}
