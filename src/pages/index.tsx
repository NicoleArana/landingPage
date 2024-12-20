import Head from "next/head";
import Hero from "./hero";
import { Nav } from "./nav";
import Projects from "./projects";


export default function Home() {
  return (
   <>
  <Nav/>
   <div className="flex-col flex justify-center items-center pb-7 shadow-sm pt-32">
   <Hero/>
   </div>
   <div className="pt-24 pb-36">
    <Projects color="#facc15" description= "lorem ipsum" image={["urls", "urls"]} link="https://nearbyy.com" position="Lead Developer & Designer" title="Huho App" key={"index"} type="WEB"/>
   </div>
   </>
  );
}
