"use client";

import React from "react";
import Image from "next/image";
import styles from "./HowItWorks.module.css";
import { CalendarIcon, ChefHatIcon, TruckIcon } from "./Icons";

export default function HowItWorks() {
  return (
    <section className={styles.howItWorksSection} aria-labelledby="how-it-works-title">
      {/* Corner Botanical Leaves */}
      <Image
        src="/images/leaf.webp"
        alt=""
        width={140}
        height={155}
        unoptimized
        className={`${styles.leafDecoration} ${styles.leafTopLeft}`}
        aria-hidden="true"
      />
      <Image
        src="/images/leaf.webp"
        alt=""
        width={140}
        height={155}
        unoptimized
        className={`${styles.leafDecoration} ${styles.leafTopRight}`}
        aria-hidden="true"
      />

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.headerWrapper}>
          <div className={styles.tagWrapper}>
            <span className={styles.tagLine} />
            <span className={styles.tagText}>How It Works</span>
            <span className={styles.tagLine} />
          </div>
          <h2 id="how-it-works-title" className={styles.heading}>
            Simple Steps. Delicious Meals.
          </h2>
        </div>

        {/* 3 Steps Row */}
        <div className={styles.stepsRow}>
          {/* Step 1 */}
          <div className={styles.stepItem}>
            <div className={styles.iconCircle}>
              <CalendarIcon size={30} stroke="#744b1d" />
            </div>
            <h3 className={styles.stepTitle}>1. Choose your plan</h3>
            <p className={styles.stepDescription}>
              Pick from our tiffin plans or catering options.
            </p>
          </div>

          {/* Chevron Divider */}
          <div className={styles.arrowDivider} aria-hidden="true">
            <svg
              className={styles.chevronIcon}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>

          {/* Step 2 */}
          <div className={styles.stepItem}>
            <div className={styles.iconCircle}>
              <ChefHatIcon size={30} stroke="#744b1d" />
            </div>
            <h3 className={styles.stepTitle}>2. Freshly prepared</h3>
            <p className={styles.stepDescription}>
              Our home-style meals are cooked with the best ingredients.
            </p>
          </div>

          {/* Chevron Divider */}
          <div className={styles.arrowDivider} aria-hidden="true">
            <svg
              className={styles.chevronIcon}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>

          {/* Step 3 */}
          <div className={styles.stepItem}>
            <div className={styles.iconCircle}>
              <TruckIcon size={30} stroke="#744b1d" />
            </div>
            <h3 className={styles.stepTitle}>3. Delivered with care</h3>
            <p className={styles.stepDescription}>
              On time, fresh and ready to be enjoyed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
