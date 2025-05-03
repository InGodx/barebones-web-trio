
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    document.title = "Simple Web App - Home";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">SimpleWeb</div>
          <div className="flex space-x-6">
            <Link to="/" className={`${activeSection === 'home' ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`} onClick={() => setActiveSection('home')}>Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Welcome to SimpleWeb</h1>
        
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <p className="text-lg text-gray-700 mb-6">
            This is a simple web application built with plain HTML, CSS, and JavaScript.
            No libraries or frameworks were used in the creation of this site.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
            <p className="text-blue-700">
              Navigate through the pages using the menu above to explore more content.
            </p>
          </div>
          
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Featured Content</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="border border-gray-200 p-4 rounded-md hover:shadow-md transition-shadow">
              <h3 className="text-xl font-medium mb-2 text-gray-800">Simple Design</h3>
              <p className="text-gray-600">
                A clean, minimalist design focused on content and user experience.
              </p>
            </div>
            
            <div className="border border-gray-200 p-4 rounded-md hover:shadow-md transition-shadow">
              <h3 className="text-xl font-medium mb-2 text-gray-800">Responsive Layout</h3>
              <p className="text-gray-600">
                Fully responsive design that works on all device sizes.
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link to="/about" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Learn More About Us
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

export default Index;
