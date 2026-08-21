import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="bg-surface p-8 rounded-lg border border-border text-center max-w-md">
        <span className="font-mono text-xs text-accent block mb-2">[ERROR 404]</span>
        <h2 className="font-display text-2xl font-bold text-white mb-2">TARGET ROUTE NOT FOUND</h2>
        <p className="text-muted text-xs mb-6">
          The requested system node or URI does not exist on this portfolio instance.
        </p>
        <Link
          href="/"
          className="font-mono text-xs text-background bg-accent px-5 py-2.5 rounded font-semibold hover:bg-accent/80 transition-colors inline-block"
        >
          RETURN TO ROOT TERMINAL
        </Link>
      </div>
    </div>
  );
}
