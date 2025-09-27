// components/Layout.js
import Navbar from "./Navbar";
import Billboard from "./Billboard";
import Footer from "./Footer";
import LatestNews from "./LatestNews";
import AdmissionInfo from "./AdmissionInfo";
import StatsSection from "./StatsSection";
import HomeFactGallery from "./HomeFactGallery";
import Academics from "./Academics";
import Hero from "./Hero";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Hero />
      <Academics />
      <HomeFactGallery />
      <StatsSection />
      <AdmissionInfo />
      <LatestNews />
      <Billboard />
      <Footer />
    </>
  );
}
