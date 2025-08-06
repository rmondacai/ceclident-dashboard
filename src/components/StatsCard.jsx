// src/components/StatsCard.jsx
import React from 'react';

export function StatsCard({ title, value, subtitle }) {
  return (
    <div style={{
      background: '#fff',
      padding: '1rem',
      borderRadius: '8px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
      textAlign: 'center',
    }}>
      <h3 style={{ margin: 0, fontSize: '1rem', color: '#555' }}>{title}</h3>
      <p style={{ margin: '0.5rem 0', fontSize: '1.5rem', fontWeight: 'bold' }}>
        {value.toLocaleString()}
      </p>
      <small style={{ color: '#888' }}>{subtitle}</small>
    </div>
  );
}
