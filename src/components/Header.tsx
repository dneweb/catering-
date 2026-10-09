"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import { WhatsAppIcon, ArrowRightIcon, MenuIcon, CloseIcon } from "./Icons";
import { getWhatsAppUrl } from "@/utils/whatsapp";

interface HeaderProps {
  onOpenOrderModal?: () => void;
}

const navItems = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Services", href: "/#services" },
  { name: "Catering", href: "/#catering" },
  { name: "Reviews", href: "/#reviews" },
  { name: "Contact", href: "/#contact" },
];

export default function Header({ onOpenOrderModal }: HeaderProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isMenuPage = pathname === "/menu";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCtaClick = (e: React.MouseEvent) => {
    if (onOpenOrderModal) {
      e.preventDefault();
      onOpenOrderModal();
    }
  };

  const isItemActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href === "/menu" && pathname === "/menu") return true;
    return false;
  };

  return (
    <>
      <header
        className={`${styles.headerWrapper} ${
          scrolled || isMenuPage ? styles.scrolled : ""
        }`}
      >
        <div className={styles.headerContainer}>
          {/* Logo */}
          <Link href="/" className={styles.logoLink} aria-label="Pooja's Kitchen Home">
            <Image
              src="/images/logo.webp"
              alt="Pooja's Kitchen Logo - Delicious & Fresh"
              width={125}
              height={125}
              priority
              className={styles.logoImage}
            />
          </Link>

          {/* Center Navigation Links */}
          <nav aria-label="Main Navigation">
            <ul className={styles.navMenu}>
              {navItems.map((item) => {
                const active = isItemActive(item.href);
                return (
                  <li key={item.name} className={styles.navItem}>
                    <Link
                      href={item.href}
                      className={`${styles.navLink} ${active ? styles.activeLink : ""}`}
                    >
                      {item.name}
                    </Link>
                    {active && <span className={styles.activeIndicator} />}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Action Button: Order on WhatsApp */}
          <div>
            <a
              href={getWhatsAppUrl("Hi Pooja's Kitchen, I would like to order delicious homemade food!")}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtn}
              id="header-order-btn"
            >
              <WhatsAppIcon size={18} fill="#1C1917" />
              <span>Order on WhatsApp</span>
              <ArrowRightIcon size={15} strokeWidth={2.4} className={styles.arrowIcon} />
            </a>
          </div>

          {/* Mobile Actions */}
          <div className={styles.mobileActions}>
            <a
              href={getWhatsAppUrl("Hi Pooja's Kitchen, I would like to order delicious homemade food!")}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileCtaBtn}
              aria-label="Order on WhatsApp"
            >
              <WhatsAppIcon size={16} fill="#1C1917" />
              <span>Order</span>
            </a>

            <button
              type="button"
              className={styles.hamburgerBtn}
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
            >
              <MenuIcon size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`${styles.drawerOverlay} ${mobileMenuOpen ? styles.drawerOpen : ""}`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={styles.mobileDrawer}
          onClick={(e) => e.stopPropagation()}
          aria-modal="true"
          role="dialog"
        >
          <div>
            <div className={styles.drawerHeader}>
              <Image
                src="/images/logo.webp"
                alt="Pooja's Kitchen"
                width={48}
                height={48}
                className={styles.drawerLogo}
              />
              <button
                type="button"
                className={styles.closeBtn}
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <CloseIcon size={22} />
              </button>
            </div>

            <nav className={styles.drawerNav}>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${styles.drawerLink} ${isItemActive(item.href) ? styles.drawerActiveLink : ""}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{item.name}</span>
                  <ArrowRightIcon size={14} strokeWidth={2} />
                </Link>
              ))}
            </nav>
          </div>

          <div className={styles.drawerFooter}>
            <a
              href={getWhatsAppUrl("Hi Pooja's Kitchen, I would like to order delicious homemade food!")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className={styles.drawerCtaBtn}
            >
              <WhatsAppIcon size={18} fill="#1C1917" />
              <span>Order on WhatsApp</span>
              <ArrowRightIcon size={15} strokeWidth={2.4} />
            </a>
            <p className={styles.drawerNote}>
              Pure homemade delicacies cooked fresh with real ingredients &amp; love.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
