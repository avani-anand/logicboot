import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { XMarkIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const ContactFormModal = ({ isOpen, onClose }) => {
  const [formStatus, setFormStatus] = useState('idle'); 
  const [privacyChecked, setPrivacyChecked] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!privacyChecked) {
      alert('Please agree to the privacy policy to continue.');
      return;
    }
    
    setFormStatus('submitting');
    
    const form = e.target;
    const formData = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setFormStatus('success');
        form.reset();
        setPrivacyChecked(false);
        setTimeout(() => {
          onClose();
          setFormStatus('idle');
        }, 2000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  const closeModal = () => {
    onClose();
    setFormStatus('idle');
    setPrivacyChecked(false);
  };

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const firstInputRef = useRef(null);

  useEffect(() => {
    if (isOpen && firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, [isOpen]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-white/95 dark:bg-gray-900/90 border border-white/30 dark:border-gray-700/30 rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] backdrop-blur-md">
              {/* Decorative background removed (DottedSurface no longer exists) */}
              {/* Modal Header */}
              <div className="relative p-6 border-b border-gray-200">
                <button
                  onClick={closeModal}
                  className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Close modal"
                >
                  <XMarkIcon className="w-6 h-6 text-gray-500" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-4 sm:p-6 pb-11 max-h-[85vh] overflow-y-auto">
                {/* Title */}
                <h3 id="contact-modal-title" className="text-2xl sm:text-3xl font-bold text-teal-700 mb-3 text-center">
                  LET'S GET IN TOUCH
                </h3>
                <p className="text-sm text-gray-600 mb-6 text-center">
                  Can't find what you're looking for? Please contact us and we'll get back to you as soon as possible.
                </p>

                <form
                  action="https://formspree.io/f/mzzypkdk"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-5 pb-6"
                >
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullname"
                      className="block text-sm font-medium text-gray-800 mb-2"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                      <input
                        ref={firstInputRef}
                        type="text"
                        id="fullname"
                        name="fullname"
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 focus:bg-white outline-none transition-all placeholder:text-gray-600"
                        placeholder="Type Here"
                      />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-800 mb-2"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 focus:bg-white outline-none transition-all placeholder:text-gray-600"
                      placeholder="Type Here"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-800 mb-2"
                    >
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 focus:bg-white outline-none transition-all placeholder:text-gray-600"
                      placeholder="Type Here"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-800 mb-2"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 focus:bg-white outline-none transition-all placeholder:text-gray-600"
                      placeholder="Type Here"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-800 mb-2"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 focus:bg-white outline-none transition-all resize-none placeholder:text-gray-600"
                      placeholder="Tell us about your needs, eg. request a meeting..."
                    />
                  </div>

                  {/* Privacy Checkbox */}
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      checked={privacyChecked}
                      onChange={(e) => setPrivacyChecked(e.target.checked)}
                      className="mt-1 w-4 h-4 text-teal-600 border-gray-300 rounded-sm focus:ring-teal-500"
                    />
                    <label
                      htmlFor="privacy"
                      className="text-sm text-gray-700 leading-relaxed"
                    >
                      By checking this you agree to our privacy policy and to marketing communication (we promise not send any spam) you can unsubscribe at any time
                    </label>
                  </div>

                  {/* Status Messages */}
                  {formStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm"
                    >
                      Thank you! Your message has been sent successfully.
                    </motion.div>
                  )}

                  {formStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm"
                    >
                      Something went wrong. Please try again or email us directly at info@logicboots.com
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting' || !privacyChecked}
                    className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-gray-400 text-white font-medium px-6 py-3 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {formStatus === 'submitting' ? (
                      'Sending...'
                    ) : (
                      <>
                        SEND MESSAGE
                        <ArrowRightIcon className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default ContactFormModal;

