"use client";

import React from "react";
import Image from "next/image";
import styles from "./SocialProof.module.css";
import { InstagramIcon, StarIcon, ArrowRightIcon } from "./Icons";

const INSTAGRAM_URL =
  "https://www.instagram.com/poojaskitchen_pk?exln=MXg2a3ZzMzU4Mnliaw==";

const reviews = [
  {
    id: "priya",
    name: "Priya S.",
    role: "Verified Tiffin Subscriber",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=85",
    fallbackInitial: "P",
    quote:
      "The tiffin service is a lifesaver! Fresh, tasty and always on time. Feels like home.",
  },
  {
    id: "rohan",
    name: "Rohan M.",
    role: "Catering Client",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&h=160&q=85",
    fallbackInitial: "R",
    quote:
      "We hired Pooja's Kitchen for our family function and everyone loved the food. Delicious and beautifully presented!",
  },
];

const galleryImages = [
  {
    id: "thali",
    src: "/images/kitchen_thali.webp",
    alt: "Pooja's Kitchen authentic thali",
  },
  {
    id: "tiffin",
    src: "/images/service_tiffin.webp",
    alt: "Pooja's Kitchen 3-tier stainless steel tiffin",
  },
  {
    id: "sweets",
    src: "/images/kitchen_sweets.webp",
    alt: "Pooja's Kitchen royal gulab jamun",
  },
  {
    id: "snacks",
    src: "/images/kitchen_snacks.webp",
    alt: "Pooja's Kitchen crispy golden snacks",
  },
  {
    id: "dal",
    src: "/images/kitchen_dal_rice.webp",
    alt: "Pooja's Kitchen homestyle dal and steamed basmati rice",
  },
];

export default function SocialProof() {
  return (
    <section className={styles.socialProofSection} aria-label="Customer Reviews and Community">
      <div className={styles.container}>
        {/* Left Column: Happy Customers */}
        <div className={styles.reviewsCol}>
          <div className={styles.tagWrapper}>
            <span className={styles.tagLine} />
            <span className={styles.tagText}>Happy Customers</span>
          </div>

          <h2 className={styles.heading}>Real People. Real Love.</h2>
          <p className={styles.subtitle}>
            Here&apos;s what our customers have to say about their Pooja&apos;s Kitchen experience.
          </p>

          <div className={styles.reviewsGrid}>
            {reviews.map((r) => (
              <article key={r.id} className={styles.reviewCard}>
                <div>
                  <div className={styles.quoteMark} aria-hidden="true">
                    &ldquo;
                  </div>
                  <p className={styles.quoteText}>{r.quote}</p>
                </div>

                <div className={styles.authorRow}>
                  <div className={styles.avatarWrapper}>
                    <Image
                      src={r.avatar}
                      alt={r.name}
                      width={42}
                      height={42}
                      unoptimized
                      className={styles.avatarImage}
                    />
                  </div>
                  <div className={styles.authorMeta}>
                    <span className={styles.authorName}>— {r.name}</span>
                    <div className={styles.starsRow} aria-label="5 out of 5 stars">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} size={12} fill="#df9a24" />
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Right Column: Follow Our Journey */}
        <div className={styles.instagramCol}>
          <div className={styles.tagWrapper}>
            <div className={styles.instaBadge} aria-hidden="true">
              <InstagramIcon size={16} stroke="#6a441e" />
            </div>
            <span className={styles.instaEyebrow}>Community</span>
          </div>

          <h3 className={styles.instaTitle}>Follow Our Journey</h3>
          <p className={styles.instaSubtitle}>
            Real food. Behind the scenes. Happy moments.
          </p>

          {/* 5-Photo Interactive Gallery */}
          <div className={styles.galleryGrid}>
            {galleryImages.map((img) => (
              <a
                key={img.id}
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.galleryCard}
                aria-label={`View ${img.alt} on Instagram`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  unoptimized
                  className={styles.galleryCardImage}
                  sizes="(max-width: 640px) 33vw, 130px"
                />
                <div className={styles.galleryOverlay} aria-hidden="true">
                  <InstagramIcon size={22} stroke="#FFFFFF" />
                </div>
              </a>
            ))}
          </div>

          {/* Follow Button */}
          <div className={styles.buttonWrapper}>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.followBtn}
              aria-label="Follow Pooja's Kitchen on Instagram"
            >
              <InstagramIcon size={16} stroke="currentColor" />
              <span>Follow on Instagram</span>
              <ArrowRightIcon size={14} strokeWidth={2.4} className={styles.btnArrow} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
