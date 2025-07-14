import React from 'react';
import { BarChart2, Search, PieChart, ShoppingCart, Clock, Shield, CheckCircle } from 'lucide-react';

const AuditAccessUI = () => {
  return (
    <section className="min-h-screen bg-zinc-50 py-8 px-4 sm:py-12 sm:px-6 lg:px-20">
      <div className="mx-auto ">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 leading-tight">
            To Deliver a Real Audit,<br />
            <span className="text-zinc-600">We Need Real Data</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-zinc-700 max-w-3xl mx-auto leading-relaxed">
            We don't do surface-level reviews. To give you a meaningful audit with clear growth actions,
            we need <span className="font-semibold text-black">read-only</span> access to your ad accounts.
          </p>
        </div>

        {/* Access Requirements Section */}
        <div>
          <div className="flex items-center mb-6">
            <div className="w-1 h-8 bg-black rounded-full mr-3"></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-black">
              Here's What You'll Grant (And Why It Matters)
            </h2>
          </div>

          {/* Responsive Table */}
          <div className="overflow-hidden my-10 rounded-2xl shadow-xl bg-white border border-gray-100">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">Platform</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">Access Level</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">Why We Need It</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { icon: BarChart2, label: 'Meta Ads Manager', level: 'Analyst / Advertiser', desc: 'Review campaign structure, ROAS trends, audience overlap, creative fatigue' },
                  { icon: Search, label: 'Google Ads', level: 'Read-only', desc: 'Audit keyword targeting, match types, bid strategy, conversion paths' },
                  { icon: PieChart, label: 'Google Analytics', level: 'Viewer access', desc: 'Spot bounce/drop-offs, page-level friction, checkout abandonment' },
                  { icon: ShoppingCart, label: 'Shopify / D2C Analytics', level: 'Order report or guest login', desc: 'Match paid traffic to actual purchase behavior and repeat rates' }
                ].map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-4 py-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center mr-3">
                          <item.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-semibold text-black text-sm sm:text-base">{item.label}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs sm:text-sm font-medium bg-zinc-100 text-zinc-800">
                        {item.level}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-zinc-700 text-xs sm:text-sm">
                      {item.desc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="relative">
            <div className="relative  ">


              <div className="flex items-center mb-6">
                <div className="w-1 h-8 bg-black rounded-full mr-3"></div>
                <h2 className="text-2xl sm:text-3xl font-bold text-black">
                  How It Works
                </h2>
              </div>

              {/* Steps Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {[
                  ` After payment of ₹999, you'll receive an onboarding email with a short setup guide.`,
                  'Grant view-only access; no editing rights are required.',
                  'Auditing begins within 1–2 hours of access approval.',
                  'You receive the full custom audit within 24 hours.'
                ].map((step, idx) => (
                  <div key={idx} className="group relative">
                    {/* Connection line for desktop */}
                    {idx < 3 && (
                      <div className="hidden lg:block absolute top-8 left-full w-8 h-0.5 bg-gray-200 transform translate-x-4"></div>
                    )}

                    <div className="flex items-start space-x-6  rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                      <div className="relative">
                        <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center shrink-0 shadow-md group-hover:shadow-lg transition-shadow duration-300">
                          <span className="text-white font-black text-lg">{idx + 1}</span>
                        </div>
                        <div className="absolute -inset-1 bg-black rounded-xl opacity-20 blur-sm"></div>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium">{step}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>



          <div className="relative  mt-10">

            <div className="flex items-center mb-6">
              <div className="w-1 h-8 bg-black rounded-full mr-3"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-black">
                Data Privacy & Confidentiality
              </h2>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {[
                'Access is used strictly for your audit.',
                'An NDA is available on request.',
                'You can revoke access after delivery.'
              ].map((text, idx) => (
                <div key={idx} className="group relative">
                  <div className="p-6 rounded-2xl bg-gray-900 hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl border border-gray-700">
                    <div className="flex items-start space-x-4">

                      <CheckCircle className="w-8 h-8 text-white mt-1 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <p className="text-gray-200 text-base sm:text-lg leading-relaxed font-medium">{text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditAccessUI;
