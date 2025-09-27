import "../styles/globals.css";
import { Roboto, Roboto_Slab } from "next/font/google";
import Layout from "../components/Layout";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}

export { robotoSlab }; // ✅ export if you want to use it in components
