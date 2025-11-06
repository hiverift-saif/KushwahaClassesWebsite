import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Aryan Kumar",
    role: "Student",
    text: "I can't believe how much I've grown academically with Kushwaha Classes. The teachers are incredible, and the resources are top-notch.",
    initials: "AK",
  },
  {
    name: "Mr. and Mrs. Sharma",
    role: "Parents",
    text: "Kushwaha Classes has been a blessing for our child. Their expert guidance and commitment to our child's education have truly made a positive impact.",
    initials: "MS",
  },
  {
    name: "The Patel Family",
    role: "Parents",
    text: "We are extremely satisfied with Kushwaha Classes. Our child's progress in academics is noticeable, and we appreciate their dedication to excellence.",
    initials: "PF",
  },
  {
    name: "The Singh Family",
    role: "Parents",
    text: "Kushwaha Classes has created a nurturing environment for our child's academic growth. The personalized attention has made a significant difference.",
    initials: "SF",
  },
  {
    name: "Aryan S., Class 10",
    role: "Student",
    text: "Kushwaha Classes made studying enjoyable! The interactive lessons and personalized attention helped me grasp challenging concepts easily.",
    initials: "AS",
  },
  {
    name: "Riya M., Class 11",
    role: "Student",
    text: "I'm so thankful for Kushwaha Classes. They not only improved my grades but also boosted my confidence in academics.",
    initials: "RM",
  },
  {
    name: "Mrs. Rinki",
    role: "Parents",
    text: "Choosing Kushwaha Classes was a wise decision. Our child's improved performance is a testament to the quality of education they provide.",
    initials: "MR",
  },
  {
    name: "Manish Gupta",
    role: "Parents",
    text: "We can't thank Kushwaha Classes enough. They have instilled a love for learning in our child and helped build a strong foundation for their future.",
    initials: "MG",
  },
  {
    name: "Mrs. Mohini",
    role: "Parents",
    text: "Kushwaha Classes has been instrumental in our child's academic progress during 11th and 12th grades. The individualized attention and guidance have been invaluable.",
    initials: "MM",
  },
  {
    name: "Rohit Mehta",
    role: "Parents",
    text: "We are beyond pleased with Kushwaha Classes. Our child's confidence and understanding of college-level subjects have grown significantly under their guidance.",
    initials: "RM",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerView = 3;

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => 
        prev + testimonialsPerView >= testimonials.length ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = [
    ...testimonials.slice(currentIndex, currentIndex + testimonialsPerView),
    ...testimonials.slice(0, Math.max(0, currentIndex + testimonialsPerView - testimonials.length)),
  ].slice(0, testimonialsPerView);

  return (
    <section className="py-12 bg-gradient-to-br from-orange-50 via-blue-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            Students & Parents Speaks
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear what our students and their parents have to say about their experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {visibleTestimonials.map((testimonial, index) => (
            <Card key={`${testimonial.name}-${currentIndex}-${index}`} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="size-12">
                    <AvatarFallback className="bg-gradient-to-r from-orange-500 to-blue-600 text-white">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div>{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-4 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2">
          {Array.from({ length: Math.ceil(testimonials.length / testimonialsPerView) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * testimonialsPerView)}
              className={`size-2 rounded-full transition-all ${
                Math.floor(currentIndex / testimonialsPerView) === index
                  ? "bg-orange-600 w-8"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}