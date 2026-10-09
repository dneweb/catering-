"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./QuickOrderModal.module.css";
import { WhatsAppIcon, CloseIcon, ArrowRightIcon } from "./Icons";
import { WHATSAPP_PHONE, getWhatsAppUrl } from "@/utils/whatsapp";

interface QuickOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function QuickOrderModal({
  isOpen,
  onClose,
  initialService,
}: QuickOrderModalProps) {
  const [selectedMeal, setSelectedMeal] = useState(
    initialService || "Daily Tiffin Service (Lunch & Dinner Plans)"
  );
  const [customerName, setCustomerName] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  React.useEffect(() => {
    if (initialService) {
      if (initialService.toLowerCase().includes("tiffin")) {
        setSelectedMeal("Daily Tiffin Service (Lunch & Dinner Plans)");
      } else if (initialService.toLowerCase().includes("catering")) {
        setSelectedMeal("Catering for Celebrations & Events");
      } else {
        setSelectedMeal(initialService);
      }
    }
  }, [initialService, isOpen]);

  if (!isOpen) return null;

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = WHATSAPP_PHONE;
    let message = `Hello Pooja's Kitchen! 🍲\nI would like to order:\n• Item: ${selectedMeal}`;
    if (customerName.trim()) {
      message += `\n• Name: ${customerName.trim()}`;
    }
    if (address.trim()) {
      message += `\n• Delivery Address: ${address.trim()}`;
    }
    if (notes.trim()) {
      message += `\n• Instructions: ${notes.trim()}`;
    }
    message += `\n\nPlease confirm availability and delivery time. Thank you!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encoded}`, "_blank");
    onClose();
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close modal"
        >
          <CloseIcon size={20} />
        </button>

        <div className={styles.modalHeader}>
          <Image
            src="/images/logo.webp"
            alt="Pooja's Kitchen"
            width={50}
            height={50}
            className={styles.modalLogo}
          />
          <div>
            <h3 className={styles.modalTitle}>Order on WhatsApp</h3>
            <p className={styles.modalSubtitle}>Fresh, hot homestyle food cooked with pure love</p>
          </div>
        </div>

        <form onSubmit={handleSendWhatsApp}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="meal-choice">
              Select Your Meal / Service
            </label>
            <select
              id="meal-choice"
              value={selectedMeal}
              onChange={(e) => setSelectedMeal(e.target.value)}
              className={styles.select}
            >
              <option value="Daily Tiffin Service (Lunch & Dinner Plans)">
                Daily Tiffin Service (Lunch &amp; Dinner Plans)
              </option>
              <option value="Catering for Celebrations & Events">
                Catering for Celebrations &amp; Corporate Events
              </option>
              <option value="Pooja's Royal Maharaja Thali (₹240)">
                Pooja&apos;s Royal Maharaja Thali (₹240)
              </option>
              <option value="Homestyle Daily Comfort Thali (₹160)">
                Homestyle Daily Comfort Thali (₹160)
              </option>
              <option value="Monthly Daily Tiffin Subscription (Lunch/Dinner)">
                Monthly Daily Tiffin Subscription (Lunch/Dinner)
              </option>
              <option value="Special Paneer Curry + 4 Phulkas Combo (₹210)">
                Special Paneer Curry + 4 Phulkas Combo (₹210)
              </option>
              <option value="Dal Tadka & Fragrant Basmati Rice (₹150)">
                Dal Tadka &amp; Fragrant Basmati Rice (₹150)
              </option>
              <option value="Custom Event / Party Catering Inquiry">
                Custom Event / Party Catering Inquiry
              </option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="cust-name">
              Your Name (Optional)
            </label>
            <input
              id="cust-name"
              type="text"
              placeholder="e.g. Priya Sharma"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="cust-addr">
              Delivery Area / Landmark (Optional)
            </label>
            <input
              id="cust-addr"
              type="text"
              placeholder="e.g. Sector 14, Near City Center"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="cust-notes">
              Special Instructions
            </label>
            <input
              id="cust-notes"
              type="text"
              placeholder="e.g. Less spicy, send extra chutney, etc."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className={styles.input}
            />
          </div>

          <button type="submit" className={styles.sendBtn}>
            <WhatsAppIcon size={20} fill="#ffffff" />
            <span>Send Order via WhatsApp</span>
            <ArrowRightIcon size={16} strokeWidth={2.5} />
          </button>

          <a
            href={getWhatsAppUrl("Hi Pooja's Kitchen, I would like to order delicious homemade food!")}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.directLink}
            onClick={onClose}
          >
            Or start a direct chat without selecting
          </a>
        </form>
      </div>
    </div>
  );
}
