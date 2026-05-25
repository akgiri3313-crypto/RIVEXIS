'use client';

import { GlowCard } from './spotlight-card';

export function GlowCardDemo() {
  const colors: Array<'blue' | 'purple' | 'green' | 'red' | 'orange'> = ['blue', 'purple', 'green', 'red', 'orange'];
  const sizes: Array<'sm' | 'md' | 'lg'> = ['sm', 'md', 'lg'];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#0A0E27] via-black to-[#0A1B3F] p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-slate-50 mb-4">GlowCard Component Showcase</h1>
        <p className="text-lg text-slate-300 mb-12">Beautiful cards with mouse-tracking spotlight glow effect</p>

        {/* By Color */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-50 mb-6">Glow Colors</h2>
          <div className="flex flex-wrap gap-8 justify-center">
            {colors.map(color => (
              <GlowCard key={color} glowColor={color} size="md">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-50 mb-3 capitalize">{color} Glow</h3>
                    <p className="text-slate-300">Beautiful spotlight effect that follows your cursor</p>
                  </div>
                  <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all">
                    Learn More
                  </button>
                </div>
              </GlowCard>
            ))}
          </div>
        </section>

        {/* By Size */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-50 mb-6">Card Sizes</h2>
          <div className="flex flex-wrap gap-8 justify-center items-center">
            {sizes.map(size => (
              <GlowCard key={size} glowColor="purple" size={size}>
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-50 mb-3 capitalize">{size} Size</h3>
                    <p className="text-slate-300 text-sm">Responsive and flexible sizing</p>
                  </div>
                  <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all w-full">
                    Action
                  </button>
                </div>
              </GlowCard>
            ))}
          </div>
        </section>

        {/* Custom Size */}
        <section>
          <h2 className="text-3xl font-bold text-slate-50 mb-6">Custom Sizing</h2>
          <div className="flex flex-wrap gap-8 justify-center">
            <GlowCard
              glowColor="green"
              customSize={true}
              width={300}
              height={200}
            >
              <div>
                <h3 className="text-xl font-bold text-slate-50 mb-2">Custom 300x200</h3>
                <p className="text-slate-300 text-sm">Set exact width and height values</p>
              </div>
            </GlowCard>

            <GlowCard
              glowColor="orange"
              customSize={true}
              width="100%"
              height={250}
            >
              <div>
                <h3 className="text-xl font-bold text-slate-50 mb-2">Full Width Custom</h3>
                <p className="text-slate-300 text-sm">Use percentage or pixel values for sizing</p>
              </div>
            </GlowCard>
          </div>
        </section>
      </div>
    </div>
  );
}
