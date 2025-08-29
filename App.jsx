// src/App.jsx
import { useState, useEffect } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Show confetti on initial load
    setShowConfetti(true);
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xvoodojq', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setTimeout(() => {
          window.location.href = "thank-you.html";
        }, 2000);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-amber-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-200 to-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-amber-100 to-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-32 px-6 text-center overflow-hidden">
        <div className={`transition-opacity duration-1000 ${showConfetti ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="confetti"></div>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="mb-6 inline-block">
            <h1 className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-amber-500 via-pink-600 to-purple-700 bg-clip-text text-transparent mb-2 tracking-tight">
              Debnance <span className="text-amber-600">Unisex</span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-500 to-pink-500 mx-auto rounded-full"></div>
          </div>
          
          <p className="text-2xl md:text-3xl text-gray-700 mb-4 leading-relaxed font-light">
            <span className="font-semibold text-amber-600">Unisex Beauty, Anytime, Anywhere</span>
          </p>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Experience the epitome of inclusive luxury beauty with our exclusive services for everyone
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a href="#book" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-300/50">
              Book Your Treatment
            </a>
            <a href="#contact" className="bg-white border-2 border-amber-500 text-amber-600 hover:bg-amber-50 hover:border-amber-600 px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Contact Us
            </a>
          </div>

          {/* Luxury Badges */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-amber-200 shadow-md">
              <span className="font-semibold text-amber-600">Inclusive Excellence</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-pink-200 shadow-md">
              <span className="font-semibold text-pink-600">All Genders Welcome</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-purple-200 shadow-md">
              <span className="font-semibold text-purple-600">VIP Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-24 px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-50/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Exquisite Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Indulge in our curated selection of luxury beauty treatments designed for everyone, regardless of gender
            </p>
            <p className="text-sm text-gray-500 italic">
              *All prices are subject to change based on specific requirements and market conditions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Signature Unisex Makeover", 
                desc: "Complete transformation with premium products and personalized consultation for any gender", 
                price: "₦28,000", 
                icon: "🌈" 
              },
              { 
                title: "Grooming Excellence", 
                desc: "Award-winning styling for men and non-binary clients with premium grooming products", 
                price: "₦18,000", 
                icon: "✂️" 
              },
              { 
                title: "Unisex Hair Couture", 
                desc: "Luxurious hair styling with premium extensions and accessories for all", 
                price: "₦20,000", 
                icon: "💇" 
              },
              { 
                title: "Crystal Nail Art", 
                desc: "Hand-crafted nail designs with Swarovski crystals and premium gels", 
                price: "₦12,000", 
                icon: "✨" 
              },
              { 
                title: "Glow Facial Ritual", 
                desc: "Luxury facial treatment with gold-infused products for radiant skin", 
                price: "₦16,000", 
                icon: "💫" 
              },
              { 
                title: "Silk & Wax Experience", 
                desc: "Premium waxing with soothing aftercare products for silky smooth results", 
                price: "₦8,000", 
                icon: "🕯️" 
              },
              { 
                title: "Bridal & Groom Special", 
                desc: "Complete wedding day transformation for couples and wedding parties", 
                price: "₦35,000", 
                icon: "💍" 
              },
              { 
                title: "Event Glamour", 
                desc: "Red carpet ready styling for any special occasion", 
                price: "₦22,000", 
                icon: "⭐" 
              },
              { 
                title: "Beard & Facial Care", 
                desc: "Premium beard grooming and facial treatments for men and bearded clients", 
                price: "₦14,000", 
                icon: "🧔" 
              }
            ].map((service, index) => (
              <div key={index} className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-amber-100 overflow-hidden">
                <div className="p-8">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.desc}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="text-left">
                      <span className="text-2xl font-bold text-amber-600 block">
                        {service.price}
                      </span>
                      <span className="text-xs text-gray-500 italic">*Price subject to change</span>
                    </div>
                    <button className="bg-gradient-to-r from-amber-500 to-pink-500 hover:from-amber-600 hover:to-pink-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                      Reserve
                    </button>
                  </div>
                </div>
                <div className="h-1 bg-gradient-to-r from-amber-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
          
          {/* Price Disclaimer */}
          <div className="mt-12 bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <p className="text-sm text-amber-800 text-center italic">
              <strong>Important Notice:</strong> All prices listed are subject to change without prior notice based on various factors including product costs, service complexity, and market conditions. 
              Final pricing will be confirmed during your consultation with our beauty specialists.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="book" className="relative py-24 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-amber-50/50"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Book Your Royal Appointment</h2>
            <p className="text-xl text-gray-600">
              Reserve your inclusive luxury beauty experience today
            </p>
          </div>
          
          {/* Loading Overlay */}
          {loading && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
              <div className="bg-white p-10 rounded-3xl text-center shadow-2xl">
                <div className="w-16 h-16 border-4 border-amber-200 border-t-amber-600 rounded-full animate-spin mx-auto"></div>
                <p className="mt-6 text-xl text-gray-900 font-semibold">Processing your royal reservation...</p>
                <p className="text-gray-600 mt-2">Please wait while we prepare your VIP experience</p>
              </div>
            </div>
          )}
          
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border border-amber-100">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-left text-gray-700 mb-3 font-semibold text-lg">Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-2 border-amber-200 rounded-xl px-6 py-4 focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-200/50 text-lg transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-left text-gray-700 mb-3 font-semibold text-lg">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    required 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border-2 border-amber-200 rounded-xl px-6 py-4 focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-200/50 text-lg transition-all duration-300"
                    placeholder="Your contact number"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-left text-gray-700 mb-3 font-semibold text-lg">Service Selection</label>
                <select className="w-full border-2 border-amber-200 rounded-xl px-6 py-4 focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-200/50 text-lg transition-all duration-300">
                  <option value="">Select your desired service</option>
                  <option value="unisex-makeover">Signature Unisex Makeover</option>
                  <option value="grooming">Grooming Excellence</option>
                  <option value="hair">Unisex Hair Couture</option>
                  <option value="nails">Crystal Nail Art</option>
                  <option value="facial">Glow Facial Ritual</option>
                  <option value="waxing">Silk & Wax Experience</option>
                  <option value="bridal">Bridal & Groom Special</option>
                  <option value="event">Event Glamour</option>
                  <option value="beard">Beard & Facial Care</option>
                </select>
              </div>
              
              <div>
                <label className="block text-left text-gray-700 mb-3 font-semibold text-lg">Preferred Gender for Service</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["Male", "Female", "Non-Binary", "No Preference"].map((gender) => (
                    <label key={gender} className="flex items-center p-3 border-2 border-amber-200 rounded-lg cursor-pointer hover:bg-amber-50 transition-colors duration-300">
                      <input type="radio" name="gender" value={gender.toLowerCase()} className="sr-only" />
                      <span className="w-4 h-4 border-2 border-amber-500 rounded-full flex items-center justify-center mr-3">
                        <span className="w-2 h-2 bg-amber-500 rounded-full opacity-0"></span>
                      </span>
                      {gender}
                    </label>
                  ))}
                </div>
              </div>
              
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-gradient-to-r from-amber-500 via-pink-500 to-purple-600 hover:from-amber-600 hover:via-pink-600 hover:to-purple-700 text-white text-xl py-5 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Processing Your Royal Request...' : 'Book Your Royal Treatment'}
              </button>
              
              <p className="text-center text-gray-500 text-sm">
                By booking, you agree to our inclusive service terms and conditions. <br />
                <span className="italic">*Prices are subject to change based on final service requirements</span>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">The Debnance Unisex Experience</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Debnance Unisex Beauty Salon is not just a beauty destination – it's a revolutionary space where artistry meets inclusivity. 
                Founded with a passion for enhancing natural beauty for everyone, we've become Ikorodu's premier choice for those seeking 
                exceptional, gender-inclusive beauty experiences.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our team of master artists combines technical expertise with creative vision to deliver personalized transformations 
                that make you feel confident, radiant, and truly special – regardless of gender identity.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  "Inclusive Excellence for All",
                  "Gender-Neutral Luxury Environment",
                  "Master Certified Artists",
                  "Premium International Products",
                  "Personalized Consultations",
                  "Sanitized & Hygienic Environment",
                  "Flexible Scheduling",
                  "Anytime, Anywhere Service Options"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-amber-50 to-pink-50 p-6 rounded-2xl border border-amber-200">
                <div className="flex items-center mb-3">
                  <svg className="w-6 h-6 text-amber-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold text-gray-900">5.0 Star Client Satisfaction</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Trusted by over 800+ clients for exceptional inclusive beauty experiences
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-amber-100 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://placehold.co/500x600/fff7ed/ea580c?text=Inclusive+Beauty+Experience" 
                  alt="Inclusive Beauty Experience" 
                  className="rounded-2xl w-full object-cover shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-amber-200">
                <div className="flex items-center">
                  <div className="text-3xl mr-4">🏆</div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">Pioneering Inclusive Beauty</p>
                    <p className="text-sm text-gray-600">Leading the way in gender-neutral luxury</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-24 px-6 bg-gradient-to-r from-amber-50/50 to-pink-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Royal Testimonials</h2>
            <p className="text-xl text-gray-600">
              Hear from our cherished clients who've experienced the Debnance difference
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "Grooming Client",
                text: "As a man who values grooming, I've found my perfect salon at Debnance. The attention to detail, premium products, and inclusive atmosphere make me feel truly pampered. Deborah and her team understand men's beauty needs perfectly.",
                rating: 5,
                image: "https://placehold.co/80x80/fed7aa/ea580c?text=AJ"
              },
              {
                name: "Sam Taylor",
                role: "Non-Binary Client",
                text: "Finally, a beauty salon that truly understands and respects my identity. Debnance's gender-neutral approach and knowledgeable staff make me feel seen and valued. The quality of service is exceptional, and I always leave feeling confident and beautiful.",
                rating: 5,
                image: "https://placehold.co/80x80/fed7aa/ea580c?text=ST"
              },
              {
                name: "Jordan Lee",
                role: "Couple's Package",
                text: "My partner and I booked the couple's package for our anniversary, and it was magical. We both received personalized treatments that celebrated our individual beauty. The salon's inclusive philosophy shines through in every detail.",
                rating: 5,
                image: "https://placehold.co/80x80/fed7aa/ea580c?text=JL"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-amber-100">
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full mr-4 border-4 border-amber-200"
                  />
                  <div>
                    <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                    <p className="text-amber-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Royal Palace</h2>
            <p className="text-xl text-gray-600">
              Experience inclusive luxury beauty in the heart of Ikorodu
            </p>
          </div>
          
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.761107703835!2d3.460037974813375!3d6.595341993464553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b905d486f0abd%3A0x75cf6a0906d1c9e9!2sIkorodu%2C%20Lagos!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng" 
              width="100%" 
              height="500" 
              style={{ border: 0 }} 
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Debnance Location"
              className="filter grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
          
          <div className="text-center mt-8 text-gray-700 text-lg">
            <p className="flex items-center justify-center">
              <svg className="w-6 h-6 mr-3 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Our Royal Address: Ikorodu, Lagos, Nigeria
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative bg-gradient-to-r from-gray-900 to-black text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-pink-500/10"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-6">Connect With Us</h2>
            <p className="text-xl text-gray-300 mb-4">Unisex Beauty, Anytime, Anywhere</p>
            <p className="text-xl text-gray-300 mb-8">
              We're here to answer your questions and book your inclusive appointment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/30">
              <svg className="w-8 h-8 text-amber-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-gray-300">Ikorodu, Lagos, Nigeria</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/30">
              <svg className="w-8 h-8 text-pink-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-gray-300">0905 840 5860</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
              <svg className="w-8 h-8 text-purple-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-gray-300">debnanceunisexsalon@gmail.com</p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-lg">Follow our inclusive journey on social media</p>
            <div className="flex justify-center space-x-6 mt-6">
              <a href="#" className="text-2xl hover:text-amber-400 transition-colors duration-300">🌈</a>
              <a href="#" className="text-2xl hover:text-pink-400 transition-colors duration-300">✨</a>
              <a href="#" className="text-2xl hover:text-purple-400 transition-colors duration-300">💎</a>
            </div>
            <p className="text-gray-500 mt-8 text-lg">&copy; 2024 Debnance Unisex Beauty Salon. All rights reserved.</p>
            <p className="text-gray-500 text-sm mt-2 italic">
              *All prices are subject to change without prior notice
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Website: <a href="https://www.Debnancesalon.com.ng" className="text-amber-400 hover:text-amber-300 transition-colors duration-300">www.Debnancesalon.com.ng</a>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <a 
        href="tel:+2349058405860" 
        className="fixed bottom-24 right-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-5 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 z-50 transform hover:scale-110 animate-bounce"
        style={{ animationDelay: '1s' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.71 19.29l-4.42-4.42A7.93 7.93 0 0 0 18 12c0-4.42-3.58-8-8-8a7.93 7.93 0 0 0-2.71 1.71L5.7 7.29a1 1 0 0 0 0 1.42l2.5 2.5a1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29l3.5-3.5a1 1 0 0 0-.71-1.71A5.93 5.93 0 0 1 12 6c3.31 0 6 2.69 6 6a5.93 5.93 0 0 1-1.71 4.24 1 1 0 0 0-.29.71c0 .28.1.53.29.71l3.5 3.5a1 1 0 0 0 1.42 0zM5 13h2a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1z"/>
        </svg>
      </a>
      
      <a 
        href="https://wa.me/2349058405860" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-gradient-to-r from-green-500 to-green-600 text-white p-5 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 z-50 transform hover:scale-110 animate-bounce"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        </svg>
      </a>

      <style jsx>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce {
          animation: bounce 2s ease-in-out infinite;
        }
        
        .confetti {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}import { useState } from 'react';