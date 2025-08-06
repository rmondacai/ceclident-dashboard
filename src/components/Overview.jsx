// src/components/Overview.jsx
import React from 'react';
import { overviewMetrics } from '../data/mockData';

export default function Overview() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {overviewMetrics.map(({ key, value, label }) => (
        <div key={key} className="bg-white rounded-lg shadow p-4">
          <div className="text-sm text-gray-500">{label}</div>
          <div className="mt-2 text-2xl font-bold">{value.toLocaleString()}</div>
        </div>
      ))}
    </div>
  );
}
