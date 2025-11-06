import { useEffect, useState } from "react";

const stats = [
  { label: "Student Teach By Us", value: 0, suffix: "k", target: 5 },
  { label: "Hrs of Doubt Session", value: 0, suffix: "k", target: 10 },
  { label: "Years of Experience", value: 0, suffix: "+", target: 15 },
  { label: "Selections", value: 0, suffix: "k+", target: 2 },
];

export function Stats() {
  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = stats.map((stat, index) => {
      const increment = stat.target / steps;
      let currentValue = 0;

      return setInterval(() => {
        currentValue += increment;
        if (currentValue >= stat.target) {
          currentValue = stat.target;
          clearInterval(intervals[index]);
        }
        setCounters((prev) => {
          const newCounters = [...prev];
          newCounters[index] = currentValue;
          return newCounters;
        });
      }, stepDuration);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="py-12 bg-gradient-to-r from-orange-500 via-orange-600 to-blue-600 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl mb-2">
                {Math.round(counters[index])}{stat.suffix}
              </div>
              <div className="text-orange-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}