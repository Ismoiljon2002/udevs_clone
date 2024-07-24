import Contact from "./sections/contact";
import Direction from "./sections/direction";
import Footer from "./sections/footer";
import Header from "./sections/header";
import Hero from "./sections/hero";
import Team from "./sections/team";

import '../styles/general.scss'


export default function Home() {
    return (<>
    <Header />

    <Hero />

    <Direction />
    
    <Team />

    <Contact />
    
    <Footer />
    
    </>)
}
