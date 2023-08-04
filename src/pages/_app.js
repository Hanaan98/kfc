import "@/styles/globals.css";
import CartProvider from "@/components/Cart-Provider";
import "react-loading-skeleton/dist/skeleton.css";
export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}
