import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen pt-16">
      <SectionWrapper className="bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto">
          <h1 className="font-geist text-4xl md:text-6xl font-bold text-gray-600 mb-6">
            Privacy Policy
          </h1>
          <p className="font-manrope text-xl text-gray-600 leading-relaxed">
            Your privacy is important to us.
          </p>
        </motion.div>
      </SectionWrapper>

      <SectionWrapper className="bg-white">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h2 className="font-geist text-2xl font-semibold">Introduction</h2>
          <p className="font-manrope">
            NE Railways Cable Route Plan (“we”, “our”, “us”) values your trust.
            This Privacy Policy explains how we handle your information when you
            use our mobile application.
          </p>

          <h2 className="font-geist text-2xl font-semibold mt-8">
            Information We Collect
          </h2>
          <ul className="list-disc pl-6 space-y-2 font-manrope">
            <li>
              <strong>Location Data (if enabled):</strong> Used only to show
              your position on the map relative to the railway cable routes.
            </li>
            <li>
              <strong>Usage Data:</strong> Basic app usage analytics (like
              clicks, time spent, etc.) may be collected to improve app
              performance.
            </li>
            <li>
              <strong>Device Information:</strong> May include device type,
              operating system, and version.
            </li>
          </ul>

          <h2 className="font-geist text-2xl font-semibold mt-8">
            How We Use Information
          </h2>
          <ul className="list-disc pl-6 space-y-2 font-manrope">
            <li>
              To provide accurate map visualization of railway cable routes.
            </li>
            <li>To improve app performance and fix issues.</li>
            <li>To ensure safety and better planning for railway staff.</li>
          </ul>

          <h2 className="font-geist text-2xl font-semibold mt-8">
            Data Sharing
          </h2>
          <ul className="list-disc pl-6 space-y-2 font-manrope">
            <li>We do not sell your personal information.</li>
            <li>
              Data may be shared with authorized Indian Railways staff for
              operational use.
            </li>
            <li>
              Third-party services (like Google Maps or Flutter libraries) may
              process data according to their policies.
            </li>
          </ul>

          <h2 className="font-geist text-2xl font-semibold mt-8">
            Data Security
          </h2>
          <ul className="list-disc pl-6 space-y-2 font-manrope">
            <li>Your data is protected using secure methods.</li>
            <li>
              Sensitive data (like staff location) is not stored permanently.
            </li>
          </ul>

          <h2 className="font-geist text-2xl font-semibold mt-8">
            User Rights
          </h2>
          <ul className="list-disc pl-6 space-y-2 font-manrope">
            <li>
              You can disable location access anytime in your device settings.
            </li>
            <li>
              You can uninstall the app anytime if you do not agree with this
              policy.
            </li>
          </ul>

          <h2 className="font-geist text-2xl font-semibold mt-8">
            Changes to this Policy
          </h2>
          <p className="font-manrope">
            We may update this privacy policy from time to time. Updated
            versions will be posted on this page.
          </p>

          <h2 className="font-geist text-2xl font-semibold mt-8">Contact Us</h2>
          <p className="font-manrope">
            If you have questions or concerns about this Privacy Policy, you can
            contact:
          </p>
          <ul className="list-none pl-0 space-y-2 font-manrope">
            <li>📧 Email: contacts@logicboots.com</li>
            <li>📍 Office: North Eastern Railways, Lucknow Division</li>
          </ul>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default PrivacyPolicy;
