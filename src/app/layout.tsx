export const metadata = {
  title: 'Y.A.W.Y.E. - You Are What You Eat',
  description: 'You Are What You Eat - A web app that analyzes the nutritional and environmental impact of your food choices.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="../../public/Images/Favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
