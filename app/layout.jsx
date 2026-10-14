import './globals.css';

export const metadata = {
  title: 'Ashish Kumar Debnath — Cinematic Creative Developer & WordPress Architect',
  description: 'Award-winning portfolio of Ashish Kumar Debnath: Senior WordPress Engineer, Elementor Pro & JetEngine Architect, and Creative Frontend Developer with 80+ delivered projects worldwide.',
  keywords: [
    'Ashish Kumar Debnath',
    'WordPress Developer',
    'Elementor Expert',
    'JetEngine Architect',
    'WooCommerce',
    'Next.js Developer',
    'React',
    'Creative Developer',
    'Dhaka Bangladesh'
  ],
  authors: [{ name: 'Ashish Kumar Debnath', url: 'https://ashishweb.com' }],
  creator: 'Ashish Kumar Debnath',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ashishweb.com/',
    title: 'Ashish Kumar Debnath — Cinematic Creative Developer & WordPress Architect',
    description: 'Senior WordPress Engineer, Elementor Pro & JetEngine Architect with 80+ live project deliveries across 15+ countries.',
    siteName: 'Ashish Kumar Debnath Portfolio',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Ashish Kumar Debnath Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ashish Kumar Debnath — Cinematic Creative Developer',
    description: 'Senior WordPress Engineer, Elementor Pro & JetEngine Architect with 80+ live project deliveries.',
    images: ['https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop'],
  },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%2308080a'/%3E%3Cpath d='M8 24L16 7L24 24H19.5L16 16.5L12.5 24H8Z' fill='%23ccff00'/%3E%3Ccircle cx='23' cy='9' r='2.5' fill='%23ccff00'/%3E%3C/svg%3E",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Outfit:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&family=Syne:wght@400;500;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#070709] text-[#f8fafc] antialiased selection:bg-[#ccff00] selection:text-[#070709] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
