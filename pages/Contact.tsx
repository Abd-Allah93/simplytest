
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { SECTORS } from '../data';
import MagneticButton from '../components/MagneticButton';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    sector: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting form to Cloudflare worker...", formData);
    alert("Inquiry received. Our architectural team will reach out shortly.");
    setFormData({ name: '', email: '', sector: '', message: '' });
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12">
      <SEO
        title="Contact Us | SimplyDesign"
        description="Get in touch with SimplyDesign for your next architectural project."
        canonical="/contact"
      />
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24">
          {/* Left Column: Info */}
          <div>
            <header className="mb-16">
              <span className="text-gold text-xs uppercase tracking-[0.4em] font-bold">Contact</span>
              <h1 className="text-5xl md:text-8xl font-serif mt-4 leading-[0.9]">Let's build something iconic.</h1>
            </header>

            <div className="space-y-12">
              <div className="flex gap-6 items-start">
                <div className="p-4 bg-stone-100 dark:bg-stone-900/50 rounded-full text-gold">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-stone-500 uppercase tracking-widest text-[10px] mb-2">Headquarters</h4>
                  <p className="text-xl font-light">Saraya roushdy building-Roushdy- 2nd Floor<br />Alexandria-Egypt</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="p-4 bg-stone-100 dark:bg-stone-900/50 rounded-full text-gold">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-stone-500 uppercase tracking-widest text-[10px] mb-2">Inquiries</h4>
                  <p className="text-xl font-light">+2 01272352772 - +2 01141141607  <br />+2035234242</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="p-4 bg-stone-100 dark:bg-stone-900/50 rounded-full text-gold">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-stone-500 uppercase tracking-widest text-[10px] mb-2">Email</h4>
                  <p className="text-xl font-light">simply.design.egypt@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-stone-100 dark:bg-stone-900/20 p-8 md:p-12 border border-stone-200 dark:border-stone-800/50 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-gold/30 -mr-4 -mt-4" />

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-stone-500">Your Full Name</label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-b border-stone-300 dark:border-stone-800 focus:border-gold outline-none py-3 text-lg font-light transition-colors text-stone-900 dark:text-stone-200"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-stone-500">Email Address</label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border-b border-stone-300 dark:border-stone-800 focus:border-gold outline-none py-3 text-lg font-light transition-colors text-stone-900 dark:text-stone-200"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-stone-500">Sector of Interest</label>
                <select
                  required
                  value={formData.sector}
                  onChange={e => setFormData({ ...formData, sector: e.target.value })}
                  className="w-full bg-transparent border-b border-stone-300 dark:border-stone-800 focus:border-gold outline-none py-3 text-lg font-light transition-colors appearance-none cursor-pointer text-stone-900 dark:text-stone-200"
                >
                  <option value="" disabled className="bg-stone-50 dark:bg-stone-950">Select a sector</option>
                  {SECTORS.map(s => <option key={s} value={s} className="bg-stone-50 dark:bg-stone-950">{s}</option>)}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-stone-500">Brief Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-b border-stone-300 dark:border-stone-800 focus:border-gold outline-none py-3 text-lg font-light transition-colors resize-none text-stone-900 dark:text-stone-200"
                  placeholder="Tell us about your project goals..."
                />
              </div>

              <div className="pt-8">
                <button type="submit" className="w-full py-4 border border-gold bg-gold/10 text-gold uppercase tracking-[0.3em] text-xs font-bold hover:bg-gold hover:text-stone-950 transition-all duration-500 flex items-center justify-center gap-4 group">
                  Send Inquiry <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
