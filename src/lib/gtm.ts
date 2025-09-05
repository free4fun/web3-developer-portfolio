declare global {
  interface Window { dataLayer?: any[] }
}
export function gtmPush(payload: Record<string, any>) {
  if (!import.meta.env.VITE_GTM_ID) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}
