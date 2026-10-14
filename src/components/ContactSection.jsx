'use client';

import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { siteConfig } from '../data/siteConfig.js';
import { soundManager } from '../services/soundEngine.js';
import { smoothScrollTo } from '../services/scrollEngine.js';
import { Copy, Check, Send, ArrowUpRight, Sparkles, Clock, ArrowUp, MessageSquare } from 'lucide-react';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [dhakaTime, setDhakaTime] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'WordPress & Elementor Pro',
    budget: '$1,500 - $3,000',
    message: ''
  });

  // Live Dhaka time (GMT+6)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Dhaka',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setDhakaTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyEmailToClipboard = () => {
    soundManager.playSuccess();
    navigator.clipboard.writeText(siteConfig.emails.primary);
    setCopied(true);

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#ccff00', '#ffffff', '#38bdf8']
      });
    } catch {}

    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    soundManager.playSuccess();

    // Construct detailed WhatsApp message payload for Ashish (01316692616)
    const phone = "8801316692616";
    const textMessage = `*NEW PROJECT INQUIRY FOR ASHISH KUMAR DEBNATH*
---------------------------------------
👤 *Client Name:* ${formData.name}
📧 *Email:* ${formData.email}
🚀 *Architecture:* ${formData.projectType}
💰 *Estimated Budget:* ${formData.budget}
📝 *Project Deliverables / Message:*
${formData.message}
---------------------------------------
_Sent from ashishweb.com Interactive Portfolio_`;

    const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(textMessage)}`;
    setLastWhatsAppUrl(waUrl);
    setFormSubmitted(true);

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ccff00', '#ffffff', '#25D366']
      });
    } catch {}

    // Open WhatsApp in new tab automatically
    try {
      window.open(waUrl, '_blank');
    } catch {}
  };

  const scrollToTop = () => {
    soundManager.playClick();
    smoothScrollTo(0);
  };

  return (
    <section id="contact" className="relative pt-28 pb-12 px-4 sm:px-8 md:px-12 bg-[#070709] border-t border-white/5">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ccff00]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1344px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#ccff00] uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE FINALE // LET'S COLLABORATE</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-8xl font-black tracking-tight text-white uppercase leading-[0.95]">
              LET’S BUILD <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] via-[#ffffff] to-[#94a3b8]">
                SOMETHING EXTRAORDINARY.
              </span>
            </h2>
          </div>

          <div className="font-mono text-xs text-[#94a3b8] max-w-xs text-left md:text-right">
            CURRENTLY ACCEPTING SELECT HIGH-IMPACT REDESIGNS AND BESPOKE CLIENT BUILDS.
          </div>
        </div>

        {/* Contact Split Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          
          {/* Left Column: Direct Inquiries, WhatsApp & Email */}
          <div className="lg:col-span-5 space-y-8">
            <p className="text-lg text-[#cbd5e1] leading-relaxed font-normal">
              Whether you need an enterprise-grade WordPress setup with JetEngine dynamic structures, a complete pixel-perfect Elementor redesign, or a headless React/Next.js interface—I am ready to deliver.
            </p>

            {/* Direct WhatsApp Instant Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#0e0f14] border border-[#25D366]/30 hover:border-[#25D366] transition-all duration-300 shadow-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-[#25D366] uppercase tracking-wider font-semibold flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  INSTANT WHATSAPP DIRECT
                </span>
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              </div>

              <div className="font-display text-xl sm:text-2xl font-bold text-white mb-1">
                +880 1316-692616
              </div>
              <p className="font-mono text-xs text-[#94a3b8] mb-4">
                Dhaka, Bangladesh • Quickest Response Time
              </p>

              <a
                href={siteConfig.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playClick()}
                onMouseEnter={() => soundManager.playHover()}
                data-cursor="hover"
                data-cursor-text="CHAT"
                className="w-full py-3 rounded-full bg-[#25D366] hover:bg-[#1fa851] text-white font-mono text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 cursor-pointer"
              >
                <span>Chat on WhatsApp Directly</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* High-Impact Copy Email Box */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#0e0f14] border border-white/10 hover:border-[#ccff00]/50 transition-all duration-300">
              <span className="font-mono text-xs text-[#94a3b8] uppercase tracking-wider block mb-2">
                PRIMARY EMAIL CHANNEL
              </span>

              <a
                href={`mailto:${siteConfig.emails.primary}`}
                onClick={() => soundManager.playClick()}
                className="font-display text-lg sm:text-xl font-bold text-white hover:text-[#ccff00] transition-colors break-all block mb-4"
              >
                {siteConfig.emails.primary}
              </a>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={copyEmailToClipboard}
                  onMouseEnter={() => soundManager.playHover()}
                  data-cursor="copy"
                  data-cursor-text={copied ? 'DONE' : 'COPY'}
                  className="px-5 py-2.5 rounded-full bg-[#ccff00] hover:bg-white text-[#070709] font-mono text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer shadow-md shadow-[#ccff00]/15"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#070709]" />
                      <span>Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#070709]" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${siteConfig.emails.primary}?subject=New%20Project%20Inquiry%20via%20Portfolio`}
                  onClick={() => soundManager.playClick()}
                  onMouseEnter={() => soundManager.playHover()}
                  className="px-5 py-2.5 rounded-full border border-white/15 hover:border-white/40 text-white font-mono text-xs tracking-wider uppercase transition-all flex items-center gap-2 bg-white/5"
                >
                  <span>Open Mail App</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Professional Presence Links */}
            <div className="space-y-3 font-mono text-xs">
              <span className="text-[#94a3b8] uppercase tracking-wider block">
                VERIFIED PLATFORMS & PORTFOLIOS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {siteConfig.socials.map((soc) => (
                  <a
                    key={soc.name}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundManager.playClick()}
                    onMouseEnter={() => soundManager.playHover()}
                    className="p-3.5 rounded-xl bg-[#0e0f14] border border-white/5 hover:border-[#ccff00]/40 flex items-center justify-between text-white hover:text-[#ccff00] transition-all"
                  >
                    <span>{soc.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#ccff00]" />
                  </a>
                ))}
              </div>
            </div>

            {/* Live Studio Status */}
            <div className="p-4 rounded-xl bg-[#0e0f14] border border-white/5 font-mono text-xs text-[#94a3b8] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#ccff00]" />
                <span>DHAKA TIME:</span>
                <span className="text-white font-semibold">{dhakaTime || 'CALIBRATING...'}</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#ccff00]">
                <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse" />
                <span>ONLINE // READY</span>
              </div>
            </div>

          </div>

          {/* Right Column: WhatsApp Connected Inquiry Intake */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0e0f14] border border-white/10 relative overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <span className="font-mono text-xs text-[#ccff00] uppercase tracking-widest font-semibold flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  WHATSAPP CONNECTED BRIEF INTAKE
                </span>
                <span className="font-mono text-[11px] text-[#94a3b8]">
                  SENT TO 01316692616
                </span>
              </div>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-5 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-[#25D366]/10 border border-[#25D366] text-[#25D366] flex items-center justify-center mx-auto shadow-lg shadow-[#25D366]/20">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                    Transmitted to WhatsApp!
                  </h3>
                  <p className="text-sm text-[#cbd5e1] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your project details have been prepared for Ashish Kumar Debnath at <span className="text-[#25D366] font-mono font-bold">+880 1316-692616</span>.
                  </p>
                  
                  {lastWhatsAppUrl && (
                    <div className="pt-2">
                      <a
                        href={lastWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#1fa851] text-white font-mono text-xs font-bold tracking-wider uppercase transition-all shadow-lg"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Continue to WhatsApp App</span>
                      </a>
                    </div>
                  )}

                  <div className="pt-4">
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-5 py-2 rounded-full border border-white/20 text-xs font-mono text-[#94a3b8] hover:text-white hover:border-[#ccff00] transition-colors"
                    >
                      Fill Out Another Brief
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs text-[#94a3b8] uppercase mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#070709] border border-white/10 focus:border-[#ccff00] text-white text-sm focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-[#94a3b8] uppercase mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#070709] border border-white/10 focus:border-[#ccff00] text-white text-sm focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs text-[#94a3b8] uppercase mb-2">
                        Scope / Architecture
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#070709] border border-white/10 focus:border-[#ccff00] text-white text-sm focus:outline-none transition-colors"
                      >
                        <option value="WordPress & Elementor Pro">WordPress & Elementor Pro Redesign</option>
                        <option value="JetEngine Dynamic CPTs">JetEngine Dynamic Architecture</option>
                        <option value="WooCommerce Custom Checkout">WooCommerce Storefront & Flow</option>
                        <option value="Headless WordPress & Next.js">Headless Next.js & React Frontend</option>
                        <option value="Performance & Core Web Vitals">Speed & Core Web Vitals Overhaul</option>
                        <option value="Shopify / Webflow Build">Shopify / Webflow Customization</option>
                        <option value="Other Custom Web Initiative">Other Custom Web Initiative</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-[#94a3b8] uppercase mb-2">
                        Estimated Budget (USD)
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#070709] border border-white/10 focus:border-[#ccff00] text-white text-sm focus:outline-none transition-colors"
                      >
                        <option value="$1,000 - $2,500">$1,000 — $2,500</option>
                        <option value="$2,500 - $5,000">$2,500 — $5,000</option>
                        <option value="$5,000 - $10,000">$5,000 — $10,000</option>
                        <option value="$10,000+">$10,000+ (Enterprise)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-[#94a3b8] uppercase mb-2">
                      Project Objective / Key Deliverables *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your site vision, current pain points, timeline, and link to existing site or Figma design..."
                      className="w-full px-4 py-3.5 rounded-xl bg-[#070709] border border-white/10 focus:border-[#ccff00] text-white text-sm focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    onMouseEnter={() => soundManager.playHover()}
                    data-cursor="hover"
                    data-cursor-text="WHATSAPP"
                    className="w-full py-4 rounded-full bg-[#25D366] hover:bg-[#1fa851] text-white font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-xl shadow-[#25D366]/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Submit & Send To WhatsApp (01316692616)</span>
                    <Send className="w-4 h-4 text-white" />
                  </button>
                  
                  <p className="text-[11px] font-mono text-center text-[#94a3b8]">
                    Submitting opens WhatsApp with your pre-formatted project details directly to Ashish's phone.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Global Architectural Footer */}
        <footer className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs text-[#94a3b8]">
          <div className="flex items-center gap-3">
            <span className="font-display font-extrabold text-white text-base">AD</span>
            <span>© {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden sm:inline">COORDINATES: {siteConfig.coordinates}</span>
            <span className="text-[#25D366]">WA: +880 1316-692616</span>
            <button
              onClick={scrollToTop}
              onMouseEnter={() => soundManager.playHover()}
              data-cursor="hover"
              data-cursor-text="TOP"
              className="flex items-center gap-1.5 text-white hover:text-[#ccff00] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#ccff00]" />
            </button>
          </div>
        </footer>

      </div>
    </section>
  );
}
