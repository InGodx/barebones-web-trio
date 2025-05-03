
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    document.title = "Simple Web App - Contact";
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormStatus('success');
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });

    // Clear success message after 3 seconds
    setTimeout(() => {
      setFormStatus('');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">SimpleWeb</div>
          <div className="flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            <Link to="/contact" className="text-blue-600 font-medium">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Contact Us</h1>
        
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <p className="text-lg text-gray-700 mb-6">
            Have questions or want to get in touch? Fill out the form below and we'll get back to you as soon as possible.
          </p>
          
          {formStatus === 'success' && (
            <div className="bg-green-100 border-l-4 border-green-500 p-4 mb-6">
              <p className="text-green-700">
                Your message has been sent successfully! We'll get back to you soon.
              </p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                required
              ></textarea>
            </div>
            
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                Send Message
              </button>
            </div>
          </form>
          
          <div className="mt-10 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Other Ways to Reach Us</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 p-4 rounded-md hover:shadow-md transition-shadow">
                <h3 className="text-xl font-medium mb-2 text-gray-800">Email Us</h3>
                <p className="text-gray-600">
                  info@simpleweb-example.com
                </p>
              </div>
              
              <div className="border border-gray-200 p-4 rounded-md hover:shadow-md transition-shadow">
                <h3 className="text-xl font-medium mb-2 text-gray-800">Call Us</h3>
                <p className="text-gray-600">
                  +1 (555) 123-4567
                </p>
              </div>
            </div>
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

export default Contact;
