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
              <span className="text-sm text-blue-400 font-medium uppercase tracking-wide">✨ Trusted by 300+ Companies</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-50 mb-6 leading-tight">
              Stop Wasting 10+ Hours Per Week On Repetitive Work
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Get a custom AI system that eliminates manual tasks, qualifies leads automatically, and scales your business <span className="font-semibold text-slate-100">without hiring.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <RainbowButton onClick={handleBookingClick}>Book Your Discovery Call →</RainbowButton>
              <button className="px-8 py-4 border-2 border-blue-600 text-blue-400 hover:bg-blue-600/10 font-semibold rounded-lg transition-all">
                See How It Works ↓
              </button>
            </div>

            <div className="text-sm text-slate-400 mb-16">
              <span className="inline-flex items-center gap-2 mr-6">✓ 30-minute discovery call</span>
              <span className="inline-flex items-center gap-2 mr-6">✓ Custom ROI projection</span>
              <span className="inline-flex items-center gap-2">✓ No obligation</span>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center pt-8 border-t border-slate-700/50">
              <div className="text-center">
                <div className="text-yellow-400 text-lg mb-2">★★★★★</div>
                <p className="text-slate-300"><span className="font-semibold text-slate-100">4.9/5</span> average rating</p>
              </div>
              <div className="text-center">
                <p className="text-slate-300"><span className="font-semibold text-slate-100">300+</span> active customers</p>
              </div>
              <div className="text-center">
                <p className="text-slate-300"><span className="font-semibold text-slate-100">48hr</span> avg setup time</p>
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
              <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">What You'll Eliminate From Your Day</h2>
              <p className="text-xl text-slate-300">Real outcomes our customers see immediately</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: '📋',
                  title: 'Manual Data Entry',
                  description: 'Stop copying information between tools. Automate data capture and synchronization across your entire stack.',
                  benefits: ['Eliminates human error in data entry', '5-10 hours saved per week per person', 'Real-time data sync across all tools'],
                  glowColor: 'blue' as const,
                },
                {
                  icon: '📞',
                  title: 'Follow-Up Work',
                  description: 'Never miss a lead again. AI handles qualification, scheduling, and reminders 24/7—even while you sleep.',
                  benefits: ['3x faster response time to leads', '24/7 automated follow-up sequences', 'Smart lead prioritization'],
                  glowColor: 'purple' as const,
                },
                {
                  icon: '📊',
                  title: 'Report Generation',
                  description: 'Stop spending days on reports. Get real-time dashboards with insights that matter—updated automatically.',
                  benefits: ['4 minutes instead of 3 days per report', 'Automated daily/weekly insights', 'Early-warning alerts for problems'],
                  glowColor: 'green' as const,
                },
                {
                  icon: '💬',
                  title: 'Customer Support',
                  description: 'AI support agent answers 80% of questions. Your team focuses on complex cases that actually need a human.',
                  benefits: ['70-80% reduction in support tickets', 'Instant 24/7 responses', 'Intelligent escalation to your team'],
                  glowColor: 'orange' as const,
                },
                {
                  icon: '📅',
                  title: 'Scheduling & Admin',
                  description: 'Calendar management on autopilot. Smart scheduling takes meeting requests, avoids conflicts, sends reminders.',
                  benefits: ['Eliminate back-and-forth emails', 'Auto-qualified meeting requests only', 'Timezone-aware scheduling'],
                  glowColor: 'red' as const,
                },
                {
                  icon: '🔗',
                  title: 'Tool Integration',
                  description: 'Connect all your tools instantly. No manual workflows, no copy-pasting. Your entire tech stack works as one.',
                  benefits: ['Connects 500+ tools and platforms', 'Two-way sync, not one-time imports', 'Zero manual configuration needed'],
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
              <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">From Chaotic to Automated</h2>
              <p className="text-xl text-slate-300">Three simple steps to your first AI system</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  num: '01',
                  title: 'Free Discovery Call',
                  description: 'We map your workflow, identify your top bottleneck, and show you exactly what\'s possible. Zero obligation. You\'ll leave the call knowing your potential ROI.',
                  glowColor: 'blue' as const,
                },
                {
                  num: '02',
                  title: 'We Build & Deploy',
                  description: 'Our team designs your custom AI system, integrates it with your tools, and runs test scenarios. We handle all the technical complexity.',
                  glowColor: 'purple' as const,
                },
                {
                  num: '03',
                  title: 'You Launch & Watch',
                  description: 'We go live with monitoring, handle first month of tweaks, and provide ongoing support. Your system improves over time as it learns.',
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
              <p className="text-lg text-slate-300"><span className="font-semibold text-slate-100">Most clients see ROI within 30 days.</span> One client saved $12,000/month in labor costs alone.</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20 px-6 bg-black/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">What Real Customers Are Saying</h2>
              <p className="text-xl text-slate-300">Actual results from businesses like yours</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Jennifer Martinez',
                  title: 'Support Manager, SaaS Company',
                  quote: 'We cut support ticket volume by 70%. What used to take my team 20 hours per week is now handled automatically.',
                  platform: 'Verified on Trustpilot',
                  glowColor: 'blue' as const,
                },
                {
                  name: 'Robert Chen',
                  title: 'Sales Director, E-Commerce',
                  quote: 'Leads now respond 3x faster. We went from losing deals to follow-up delays to automatically nurturing every opportunity 24/7.',
                  platform: 'Verified on Capterra',
                  glowColor: 'purple' as const,
                },
                {
                  name: 'Sarah Kim',
                  title: 'Operations Lead, Real Estate',
                  quote: 'Monthly reporting now takes 4 minutes instead of 3 days. I freed up 12 hours per week for actual strategy work.',
                  platform: 'Verified on Google',
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
              <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">Common Objections (Answered)</h2>
            </div>

            <div className="space-y-4">
              {[
                { q: 'How much does it cost?', a: 'Most projects start between $1,500–$5,000 depending on complexity. We\'ll give you a clear number after the discovery call.' },
                { q: 'Do I need to change my current tools?', a: 'No. We integrate with 500+ existing platforms. We wire them together without you changing anything.' },
                { q: 'What if something breaks?', a: 'All builds include 90 days of support and monitoring. We proactively watch for issues, debug them, and iterate.' },
                { q: 'How long does setup take?', a: 'Discovery: 30 minutes. Scope & quote: 24-48 hours. Build & deployment: 1-3 weeks depending on complexity.' },
                { q: 'We\'re not technical. Can we do this?', a: 'Yes. You explain the problem in plain English. We handle 100% of the technical work.' },
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
              <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">Ready to Get 10+ Hours Back Every Week?</h2>
              <p className="text-lg text-slate-300 mb-8">Schedule a free 30-minute discovery call with our team. We'll map your biggest automation opportunity and show you the exact ROI.</p>
              <RainbowButton onClick={handleBookingClick}>Book Your Discovery Call →</RainbowButton>
              <p className="text-sm text-slate-400 mt-4">Usually responds within 2 hours. No credit card required.</p>
            </GlowCard>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-700/50 bg-black/50 backdrop-blur py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-slate-50 mb-2">Rivexis</h3>
                <p className="text-sm text-slate-400">Automate the work. Amplify your team.</p>
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
