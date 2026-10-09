"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuickOrderModal from "@/components/QuickOrderModal";
import { WhatsAppIcon, ArrowRightIcon } from "@/components/Icons";
import { getWhatsAppUrl } from "@/utils/whatsapp";
import styles from "./menu.module.css";

interface MenuItem {
  name: string;
  price: string;
}

interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    id: "thalis",
    title: "Thali Meals",
    items: [
      { name: "Special Royal Thali", price: "₹240" },
      { name: "Executive Daily Thali", price: "₹180" },
      { name: "Ghar Ka Swad Thali", price: "₹150" },
      { name: "Mini Lunch Thali", price: "₹120" },
      { name: "Jain Special Thali", price: "₹200" },
      { name: "Sunday Feast Thali", price: "₹260" },
    ],
  },
  {
    id: "dal-rice",
    title: "Dal & Rice",
    items: [
      { name: "Yellow Dal Tadka with Jeera Rice", price: "₹140" },
      { name: "Dal Makhani with Steamed Basmati Rice", price: "₹170" },
      { name: "Punjabi Rajma Chawal", price: "₹160" },
      { name: "Kadhi Pakoda with Steamed Rice", price: "₹140" },
      { name: "Panchmel Dal with Steamed Rice", price: "₹150" },
      { name: "Moong Dal Khichdi with Desi Ghee", price: "₹130" },
      { name: "Paneer Butter Masala with Rice Combo", price: "₹190" },
      { name: "Chole Chawal Combo", price: "₹150" },
    ],
  },
  {
    id: "breads",
    title: "Fresh Breads & Rotis",
    items: [
      { name: "Phulka / Roti with Desi Ghee (4 pcs)", price: "₹60" },
      { name: "Plain Tawa Roti (4 pcs)", price: "₹40" },
      { name: "Missi Roti with White Butter (2 pcs)", price: "₹70" },
      { name: "Aloo Pyaz Paratha with Curd & Pickle", price: "₹90" },
      { name: "Paneer Paratha with White Butter", price: "₹120" },
      { name: "Methi Thepla with Chutney (4 pcs)", price: "₹80" },
    ],
  },
  {
    id: "snacks",
    title: "Snacks & Chaat",
    items: [
      { name: "Punjabi Samosa with Mint Chutney (2 pcs)", price: "₹50" },
      { name: "Paneer Bread Pakoda (2 pcs)", price: "₹60" },
      { name: "Nylon Khaman Dhokla (Plate)", price: "₹70" },
      { name: "Crispy Aloo Tikki Chaat", price: "₹80" },
      { name: "Kanda Bhajiya / Onion Pakoda", price: "₹60" },
      { name: "Dahi Vada (2 pcs)", price: "₹80" },
      { name: "Kachori with Aloo Sabzi (2 pcs)", price: "₹70" },
      { name: "Masala Chai (Kulhad)", price: "₹30" },
    ],
  },
  {
    id: "sweets",
    title: "Traditional Sweets",
    items: [
      { name: "Shahi Gulab Jamun (2 pcs)", price: "₹60" },
      { name: "Kesar Rasgulla (2 pcs)", price: "₹60" },
      { name: "Desi Ghee Moong Dal Halwa (150g)", price: "₹110" },
      { name: "Desi Ghee Gajar Ka Halwa (Seasonal)", price: "₹120" },
      { name: "Kaju Katli (250g)", price: "₹240" },
      { name: "Malpua with Rabdi (2 pcs)", price: "₹130" },
      { name: "Rasmalai (2 pcs)", price: "₹90" },
    ],
  },
  {
    id: "tiffins",
    title: "Daily Tiffin Plans",
    items: [
      { name: "7-Day Lunch Trial Plan", price: "₹1,150" },
      { name: "7-Day Lunch & Dinner Plan", price: "₹2,200" },
      { name: "Monthly Lunch Subscription (30 Days)", price: "₹4,500" },
      { name: "Monthly Full Meal (Lunch + Dinner, 30 Days)", price: "₹8,500" },
    ],
  },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenOrderModal = (serviceName?: string) => {
    setSelectedService(serviceName || "Menu Order");
    setOrderModalOpen(true);
  };

  const filteredCategories =
    activeCategory === "all"
      ? menuData
      : menuData.filter((c) => c.id === activeCategory);

  return (
    <div className={styles.menuPageWrapper}>
      {/* Top Header */}
      <Header onOpenOrderModal={() => handleOpenOrderModal()} />

      {/* Decorative Botanical Corner Leaves */}
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

      <main className={styles.menuContainer}>
        {/* Breadcrumb Navigation */}
        <nav className={styles.breadcrumbNav} aria-label="Breadcrumb">
          <Link href="/" className={styles.breadcrumbLink}>
            Home
          </Link>
          <span className={styles.breadcrumbSeparator}>/</span>
          <span className={styles.breadcrumbCurrent}>Menu</span>
        </nav>

        {/* Menu Page Header */}
        <header className={styles.menuHeader}>
          <div className={styles.tagWrapper}>
            <span className={styles.tagLine} />
            <span className={styles.tagText}>Pooja&apos;s Kitchen</span>
            <span className={styles.tagLine} />
          </div>

          <h1 className={styles.menuTitle}>Our Daily Menu</h1>

          <p className={styles.menuSubtitle}>
            Wholesome, home-cooked food made fresh daily with pure ingredients &amp; authentic spices.
          </p>

          <div className={styles.vegBadge}>
            <span className={styles.vegDot} aria-hidden="true" />
            <span>100% Pure Vegetarian</span>
          </div>
        </header>

        {/* Category Filter Pills */}
        <div className={styles.tabsWrapper} role="tablist" aria-label="Menu Categories">
          <button
            onClick={() => setActiveCategory("all")}
            className={`${styles.tabBtn} ${activeCategory === "all" ? styles.tabBtnActive : ""}`}
            role="tab"
            aria-selected={activeCategory === "all"}
          >
            All Items
          </button>
          {menuData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`${styles.tabBtn} ${activeCategory === cat.id ? styles.tabBtnActive : ""}`}
              role="tab"
              aria-selected={activeCategory === cat.id}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Menu Categories with Dotted Leaders */}
        {filteredCategories.map((category) => (
          <section key={category.id} className={styles.categorySection} aria-labelledby={category.id}>
            <div className={styles.categoryHeader}>
              <h2 id={category.id} className={styles.categoryTitle}>
                {category.title}
              </h2>
              <div className={styles.categoryDecorativeLine} aria-hidden="true" />
            </div>

            <div className={styles.itemsGrid}>
              {category.items.map((item, idx) => (
                <div key={idx} className={styles.menuItemRow}>
                  <span className={styles.dishName}>{item.name}</span>
                  <span className={styles.dottedLeader} aria-hidden="true" />
                  <span className={styles.dishPrice}>{item.price}</span>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Bottom WhatsApp Order Card */}
        <section className={styles.orderCtaCard}>
          <div className={styles.orderCtaText}>
            <h3 className={styles.orderCtaHeading}>Ready to Order?</h3>
            <p className={styles.orderCtaSubtitle}>
              Message us on WhatsApp with your choice of dishes for quick home delivery or takeaway.
            </p>
          </div>

          <a
            href={getWhatsAppUrl("Hi Pooja's Kitchen, I just checked your menu and would like to place an order!")}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.orderCtaBtn}
            aria-label="Order on WhatsApp"
          >
            <WhatsAppIcon size={18} fill="#FFFFFF" />
            <span>Order on WhatsApp</span>
            <ArrowRightIcon size={14} strokeWidth={2.5} />
          </a>
        </section>
      </main>

      {/* Site Footer */}
      <Footer onOpenOrderModal={(service) => handleOpenOrderModal(service)} />

      {/* WhatsApp Quick Order Modal */}
      <QuickOrderModal
        isOpen={orderModalOpen}
        initialService={selectedService}
        onClose={() => {
          setOrderModalOpen(false);
          setSelectedService(undefined);
        }}
      />
    </div>
  );
}
