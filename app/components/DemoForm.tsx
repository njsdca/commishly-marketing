'use client';

import { useState, FormEvent } from 'react';

export default function DemoForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      message: formData.get('message') as string,
    };

    try {
      const response = await fetch('/api/demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit demo request');
      }

      setIsSuccess(true);
      e.currentTarget.reset();
    } catch (err) {
      setError('Something went wrong. Please try again or email us directly at hello@getcommishly.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="p-12 text-center">
        <div className="w-16 h-16 rounded-full bg-teal/10 mx-auto mb-6 flex items-center justify-center">
          <svg
            className="h-8 w-8 text-teal"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-charcoal mb-2">
          Request Received!
        </h3>
        <p className="text-charcoal/70 mb-6">
          Thank you for your interest in Commishly. We&apos;ll be in touch within 24 hours to
          schedule your personalized demo.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="text-sm text-teal font-medium hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-8 space-y-6 max-w-xl mx-auto">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-charcoal mb-2"
        >
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          disabled={isSubmitting}
          className="w-full px-4 py-3 rounded-lg border-2 border-mint bg-white text-charcoal focus:outline-none focus:border-teal transition-colors disabled:opacity-50"
          placeholder="John Doe"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-charcoal mb-2"
        >
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          disabled={isSubmitting}
          className="w-full px-4 py-3 rounded-lg border-2 border-mint bg-white text-charcoal focus:outline-none focus:border-teal transition-colors disabled:opacity-50"
          placeholder="john@company.com"
        />
      </div>
      <div>
        <label
          htmlFor="company"
          className="block text-sm font-semibold text-charcoal mb-2"
        >
          Company *
        </label>
        <input
          type="text"
          id="company"
          name="company"
          required
          disabled={isSubmitting}
          className="w-full px-4 py-3 rounded-lg border-2 border-mint bg-white text-charcoal focus:outline-none focus:border-teal transition-colors disabled:opacity-50"
          placeholder="Acme Foods Inc."
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-charcoal mb-2"
        >
          Message (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          disabled={isSubmitting}
          className="w-full px-4 py-3 rounded-lg border-2 border-mint bg-white text-charcoal focus:outline-none focus:border-teal transition-colors resize-none disabled:opacity-50"
          placeholder="Tell us about your commission management needs..."
        />
      </div>
      {error && (
        <div className="p-4 rounded-lg bg-coral/10 border border-coral/30">
          <p className="text-sm text-coral">{error}</p>
        </div>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-teal px-8 py-4 text-base font-semibold text-white hover:bg-teal/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Request Demo'}
      </button>
      <p className="text-xs text-center text-charcoal/50">
        We&apos;ll respond within 24 hours to schedule your personalized demo
      </p>
    </form>
  );
}
