import Head from 'next/head';
import Header from '@/Components/Layout/Header';
import Footer from '@/Components/Layout/Footer';
import Hero from '@/Components/Home/Hero';
import Features from '@/Components/Home/Features';
import HowItWorks from '@/Components/Home/HowItWorks';
import Stats from '@/Components/Home/Stats';
import Pricing from '@/Components/Home/Pricing';
import CTA from '@/Components/Home/CTA';

export default function Home() {
    return (
        <>
            <Head>
                <title>PulsePal — AI-Powered Booking Intelligence for Artists</title>
                <meta name="description" content="PulsePal analyzes every booking offer with AI — travel costs, venue reputation, financial breakdown — so you know exactly what you'll earn before you say yes." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <Header />
            
            <main>
                <Hero />
                <Features />
                <HowItWorks />
                <Stats />
                <Pricing />
                <CTA />
            </main>
            
            <Footer />
        </>
    );
}
