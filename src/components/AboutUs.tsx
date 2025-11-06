import { GraduationCap, Award, Users, Target } from "lucide-react";

export function AboutUs() {
  return (
    <section id="about" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm mb-4">
            About Us
          </div>
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            Discover Excellence with Kushwaha Classes: Igniting Minds, Shaping Futures
          </h2>
        </div>

        {/* Introduction */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <p className="text-gray-700 mb-6 leading-relaxed">
              Welcome to Kushwaha Classes, where education transforms into empowerment and dreams take flight. With an unwavering commitment to fostering academic excellence, we proudly offer a diverse range of classes catering to students in 11th and 12th grades. Our holistic approach spans across Science, Commerce, Arts, and Academics, ensuring a comprehensive and enriching learning experience for every student who walks through our doors.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Backed by a collective teaching experience of over 10 years, our dedicated team of educators is not just well-versed in the subjects they teach, but also deeply passionate about igniting the flames of curiosity and knowledge in young minds. Our mission goes beyond textbooks and exams; we aim to instill a love for learning that extends far beyond the classroom.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Kushwaha Classes is more than an educational institution; it's a nurturing environment where students are encouraged to explore, question, and discover their potential. Our curriculum is designed not only to prepare students for academic success but also to equip them with essential life skills such as critical thinking, problem-solving, and effective communication.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Whether you're embarking on a journey in the realm of Science, Commerce, Arts, or seeking to strengthen your academic foundation, Kushwaha Classes offers tailor-made programs that cater to your aspirations. Our commitment to personalized attention ensures that each student receives the support they need to thrive and excel.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              As a testament to our dedication, numerous students who have walked through the doors of Kushwaha Classes have achieved remarkable success in both competitive examinations and academics. We take immense pride in being a catalyst for these achievements and are driven by the desire to continue making a positive impact on the educational landscape.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With state-of-the-art facilities, a vibrant learning atmosphere, and a passionate team, Kushwaha Classes stands as a beacon of educational excellence. Join us in this enriching journey of discovery, growth, and accomplishment. Together, let's pave the way for a brighter future and empower the leaders of tomorrow.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="size-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
              <GraduationCap className="size-6 text-white" />
            </div>
            <h3 className="text-xl text-gray-900 mb-2">Excellence</h3>
            <p className="text-gray-600 text-sm">
              Committed to delivering the highest quality education and fostering academic brilliance
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="size-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
              <Award className="size-6 text-white" />
            </div>
            <h3 className="text-xl text-gray-900 mb-2">Innovation</h3>
            <p className="text-gray-600 text-sm">
              Embracing modern teaching methodologies and cutting-edge learning techniques
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="size-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
              <Users className="size-6 text-white" />
            </div>
            <h3 className="text-xl text-gray-900 mb-2">Community</h3>
            <p className="text-gray-600 text-sm">
              Building a supportive environment where students, teachers, and parents collaborate
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="size-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
              <Target className="size-6 text-white" />
            </div>
            <h3 className="text-xl text-gray-900 mb-2">Success</h3>
            <p className="text-gray-600 text-sm">
              Dedicated to helping every student achieve their goals and realize their potential
            </p>
          </div>
        </div>

        {/* Founder Section */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Content */}
              <div className="p-8 md:p-12">
                <div className="inline-block px-4 py-2 bg-orange-500 text-white rounded-full text-sm mb-4">
                  Founder & Director
                </div>
                <h3 className="text-3xl text-gray-900 mb-6">
                  Er. Narendra Kumar
                </h3>
                <h4 className="text-xl text-orange-600 mb-6">
                  Shaping Minds, Inspiring Futures
                </h4>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Meet Er. Narendra Kumar, a dynamic and accomplished professional, revered for his exceptional prowess in the realm of Electronics and Communication. With an academic foundation that boasts a B.Tech degree in ECE from Integral University, Lucknow, and an illustrious M.Tech degree in VLSI from Sagar Institute of Science & Technology, Bhopal, his expertise is a testament to his dedication to technological excellence.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Narendra Kumar's journey extends far beyond academia. With over a decade of enriching teaching experience, he has imparted knowledge, kindled curiosity, and guided countless students towards realizing their potential. His unwavering commitment to nurturing minds has left an indelible mark on the educational landscape.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  As the Founder and Director of Kushwaha Classes, Er. Narendra Kumar's vision has manifested into an institution that embodies his passion for education. His profound influence resonates through the corridors of Kushwaha Classes, where excellence is not just a goal but a way of life.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  With a remarkable blend of academic accomplishments, teaching proficiency, and a fervent commitment to innovation, Narendra Kumar stands as a guiding light for both aspiring learners and seasoned professionals alike. His proven expertise in VLSI design and electronic communication makes him an invaluable asset, driving pioneering projects forward.
                </p>
              </div>

              {/* Right Qualifications */}
              <div className="bg-white p-8 md:p-12 flex flex-col justify-center">
                <h4 className="text-2xl text-gray-900 mb-6">Qualifications</h4>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-orange-50 to-transparent p-4 rounded-lg border-l-4 border-orange-500">
                    <p className="text-gray-900 mb-1">
                      <span className="text-orange-600">B.Tech</span> in Electronics and Communication
                    </p>
                    <p className="text-sm text-gray-600">Integral University, Lucknow (India)</p>
                    <p className="text-sm text-gray-600">Score: 72%</p>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-transparent p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="text-gray-900 mb-1">
                      <span className="text-blue-600">GATE</span> Qualified (2013)
                    </p>
                    <p className="text-sm text-gray-600">Score: 428</p>
                  </div>

                  <div className="bg-gradient-to-r from-orange-50 to-transparent p-4 rounded-lg border-l-4 border-orange-500">
                    <p className="text-gray-900 mb-1">
                      <span className="text-orange-600">M.Tech</span> in VLSI Design
                    </p>
                    <p className="text-sm text-gray-600">Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal</p>
                    <p className="text-sm text-gray-600">Score: 75% (With Honours)</p>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-transparent p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="text-gray-900 mb-1">
                      <span className="text-blue-600">Teaching Experience</span>
                    </p>
                    <p className="text-sm text-gray-600">10+ Years</p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg text-white">
                  <p className="text-center leading-relaxed">
                    Join Er. Narendra Kumar on a transformative journey of knowledge, innovation, and empowerment at Kushwaha Classes. Together, let's shape the leaders of tomorrow and pave the way for a future defined by excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}