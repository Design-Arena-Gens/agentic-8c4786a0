import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Red de Distribución Atomy',
  description: 'Sistema de comercialización y reclutamiento de red de distribuidores',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
