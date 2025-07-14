import React from 'react';
import { Check, X, Clock, Zap, Star, Users, Shield, Target, UserCheck } from 'lucide-react';

export default function AuditComparisonTable() {
  const features = [
    {
      feature: "Delivery Time",
      free: "7–10 Days",
      paid: "Within 24 Hours",
      freeIcon: <Clock className="w-4 h-4 text-gray-500" />,
      paidIcon: <Zap className="w-4 h-4 text-black" />
    },
    {
      feature: "Ad Audit",
      free: "Partial",
      paid: "Full Meta + Google Audit",
      freeIcon: <div className="w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center"><div className="w-2 h-2 bg-gray-500 rounded-full"></div></div>,
      paidIcon: <Check className="w-4 h-4 text-black" />
    },
    {
      feature: "Creative Feedback",
      free: "General",
      paid: "Specific hooks + fatigue check",
      freeIcon: <div className="w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center"><div className="w-2 h-2 bg-gray-500 rounded-full"></div></div>,
      paidIcon: <Star className="w-4 h-4 text-black" />
    },
    {
      feature: "CRO Suggestions",
      free: "Not included",
      paid: "Included",
      freeIcon: <X className="w-4 h-4 text-gray-400" />,
      paidIcon: <Check className="w-4 h-4 text-black" />
    },
    {
      feature: "Funnel Calendar",
      free: "Not included",
      paid: "Included",
      freeIcon: <X className="w-4 h-4 text-gray-400" />,
      paidIcon: <Check className="w-4 h-4 text-black" />
    },
    {
      feature: "Competitor Ad Teardown",
      free: "Not included",
      paid: "Included",
      freeIcon: <X className="w-4 h-4 text-gray-400" />,
      paidIcon: <Check className="w-4 h-4 text-black" />
    },
    {
      feature: "WhatsApp & Email Flow Fixes",
      free: "Not included",
      paid: "Included",
      freeIcon: <X className="w-4 h-4 text-gray-400" />,
      paidIcon: <Check className="w-4 h-4 text-black" />
    },
    {
      feature: "Founder-Led Review",
      free: "Not guaranteed",
      paid: "Guaranteed",
      freeIcon: <Users className="w-4 h-4 text-gray-400" />,
      paidIcon: <Check className="w-4 h-4 text-black" />
    }
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-20 mx-auto py-8 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-black mb-2">
          Choose Your Audit Experience
        </h2>
        <p className="text-gray-600 text-lg">Compare our free waitlist audit vs fast-track premium service</p>
      </div>

      <div className="overflow-auto md:overflow-hidden rounded-2xl shadow-xl bg-white border border-gray-100">
        <div className="">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 border-b border-gray-200">
                  Feature
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 border-b border-gray-200 bg-gray-100">
                  <div className="flex items-center justify-center gap-2">
                    <Users className="w-4 h-4 text-gray-600" />
                    <span className="text-gray-800">Free Audit (Waitlist)</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1 font-normal">Join the queue</div>
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 border-b border-gray-200 bg-white relative">
                  <div className="flex items-center justify-center gap-2">
                    <Zap className="w-4 h-4 text-black" />
                    <span className="text-black">Fast-Track Audit</span>
                  </div>
                  <div className="text-xs text-gray-600 mt-1 font-normal">₹999 only</div>
                  <div className="absolute top-0 right-0 bg-black text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg">
                    POPULAR
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {features.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 py-4 text-center text-sm font-medium text-gray-900 border-r border-gray-100">
                    {item.feature}
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-700 bg-gray-50/30">
                    <div className="flex items-center justify-center gap-2">
                      {item.freeIcon}
                      <span className={item.free === "Not included" || item.free === "Not guaranteed" ? "text-gray-500" : "text-gray-700"}>
                        {item.free}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-700 bg-white">
                    <div className="flex items-center justify-center gap-2">
                      {item.paidIcon}
                      <span className="text-black font-medium">{item.paid}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

            <button className="px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Skip  The Line            </button>
          </div>
          <div className="text-center mt-3 text-xs text-gray-500 flex items-center justify-center gap-4">
            <div className="flex items-center gap-1">
              <Shield className="w-3 h-3" />
              <span>Secure payment</span>
            </div>
            <div className="flex items-center gap-1">
              <Target className="w-3 h-3" />
              <span>100% satisfaction guarantee</span>
            </div>
            <div className="flex items-center gap-1">
              <Zap className="w-3 h-3" />
              <span>24-hour delivery</span>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}