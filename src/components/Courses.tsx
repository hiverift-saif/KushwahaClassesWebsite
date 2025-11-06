import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { BookOpen, GraduationCap, Calculator, TrendingUp } from "lucide-react";

const courses = [
  { name: "IIT-JEE", icon: GraduationCap, color: "text-orange-600", bgColor: "bg-orange-100" },
  { name: "NEET", icon: BookOpen, color: "text-blue-600", bgColor: "bg-blue-100" },
  { name: "Commerce", icon: TrendingUp, color: "text-purple-600", bgColor: "bg-purple-100" },
  { name: "12th Class", icon: BookOpen, color: "text-orange-600", bgColor: "bg-orange-100" },
  { name: "11th Class", icon: BookOpen, color: "text-blue-600", bgColor: "bg-blue-100" },
  { name: "10th Class", icon: BookOpen, color: "text-indigo-600", bgColor: "bg-indigo-100" },
  { name: "9th Class", icon: BookOpen, color: "text-pink-600", bgColor: "bg-pink-100" },
  { name: "8th Class", icon: BookOpen, color: "text-teal-600", bgColor: "bg-teal-100" },
  { name: "General Aptitude", icon: Calculator, color: "text-yellow-600", bgColor: "bg-yellow-100" },
  { name: "Economics Classes", icon: TrendingUp, color: "text-cyan-600", bgColor: "bg-cyan-100" },
  { name: "Accounts Class", icon: Calculator, color: "text-emerald-600", bgColor: "bg-emerald-100" },
];

export function Courses() {
  return (
    <section id="courses" className="py-12 bg-gradient-to-br from-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm mb-4">
            Our Programs
          </div>
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Courses Offered</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive educational programs designed to help students excel in their academic journey
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course) => {
            const Icon = course.icon;
            return (
              <Card key={course.name} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
                <CardHeader>
                  <div className={`size-12 ${course.bgColor} rounded-lg flex items-center justify-center mb-2`}>
                    <Icon className={`size-6 ${course.color}`} />
                  </div>
                  <CardTitle>{course.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Expert guidance and comprehensive curriculum
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}