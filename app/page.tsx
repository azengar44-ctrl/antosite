// NOTE: Client component for hooks/animation
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Wrench, Sparkles, ShieldCheck, Gauge, CalendarDays, Phone, Mail, MapPin, Star, Send, Instagram, Facebook, Bike, ThumbsUp, Clock, Euro, HelpCircle } from "lucide-react";

export default function TonioRepairSite() {
  const [sending, setSending] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => setSending(false), 1200);
  };

  return (
    <div className=\"min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-100\">
      {/* NAVBAR */}
      <nav className=\"sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/60 bg-zinc-900/40 border-b border-white/10\">
        <div className=\"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between\">
          <a href=\"#\" className=\"flex items-center gap-3 font-semibold tracking-tight\">
            <div className=\"size-9 rounded-xl bg-gradient-to-br from-amber-400 to-red-600 grid place-items-center shadow-lg shadow-amber-500/20\">
              <Bike className=\"size-5\" />
            </div>
            <span className=\"text-lg\">Tonio <span className=\"text-amber-400\">Repair</span></span>
          </a>
          <div className=\"hidden md:flex items-center gap-6 text-sm\">
            <a href=\"#services\" className=\"hover:text-amber-300 transition\">Services</a>
            <a href=\"#tarifs\" className=\"hover:text-amber-300 transition\">Tarifs</a>
            <a href=\"#atelier\" className=\"hover:text-amber-300 transition\">Atelier</a>
            <a href=\"#avis\" className=\"hover:text-amber-300 transition\">Avis</a>
            <a href=\"#faq\" className=\"hover:text-amber-300 transition\">FAQ</a>
            <Button className=\"rounded-2xl\" asChild>
              <a href=\"#contact\">
                <CalendarDays className=\"mr-2 size-4\"/>
                Prendre RDV
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className=\"relative overflow-hidden\">
        <div className=\"absolute inset-0 -z-10\">
          <div className=\"absolute -top-32 -right-20 h-80 w-80 rounded-full bg-amber-500/20 blur-3xl\" />
          <div className=\"absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-red-500/20 blur-3xl\" />
          <div className=\"absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_0%,transparent_60%)]\" />
        </div>
        <div className=\"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-28 grid lg:grid-cols-2 gap-10 items-center\">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
            <span className=\"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs tracking-wide\">
              <Sparkles className=\"size-3.5 text-amber-300\"/> Nouveau design 2025
            </span>
            <h1 className=\"mt-4 text-4xl sm:text-5xl font-extrabold leading-tight\">
              Réparation & préparation <span className=\"text-amber-400\">moto</span> haut de gamme
            </h1>
            <p className=\"mt-4 text-zinc-300 max-w-xl\">
              Entretien, diagnostics injection, restaurations et préparations racing. Qualité atelier, délais respectés, conseils passionnés.
            </p>
            <div className=\"mt-6 flex flex-wrap items-center gap-3\">
              <Button className=\"rounded-2xl text-base px-6 py-6\" asChild>
                <a href=\"#contact\">
                  <CalendarDays className=\"mr-2 size-4\"/>
                  Demander un devis
                </a>
              </Button>
              <a href=\"#services\" className=\"text-sm underline underline-offset-4 decoration-amber-400/60 hover:text-amber-300\">Voir nos services</a>
            </div>
            <div className=\"mt-8 flex items-center gap-6 text-sm text-zinc-300\">
              <div className=\"flex items-center gap-2\"><ShieldCheck className=\"size-4 text-emerald-400\"/> Garantie main d’œuvre</div>
              <div className=\"flex items-center gap-2\"><Clock className=\"size-4 text-amber-300\"/> Devis en 24h</div>
              <div className=\"flex items-center gap-2\"><ThumbsUp className=\"size-4 text-sky-400\"/> 4.9/5 clients</div>
            </div>
          </motion.div>

          <motion.div initial={{opacity:0, scale:0.98}} animate={{opacity:1, scale:1}} transition={{duration:0.6, delay:0.1}} className=\"relative\">
            <div className=\"relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl\">
              {/* Placeholder visual / hero image */}
              <div className=\"aspect-[16/10] bg-gradient-to-br from-zinc-800 to-zinc-900 grid place-items-center\">
                <svg viewBox=\"0 0 200 120\" className=\"w-full h-full text-zinc-600\" role=\"img\" aria-label=\"Illustration moto stylisée\">
                  <defs>
                    <linearGradient id=\"g\" x1=\"0\" x2=\"1\">
                      <stop offset=\"0%\" stopColor=\"currentColor\"/>
                      <stop offset=\"100%\" stopColor=\"#a1a1aa\"/>
                    </linearGradient>
                  </defs>
                  <g fill=\"none\" stroke=\"url(#g)\" strokeWidth=\"2\">
                    <path d=\"M20 80 C 40 40, 60 40, 80 80 S 120 120, 160 80\"/>
                    <circle cx=\"60\" cy=\"90\" r=\"12\"/>
                    <circle cx=\"140\" cy=\"90\" r=\"12\"/>
                    <path d=\"M50 70 L120 60 L160 70\"/>
                  </g>
                </svg>
              </div>
              <div className=\"absolute inset-x-0 -bottom-6 flex justify-center\">
                <div className=\"px-4 py-2 rounded-full bg-zinc-900/90 border border-white/10 text-xs text-zinc-300 backdrop-blur\">
                  Atelier diag injection • Outillage pro • Pièces OEM & perf
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* SERVICES */}
      <section id=\"services\" className=\"py-16 lg:py-24\">
        <div className=\"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8\">
          <div className=\"flex items-end justify-between gap-6\">
            <h2 className=\"text-2xl sm:text-3xl font-bold\">Nos services</h2>
            <a className=\"text-sm text-amber-300 hover:underline underline-offset-4\" href=\"#contact\">Demander un devis</a>
          </div>

          <div className=\"mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6\">
            <Card className=\"bg-white/5 border-white/10 rounded-3xl\">
              <CardHeader>
                <CardTitle className=\"flex items-center gap-3 text-lg\"><Wrench className=\"size-5 text-amber-300\"/> Entretien & révision</CardTitle>
              </CardHeader>
              <CardContent className=\"text-sm text-zinc-300\">
                Vidanges, filtres, bougies, kits chaîne, pneus. Check-up complet et feuille de route d’entretien.
              </CardContent>
            </Card>

            <Card className=\"bg-white/5 border-white/10 rounded-3xl\">
              <CardHeader>
                <CardTitle className=\"flex items-center gap-3 text-lg\"><Gauge className=\"size-5 text-sky-300\"/> Diagnostics & injection</CardTitle>
              </CardHeader>
              <CardContent className=\"text-sm text-zinc-300\">
                Lecture codes défauts, capteurs, réglages injection/ralenti. Démarrages à froid, calages, reprises.
              </CardContent>
            </Card>

            <Card className=\"bg-white/5 border-white/10 rounded-3xl\">
              <CardHeader>
                <CardTitle className=\"flex items-center gap-3 text-lg\"><ShieldCheck className=\"size-5 text-emerald-300\"/> Sécurité & freinage</CardTitle>
              </CardHeader>
              <CardContent className=\"text-sm text-zinc-300\">
                Disques/plaquettes, purges, durites aviation, contrôles châssis & serrage couple.
              </CardContent>
            </Card>

            <Card className=\"bg-white/5 border-white/10 rounded-3xl\">
              <CardHeader>
                <CardTitle className=\"flex items-center gap-3 text-lg\"><Sparkles className=\"size-5 text-fuchsia-300\"/> Restauration & esthétique</CardTitle>
              </CardHeader>
              <CardContent className=\"text-sm text-zinc-300\">
                Remise à neuf, sablage/peinture partenaires, faisceaux, visserie inox, detailing pro.
              </CardContent>
            </Card>

            <Card className=\"bg-white/5 border-white/10 rounded-3xl\">
              <CardHeader>
                <CardTitle className=\"flex items-center gap-3 text-lg\"><ThumbsUp className=\"size-5 text-violet-300\"/> Prépa piste & racing</CardTitle>
              </CardHeader>
              <CardContent className=\"text-sm text-zinc-300\">
                Protections, commandes reculées, ECU, réglages suspensions de base, check sécurité.
              </CardContent>
            </Card>

            <Card className=\"bg-white/5 border-white/10 rounded-3xl\">
              <CardHeader>
                <CardTitle className=\"flex items-center gap-3 text-lg\"><Star className=\"size-5 text-amber-300\"/> Packs sur-mesure</CardTitle>
              </CardHeader>
              <CardContent className=\"text-sm text-zinc-300\">
                Formules « starter », « touring », ou « full resto ». Devis clair avant travaux.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* TARIFS */}
      <section id=\"tarifs\" className=\"py-16 lg:py-24 bg-zinc-950/60 border-y border-white/10\">
        <div className=\"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8\">
          <div className=\"flex items-center justify-between\">
            <h2 className=\"text-2xl sm:text-3xl font-bold\">Tarifs indicatifs</h2>
            <p className=\"text-sm text-zinc-400\">Main d’œuvre: 60€/h TTC</p>
          </div>
          <div className=\"mt-8 grid md:grid-cols-3 gap-6\">
            {[
              {title:\"Révision standard\", price:\"à partir de 149€\", points:[\"Vidange + filtre\",\"Contrôles sécurité 30 pts\",\"Reset entretien\"]},
              {title:\"Diagnostic injection\", price:\"à partir de 79€\", points:[\"Lecture défauts\",\"Tests capteurs\",\"Rapport et préco\"]},
              {title:\"Freinage premium\", price:\"à partir de 199€\", points:[\"Plaquettes + purge\",\"Contrôle disques\",\"Essai routier\"]},
            ].map((p, i)=> (
              <Card key={i} className=\"bg-white/5 border-white/10 rounded-3xl\">
                <CardHeader>
                  <CardTitle className=\"flex items-center justify-between text-lg\">
                    <span className=\"flex items-center gap-2\"><Euro className=\"size-4 text-amber-300\"/> {p.title}</span>
                    <span className=\"text-amber-300 text-sm font-medium\">{p.price}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className=\"text-sm text-zinc-300\">
                  <ul className=\"space-y-1 list-disc list-inside\">
                    {p.points.map((pt, idx)=> (<li key={idx}>{pt}</li>))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ATELIER */}
      <section id=\"atelier\" className=\"py-16 lg:py-24\">
        <div className=\"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8\">
          <h2 className=\"text-2xl sm:text-3xl font-bold\">L’atelier</h2>
          <p className=\"mt-2 text-zinc-300 max-w-2xl\">Équipé pour l’injection, l’électricité et les restaurations. Travail soigné, pièces OEM quand c’est nécessaire, alternatives perf quand c’est pertinent.</p>

          <div className=\"mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4\">
            {Array.from({length:6}).map((_,i)=> (
              <div key={i} className=\"group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-800 to-zinc-900\">
                <div className=\"aspect-video grid place-items-center\">
                  <span className=\"text-zinc-500 text-sm\">Photo atelier {i+1}</span>
                </div>
                <div className=\"absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-black/40 grid place-items-center text-xs\">
                  Cliquez pour agrandir
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVIS */}
      <section id=\"avis\" className=\"py-16 lg:py-24\">
        <div className=\"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8\">
          <div className=\"flex items-end justify-between gap-6\">
            <h2 className=\"text-2xl sm:text-3xl font-bold\">Ce que disent nos clients</h2>
            <div className=\"text-sm text-zinc-300\">Note moyenne <span className=\"text-amber-300 font-semibold\">4.9/5</span></div>
          </div>

          <div className=\"mt-8 grid md:grid-cols-3 gap-6\">
            {[\"Service nickel et super pédago.\", \"Démarrage à froid résolu, la moto tourne rond.\", \"Restauration impeccable, délais tenus.\"] .map((txt, idx)=> (
              <Card key={idx} className=\"bg-white/5 border-white/10 rounded-3xl\">
                <CardHeader className=\"pb-2\">
                  <CardTitle className=\"flex items-center gap-2 text-base\">
                    {Array.from({length:5}).map((_,i)=> <Star key={i} className=\"size-4 text-amber-300\"/>) }
                  </CardTitle>
                </CardHeader>
                <CardContent className=\"text-sm text-zinc-300\">
                  “{txt}”
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id=\"faq\" className=\"py-16 lg:py-24 bg-zinc-950/60 border-y border-white/10\">
        <div className=\"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8\">
          <h2 className=\"text-2xl sm:text-3xl font-bold flex items-center gap-2\"><HelpCircle className=\"size-5\"/> Questions fréquentes</h2>
          <div className=\"mt-6 grid md:grid-cols-2 gap-4\">
            {[
              {q:\"Comment se passe un diagnostic injection ?\", a:\"On lit les codes défauts, on teste les capteurs clés (température, pression, lambda), on vérifie l’étanchéité et on fournit un rapport avec un plan d’action.\"},
              {q:\"Puis-je apporter mes propres pièces ?\", a:\"Oui si elles sont adaptées et de qualité. On vous conseille sur le meilleur choix et on garantit la main d’œuvre.\"},
              {q:\"Quels délais ?\", a:\"Devis sous 24h. Pour les révisions simples: 48–72h. Les restaurations dépendent de l’approvisionnement des pièces.\"},
              {q:\"Vous travaillez quelles marques ?\", a:\"Roadsters, sportives, trails et 125. Honda, Yamaha, KTM, Suzuki, Kawasaki, BMW, Ducati, etc.\"},
            ].map((f, i)=> (
              <details key={i} className=\"group rounded-2xl border border-white/10 bg-white/5 p-4\">
                <summary className=\"cursor-pointer list-none flex items-center justify-between\">
                  <span className=\"font-medium\">{f.q}</span>
                  <span className=\"text-zinc-400 group-open:rotate-180 transition\">▾</span>
                </summary>
                <p className=\"mt-3 text-sm text-zinc-300\">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section id=\"contact\" className=\"py-16 lg:py-24\">
        <div className=\"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start\">
          <div>
            <h2 className=\"text-2xl sm:text-3xl font-bold\">Demander un devis / RDV</h2>
            <p className=\"mt-2 text-zinc-300\">Décrivez la moto et le besoin, on revient vers vous rapidement.</p>

            <form onSubmit={handleSubmit} className=\"mt-6 space-y-4\" aria-label=\"Formulaire de contact\">
              <div className=\"grid sm:grid-cols-2 gap-4\">
                <Input placeholder=\"Nom\" required className=\"rounded-2xl bg-white/5 border-white/10\"/>
                <Input type=\"email\" placeholder=\"Email\" required className=\"rounded-2xl bg-white/5 border-white/10\"/>
              </div>
              <Input placeholder=\"Téléphone\" className=\"rounded-2xl bg-white/5 border-white/10\"/>
              <Input placeholder=\"Modèle / année (ex: Honda CRF 450 2018)\" className=\"rounded-2xl bg-white/5 border-white/10\"/>
              <Textarea placeholder=\"Décrivez le problème ou le service souhaité...\" className=\"rounded-2xl bg-white/5 border-white/10 min-h-32\"/>
              <Button type=\"submit\" disabled={sending} className=\"rounded-2xl\">
                <Send className=\"size-4 mr-2\"/>
                {sending ? \"Envoi...\" : \"Envoyer\"}
              </Button>
            </form>
          </div>

          <div className=\"grid gap-4\">
            <Card className=\"bg-white/5 border-white/10 rounded-3xl\">
              <CardHeader>
                <CardTitle className=\"text-lg\">Contact</CardTitle>
              </CardHeader>
              <CardContent className=\"text-sm text-zinc-300 space-y-3\">
                <p className=\"flex items-center gap-3\"><Phone className=\"size-4 text-amber-300\"/> 06 00 00 00 00</p>
                <p className=\"flex items-center gap-3\"><Mail className=\"size-4 text-amber-300\"/> contact@tonio-repair.fr</p>
                <p className=\"flex items-center gap-3\"><MapPin className=\"size-4 text-amber-300\"/> Paris et alentours</p>
                <div className=\"flex items-center gap-4 pt-2\">
                  <a href=\"#\" className=\"inline-flex items-center gap-2 text-zinc-300 hover:text-white\"><Instagram className=\"size-4\"/> Instagram</a>
                  <a href=\"#\" className=\"inline-flex items-center gap-2 text-zinc-300 hover:text-white\"><Facebook className=\"size-4\"/> Facebook</a>
                </div>
              </CardContent>
            </Card>

            <Card className=\"bg-white/5 border-white/10 rounded-3xl\">
              <CardHeader>
                <CardTitle className=\"text-lg\">Horaires</CardTitle>
              </CardHeader>
              <CardContent className=\"text-sm text-zinc-300 grid grid-cols-2 gap-2\">
                <p>Lun–Ven</p><p className=\"text-right\">09:00 – 18:30</p>
                <p>Samedi</p><p className=\"text-right\">09:00 – 13:00</p>
                <p>Dimanche</p><p className=\"text-right\">Fermé</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className=\"border-t border-white/10 py-10\">
        <div className=\"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-4 items-center justify-between text-sm text-zinc-400\">
          <p>© {new Date().getFullYear()} Tonio Repair — Tous droits réservés.</p>
          <div className=\"flex items-center gap-6\">
            <a href=\"#\" className=\"hover:text-zinc-200\">Mentions légales</a>
            <a href=\"#\" className=\"hover:text-zinc-200\">CGV</a>
            <a href=\"#\" className=\"hover:text-zinc-200\">Politique de confidentialité</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
