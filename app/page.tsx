// NOTE: Client component for hooks/animation
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Wrench, Sparkles, ShieldCheck, Gauge, CalendarDays, Phone, Mail, 
  MapPin, Star, Send, Instagram, Facebook, Bike, ThumbsUp, Clock, 
  Euro, HelpCircle 
} from "lucide-react";

export default function TonioRepairSite() {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => setSending(false), 1200);
  }; // <-- ici on ferme SEULEMENT handleSubmit

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-100">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/60 bg-zinc-900/40 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 font-semibold tracking-tight">
            <div className="size-9 rounded-xl bg-gradient-to-br from-amber-400 to-red-600 grid place-items-center shadow-lg shadow-amber-500/20">
              <Bike className="size-5" />
            </div>
            <span className="text-lg">Tonio <span className="text-amber-400">Repair</span></span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-amber-300 transition">Services</a>
            <a href="#tarifs" className="hover:text-amber-300 transition">Tarifs</a>
            <a href="#atelier" className="hover:text-amber-300 transition">Atelier</a>
            <a href="#avis" className="hover:text-amber-300 transition">Avis</a>
            <a href="#faq" className="hover:text-amber-300 transition">FAQ</a>
            <Button className="rounded-2xl" asChild>
              <a href="#contact">
                <CalendarDays className="mr-2 size-4"/>
                Prendre RDV
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* --- le reste de ton code (HERO, SERVICES, TARIFS, ATELIER, AVIS, FAQ, CONTACT, FOOTER) reste inchangé --- */}

    </div>
  );
}
