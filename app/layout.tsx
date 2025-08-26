import "./globals.css";

export const metadata = {
  title: "Tonio Repair",
  description: "Réparation & préparation moto — Paris et alentours",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
