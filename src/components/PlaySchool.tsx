import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Baby, Palette, Music, BookOpen, Heart, Users, Clock, Award } from "lucide-react";
import { useState } from "react";
import { PlaySchoolEnrollmentForm } from "./PlaySchoolEnrollmentForm";
import { ConsultationForm } from "./ConsultationForm";

const features = [
  {
    icon: Baby,
    title: "Age-Appropriate Learning",
    description: "Specially designed curriculum for children aged 2-5 years",
  },
  {
    icon: Palette,
    title: "Creative Activities",
    description: "Art, craft, and creative play to enhance imagination",
  },
  {
    icon: Music,
    title: "Music & Dance",
    description: "Develop rhythm, coordination, and self-expression",
  },
  {
    icon: BookOpen,
    title: "Early Literacy",
    description: "Building foundation for reading and writing skills",
  },
  {
    icon: Heart,
    title: "Nurturing Environment",
    description: "Safe, loving, and supportive atmosphere for growth",
  },
  {
    icon: Users,
    title: "Social Development",
    description: "Learning to interact, share, and make friends",
  },
];

const programs = [
  {
    name: "Playgroup (2-3 years)",
    description: "Introduction to structured learning through play-based activities",
    timings: "9:00 AM - 12:00 PM",
  },
  {
    name: "Nursery (3-4 years)",
    description: "Building foundational skills in language, numbers, and creativity",
    timings: "9:00 AM - 1:00 PM",
  },
  {
    name: "Kindergarten (4-5 years)",
    description: "Preparing for primary school with enhanced learning activities",
    timings: "9:00 AM - 2:00 PM",
  },
];

export function PlaySchool() {
  const [enrollmentOpen, setEnrollmentOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <>
      <PlaySchoolEnrollmentForm open={enrollmentOpen} onOpenChange={setEnrollmentOpen} />
      <ConsultationForm open={consultationOpen} onOpenChange={setConsultationOpen} />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm">
                  Early Childhood Education
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900">
                  Kushwaha Play School
                </h1>
                <p className="text-xl text-gray-700">
                  Where Little Minds Blossom and Dreams Begin
                </p>
                <p className="text-gray-600">
                  A nurturing environment where your child's journey of learning and discovery begins with joy, creativity, and care.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 shadow-lg" onClick={() => setEnrollmentOpen(true)}>
                    Enroll Your Child
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-pink-500 text-pink-500 hover:bg-pink-50" onClick={() => setConsultationOpen(true)}>
                    Schedule a Visit
                  </Button>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 to-purple-500 rounded-lg blur-2xl opacity-20"></div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwcGxheXNjaG9vbHxlbnwwfHx8fDE3MzA5MjAwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Happy children at play school"
                  className="rounded-lg shadow-2xl w-full relative z-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm mb-4">
                Our Programs
              </div>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
                Age-Wise Programs
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Carefully designed programs for each developmental stage
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {programs.map((program) => (
                <Card key={program.name} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
                  <CardHeader>
                    <div className="size-12 bg-pink-100 rounded-lg flex items-center justify-center mb-2">
                      <Baby className="size-6 text-pink-600" />
                    </div>
                    <CardTitle>{program.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-gray-600">{program.description}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="size-4" />
                      <span>{program.timings}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 bg-gradient-to-br from-white to-pink-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm mb-4">
                What We Offer
              </div>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
                Why Choose Kushwaha Play School
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A holistic approach to early childhood development
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <Card key={feature.title} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md group">
                    <CardHeader>
                      <div className="size-12 bg-pink-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-pink-500 transition-colors">
                        <Icon className="size-6 text-pink-600 group-hover:text-white transition-colors" />
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="py-12 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="size-12" />
                </div>
                <div className="text-xl">Certified Teachers</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="size-12" />
                </div>
                <div className="text-xl">Small Class Sizes</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Heart className="size-12" />
                </div>
                <div className="text-xl">Safe Environment</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <BookOpen className="size-12" />
                </div>
                <div className="text-xl">Balanced Curriculum</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-block px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm">
                Get Started
              </div>
              <h2 className="text-3xl md:text-4xl text-gray-900">
                Ready to Give Your Child the Best Start?
              </h2>
              <p className="text-gray-600">
                Join Kushwaha Play School and watch your child thrive in a caring, stimulating environment.
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 shadow-lg">
                  <a href="tel:+919990455657">Call Us: +91 99904 55657</a>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-pink-500 text-pink-500 hover:bg-pink-50">
                  <a href="#home">Back to Main Site</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}