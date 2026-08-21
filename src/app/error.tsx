'use client';

import React, { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error cleanly
    console.error('Unhandled portfolio application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="bg-surface p-8 rounded-lg border border-border text-center max-w-md">
        <span className="font-mono text-xs text-red-400 block mb-2">[SYSTEM FAULT]</span>
        <h2 className="font-display text-xl font-bold text-white mb-4">An Unexpected System Exception Occurred</h2>
        <p className="text-muted text-xs mb-6">
          The interface encountered an unhandled error state. You can attempt system re-initialization below.
        </p>
        <button
          onClick={() => reset()}
          className="font-mono text-xs text-background bg-accent px-5 py-2.5 rounded font-semibold hover:bg-accent/80 transition-colors"
        >
          REBOOT INTERFACE
        </button>
      </div>
    </div>
  );
}
