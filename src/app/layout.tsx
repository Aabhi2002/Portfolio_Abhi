import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { StructuredData } from "@/components/StructuredData";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Abhishek Rajput - Full Stack Developer & Generative AI Engineer | RAG Systems & Intelligent Applications",
    template: "%s | Abhishek Rajput"
  },
  description: "Full Stack Developer and Generative AI Engineer based in Bangalore. Building scalable AI-powered applications, RAG systems with LangChain, automation workflows, and intelligent backend architectures. Specializing in AI-driven healthcare systems, lead automation, and conversational AI.",
  keywords: [
    "Abhishek Rajput",
    "Generative AI Engineer",
    "Full Stack Developer",
    "RAG Systems",
    "LangChain Developer",
    "LLM Integration",
    "Vector Databases",
    "FastAPI",
    "AI Application Developer",
    "Spring Boot",
    "Java Developer",
    "React Developer",
    "Microservices",
    "AI Automation",
    "Healthcare AI",
    "Bangalore Developer",
    "AI Voice Agent",
    "Lead Automation"
  ],
  authors: [{ name: "Abhishek Rajput", url: "https://github.com/Aabhi2002" }],
  creator: "Abhishek Rajput",
  publisher: "Abhishek Rajput",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://abhishek-rajput.me",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhishek-rajput.me",
    title: "Abhishek Rajput - Full Stack Developer & Generative AI Engineer | RAG Systems & Intelligent Applications",
    description: "Full Stack Developer and Generative AI Engineer building RAG systems, AI-powered automation, and intelligent applications. Specializing in healthcare AI and lead automation systems.",
    siteName: "Abhishek Rajput Portfolio",
    images: [
      {
        url: "https://abhishek-rajput.me/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abhishek Rajput - Full Stack Developer & Generative AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Rajput - Full Stack Developer & Generative AI Engineer | RAG Systems & Intelligent Applications",
    description: "Full Stack Developer and Generative AI Engineer building RAG systems, AI-powered automation, and intelligent applications with LangChain and FastAPI.",
    images: ["https://abhishek-rajput.me/og-image.png"],
    creator: "@abhishekrajput",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here after deployment
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="Qzn0I0oP3C5_8t4BW0v5sNogzdlqXvAr03GRdrxMZlQ" />
        <GoogleAnalytics />
        <StructuredData />
        <meta property="og:logo" content="https://abhishek-rajput.me/og-image.png" />
        {/* EmailJS CDN */}
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
