// Main App Component
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeFaq, setActiveFaq] = React.useState(null);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };
  
  // FAQ Data
  const faqData = [
    {
      question: "What is tantra massage and how can it benefit our relationship?",
      answer: "Tantra massage is an ancient practice that combines mindfulness, breathwork, and touch to create a deeper connection between partners. It can enhance intimacy, improve communication, reduce stress, and create a stronger spiritual bond in your relationship."
    },
    {
      question: "Do we need prior experience with massage or tantra?",
      answer: "No prior experience is needed. Our course is designed for beginners and gradually builds your skills. The techniques are taught step-by-step with clear demonstrations and guidance."
    },
    {
      question: "How much time should we dedicate to practice?",
      answer: "We recommend at least 1-2 hours per week for practice. The more you practice together, the more benefits you'll experience. Even short, regular sessions can make a significant difference in your connection."
    },
    {
      question: "Is this course appropriate for all couples?",
      answer: "Yes, our course is designed to be inclusive for all couples regardless of age, experience level, or physical abilities. The techniques can be adapted to suit your comfort level and needs."
    }
  ];
  
  // Pricing Data
  const pricingData = [
    {
      title: "Monthly Journey",
      price: "$49.99",
      period: "per month",
      features: [
        "Full access to course content",
        "Monthly live Q&A sessions",
        "Community forum access",
        "New content as released"
      ],
      cta: "Start Monthly",
      highlighted: false
    },
    {
      title: "Annual Devotion",
      price: "$399.99",
      period: "per year",
      features: [
        "Everything in Monthly Journey",
        "2 months free",
        "Private instructor feedback",
        "Downloadable guides",
        "Bonus meditations"
      ],
      cta: "Save With Annual",
      highlighted: true
    },
    {
      title: "Lifetime Enlightenment",
      price: "$899.99",
      period: "one-time payment",
      features: [
        "Everything in Annual Devotion",
        "Lifetime course access",
        "All future updates and additions",
        "Exclusive retreats access",
        "1-on-1 consultation with Rosemary"
      ],
      cta: "Choose Lifetime",
      highlighted: false
    }
  ];
  
  // Course Offerings
  const courseOfferings = [
    {
      title: "Sacred Foundations",
      description: "Begin your journey with essential tantra massage techniques. Learn the fundamentals of touch, breathing, and energy flow.",
      features: ["4 comprehensive modules", "10 guided practices", "Beginner-friendly approach"]
    },
    {
      title: "Divine Flow",
      description: "Advance your practice with deeper techniques focusing on energy channels, chakra alignment, and heightened awareness.",
      features: ["6 immersive modules", "Advanced techniques", "Spiritual connection practices"]
    },
    {
      title: "Soul Guides eBook",
      description: "Complement your learning with our detailed eBook containing illustrations, explanations, and additional exercises.",
      features: ["Downloadable resource", "Visual references", "Supplementary practices"]
    }
  ];

  return (
    <React.Fragment>
      {/* Navigation */}
      <nav className="bg-amethyst text-white">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">Cultiv8 Wellness</div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-white focus:outline-none">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                  ) : (
                    <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                  )}
                </svg>
              </button>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              <a href="#course" className="hover:text-golden transition duration-200">Course Details</a>
              <a href="#pricing" className="hover:text-golden transition duration-200">Pricing</a>
              <a href="#instructor" className="hover:text-golden transition duration-200">Instructor</a>
              <a href="#contact" className="hover:text-golden transition duration-200">Contact Us</a>
              <a href="#" className="bg-golden text-amethyst px-4 py-1 rounded hover:bg-opacity-90 transition duration-200">Log In</a>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-2 py-2 space-y-2">
              <a href="#course" className="block hover:text-golden transition duration-200">Course Details</a>
              <a href="#pricing" className="block hover:text-golden transition duration-200">Pricing</a>
              <a href="#instructor" className="block hover:text-golden transition duration-200">Instructor</a>
              <a href="#contact" className="block hover:text-golden transition duration-200">Contact Us</a>
              <a href="#" className="block bg-golden text-amethyst px-4 py-1 rounded hover:bg-opacity-90 transition duration-200 w-full text-center mt-2">Log In</a>
            </div>
          )}
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-amethyst to-lotus text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow">Deepen Your Connection Through Sacred Touch</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-sand">Discover the transformative power of tantra massage designed specifically for couples seeking a deeper intimacy.</p>
          <div className="mb-10">
            <a href="#pricing" className="bg-golden text-amethyst px-6 py-3 rounded-lg font-bold text-lg hover:bg-opacity-90 transition duration-200 inline-block">Begin Your Sacred Journey</a>
          </div>
          <div className="mt-12 bg-lotus bg-opacity-20 p-4 rounded-lg max-w-4xl mx-auto">
            <div className="aspect-w-16 aspect-h-9">
              <img src="/api/placeholder/800/450" alt="Couples tantra massage" className="rounded-lg object-cover w-full h-full"/>
            </div>
          </div>
        </div>
      </section>
      
      {/* Course Offerings */}
      <section id="course" className="py-16 bg-lotus">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-amethyst text-center mb-12">Our Sacred Offerings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courseOfferings.map((course, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg">
                <div className="bg-sage p-4">
                  <h3 className="text-2xl font-bold text-amethyst">{course.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-sand mb-4">{course.description}</p>
                  <ul className="space-y-2">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="h-5 w-5 text-golden mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                    </a>
                    <a href="#" className="text-white hover:text-golden transition duration-200">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-t from-amethyst to-lotus text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">Begin Your Sacred Journey Today</h2>
          <p className="text-sand max-w-2xl mx-auto mb-8">Transform your relationship through the ancient wisdom of tantra. Learn techniques that will deepen your connection for years to come.</p>
          <a href="#pricing" className="bg-golden text-amethyst px-8 py-3 rounded-lg font-bold text-lg hover:bg-opacity-90 transition duration-200 inline-block">Start Your Journey</a>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-amethyst text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Cultiv8 Wellness</h3>
              <p className="text-sm opacity-75">Specializing in couple's intimacy through mindful tantra practices and holistic relationship wellness.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm opacity-75 hover:opacity-100 hover:text-golden transition duration-200">Home</a></li>
                <li><a href="#course" className="text-sm opacity-75 hover:opacity-100 hover:text-golden transition duration-200">Courses</a></li>
                <li><a href="#pricing" className="text-sm opacity-75 hover:opacity-100 hover:text-golden transition duration-200">Pricing</a></li>
                <li><a href="#instructor" className="text-sm opacity-75 hover:opacity-100 hover:text-golden transition duration-200">About Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm opacity-75 hover:opacity-100 hover:text-golden transition duration-200">FAQ</a></li>
                <li><a href="#" className="text-sm opacity-75 hover:opacity-100 hover:text-golden transition duration-200">Privacy Policy</a></li>
                <li><a href="#" className="text-sm opacity-75 hover:opacity-100 hover:text-golden transition duration-200">Terms of Service</a></li>
                <li><a href="#contact" className="text-sm opacity-75 hover:opacity-100 hover:text-golden transition duration-200">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-sm opacity-75 mb-2">Subscribe for tips and special offers.</p>
              <div className="flex">
                <input type="email" placeholder="Your email" className="p-2 text-sm rounded-l bg-white bg-opacity-10 border border-white border-opacity-20 focus:outline-none focus:border-golden flex-grow" />
                <button className="bg-golden text-amethyst px-3 rounded-r text-sm font-medium">Join</button>
              </div>
            </div>
          </div>
          <div className="border-t border-white border-opacity-20 mt-8 pt-8 text-center text-sm opacity-75">
            <p>&copy; {new Date().getFullYear()} Cultiv8 Wellness. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

// Render the app
ReactDOM.render(<App />, document.getElementById('root'));
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-sage bg-opacity-30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-amethyst text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button 
                  className="w-full text-left p-4 focus:outline-none flex justify-between items-center"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-amethyst">{faq.question}</span>
                  <svg className={`h-5 w-5 text-golden transform ${activeFaq === index ? 'rotate-180' : ''} transition-transform duration-200`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {activeFaq === index && (
                  <div className="p-4 pt-0 text-sand">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-lotus">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-amethyst text-center mb-4">Investment in Your Connection</h2>
          <p className="text-center text-sand mb-12 max-w-2xl mx-auto">Choose the perfect plan to begin your sacred journey together and transform your relationship.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingData.map((plan, index) => (
              <div key={index} className={`${plan.highlighted ? 'bg-sage bg-opacity-20 border-2 border-golden transform md:-translate-y-4' : 'bg-white'} rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg relative`}>
                {plan.highlighted && (
                  <div className="absolute top-0 inset-x-0 bg-golden text-amethyst text-center py-1 font-medium">Most Popular</div>
                )}
                <div className={`p-6 ${plan.highlighted ? 'pt-8' : ''}`}>
                  <h3 className="text-xl font-bold text-amethyst mb-4">{plan.title}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-amethyst">{plan.price}</span>
                    <span className="text-sand text-sm ml-1">{plan.period}</span>
                  </div>
                  <ul className="mb-8 space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="h-5 w-5 text-golden mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sand">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="#" 
                    className={`block text-center py-2 px-4 rounded font-medium transition duration-200 
                      ${plan.highlighted 
                        ? 'bg-golden text-amethyst hover:bg-opacity-90' 
                        : 'bg-amethyst text-white hover:bg-opacity-90'}`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Instructor Section */}
      <section id="instructor" className="py-16 bg-sand bg-opacity-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <img src="/api/placeholder/300/300" alt="Rosemary JaQuay" className="rounded-full w-48 h-48 mx-auto object-cover border-4 border-sage"/>
            </div>
            <div className="md:w-2/3 md:pl-12">
              <h2 className="text-3xl font-bold text-amethyst mb-4">Meet Your Guide: Rosemary JaQuay</h2>
              <p className="text-sand mb-4">Licensed therapist with over 15 years of experience in couples therapy and tantric practices. Rosemary has helped hundreds of couples rediscover intimacy and connection through her holistic approach to relationship wellness.</p>
              <p className="text-sand mb-4">Her philosophy centers around the belief that physical touch, when combined with mindful intention and spiritual awareness, can become a profound pathway to healing and deepening relationships.</p>
              <div className="flex space-x-3 mt-6">
                <span className="bg-amethyst text-white px-3 py-1 rounded-full text-sm">Certified Therapist</span>
                <span className="bg-amethyst text-white px-3 py-1 rounded-full text-sm">Tantra Expert</span>
                <span className="bg-amethyst text-white px-3 py-1 rounded-full text-sm">Author</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-lotus">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-amethyst text-center mb-12">What Couples Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex text-golden mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sand mb-4">"This course transformed our relationship. We've discovered a level of intimacy we never thought possible. The techniques are easy to follow and beautifully presented."</p>
              <div className="font-medium text-amethyst">David & Sarah, Together 8 years</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex text-golden mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sand mb-4">"As a couple in our 50s, we were looking for ways to reconnect. Rosemary's gentle guidance and the course's spiritual focus made this a comfortable and deeply rewarding experience."</p>
              <div className="font-medium text-amethyst">Michael & Jennifer, Together 25 years</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex text-golden mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sand mb-4">"We were skeptical at first, but the course exceeded our expectations. The combination of practical techniques and spiritual elements helped us develop a whole new language of touch."</p>
              <div className="font-medium text-amethyst">Alex & Jamie, Together 3 years</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16 bg-amethyst text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Connect With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1 text-sm">Your Name</label>
                  <input type="text" id="name" className="w-full p-2 rounded bg-white bg-opacity-10 border border-white border-opacity-20 focus:outline-none focus:border-golden" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1 text-sm">Email Address</label>
                  <input type="email" id="email" className="w-full p-2 rounded bg-white bg-opacity-10 border border-white border-opacity-20 focus:outline-none focus:border-golden" />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1 text-sm">Your Message</label>
                  <textarea id="message" rows="4" className="w-full p-2 rounded bg-white bg-opacity-10 border border-white border-opacity-20 focus:outline-none focus:border-golden"></textarea>
                </div>
                <button type="submit" className="bg-golden text-amethyst px-6 py-2 rounded font-medium hover:bg-opacity-90 transition duration-200">Send Message</button>
              </form>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Direct Contact</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="h-6 w-6 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <div>
                    <div className="font-medium">Email Us</div>
                    <a href="mailto:contact@cultiv8wellness.com" className="text-golden hover:underline">contact@cultiv8wellness.com</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <div>
                    <div className="font-medium">Call Us</div>
                    <a href="tel:+18005551234" className="text-golden hover:underline">(800) 555-1234</a>
                  </div>
                </div>
                <div className="pt-4">
                  <div className="font-medium mb-2">Follow Us</div>
                  <div className="flex space-x-4">
                    <a href="#" className="text-white hover:text-golden transition duration-200">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                      </svg>
                    </a>
                    <a href="#" className="text-white hover:text-golden transition duration-200">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a href="#" className="text-white hover:text-golden transition duration-200">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                      </svg>
