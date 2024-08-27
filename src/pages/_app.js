import { Suspense } from "react";
import "../styles/_styles.module.scss"
import LoaderMain from "@/components/Loader";

export default function App({ Component, pageProps }) {
  return (
    <Suspense fallback={<LoaderMain />}>
      <Component {...pageProps} />
    </Suspense>
  );
}
