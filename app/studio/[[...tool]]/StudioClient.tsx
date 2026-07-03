'use client';

import React, { useEffect, useState } from 'react';
import config from '../../../sanity.config';

type StudioComponent = React.ComponentType<{ config: any }>;

export default function StudioClient() {
  const [Studio, setStudio] = useState<StudioComponent | null>(null);

  useEffect(() => {
    let mounted = true;

    import('next-sanity/studio').then((mod) => {
      if (mounted) {
        setStudio(() => mod.NextStudio as StudioComponent);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  if (!Studio) {
    return (
      <main
        style={{
          minHeight: '100vh',
          display: 'grid',
          placeItems: 'center',
          background: '#10110d',
          color: '#fffaf0',
          fontFamily: 'system-ui, sans-serif',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          fontWeight: 800,
        }}
      >
        Loading Sanity Studio…
      </main>
    );
  }

  return <Studio config={config} />;
}
