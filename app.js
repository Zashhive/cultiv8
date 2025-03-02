import React, { useState } from 'react';

const TantraWebsite = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaqItem, setActiveFaqItem] = useState(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleFaqItem = (index) => {
    setActiveFaqItem(activeFaqItem === index ? null : index);
  };

  const faqItems = [
    {
      question: "Is the course fully online?",
      answer: "Yes, the course is 100% online and accessible from anywhere with an internet connection."
    },
    {
      question: "Are intimate areas included?",
      answer: "No, the techniques focus on safe, sacred, non-sexual touch to enhance connection."
    },
    {
      question: "What equipment do I need?",
      answer: "A quiet space, comfortable surface, and optional massage oil—simplicity is key."
    },
    {
      question: "How long do I have access?",
      answer: "Lifetime access with bundles; subscription renews as chosen (monthly or yearly)."
    },
    {
      question: "Can anyone join?",
      answer: "Yes, the course is open to all levels, designed with compassion for beginners and depth for seasoned learners."
    }
  ];

  return (
    <div className="bg-gray-100 text-gray-700 font-serif">
      {/* Header */}
      <header className="bg-gray-100 fixed w-full z-50 shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex justify-between items-center py-4">
            <a href="#" className="font-serif text-2xl font-bold text-purple-800">Cultiv8 Wellness</a>
            <ul className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-full left-0 w-full md:w-auto bg-gray-100 md:bg-transparent z-50 md:z-auto shadow-lg md:shadow-none p-4 md:p-0 ${mobileMenuOpen ? 'block' : 'hidden md:flex'}`}>
              <li className="my-2 md:my-0 md:ml-8 text-center md:text-left">
                <a href="#courses" className="font-sans font-semibold text-purple-800 hover:text-yellow-500 transition-colors duration-300">Courses</a>
              </li>
              <li className="my-2 md:my-0 md:ml-8 text-center md:text-left">
                <a href="#pricing" className="font-sans font-semibold text-purple-800 hover:text-yellow-500 transition-colors duration-300">Pricing</a>
              </li>
              <li className="my-2 md:my-0 md:ml-8 text-center md:text-left">
                <a href="#contact" className="font-sans font-semibold text-purple-800 hover:text-yellow-500 transition-colors duration-300">Contact Us</a>
              </li>
              <li className="my-2 md:my-0 md:ml-8 text-center md:text-left">
                <a href="#" className="font-sans font-semibold text-purple-800 hover:text-yellow-500 transition-colors duration-300">Log In</a>
              </li>
            </ul>
            <div className="block md:hidden text-2xl text-purple-800 cursor-pointer" onClick={toggleMobileMenu}>
              <i className="fas fa-bars"></i>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-100 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-purple-800 mb-6 font-serif">Embrace Sacred Touch: Tantra for Deeper Connection</h1>
            <p className="text-xl text-amber-800 mb-8">Unlock the art of mindful massage to unite body, mind, and spirit with your partner, guided by a licensed holistic therapist</p>
            <a href="#courses" className="inline-block px-6 py-3 rounded-full bg-green-200 text-yellow-500 font-sans font-bold hover:bg-purple-800 hover:text-yellow-500 transform hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg">Begin Your Sacred Journey</a>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <div className="bg-green-200 py-6 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-gray-700">Crafted by Rosemary JaQuay, a National Board Certified Massage Therapist with Over 25 Years in Healing Arts</p>
          <p className="text-gray-700">Trusted by Thousands on Their Path to Wellness</p>
        </div>
      </div>

      {/* Course Offerings */}
      <section id="courses" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-800 inline-block pb-2 border-b-2 border-purple-800 font-serif">Your Path to Sacred Intimacy</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-purple-800 flex items-center justify-center text-gray-100 text-5xl">
                <i className="fas fa-hands"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-purple-800 mb-4 font-sans">Sacred Foundations</h3>
                <p>Learn essential tantra techniques to awaken presence, trust, and energy flow between partners.</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-purple-800 flex items-center justify-center text-gray-100 text-5xl">
                <i className="fas fa-wind"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-purple-800 mb-4 font-sans">Divine Flow</h3>
                <p>Master advanced tantric methods to channel vitality and deepen spiritual intimacy, blending massage with breathwork and mindfulness.</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-purple-800 flex items-center justify-center text-gray-100 text-5xl">
                <i className="fas fa-book-open"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-purple-800 mb-4 font-sans">eBook Soul Guides</h3>
                <p>Holistic manuals integrating tantra wisdom, practical exercises, and spiritual insights for ongoing practice at home.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-800 inline-block pb-2 border-b-2 border-purple-800 font-serif">Invest in Your Connection</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-200 rounded-lg overflow-hidden shadow-md hover:transform hover:-translate-y-2 transition-all duration-300 border-2 border-yellow-500 text-center p-8">
              <h3 className="font-serif text-xl text-purple-800 mb-4">Monthly Soul Subscription</h3>
              <div className="text-4xl font-bold text-purple-800 my-4">$29<span className="text-base font-normal text-amber-800">/month</span></div>
              <ul className="text-left mb-6">
                <li className="mb-2 pl-6 relative before:content-['✓'] before:text-yellow-500 before:absolute before:left-0">Ongoing access to all courses</li>
                <li className="mb-2 pl-6 relative before:content-['✓'] before:text-yellow-500 before:absolute before:left-0">Monthly new content updates</li>
                <li className="mb-2 pl-6 relative before:content-['✓'] before:text-yellow-500 before:absolute before:left-0">Community support</li>
                <li className="mb-2 pl-6 relative before:content-['✓'] before:text-yellow-500 before:absolute before:left-0">Guided practice sessions</li>
              </ul>
              <a href="#" className="inline-block px-6 py-3 rounded-full bg-green-200 text-yellow-500 font-sans font-bold hover:bg-purple-800 hover:text-yellow-500 transform hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg">Subscribe Monthly</a>
            </div>
            <div className="bg-green-200 rounded-lg overflow-hidden shadow-md hover:transform hover:-translate-y-2 transition-all duration-300 border-2 border-yellow-500 text-center p-8">
              <h3 className="font-serif text-xl text-purple-800 mb-4">Yearly Soul Subscription</h3>
              <div className="text-4xl font-bold text-purple-800 my-4">$290<span className="text-base font-normal text-amber-800">/year</span></div>
              <ul className="text-left mb-6">
                <li className="mb-2 pl-6 relative before:content-['✓'] before:text-yellow-500 before:absolute before:left-0">Save $58 compared to monthly</li>
                <li className="mb-2 pl-6 relative before:content-['✓'] before:text-yellow-500 before:absolute before:left-0">All monthly benefits included</li>
                <li className="mb-2 pl-6 relative before:content-['✓'] before:text-yellow-500 before:absolute before:left-0">Exclusive seasonal workshops</li>
                <li className="mb-2 pl-6 relative before:content-['✓'] before:text-yellow-500 before:absolute before:left-0">Priority email support</li>
              </ul>
              <a href="#" className="inline-block px-6 py-3 rounded-full bg-green-200 text-yellow-500 font-sans font-bold hover:bg-purple-800 hover:text-yellow-500 transform hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg">Subscribe Yearly</a>
            </div>
            <div className="bg-green-200 rounded-lg overflow-hidden shadow-md hover:transform hover:-translate-y-2 transition-all duration-300 border-2 border-yellow-500 text-center p-8">
              <h3 className="font-serif text-xl text-purple-800 mb-4">Eternal Access Bundle</h3>
              <div className="text-4xl font-bold text-purple-800 my-4">$399<span className="text-base font-normal text-amber-800">/lifetime</span></div>
              <ul className="text-left mb-6">
                <li className="mb-2 pl-6 relative before:content-['✓'] before:text-yellow-500 before:absolute before:left-0">Lifetime entry to all courses</li>
                <li className="mb-2 pl-6 relative before:content-['✓'] before:text-yellow-500 before:absolute before:left-0">All future updates included</li>
                <li className="mb-2 pl-6 relative before:content-['✓'] before:text-yellow-500 before:absolute before:left-0">Special bonus material</li>
                <li className="mb-2 pl-6 relative before:content-['✓'] before:text-yellow-500 before:absolute before:left-0">Exclusive community access</li>
              </ul>
              <a href="#" className="inline-block px-6 py-3 rounded-full bg-green-200 text-yellow-500 font-sans font-bold hover:bg-purple-800 hover:text-yellow-500 transform hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg">Get Lifetime Access</a>
            </div>
          </div>
          <div className="text-center mt-8">
            <h3 className="text-xl text-purple-800 mb-4 font-serif">Gift of Connection</h3>
            <p className="mb-4">Gift certificates starting at $50 to share this sacred journey with loved ones.</p>
            <a href="#" className="inline-block px-6 py-3 rounded-full bg-gray-100 text-yellow-500 border-2 border-yellow-500 font-sans font-bold hover:bg-yellow-500 hover:text-gray-100 transform hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg">Explore Gift Options</a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-800 inline-block pb-2 border-b-2 border-purple-800 font-serif">Voices of the Journey</h2>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-md max-w-2xl mx-auto relative">
            <div className="absolute top-0 left-4 text-6xl text-purple-800 opacity-20 leading-none">"</div>
            <p className="italic text-xl mb-4">Rosemary's tantra course opened a sacred space in our relationship—after 15 years, we feel more connected than ever, body and soul.</p>
            <p className="text-right text-purple-800 font-semibold">- Anonymous Couple</p>
          </div>
        </div>
      </section>

      {/* About the Instructor */}
      <section id="about" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-800 inline-block pb-2 border-b-2 border-purple-800 font-serif">Meet Rosemary JaQuay</h2>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-md flex flex-wrap gap-8">
            <div className="w-full md:w-1/3 min-w-full md:min-w-0">
              <img src="/api/placeholder/400/400" alt="Rosemary JaQuay" className="w-full rounded-lg" />
            </div>
            <div className="w-full md:flex-1 min-w-full md:min-w-0">
              <p className="mb-4">Rosemary JaQuay is a Licensed National Board Certified and California Certified Massage Therapist, Holistic Health Practitioner, Reiki Master, Hypnotherapist, ACE Certified Personal Trainer, Qigong Instructor, and Level 4 Healing Touch practitioner with over 25 years of experience since 1998.</p>
              <p className="mb-4">She founded San Diego Healing Touch in 2011 after earning her Holistic Health Practitioner Certification. Rosemary served as Academic Coordinator and Instructor at Icohs (2015-2018) designing curricula, and now inspires through Cultiv8 Wellness.</p>
              <div className="italic p-4 border-l-4 border-purple-800 bg-opacity-10 bg-amber-800">
                <p>"My mission is propelled by my passion—to educate, inspire, and empower people along their path to wellness. Touch is a sacred bridge to connection. Through tantra massage, I guide couples to align mind, body, and spirit, fostering intimacy with presence, compassion, and respect."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-800 inline-block pb-2 border-b-2 border-purple-800 font-serif">Your Questions, Answered</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            {faqItems.map((item, index) => (
              <div key={index} className="mb-4 rounded-lg overflow-hidden">
                <div 
                  className="bg-green-200 text-purple-800 p-4 cursor-pointer font-semibold flex justify-between items-center"
                  onClick={() => toggleFaqItem(index)}
                >
                  <span>{item.question}</span>
                  <i className={`fas fa-chevron-down transition-transform duration-300 ${activeFaqItem === index ? 'transform rotate-180' : ''}`}></i>
                </div>
                <div className={`bg-gray-100 overflow-hidden transition-all duration-300 ${activeFaqItem === index ? 'max-h-40 p-4' : 'max-h-0'}`}>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-purple-800 text-gray-100 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-100 mb-4 font-serif">Ready to Transform Your Connection?</h2>
          <p className="text-gray-100 mb-8">Begin your sacred journey to deeper intimacy and mindful connection.</p>
          <a href="#courses" className="inline-block px-8 py-4 rounded-full bg-green-200 text-yellow-500 font-sans font-bold text-xl hover:bg-green-200 hover:text-yellow-500 transform hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg">Explore Tantra Courses</a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-800 inline-block pb-2 border-b-2 border-purple-800 font-serif">Connect with Us for Your Journey</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <form>
                <div className="mb-6">
                  <label htmlFor="name" className="block mb-2 text-amber-800">Name</label>
                  <input type="text" id="name" name="name" className="w-full p-3 border border-amber-800 rounded-lg bg-gray-100 text-purple-800 font-serif" required />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 text-amber-800">Email</label>
                  <input type="email" id="email" name="email" className="w-full p-3 border border-amber-800 rounded-lg bg-gray-100 text-purple-800 font-serif" required />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 text-amber-800">Message</label>
                  <textarea id="message" name="message" rows="5" className="w-full p-3 border border-amber-800 rounded-lg bg-gray-100 text-purple-800 font-serif resize-y" required></textarea>
                </div>
                <button type="submit" className="inline-block px-6 py-3 rounded-full bg-green-200 text-yellow-500 font-sans font-bold hover:bg-purple-800 hover:text-yellow-500 transform hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg">Send Message</button>
              </form>
            </div>
            <div className="bg-green-200 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-purple-800 mb-6 font-serif">Our Information</h3>
              <div className="flex mb-4">
                <i className="fas fa-phone text-yellow-500 mr-4 mt-1 text-lg"></i>
                <div>
                  <p>(619) 764-9712</p>
                </div>
              </div>
              <div className="flex mb-4">
                <i className="fas fa-map-marker-alt text-yellow-500 mr-4 mt-1 text-lg"></i>
                <div>
                  <p>10201 Mission Gorge Road, Santee, San Diego County, California, 92071, United States</p>
                  <p className="italic text-sm mt-2">Courses are fully online; this is our practice's home base</p>
                </div>
              </div>
              <div className="flex mb-4">
                <i className="fas fa-globe text-yellow-500 mr-4 mt-1 text-lg"></i>
                <div>
                  <p><a href="https://cultiv8wellness.com/" className="text-purple-800 hover:text-yellow-500 transition-colors duration-300">https://cultiv8wellness.com/</a></p>
                </div>
              </div>
              <div className="flex mb-4">
                <i className="fas fa-envelope text-yellow-500 mr-4 mt-1 text-lg"></i>
                <div>
                  <p><a href="mailto:info@cultiv8wellness.com" className="text-purple-800 hover:text-yellow-500 transition-colors duration-300">info@cultiv8wellness.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-800 text-gray-100 pt-12 pb-4 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-between gap-8 mb-8">
            <div className="flex-1 min-w-max">
              <h3 className="text-xl font-bold text-yellow-500 mb-6 font-serif">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#courses" className="text-gray-100 hover:text-yellow-500 transition-colors duration-300">Courses</a></li>
                <li><a href="#pricing" className="text-gray-100 hover:text-yellow-500 transition-colors duration-300">Pricing</a></li>
                <li><a href="#about" className="text-gray-100 hover:text-yellow-500 transition-colors duration-300">About Rosemary</a></li>
                <li><a href="#faq" className="text-gray-100 hover:text-yellow-500 transition-colors duration-300">FAQ</a></li>
                <li><a href="#contact" className="text-gray-100 hover:text-yellow-500 transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
            <div className="flex-1 min-w-max">
              <h3 className="text-xl font-bold text-yellow-500 mb-6 font-serif">Legal</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-100 hover:text-yellow-500 transition-colors duration-300">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-100 hover:text-yellow-500 transition-colors duration-300">Terms of Service</a></li>
                <li><a href="#" className="text-gray-100 hover:text-yellow-500 transition-colors duration-300">Refund Policy</a></li>
              </ul>
            </div>
            <div className="flex-1 min-w-max">
              <h3 className="text-xl font-bold text-yellow-500 mb-6 font-serif">Follow Us</h3>
              <div className="flex justify-center gap-4 mt-4">
                <a href="#" className="text-gray-100 text-2xl hover:text-yellow-500 transition-colors duration-300">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-100 text-2xl hover:text-yellow-500 transition-colors duration-300">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-100 text-2xl hover:text-yellow-500 transition-colors duration-300">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#" className="text-gray-100 text-2xl hover:text-yellow-500 transition-colors duration-300">
                  <i className="fab fa-pinterest"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-sm text-gray-100 opacity-70">
            <p>© {new Date().getFullYear()} Cultiv8 Wellness. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TantraWebsite;
