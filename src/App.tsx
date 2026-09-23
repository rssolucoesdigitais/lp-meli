import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Positioning from "@/components/sections/Positioning";
import Process from "@/components/sections/Process";
import ExistingSellers from "@/components/sections/ExistingSellers";
import FinalCta from "@/components/sections/FinalCta";

export default function App() {
  return (
    <Layout>
      <Hero />
      <Problem />
      <Solution />
      <Positioning />
      <Process />
      <ExistingSellers />
      <FinalCta />
    </Layout>
  );
}
