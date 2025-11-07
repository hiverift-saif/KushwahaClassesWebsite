import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
import { X } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
// import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import img7 from "../assets/7.png";
import img8 from "../assets/8.png";
import img9 from "../assets/9.png";
import img10 from "../assets/10.png";
import img11 from "../assets/11.png";
import img12 from "../assets/12.png";
import img13 from "../assets/13.png";
import img14 from "../assets/14.png";
import img15 from "../assets/15.png";
import img16 from "../assets/16.png";
import img17 from "../assets/17.png";
import img18 from "../assets/18.png";
import img19 from "../assets/19.png";
import img20 from "../assets/20.png";


const galleryImages = [
  // {
  //   src: img1,
  //   title: "Sir Narendra Kumar",
  //   category: "Faculty",
  //   description: "Expert Physics Teacher at Kushwaha Classes",
  // },
  {
    src: img2,
    title: "Dedicated Educator",
    category: "Faculty",
    description: "Sir Narendra Kumar - Committed to student success",
  },
  {
    src: img3,
    title: "Classroom Celebration",
    category: "Classroom",
    description: "Teacher and students celebrating success together",
  },
  {
    src: img4,
    title: "Victory Moment",
    category: "Classroom",
    description: "Students celebrating achievements with Sir Narendra Kumar",
  },
  {
    src: img5,
    title: "Class Group Photo",
    category: "Classroom",
    description: "Entire class with faculty celebrating achievements",
  },
  {
    src: img6,
    title: "Interactive Learning",
    category: "Classroom",
    description: "Engaging classroom session with students and faculty",
  },
  {
    src: img7,
    title: "Students Celebration",
    category: "Students",
    description: "Our successful students celebrating their achievements",
  },
  {
    src: img8,
    title: "Learning Together",
    category: "Students",
    description: "Interactive learning environment at Kushwaha Classes",
  },

  // ✅ New Added (9–20)
  {
    src: img9,
    title: "Motivation Session",
    category: "Faculty",
    description: "Sir Narendra Kumar motivating students for success",
  },
  {
    src: img10,
    title: "Science Demonstration",
    category: "Classroom",
    description: "Hands-on learning activity in Physics class",
  },
  {
    src: img11,
    title: "Focused Classroom",
    category: "Classroom",
    description: "Students focused during concept explanation",
  },
  {
    src: img12,
    title: "Doubt Solving Session",
    category: "Faculty",
    description: "Sir Narendra Kumar clearing doubts personally",
  },
  {
    src: img13,
    title: "Student Group Study",
    category: "Students",
    description: "Students studying together before the test",
  },
  {
    src: img14,
    title: "Achievement Medal Ceremony",
    category: "Students",
    description: "Top-performing students receiving awards",
  },
  {
    src: img15,
    title: "Whiteboard Session",
    category: "Classroom",
    description: "Faculty explaining concepts on board",
  },
  {
    src: img16,
    title: "Exam Preparation",
    category: "Students",
    description: "Intense preparation session before exams",
  },
  {
    src: img17,
    title: "Class Interaction",
    category: "Classroom",
    description: "Teacher interacting with students during lecture",
  },
  {
    src: img18,
    title: "Motivational Talk",
    category: "Faculty",
    description: "Sir Narendra Kumar delivering motivational speech",
  },
  {
    src: img19,
    title: "Celebrating Success",
    category: "Students",
    description: "Students celebrating great results",
  },
  {
    src: img20,
    title: "Farewell Group Photo",
    category: "Classroom",
    description: "Students and teachers at farewell event",
  },
];


export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Faculty", "Classroom", "Students"];

  const filteredImages =
    filter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  return (
    <>
      {/* Image Viewer Dialog */}
      {selectedImage !== null && (
        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-6xl p-0 bg-black/95 border-0">
            <VisuallyHidden>
              <DialogTitle>{galleryImages[selectedImage].title}</DialogTitle>
              <DialogDescription>
                {galleryImages[selectedImage].description}
              </DialogDescription>
            </VisuallyHidden>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-50 size-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X className="size-6" />
            </button>
            <div className="relative w-full h-[80vh] flex items-center justify-center p-8">
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <h3 className="text-2xl mb-2">{galleryImages[selectedImage].title}</h3>
                <p className="text-gray-300">{galleryImages[selectedImage].description}</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      <section id="gallery" className="py-12 bg-gradient-to-br from-white to-blue-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm mb-4">
              Our Gallery
            </div>
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              Glimpses of Kushwaha Classes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore moments from our classrooms, celebrating achievements and the vibrant learning environment
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  filter === category
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => {
              const originalIndex = galleryImages.findIndex((img) => img.src === image.src);
              return (
                <div
                  key={originalIndex}
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedImage(originalIndex)}
                >
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="inline-block px-3 py-1 bg-orange-500 rounded-full text-xs mb-2">
                        {image.category}
                      </div>
                      <h3 className="text-xl mb-1">{image.title}</h3>
                      <p className="text-sm text-gray-300">{image.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No images found in this category.</p>
            </div>
          )}

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-white rounded-lg shadow-lg p-8 max-w-2xl">
              <h3 className="text-2xl text-gray-900 mb-3">
                Join Our Success Story
              </h3>
              <p className="text-gray-600 mb-6">
                Be part of a vibrant learning community where students excel and achieve their dreams. Kushwaha Classes - Where excellence meets dedication.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="tel:+919990455657"
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-md hover:shadow-lg"
                >
                  Contact Us Today
                </a>
                <a
                  href="#courses"
                  className="px-6 py-3 bg-white border-2 border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-all shadow-md"
                >
                  View Courses
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}