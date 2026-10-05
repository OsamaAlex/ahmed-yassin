import { Cairo, Inter } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "أحمد عبد المنعم ياسين | Ahmed Abdel-Moneam Yassin — Executive Portfolio",
  description: "خبير إدارة الأزمات والسياسات العامة والتحول الرقمي | قيادي تنفيذي لحوكمة العمليات والمشروعات القومية | Crisis Management, Public Policy & Digital Transformation Expert",
  keywords: [
    "Ahmed Yassin",
    "Ahmed Abdel-Moneam Yassin",
    "أحمد عبد المنعم ياسين",
    "محافظة الإسكندرية",
    "إدارة الأزمات",
    "السياسات العامة",
    "التحول الرقمي",
    "Alexandria Governorate",
    "Crisis Management",
    "Public Policy",
    "Digital Transformation",
    "Executive Portfolio",
    "National Emergency Network",
    "MBA",
    "LL.M"
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="antialiased selection:bg-brand-gold selection:text-white transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
