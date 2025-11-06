import { useState } from "react";
import { Button } from "./ui/button";
import { BannerCarousel } from "./BannerCarousel";
import { EnrollmentForm } from "./EnrollmentForm";
import { ConsultationForm } from "./ConsultationForm";

export function Hero() {
  const [enrollmentOpen, setEnrollmentOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <>
      <EnrollmentForm open={enrollmentOpen} onOpenChange={setEnrollmentOpen} />
      <ConsultationForm open={consultationOpen} onOpenChange={setConsultationOpen} />
      
      <section id="home" className="relative">
        {/* Banner Carousel */}
        <BannerCarousel />

        {/* Hero Content */}
        <div className="bg-gradient-to-br from-orange-50 via-white to-blue-50 py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm">
                Excellence in Education Since 2010
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900">
                Nurturing Minds, Fueling Futures
              </h1>
              <p className="text-xl text-gray-700">
                Your Journey to Success Begins at Kushwaha Classes
              </p>
              <p className="text-gray-600">
                Mastering Physics: Kushwaha Classes' Premier Physics Education by Sir Narendra Kumar
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg"
                  onClick={() => setEnrollmentOpen(true)}
                >
                  Enroll Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50"
                  onClick={() => setConsultationOpen(true)}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}