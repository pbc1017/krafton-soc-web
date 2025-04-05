import Footer from '@krafton-soc/common/components/Footer';
import Header from '@krafton-soc/common/components/Header';
import StyledComponentsRegistry from '@krafton-soc/common/libs/RootStyleRegistry';
import { fontVariables } from '@krafton-soc/common/styles/fonts';
import '@krafton-soc/common/styles/globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KRAFTON X KAIST SoC',
  description: 'Positive Influence, Memories of the Journey',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <html lang="ko" className={fontVariables}>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </StyledComponentsRegistry>
  );
}
