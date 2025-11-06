import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
import { X } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import facultyImage from "figma:asset/6a8fe49e70af567f42cc2b59fae9ae7a62c3e9f4.png";
import studentsImage1 from "figma:asset/9562c93d48ed297e6e668562cba87afa47fe2e9f.png";
import studentsImage2 from "figma:asset/881662d71cdddc795b72ac9fe778242b0c6823b3.png";
import classroomImage1 from "figma:asset/a8d8ebce117d4307b500cf2c5657cbecc42404d5.png";
import classroomImage2 from "figma:asset/1629e153fa0365432b1a6a102bc969681485dab8.png";
import groupPhoto from "figma:asset/1becfae0d65fee5409340648d3a1e28ae4636d35.png";
import teacherDesk from "figma:asset/f90d6d5492b197e3c049d5438951f50cd3394747.png";
import classroomSession from "figma:asset/8268ebc25dac5ec76a1684d77cd447944c96d777.png";

const galleryImages = [
  {
    src: facultyImage,
    title: "Sir Narendra Kumar",
    category: "Faculty",
    description: "Expert Physics Teacher at Kushwaha Classes",
  },
  {
    src: teacherDesk,
    title: "Dedicated Educator",
    category: "Faculty",
    description: "Sir Narendra Kumar - Committed to student success",
  },
  {
    src: classroomImage1,
    title: "Classroom Celebration",
    category: "Classroom",
    description: "Teacher and students celebrating success together",
  },
  {
    src: classroomImage2,
    title: "Victory Moment",
    category: "Classroom",
    description: "Students celebrating their achievements with Sir Narendra Kumar",
  },
  {
    src: groupPhoto,
    title: "Class Group Photo",
    category: "Classroom",
    description: "Entire class with faculty celebrating achievements at Kushwaha Classes",
  },
  {
    src: classroomSession,
    title: "Interactive Learning",
    category: "Classroom",
    description: "Engaging classroom session with students and faculty",
  },
  {
    src: studentsImage1,
    title: "Students Celebration",
    category: "Students",
    description: "Our successful students celebrating their achievements",
  },
  {
    src: studentsImage2,
    title: "Learning Together",
    category: "Students",
    description: "Interactive learning environment at Kushwaha Classes",
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