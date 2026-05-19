import Hero from "../components/home/Hero";
import Header from "../components/Header";
import Features from "../components/home/Features"
import HowItWorks from "../components/home/HowItWorks"
import CTA from "../components/home/CTA"
import Footer from "../components/Footer"

const Home = () =>{
    return (
            <main>
                <Hero/>
                <Features/>
                <HowItWorks/>
                <CTA/>
            </main>
    )
}

export default Home;