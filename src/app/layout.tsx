import Footer from '@krafton-soc/components/Footer';
import { Header } from '@krafton-soc/components/Header';
import StyledComponentsRegistry from '@krafton-soc/libs/RootStyleRegistry';
import { pretendard } from '@krafton-soc/styles/fonts';
import '@krafton-soc/styles/globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KRAFTON X KAIST SoC',
  description: 'Positive Influence, Memories of the Journey',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <html lang="ko" className={pretendard.variable}>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </StyledComponentsRegistry>
  );
}
