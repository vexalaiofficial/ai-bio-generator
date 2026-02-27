import './globals.css';

export const metadata = {
  title: 'AI Bio Generator | Perfect Instagram & Twitter Bios',
  description: 'Generate perfect bios for Instagram, Twitter, LinkedIn and more. Free to try, $9 for unlimited.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: '#000', color: '#fff', minHeight: '100vh' }}>
        {children}
      </body>
    </html>
  )
}
