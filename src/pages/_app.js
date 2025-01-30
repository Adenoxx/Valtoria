import localFont from 'next/font/local';
import 'rsuite/dist/rsuite-no-reset.min.css';
import { CustomProvider } from 'rsuite';


const satoshi = localFont({
  src: './fonts/Satoshi-Variable.woff2',
  display: 'swap'
})


export default function App({ Component, pageProps }) {
  return (
  <CustomProvider>
    <main className={satoshi.className}>
  <Component {...pageProps} />
  </main>
  </CustomProvider>  
  );
}
