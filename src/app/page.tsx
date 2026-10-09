"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import KitchenSection from "@/components/KitchenSection";
import EventCatering from "@/components/EventCatering";
import HowItWorks from "@/components/HowItWorks";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";
import QuickOrderModal from "@/components/QuickOrderModal";

export default function HomePage() {
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenOrderModal = (serviceName?: string) => {
    setSelectedService(serviceName);
    setOrderModalOpen(true);
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        position: "relative",
        backgroundColor: "#0e0905",
        overflowX: "hidden",
      }}
    >
      {/* Top Fixed / Sticky Navigation */}
      <Header onOpenOrderModal={() => handleOpenOrderModal()} />

      {/* Hero Section */}
      <Hero onOpenOrderModal={() => handleOpenOrderModal()} />

      {/* Services Section: Good Food for Every Occasion */}
      <Services onSelectService={(service) => handleOpenOrderModal(service)} />

      {/* From Our Kitchen Section: Thali, Dal & Rice, Snacks, Sweets */}
      <KitchenSection onSelectCategory={(category) => handleOpenOrderModal(category)} />

      {/* Event Catering Grand Banquet Banner */}
      <EventCatering onOpenQuoteModal={() => handleOpenOrderModal("Event Catering")} />

      {/* How It Works: Simple Steps. Delicious Meals. */}
      <HowItWorks />

      {/* Social Proof: Happy Customers & Instagram Community Journey */}
      <SocialProof />

      {/* Site Footer */}
      <Footer onOpenOrderModal={(service) => handleOpenOrderModal(service)} />

      {/* Interactive Quick WhatsApp Order Modal */}
      <QuickOrderModal
        isOpen={orderModalOpen}
        initialService={selectedService}
        onClose={() => {
          setOrderModalOpen(false);
          setSelectedService(undefined);
        }}
      />
    </main>
  );
}
