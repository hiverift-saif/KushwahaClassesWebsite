import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Users, Target, User, Award, Lightbulb, Building2 } from "lucide-react";

const features = [
  {
    title: "Dedicated Expert Faculty",
    icon: Users,
    description: "Our experienced teachers are committed to your success",
  },
  {
    title: "Holistic Approach",
    icon: Target,
    description: "We focus on overall development, not just academics",
  },
  {
    title: "Personalized Learning",
    icon: User,
    description: "Individual attention to cater to each student's needs",
  },
  {
    title: "Proven Track Record",
    icon: Award,
    description: "Thousands of successful students over the years",
  },
  {
    title: "Advanced Teaching Methodology",
    icon: Lightbulb,
    description: "Modern techniques combined with traditional values",
  },
  {
    title: "State-of-the-Art Facilities",
    icon: Building2,
    description: "Equipped with the best infrastructure for learning",
  },
];

export function WhyChooseUs() {
  return (
    <section id="about" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm mb-4">
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            Why Choose Kushwaha Classes
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Choose Kushwaha Classes to embark on a journey of unparalleled learning, where expertise merges seamlessly with excellence across IIT-JEE, NEET, Accounts, Economics, and Academic subjects. Your success is our priority.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md group">
                <CardHeader>
                  <div className="size-12 bg-orange-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-orange-500 transition-colors">
                    <Icon className="size-6 text-orange-600 group-hover:text-white transition-colors" />
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
  );
}