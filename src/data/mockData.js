// src/data/mockData.js

// 1️⃣ KPIs de Overview
export const overviewMetrics = [
  { key: 'Conversaciones WhatsApp', value: 236, label: 'Conversaciones' },
  { key: 'Conversiones Google Ads',  value: 613, label: 'Conversiones'   },
  { key: 'ROI General (%)',           value: 582, label: 'ROI'           },
  { key: 'Valor Generado (CLP)',      value: 16980000, label: 'Valor'     },
];

// 2️⃣ Comparativa por sucursal
export const branchComparison = [
  { branch: 'La Serena', conversations: 127, costPerConv: 1569, ROI: 642, convRate: 70.7 },
  { branch: 'Ovalle',   conversations: 109, costPerConv: 1226, ROI: 405, convRate: 75.8 },
];

// 3️⃣ Distribución por servicio (WhatsApp)
export const serviceDistribution = [
  { service: 'Ortodoncia', percentage: 42.8, cost: 1567 },
  { service: 'Implantes',   percentage: 30.9, cost: 1157 },
  { service: 'Limpieza Dental', percentage: 26.3, cost: 1455 },
];

// 4️⃣ Demografía
export const demographics = [
  { category: 'Mujeres', value: 66 },
  { category: 'Hombres', value: 34 },
  { category: 'Móvil',   value: 80 },
  { category: 'Desktop', value: 20 },
];

// 5️⃣ Oportunidades críticas
export const opportunities = [
  { branch: 'La Serena', lostImpressionsPct: 54.2, potentialConv: 485, lostValue: 9700000 },
  { branch: 'Ovalle',   lostImpressionsPct: 45.5, potentialConv: 172, lostValue: 3440000 },
];

// 6️⃣ Proyecciones
export const projections = [
  { period: 'Mes 2',    conv: 1170, value: 23400000, invest: 512000, roi: 657 },
  { period: 'Mes 3',    conv: 1400, value: 28000000, invest: 560000, roi: 700 },
  { period: 'Trimestre',conv: 3419, value: 68380000, invest: 1520000, roi: 650 },
];

// 7️⃣ Datos para AreaChart a partir de projections
export const areaChartData = projections.map(item => ({
  name:    item.period,   // Mes 2, Mes 3, Trimestre
  revenue: item.value,    // Valor estimado
  profit:  item.roi       // ROI proyectado
}));
