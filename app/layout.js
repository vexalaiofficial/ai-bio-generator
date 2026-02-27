export const metadata = {
  title: 'AI Bio Generator | Perfect Instagram & Twitter Bios',
  description: 'Generate perfect bios for Instagram, Twitter, LinkedIn and more. Free to try, $5 for unlimited.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif', background: '#0a0a0a', color: '#fff', minHeight: '100vh' }}>
        {children}
      </body>
    </html>
  )
}
