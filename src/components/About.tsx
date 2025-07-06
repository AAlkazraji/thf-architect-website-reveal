
import { Target, Eye, Heart, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About THF Architecture
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are passionate architects dedicated to creating spaces that inspire, 
            function beautifully, and stand the test of time.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?q=80&w=5389&auto=format&fit=crop"
              alt="THF Architecture Team"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>
          
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Crafting Architectural Excellence Since 2008
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              THF Architecture has been at the forefront of innovative design, combining 
              cutting-edge technology with timeless principles to create buildings that 
              not only meet today's needs but anticipate tomorrow's challenges.
            </p>
            
            <div className="space-y-4">
              {[
                "Sustainable and eco-friendly design approach",
                "Award-winning portfolio across residential and commercial sectors",
                "Collaborative process with clients from concept to completion",
                "Integration of smart building technologies"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="text-blue-600" size={32} />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h4>
            <p className="text-gray-600 leading-relaxed">
              To create architectural solutions that enhance communities, 
              respect the environment, and inspire human connection.
            </p>
          </div>

          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="text-blue-600" size={32} />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h4>
            <p className="text-gray-600 leading-relaxed">
              To be recognized as leaders in sustainable architecture, 
              setting new standards for design excellence and innovation.
            </p>
          </div>

          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="text-blue-600" size={32} />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h4>
            <p className="text-gray-600 leading-relaxed">
              Integrity, creativity, and collaboration guide every project we undertake, 
              ensuring exceptional results for our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
