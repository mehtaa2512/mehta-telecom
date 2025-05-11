import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop')",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30" />
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center md:text-left max-w-3xl mx-auto md:mx-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight whitespace-nowrap">
                Welcome to <span className="text-blue-400">Mehta Telecom</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 overflow-x-auto">
                Your One-Stop Shop for Premium Mobile Devices and Accessories
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                <Link
                  to="/phones/iphone"
                  className="bg-blue-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-600 transition-colors text-center"
                >
                  Shop Phones
                </Link>
                <Link
                  to="/accessories/charging-cables"
                  className="bg-white text-black px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                >
                  Explore Accessories
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16">Featured Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {/* Phones */}
            <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2070&auto=format&fit=crop"
                  alt="Latest Phones"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20">
                  <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Latest Phones</h3>
                    <p className="text-sm sm:text-base text-gray-200 mb-3 sm:mb-4">Discover our collection of premium smartphones</p>
                    <Link
                      to="/phones/iphone"
                      className="text-white border border-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full hover:bg-white hover:text-black transition-colors inline-block text-sm sm:text-base"
                    >
                      Explore
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Accessories */}
            <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=2070&auto=format&fit=crop"
                  alt="Accessories"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20">
                  <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Accessories</h3>
                    <p className="text-sm sm:text-base text-gray-200 mb-3 sm:mb-4">Essential accessories for your devices</p>
                    <Link
                      to="/accessories/charging-cables"
                      className="text-white border border-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full hover:bg-white hover:text-black transition-colors inline-block text-sm sm:text-base"
                    >
                      Explore
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                  alt="Services"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20">
                  <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Services</h3>
                    <p className="text-sm sm:text-base text-gray-200 mb-3 sm:mb-4">Professional repair and maintenance services</p>
                    <Link
                      to="/services/repair"
                      className="text-white border border-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full hover:bg-white hover:text-black transition-colors inline-block text-sm sm:text-base"
                    >
                      Explore
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16">Why Choose Mehta Telecom?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-blue-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Authentic Products</h3>
              <p className="text-sm sm:text-base text-gray-600">100% genuine products with warranty</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-blue-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Fast Service</h3>
              <p className="text-sm sm:text-base text-gray-600">Quick delivery and repair services</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-blue-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Secure Payments</h3>
              <p className="text-sm sm:text-base text-gray-600">Safe and secure payment options</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-blue-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-sm sm:text-base text-gray-600">Professional technical assistance</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 