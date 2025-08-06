// src/components/Overview.jsx
import React from 'react';
import { overviewMetrics } from '../data/mockData';
import { StatsCard } from './StatsCard';

export function Overview() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
      gap: '1rem',
    }}>
      {overviewMetrics.map(item => (
        <StatsCard
          key={item.key}
          title={item.key}
          value={item.value}
          subtitle={item.label}
        />
      ))}
    </div>
  );
}
