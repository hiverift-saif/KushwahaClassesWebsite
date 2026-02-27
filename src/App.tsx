import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AboutUs } from "./components/AboutUs";
import { Courses } from "./components/Courses";
import { Testimonials } from "./components/Testimonials";
import { Stats } from "./components/Stats";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Footer } from "./components/Footer";
import { PlaySchool } from "./components/PlaySchool";
import { Gallery } from "./components/Gallery";
import { Blog } from "./components/Blog";
import { BlogPost } from "./components/BlogPost";
import { Toaster } from "./components/ui/sonner";
import { FloatingWhatsApp } from 'react-floating-whatsapp';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("main");
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    setSelectedBlogId(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleReadPost = (postId: number) => {
    setSelectedBlogId(postId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToBlog = () => {
    setSelectedBlogId(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Toaster position="top-center" richColors />
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      
      {currentPage === "main" ? (
        <>
          <Hero />
          <AboutUs />
          <Courses />
          <Stats />
          <WhyChooseUs />
          <Gallery />
          <Testimonials />
        </>
      ) : currentPage === "playschool" ? (
        <PlaySchool />
      ) : currentPage === "blog" ? (
        selectedBlogId !== null ? (
          <BlogPost postId={selectedBlogId} onBack={handleBackToBlog} />
        ) : (
          <Blog onReadPost={handleReadPost} />
        )
      ) : null}
      <FloatingWhatsApp 
        phoneNumber="9990455757" // Replace with your actual WhatsApp number
        accountName="Kushwaha Classes"
        allowEsc
        allowClickAway
        notification
        notificationSound
      />
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}