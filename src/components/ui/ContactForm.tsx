'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;

    try {
      // EmailJS configuration
      const SERVICE_ID = 'service_slhk8ru';
      const TEMPLATE_ID = 'template_6dxpexp';
      const PUBLIC_KEY = 'RNLidfUFtbexc2uOs';

      // Check if EmailJS is loaded
      if (typeof window !== 'undefined' && (window as any).emailjs) {
        // Send email using EmailJS
        const result = await (window as any).emailjs.sendForm(
          SERVICE_ID,
          TEMPLATE_ID,
          form,
          PUBLIC_KEY
        );

        if (result.text === 'OK') {
          setStatus('success');
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => setStatus('idle'), 5000);
        } else {
          setStatus('error');
          setTimeout(() => setStatus('idle'), 5000);
        }
      } else {
        console.error('EmailJS not loaded');
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputStyles = 'w-full px-4 py-3 bg-[#0A0A0F] border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500 transition-colors';

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      className={cn('space-y-6 max-w-2xl mx-auto', className)}
    >
      {/* Honeypot for spam protection */}
      <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={status === 'loading'}
            className={inputStyles}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={status === 'loading'}
            className={inputStyles}
          />
        </div>
      </div>

      <div>
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          disabled={status === 'loading'}
          rows={6}
          className={cn(inputStyles, 'resize-none')}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className={cn(
          'w-full px-8 py-4 bg-cyan-500 text-[#0A0A0F] font-medium tracking-wide transition-all',
          status === 'loading' ? 'opacity-50 cursor-not-allowed' : 'hover:bg-cyan-400'
        )}
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && (
        <div className="text-center text-cyan-500 text-sm animate-fadeIn">
          ✓ Thank you! Your message has been sent successfully.
        </div>
      )}

      {status === 'error' && (
        <div className="text-center text-red-500 text-sm animate-fadeIn">
          ✗ Something went wrong. Please try again or email me directly.
        </div>
      )}
    </form>
  );
}