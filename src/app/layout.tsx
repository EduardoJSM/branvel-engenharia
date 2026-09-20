import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Branvel Engenharia | Otimização Operacional & Lean Manufacturing',
  description: 'Consultoria e engenharia de processos focada em redução de Lead Time, gestão de estoques, Six Sigma e eliminação de gargalos industriais.',
  keywords: ['Engenharia de Produção', 'Lean Manufacturing', 'Six Sigma', 'Otimização de Processos', 'VSM', 'OEE', 'Consultoria Industrial'],
  authors: [{ name: 'Branvel Engenharia' }],
  openGraph: {
    title: 'Branvel Engenharia | Otimização Operacional',
    description: 'Transformando processos complexos em fluxos de alto rendimento.',
    url: 'https://branvelengenharia.com.br',
    siteName: 'Branvel Engenharia',
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="antialiased bg-[#FBFBFB] text-zinc-900 selection:bg-[#77216F] selection:text-white">
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}