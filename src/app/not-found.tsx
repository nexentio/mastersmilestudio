import React from 'react';
import NotFoundSection from '@/components/NotFoundSection';
import '@/app/globals.css';

export default function RootNotFound() {
  return (
    <html lang="en">
      <head>
        <title>404 - Page Not Found | Master Smile Studio</title>
        <meta name="robots" content="noindex, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{ margin: 0, padding: 0, backgroundColor: '#ffffff', color: '#0f172a' }}>
        <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff' }}>
          <NotFoundSection locale="en" />
        </main>
      </body>
    </html>
  );
}
