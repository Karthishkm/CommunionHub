import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Users, Calendar, ArrowRight } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 animate-float"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-300/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-300/20 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-8 animate-fade-in">
            Connecting People Across Faiths & Interests
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto animate-fade-in stagger-delay-1 leading-relaxed">
            Join our vibrant community where people of all faiths come together to share experiences,
            support each other, and build meaningful connections through various events and activities.
          </p>
          <button
            onClick={() => navigate('/events')}
            className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-white
                     button-gradient rounded-full transform transition-all duration-300
                     hover:scale-105 shadow-xl hover:shadow-2xl animate-fade-in stagger-delay-2"
          >
            Explore Events
            <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          <div className="glass-effect rounded-2xl p-8 text-center animate-fade-in stagger-delay-1">
            <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 p-4 rounded-xl w-20 h-20
                          flex items-center justify-center mx-auto mb-6
                          transform transition-transform duration-300 hover:scale-110">
              <Users className="h-10 w-10 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-indigo-900">Community Building</h3>
            <p className="text-gray-600 leading-relaxed">
              Connect with people who share your values and interests in a welcoming environment
            </p>
          </div>
          
          <div className="glass-effect rounded-2xl p-8 text-center animate-fade-in stagger-delay-2">
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-4 rounded-xl w-20 h-20
                          flex items-center justify-center mx-auto mb-6
                          transform transition-transform duration-300 hover:scale-110">
              <Calendar className="h-10 w-10 text-purple-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-purple-900">Diverse Events</h3>
            <p className="text-gray-600 leading-relaxed">
              Participate in religious, social, and charitable activities that bring people together
            </p>
          </div>
          
          <div className="glass-effect rounded-2xl p-8 text-center animate-fade-in stagger-delay-3">
            <div className="bg-gradient-to-br from-pink-100 to-pink-200 p-4 rounded-xl w-20 h-20
                          flex items-center justify-center mx-auto mb-6
                          transform transition-transform duration-300 hover:scale-110">
              <Heart className="h-10 w-10 text-pink-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-pink-900">Support Network</h3>
            <p className="text-gray-600 leading-relaxed">
              Find and offer support within our caring community of diverse individuals
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;