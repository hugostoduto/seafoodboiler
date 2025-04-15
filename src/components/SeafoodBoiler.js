"use client"
import { useState } from 'react';
import { Menu, X, MapPin, Phone, Calendar, ShoppingBag } from 'lucide-react';

export default function SeafoodBoilerWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const menuItems = [
    { id: 1, name: 'Crab Boil', price: '$24.99', description: 'Snow crab clusters, shrimp, corn, potatoes & sausage' },
    { id: 2, name: 'Shrimp Scampi', price: '$18.99', description: 'Jumbo shrimp in garlic butter sauce with pasta' },
    { id: 3, name: 'Lobster Roll', price: '$22.99', description: 'Fresh lobster meat in buttered roll with fries' },
    { id: 4, name: 'Cajun Combo', price: '$29.99', description: 'Crab, shrimp, mussels, clams with spicy cajun sauce' }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === menuItems.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? menuItems.length - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="https://popmenucloud.com/kwhromcj/f5e42f4b-a51d-4850-a1f5-aeef98de7145.png" alt="Seafood Boiler Logo" className="h-10" />
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#menu" className="text-gray-700 hover:text-blue-600">Menu</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#family" className="text-gray-700 hover:text-blue-600">Family</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
          </div>

          <div className="md:flex space-x-4 hidden">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              Reserve
            </button>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 flex items-center">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Order Online
            </button>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="mt-4 md:hidden flex flex-col space-y-3">
            <a href="#menu" className="text-gray-700 py-2 px-2 hover:bg-gray-100 rounded">Menu</a>
            <a href="#about" className="text-gray-700 py-2 px-2 hover:bg-gray-100 rounded">About</a>
            <a href="#family" className="text-gray-700 py-2 px-2 hover:bg-gray-100 rounded">Family</a>
            <a href="#contact" className="text-gray-700 py-2 px-2 hover:bg-gray-100 rounded">Contact</a>
            <div className="flex flex-col space-y-2 pt-2">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center justify-center">
                <Calendar className="w-4 h-4 mr-2" />
                Reserve a Table
              </button>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 flex items-center justify-center">
                <ShoppingBag className="w-4 h-4 mr-2" />
                Order Online
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Banner */}
      <section className="relative h-96 bg-center bg-cover" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.pexels.com/photos/566344/pexels-photo-566344.jpeg)' }}>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Fresh Catch, Bold Flavors</h2>
          <p className="text-xl md:text-2xl mb-8">Fast-casual seafood experience like no other</p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition font-medium text-lg">
              Order Online
            </button>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition font-medium text-lg">
              Reserve a Table
            </button>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section id="menu" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Our Popular Dishes</h2>

          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
              {menuItems.map(item => (
                <div key={item.id} className="min-w-full px-4">
                  <div className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 mb-6 md:mb-0">
                      <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center overflow-clip">
                        <img src={`https://images.unsplash.com/photo-1655992829046-ae2d44d205f7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`} alt={item.name} className="rounded-lg" />
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 md:pl-8">
                      <h3 className="text-2xl font-bold text-blue-700 mb-2">{item.name}</h3>
                      <p className="text-xl font-medium text-orange-500 mb-4">{item.price}</p>
                      <p className="text-gray-600 mb-6">{item.description}</p>
                      <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="flex justify-center mt-6">
            {menuItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`mx-1 w-3 h-3 rounded-full ${activeSlide === idx ? 'bg-blue-600' : 'bg-gray-300'}`}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
              View Full Menu
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-blue-800 mb-4">About Seafood Boiler</h2>
              <p className="text-gray-700 mb-6">
                At Seafood Boiler, we're passionate about delivering the freshest seafood experience in a casual, vibrant atmosphere.
                Our chefs carefully select the finest ingredients to create bold, flavorful dishes that keep our customers coming back.
              </p>
              <p className="text-gray-700 mb-6">
                Founded in 2020, we've quickly become a neighborhood favorite, known for our signature boils and friendly service.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                Learn More
              </button>
            </div>
            <div className="w-full md:w-1/2 md:pl-8">
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center overflow-clip  bg-center">
                <img src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg" alt="Restaurant interior" className="rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family-Friendly Section */}
      <section id="family" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Family-Friendly Dining</h2>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2">
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center mb-6 overflow-clip">
                <img src="https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Family dining" className="rounded-lg" />
              </div>
              <h3 className="text-2xl font-bold text-blue-700 mb-2">Casual Dining Ambiance</h3>
              <p className="text-gray-600">
                Our spacious restaurant offers a relaxed atmosphere perfect for family gatherings. Enjoy comfortable seating and a lively environment where everyone can feel at home.
              </p>
            </div>

            <div className="w-full md:w-1/2">
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center mb-6 bg-center overflow-clip">
                <img src="https://images.unsplash.com/photo-1533777419517-3e4017e2e15a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Kid's meals" className="rounded-lg" />
              </div>
              <h3 className="text-2xl font-bold text-blue-700 mb-2">Kid's Meals</h3>
              <p className="text-gray-600">
                Our special kid's menu features seafood favorites in kid-friendly portions, plus options for the less adventurous eaters. Each meal comes with a fun activity sheet and crayons.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition">
              View Kid's Menu
            </button>
          </div>
        </div>
      </section >

      {/* Contact Section */}
      < section id="contact" className="py-16 bg-blue-600 text-white" >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Visit Us Today</h2>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 bg-blue-700 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p>123 Ocean Drive, Seafood City, SC 12345</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p>(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Calendar className="w-6 h-6 mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Hours</p>
                    <p>Monday - Sunday: 11:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-medium mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-white text-blue-600 p-2 rounded-full">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.9 8H15V5.1c0-.9.6-1.1 1-1.1h2.8V0h-3.8C11.4 0 11 3.4 11 5.1V8H8v4h3v12h4V12h3.1l.8-4z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-white text-blue-600 p-2 rounded-full">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2 0 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c0 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.6.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2-.1-1.3-.1-1.6-.1-4.8s0-3.6.1-4.9c0-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.3-.1 1.6-.1 4.9-.1M12 0C8.7 0 8.3 0 7.1.1 5.8.1 5 .3 4.2.6c-.8.3-1.5.7-2.1 1.4C1.4 2.7 1 3.4.7 4.2.4 5 .2 5.8.1 7.1.1 8.3 0 8.7 0 12s0 3.7.1 4.9c.1 1.3.3 2.1.6 2.9.3.8.7 1.5 1.4 2.1.7.7 1.4 1.1 2.1 1.4.8.3 1.6.5 2.9.6 1.2.1 1.6.1 4.9.1s3.7 0 4.9-.1c1.3-.1 2.1-.3 2.9-.6.8-.3 1.5-.7 2.1-1.4.7-.7 1.1-1.4 1.4-2.1.3-.8.5-1.6.6-2.9.1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c-.1-1.3-.3-2.1-.6-2.9-.3-.8-.7-1.5-1.4-2.1-.7-.7-1.4-1.1-2.1-1.4-.8-.3-1.6-.5-2.9-.6C15.7 0 15.3 0 12 0z" />
                      <path d="M12 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 10.2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" />
                      <circle cx="18.4" cy="5.6" r="1.4" />
                    </svg>
                  </a>
                  <a href="#" className="bg-white text-blue-600 p-2 rounded-full">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <form className="bg-white p-6 rounded-lg text-gray-800">
                <h3 className="text-2xl font-bold mb-4 text-blue-700">Send Us a Message</h3>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>

                <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section >

      {/* Footer */}
      < footer className="bg-blue-900 text-white py-8" >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">Seafood Boiler</h2>
              <p className="text-blue-200">Fresh Catch, Bold Flavors</p>
            </div>

            <div className="text-center md:text-right">
              <p>&copy; 2025 Seafood Boiler. All rights reserved.</p>
              <div className="mt-2">
                <a href="#" className="text-blue-200 hover:text-white mr-4">Privacy Policy</a>
                <a href="#" className="text-blue-200 hover:text-white">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer >
    </div >
  );
}