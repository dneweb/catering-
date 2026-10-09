"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./KitchenSection.module.css";
import { ArrowRightIcon } from "./Icons";

interface KitchenSectionProps {
  onSelectCategory?: (category: string) => void;
}

const kitchenItems = [
  {
    id: "thali",
    title: "Thali",
    description: "A complete meal, full of flavor.",
    image: "/images/kitchen_thali.webp",
    alt: "Authentic Indian royal thali with bowls of paneer, dal, rice, rotis, salad and raita",
  },
  {
    id: "dal-rice",
    title: "Dal & Rice",
    description: "Simple. Wholesome. Comforting.",
    image: "/images/kitchen_dal_rice.webp",
    alt: "Slow cooked yellow dal tadka garnished with coriander and fried chili, with steamed basmati rice",
  },
  {
    id: "snacks",
    title: "Snacks",
    description: "Perfect for small bites & gatherings.",
    image: "/images/kitchen_snacks.webp",
    alt: "Crispy golden samosas served with fresh green mint chutney",
  },
  {
    id: "sweets",
    title: "Sweets",
    description: "Traditional treats, made with love.",
    image: "/images/kitchen_sweets.webp",
    alt: "Warm golden-brown gulab jamuns in a traditional brass bowl garnished with pistachios",
  },
];

export default function KitchenSection({ onSelectCategory }: KitchenSectionProps) {
  const handleItemClick = (e: React.MouseEvent, title: string) => {
    if (onSelectCategory) {
      e.preventDefault();
      onSelectCategory(title);
    }
  };

  return (
    <section id="menu" className={styles.kitchenSection}>
      {/* Botanical Corner Leaves from public/images/leaf.webp */}
      <Image
        src="/images/leaf.webp"
        alt=""
        width={150}
        height={165}
        unoptimized
        className={`${styles.leafDecoration} ${styles.leafTopLeft}`}
        aria-hidden="true"
      />
      <Image
        src="/images/leaf.webp"
        alt=""
        width={150}
        height={165}
        unoptimized
        className={`${styles.leafDecoration} ${styles.leafTopRight}`}
        aria-hidden="true"
      />

      {/* Section Header */}
      <div className={styles.headerWrapper}>
        <div className={styles.titleWrapper}>
          <span className={styles.titleLine} />
          <h2 className={styles.heading}>From Our Kitchen</h2>
          <span className={styles.titleLine} />
        </div>
        <p className={styles.subtitle}>Authentic flavors. Freshly made. Always.</p>
      </div>

      {/* 4 Cards Grid */}
      <div className={styles.cardsGrid}>
        {kitchenItems.map((item) => (
          <article key={item.id} className={styles.card}>
            <div className={styles.cardImageWrapper}>
              <Image
                src={item.image}
                alt={item.alt}
                fill
                unoptimized
                className={styles.cardImage}
                sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 280px"
              />
            </div>

            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
              <Link
                href="/menu"
                className={styles.menuLink}
                aria-label={`View menu for ${item.title}`}
              >
                <span>View Menu</span>
                <ArrowRightIcon size={14} strokeWidth={2.4} className={styles.arrowIcon} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
