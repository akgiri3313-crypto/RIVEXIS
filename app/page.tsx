'use client';

import React, { useState } from 'react';
import AnimatedBackground from '@/components/ui/animated-background';
import { GlowCard } from '@/components/ui/spotlight-card';
import { RainbowButton } from '@/components/ui/rainbow-borders-button';

const BOOKING_URL = 'https://calendly.com/akgiri3313/new-meeting';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleBookingClick = () => {
    window.open(BOOKING_URL, '_blank');
  };

  return (
    <div>
      {/* Background with Animations */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0E27] via-black to-[#0A1B3F]"></div>
      </div>

      {/* Animated Background Component */}
      <AnimatedBackground />

      {/* Content */}
      <div className="relative z-20">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/50 bg-gradient-to-b from-[#0A0E27]/80 to-transparent backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="#home" className="text-xl font-bold text-slate-50 flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 10L15 2M15 2L15 12M15 2L7 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              RIVEXIS
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-slate-300 hover:text-blue-400 transition-colors">Features</a>
              <a href="#how-it-works" className="text-sm text-slate-300 hover:text-blue-400 transition-colors">How It Works</a>
              <a href="#testimonials" className="text-sm text-slate-300 hover:text-blue-400 transition-colors">Testimonials</a>
              <a href="#faq" className="text-sm text-slate-300 hover:text-blue-400 transition-colors">FAQ</a>
              <RainbowButton onClick={handleBookingClick}>Book a Call</RainbowButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-slate-300 hover:text-slate-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-[#0F1535]/95 backdrop-blur-md border-t border-slate-800/50">
              <div className="px-6 py-4 space-y-4">
                <a href="#features" className="block text-sm text-slate-300 hover:text-blue-400">Features</a>
                <a href="#how-it-works" className="block text-sm text-slate-300 hover:text-blue-400">How It Works</a>
                <a href="#testimonials" className="block text-sm text-slate-300 hover:text-blue-400">Testimonials</a>
                <a href="#faq" className="block text-sm text-slate-300 hover:text-blue-400">FAQ</a>
                <button onClick={handleBookingClick} className="w-full px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all">
                  Book a Call
                </button>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-8 px-4 py-2 rounded-full bg-blue-500/15 border border-blue-500/40">
              <span className="text-sm text-blue-400 font-medium uppercase tracking-wide">🏭 Supply Chain Automation Specialists</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-50 mb-6 leading-tight">
              Recover 200+ Hours Monthly in Procurement, Inventory & Logistics
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              AI automation for supply chain teams. Cut costs by 15%, eliminate manual processing, and scale without hiring. <span className="font-semibold text-slate-100">Implemented in 2-4 weeks.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <RainbowButton onClick={handleBookingClick}>Book Your Discovery Call →</RainbowButton>
              <button className="px-8 py-4 border-2 border-blue-600 text-blue-400 hover:bg-blue-600/10 font-semibold rounded-lg transition-all">
                See How It Works ↓
              </button>
            </div>

            <div className="text-sm text-slate-400 mb-16">
              <span className="inline-flex items-center gap-2 mr-6">✓ Supply chain expertise</span>
              <span className="inline-flex items-center gap-2 mr-6">✓ 2-4 week implementation</span>
              <span className="inline-flex items-center gap-2">✓ 30-day money-back guarantee</span>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center pt-8 border-t border-slate-700/50">
              <div className="text-center">
                <div className="text-yellow-400 text-lg mb-2">★★★★★</div>
                <p className="text-slate-300"><span className="font-semibold text-slate-100">98%</span> customer satisfaction</p>
              </div>
              <div className="text-center">
                <p className="text-slate-300"><span className="font-semibold text-slate-100">200+ hours</span> recovered monthly (avg)</p>
              </div>
              <div className="text-center">
                <p className="text-slate-300"><span className="font-semibold text-slate-100">15-18%</span> cost reduction</p>
              </div>
              <div className="text-center">
                <p className="text-slate-300 font-medium">Rivexis</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-6 bg-black/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">What Supply Chain Teams Automate</h2>
              <p className="text-xl text-slate-300">Real outcomes our supply chain customers achieve</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: '📋',
                  title: 'Procurement Automation',
                  description: 'Eliminate manual PO creation, approval routing, and invoice matching. Automate the entire procurement cycle.',
                  benefits: ['160-200 hours recovered monthly', '12% cost reduction in procurement', 'Perfect invoice matching (99.9% accuracy)'],
                  glowColor: 'blue' as const,
                },
                {
                  icon: '📦',
                  title: 'Inventory Optimization',
                  description: 'AI-powered demand forecasting and automated reordering. Keep optimal stock levels without manual counts.',
                  benefits: ['18% inventory cost reduction', '25% fewer stockouts', 'Automated reorder points & quantities'],
                  glowColor: 'purple' as const,
                },
                {
                  icon: '🤝',
                  title: 'Supplier Management',
                  description: 'Automate supplier communication, performance tracking, and contract management. Stay organized at scale.',
                  benefits: ['160 hours/month on supplier coordination', '15% on-time delivery improvement', 'Centralized supplier data'],
                  glowColor: 'green' as const,
                },
                {
                  icon: '🚚',
                  title: 'Logistics Coordination',
                  description: 'Intelligent order routing, carrier selection, and shipment tracking. Reduce delivery times and costs.',
                  benefits: ['12% reduction in shipping costs', '24/7 shipment tracking', 'Automated carrier selection'],
                  glowColor: 'orange' as const,
                },
                {
                  icon: '📊',
                  title: 'Supply Chain Visibility',
                  description: 'Real-time dashboards tracking inventory, orders, and supplier performance. Get alerts before problems happen.',
                  benefits: ['Real-time supply chain KPIs', 'Early-warning alerts for delays', 'Automated performance reports'],
                  glowColor: 'red' as const,
                },
                {
                  icon: '🔗',
                  title: 'System Integration',
                  description: 'Connect SAP, NetSuite, QuickBooks, Shopify and 500+ tools. Eliminate manual data entry across systems.',
                  benefits: ['Two-way data sync (real-time)', 'Zero copy-pasting between systems', 'Unified supply chain view'],
                  glowColor: 'blue' as const,
                },
              ].map((feature, i) => (
                <GlowCard key={i} glowColor={feature.glowColor} customSize={true} className="w-full h-full flex flex-col">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-50 mb-3">{feature.title}</h3>
                  <p className="text-slate-300 text-sm mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, j) => (
                      <li key={j} className="text-sm text-slate-400">• {benefit}</li>
                    ))}
                  </ul>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">Your Path to Supply Chain Automation</h2>
              <p className="text-xl text-slate-300">Four steps from assessment to optimization (2-4 weeks)</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  num: '01',
                  title: 'Supply Chain Audit',
                  description: 'Free assessment of your procurement, inventory, and logistics workflows. We identify your top 3-5 automation opportunities and project ROI. No obligation.',
                  glowColor: 'blue' as const,
                },
                {
                  num: '02',
                  title: 'Design & Proposal',
                  description: 'We create a custom automation architecture tailored to your supply chain. Clear timeline, clear costs, clear ROI projections. You approve before we build.',
                  glowColor: 'purple' as const,
                },
                {
                  num: '03',
                  title: 'Build & Deploy',
                  description: 'Our supply chain specialists build, test, and integrate your automations with SAP, NetSuite, or your existing systems. Go live in 2-4 weeks.',
                  glowColor: 'green' as const,
                },
              ].map((step, i) => (
                <GlowCard key={i} glowColor={step.glowColor} customSize={true} className="w-full h-full flex flex-col">
                  <div className="text-6xl font-light text-blue-500/20 mb-4">{step.num}</div>
                  <h3 className="text-2xl font-semibold text-slate-50 mb-4">{step.title}</h3>
                  <p className="text-slate-300">{step.description}</p>
                </GlowCard>
              ))}
            </div>

            <div className="text-center mt-12 p-8 rounded-lg bg-blue-500/10 border border-blue-500/20">
              <p className="text-lg text-slate-300"><span className="font-semibold text-slate-100">Most clients recover their investment within 6-8 weeks.</span> Average savings: 200+ hours monthly + 15% cost reduction.</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20 px-6 bg-black/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">What Supply Chain Leaders Say</h2>
              <p className="text-xl text-slate-300">Real results from companies automating procurement, inventory, and logistics</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Marcus Johnson',
                  title: 'Procurement Director, Distributor',
                  quote: 'Recovered 160 hours monthly in PO processing. Cut our procurement costs by 12%. Implementation took 2 weeks. Best decision we made this year.',
                  platform: 'Verified Customer',
                  glowColor: 'blue' as const,
                },
                {
                  name: 'Elena Rodriguez',
                  title: 'Operations Manager, Logistics',
                  quote: 'Inventory carrying costs dropped 18%. We finally have visibility into stock levels across all locations. No more stockouts.',
                  platform: 'Verified Customer',
                  glowColor: 'purple' as const,
                },
                {
                  name: 'David Park',
                  title: 'Supply Chain Manager, Manufacturing',
                  quote: 'Supplier management is now automated. We improved on-time delivery by 15% and reduced manual coordination work by 130 hours/month.',
                  platform: 'Verified Customer',
                  glowColor: 'green' as const,
                },
              ].map((testimonial, i) => (
                <GlowCard key={i} glowColor={testimonial.glowColor} customSize={true} className="w-full h-full flex flex-col">
                  <div className="text-yellow-400 mb-3">★★★★★</div>
                  <p className="text-slate-300 italic mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center font-semibold text-blue-400">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-100 text-sm">{testimonial.name}</p>
                      <p className="text-slate-400 text-xs">{testimonial.title}</p>
                      <p className="text-slate-500 text-xs">{testimonial.platform}</p>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">Supply Chain Automation FAQ</h2>
              <p className="text-lg text-slate-300">Everything you need to know about automation</p>
            </div>

            <div className="space-y-4">
              {[
                { q: 'How much does supply chain automation cost?', a: 'Clear pricing: Quick Win ($15K / 2 weeks), Growth ($35K / 3-4 weeks), Enterprise (custom). We\'ll give you an exact number and ROI projection after your free audit.' },
                { q: 'Will this work with SAP/NetSuite/our ERP?', a: 'Yes. We integrate with SAP, NetSuite, Kinaxis, QuickBooks, Shopify, and 500+ tools. We handle all technical integration.' },
                { q: 'How long does implementation really take?', a: 'Quick Win automation: 2 weeks. Full transformations: 3-4 weeks. This includes design, build, testing, and deployment.' },
                { q: 'What if we\'re not technical?', a: 'Perfect. You explain your procurement, inventory, or logistics challenges in plain English. We handle 100% of the technical work and provide training.' },
                { q: 'Is there a guarantee?', a: 'Yes. 30-day money-back guarantee. If automation isn\'t live or ROI isn\'t on track, we refund you. No questions asked.' },
                { q: 'Will this disrupt our team?', a: 'No. We work around your existing processes and systems. Your team gets trained and supports the automation smoothly.' },
                { q: 'What kind of results should we expect?', a: 'Typical results: 200+ hours recovered monthly, 12-18% cost reduction, faster processing times, better visibility. We project your specific ROI during the free audit.' },
              ].map((faq, i) => (
                <details key={i} className="group p-6 rounded-lg border border-slate-700/50 bg-slate-900/20 cursor-pointer">
                  <summary className="font-semibold text-slate-50 flex items-center justify-between">
                    {faq.q}
                    <span className="transition-transform group-open:rotate-180">▼</span>
                  </summary>
                  <p className="mt-4 text-slate-300">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-6">
          <div className="max-w-2xl mx-auto">
            <GlowCard glowColor="blue" customSize={true} className="w-full text-center p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">Ready to Recover 200+ Hours Monthly?</h2>
              <p className="text-lg text-slate-300 mb-8">Start with a free supply chain audit. We'll identify your top 3-5 automation opportunities and project your exact ROI. 30 minutes. Zero obligation.</p>
              <RainbowButton onClick={handleBookingClick}>Book Your Free Audit →</RainbowButton>
              <p className="text-sm text-slate-400 mt-4">Usually responds within 2 hours. No credit card required. 30-day money-back guarantee.</p>
            </GlowCard>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-700/50 bg-black/50 backdrop-blur py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-slate-50 mb-2">Rivexis</h3>
                <p className="text-sm text-slate-400">Supply chain automation specialists. Recover time. Cut costs. Scale operations.</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-50 mb-4">Product</h4>
                <ul className="space-y-2 text-sm text-slate-400 hover:text-slate-300">
                  <li><a href="#features">Features</a></li>
                  <li><a href="#how-it-works">How It Works</a></li>
                  <li><a href="#testimonials">Testimonials</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-50 mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li><a href="#">About</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-50 mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms of Service</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
              <div>© 2025 Rivexis. All rights reserved.</div>
              <div><a href="#">Privacy</a></div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
