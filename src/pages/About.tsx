
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    document.title = "Simple Web App - About";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">SimpleWeb</div>
          <div className="flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link to="/about" className="text-blue-600 font-medium">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">About Us</h1>
        
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <p className="text-lg text-gray-700 mb-6">
            SimpleWeb is a demonstration of what can be accomplished with pure HTML, CSS, and JavaScript,
            without relying on external libraries or frameworks.
          </p>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Philosophy</h2>
            <p className="text-gray-600 mb-4">
              We believe in the power of simplicity and the fundamentals of web development.
              By focusing on the core technologies of the web, we create lightweight, fast,
              and accessible experiences for all users.
            </p>
            <p className="text-gray-600">
              This project serves as a reminder that sometimes, less is more. Not every project
              needs complex tools - the basics can often deliver exactly what you need.
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Skills</h2>
            
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-gray-700 font-medium">HTML</span>
                <span className="text-gray-600">90%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-gray-700 font-medium">CSS</span>
                <span className="text-gray-600">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-gray-700 font-medium">JavaScript</span>
                <span className="text-gray-600">80%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link to="/contact" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 SimpleWeb. All rights reserved.</p>
          <p className="text-gray-400 mt-2">A simple web application built with HTML, CSS & JavaScript.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
