export default function DulaCrushDanceStudio() {
  const classes = [
    {
      title: 'Ballet',
      description: 'Graceful techniques and classical foundations for all skill levels.',
      price: '$80 / Month',
      image:
        'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Contemporary',
      description: 'Expressive movement blending emotion, creativity, and modern flow.',
      price: '$90 / Month',
      image:
        'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Hip Hop',
      description: 'High-energy street dance styles with rhythm and confidence.',
      price: '$75 / Month',
      image:
        'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Salsa & Latin',
      description: 'Passionate partner dances filled with vibrant Latin energy.',
      price: '$85 / Month',
      image:
        'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  const instructors = [
    {
      name: 'Sophia Carter',
      specialty: 'Ballet Director',
      bio: '15+ years of professional ballet performance and coaching experience.',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Marcus Rivera',
      specialty: 'Hip Hop Choreographer',
      bio: 'Award-winning street dancer bringing dynamic stage presence and creativity.',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Elena Rossi',
      specialty: 'Contemporary Instructor',
      bio: 'International contemporary artist focused on expressive storytelling through dance.',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop',
    },
  ];

  const testimonials = [
    {
      name: 'Amelia Brown',
      review:
        'The atmosphere is inspiring and the instructors are incredibly supportive. I have grown so much as a dancer.',
    },
    {
      name: 'Jason Lee',
      review:
        'Dula Crush Dancing Studio helped me build confidence and perform on stage for the first time.',
    },
    {
      name: 'Nina Silva',
      review:
        'Beautiful studio, professional teachers, and amazing energy in every class.',
    },
  ];

  return (
    <div className="bg-[#0c0c0c] text-white font-sans scroll-smooth">
      {/* Navigation */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-yellow-700/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-[0.25em] text-yellow-400">
            DULA CRUSH
          </h1>

          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wide">
            <a href="#about" className="hover:text-yellow-400 transition-colors">
              About
            </a>
            <a href="#classes" className="hover:text-yellow-400 transition-colors">
              Classes
            </a>
            <a href="#schedule" className="hover:text-yellow-400 transition-colors">
              Schedule
            </a>
            <a href="#instructors" className="hover:text-yellow-400 transition-colors">
              Instructors
            </a>
            <a href="#contact" className="hover:text-yellow-400 transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center relative bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.85)), url('https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="text-center px-6 max-w-4xl">
          <p className="uppercase tracking-[0.4em] text-yellow-400 mb-4 text-sm">
            Premium Dance Experience
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            DULA WITH D CRUSH
            <span className="block text-yellow-400">DANCING STUDIO</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Discover elegance, rhythm, and passion through world-class dance training in a luxurious studio environment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#classes"
              className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform"
            >
              Explore Classes
            </a>

            <a
              href="#contact"
              className="border border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-all"
            >
              Book Trial Class
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              ['10+', 'Years Experience'],
              ['500+', 'Students'],
              ['20+', 'Weekly Classes'],
              ['15+', 'Awards'],
            ].map(([number, label]) => (
              <div
                key={label}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm"
              >
                <h3 className="text-3xl font-bold text-yellow-400">{number}</h3>
                <p className="text-gray-300 text-sm mt-2">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 bg-[#121212]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="uppercase text-yellow-400 tracking-[0.3em] text-sm mb-4">
              About Us
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Where Passion Meets Performance
            </h2>

            <p className="text-gray-300 leading-8 mb-6">
              Dula With D Crush Dancing Studio is a creative home for dancers of all ages and skill levels. Our mission is to inspire confidence, artistic expression, and excellence through movement.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-black/40 border border-yellow-700/20 rounded-2xl p-6">
                <h3 className="text-yellow-400 text-3xl font-bold mb-2">20+</h3>
                <p className="text-gray-300">Professional Instructors</p>
              </div>

              <div className="bg-black/40 border border-yellow-700/20 rounded-2xl p-6">
                <h3 className="text-yellow-400 text-3xl font-bold mb-2">50+</h3>
                <p className="text-gray-300">Live Performances</p>
              </div>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1524594154908-eddba9e4a0f4?q=80&w=1200&auto=format&fit=crop"
            alt="Dance Studio"
            className="rounded-3xl shadow-2xl border border-yellow-700/20"
          />
        </div>
      </section>

      {/* Classes */}
      <section id="classes" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase text-yellow-400 tracking-[0.3em] text-sm mb-4">
              Our Programs
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">Dance Classes</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {classes.map((item) => (
              <div
                key={item.title}
                className="bg-[#151515] border border-yellow-700/20 rounded-3xl overflow-hidden hover:-translate-y-2 transition-transform duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-64 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-300 mb-6 leading-7">{item.description}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-yellow-400 font-semibold">{item.price}</span>
                    <button className="border border-yellow-400 px-4 py-2 rounded-full text-sm hover:bg-yellow-400 hover:text-black transition-all">
                      Join Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="py-24 px-6 bg-[#121212]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="uppercase text-yellow-400 tracking-[0.3em] text-sm mb-4">
              Weekly Schedule
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">Class Timetable</h2>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-yellow-700/20 bg-black/30">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-yellow-700/20 text-yellow-400">
                  <th className="p-5">Day</th>
                  <th className="p-5">Morning</th>
                  <th className="p-5">Afternoon</th>
                  <th className="p-5">Evening</th>
                </tr>
              </thead>

              <tbody>
                {[
                  ['Monday', 'Ballet', 'Contemporary', 'Hip Hop'],
                  ['Tuesday', 'Salsa', 'Ballet', 'Contemporary'],
                  ['Wednesday', 'Hip Hop', 'Salsa', 'Ballet'],
                  ['Thursday', 'Contemporary', 'Hip Hop', 'Salsa'],
                  ['Friday', 'Ballet', 'Contemporary', 'Performance Training'],
                ].map((row) => (
                  <tr key={row[0]} className="border-b border-white/10 hover:bg-white/5">
                    {row.map((cell) => (
                      <td key={cell} className="p-5 text-gray-300">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section id="instructors" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase text-yellow-400 tracking-[0.3em] text-sm mb-4">
              Meet The Team
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">Expert Instructors</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {instructors.map((person) => (
              <div
                key={person.name}
                className="bg-[#151515] rounded-3xl overflow-hidden border border-yellow-700/20"
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className="h-80 w-full object-cover"
                />

                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2">{person.name}</h3>
                  <p className="text-yellow-400 mb-4">{person.specialty}</p>
                  <p className="text-gray-300 leading-7">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-[#121212]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase text-yellow-400 tracking-[0.3em] text-sm mb-4">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            What Our Students Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="bg-black/40 border border-yellow-700/20 rounded-3xl p-8"
              >
                <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                <p className="text-gray-300 leading-8 mb-6">“{item.review}”</p>
                <h3 className="font-semibold text-lg">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="uppercase text-yellow-400 tracking-[0.3em] text-sm mb-4">
              Contact Us
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start Your Dance Journey Today
            </h2>

            <p className="text-gray-300 leading-8 mb-10">
              Join our vibrant dance community and unlock your full potential through movement, creativity, and performance.
            </p>

            <div className="space-y-5 text-gray-300">
              <p>📍 123 Dance Avenue, Colombo, Sri Lanka</p>
              <p>📞 +94 77 123 4567</p>
              <p>✉️ info@dulacrushstudio.com</p>
              <p>⏰ Mon - Sat: 8:00 AM - 9:00 PM</p>
            </div>
          </div>

          <form className="bg-[#151515] border border-yellow-700/20 rounded-3xl p-8 space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-yellow-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-yellow-400"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-yellow-400"
            />

            <button
              type="submit"
              className="bg-yellow-400 text-black font-semibold px-8 py-4 rounded-full hover:scale-105 transition-transform"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-yellow-700/20 py-8 px-6 bg-black text-center text-gray-400">
        <p>© 2026 Dula With D Crush Dancing Studio. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
