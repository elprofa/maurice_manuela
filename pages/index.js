import Head from "next/head";
import Hero from "../components/Hero";
import SectionCarousselDeuxColonne from "../components/SectionCarousselDeuxColonne";
import FormEtuOne from "../components/shared/FormEtudeStepOne";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <SectionCarousselDeuxColonne />
        <FormEtuOne />
      </main>
    </div>
  );
}
