export const metadata = {
  title: 'Calculator App',
  description: 'A simple calculator application built with Next.js',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;