import Head from "next/head";
import HomePage from "./home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Souza United Exports</title>
        <meta name="description" content="Souza United Exports - Premium granite from Karkala, India. We offer sustainably sourced, high-quality granite for construction, interiors, and custom projects. Elevate your designs with our expertly crafted stone." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomePage />
      </main>
    </>
  );
}
