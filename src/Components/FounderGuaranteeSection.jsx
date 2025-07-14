import { Settings, TrendingUp, Users, Shield } from 'lucide-react';

export default function FounderGuaranteeSection() {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="px-6 lg:px-20 mx-auto py-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Settings className="w-6 h-6 text-black" />
            <h2 className="text-3xl font-bold text-black">Built by Operators, Not Outsourcers</h2>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 px-6 lg:px-20 mx-auto py-10">
            <div className="flex flex-col  items-center gap-6">
              {/* Founder Image */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                  <img 
                    src="/api/placeholder/96/96" 
                    alt="Akshit Bhasin - Founder AB Media" 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              
              {/* Quote Content */}
              <div className="flex-1 text-center ">
                <p className="text-gray-800 text-lg max-w-4xl leading-relaxed mb-4">
                  "Most audits are just templated fluff. We've actually scaled eCommerce brands from ₹5L to ₹25L/month in 90 days — and this audit gives you the <strong>exact same thinking</strong> we bring to our retainers."
                </p>
                <div className="md:text-right">
                  <p className="font-semibold text-black">– Akshit Bhasin</p>
                  <p className="text-gray-600">Founder @ AB Media</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What Makes Different */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-black mb-8 text-center">What makes this audit different?</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Built by Growth Engineers */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="bg-black p-2 rounded-lg flex-shrink-0">
                  <Settings className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-black mb-2">Built by Growth Engineers</h4>
                  <p className="text-gray-700">No interns, no fluff. Audits are reviewed directly by me and our performance strategists.</p>
                </div>
              </div>
            </div>

            {/* Backed by Data */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="bg-black p-2 rounded-lg flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-black mb-2">Backed by ₹110Cr+ in Managed Ad Spend</h4>
                  <p className="text-gray-700">We've audited over 100+ accounts and scaled 50+ brands across wellness, electronics, fashion, skincare, gifting, and high-AOV categories.</p>
                </div>
              </div>
            </div>

            {/* Used by Founders */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="bg-black p-2 rounded-lg flex-shrink-0">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-black mb-2">Used by Founders, Not Just Marketers</h4>
                  <p className="text-gray-700">Most of our paid audits come from word-of-mouth between serious operators who don't have time for trial-and-error.</p>
                </div>
              </div>
            </div>

            {/* No Upsells */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="bg-black p-2 rounded-lg flex-shrink-0">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-black mb-2">No Upsells. No Lock-in. 100% Value.</h4>
                  <p className="text-gray-700">You're not being "pitched." If the audit makes sense, we'll talk. If not, you'll still walk away with a roadmap you can use in-house.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}