export default function Portfolio() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      image: '/portfolio/ecommerce.png',
      description: 'Modern online store with seamless checkout experience',
    },
    {
      title: 'Brand Redesign',
      category: 'Branding',
      image: '/portfolio/brand-redesign.png',
      description: 'Complete brand overhaul for luxury fashion brand',
    },
    {
      title: 'Mobile App',
      category: 'App Development',
      image: '/portfolio/mobile-app.png',
      description: 'Fitness tracking app with social features',
    },
    {
      title: 'Marketing Campaign',
      category: 'Digital Marketing',
      image: '/portfolio/marketing-campaign.png',
      description: 'Multi-channel campaign driving 300% ROI',
    },
    {
      title: 'SaaS Dashboard',
      category: 'UI/UX Design',
      image: '/portfolio/saas-dashboard.png',
      description: 'Intuitive analytics platform for data teams',
    },
    {
      title: 'Content Strategy',
      category: 'Content Marketing',
      image: '/portfolio/content-strategy.png',
      description: 'SEO-optimized content that increased organic traffic by 250%',
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase mb-2">
            Our Work
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Projects We're Proud Of
          </h3>
          <p className="text-xl text-gray-600">
            Explore our portfolio of successful projects across various industries
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback to gradient if image doesn't exist
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm">{project.description}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-sm font-semibold text-indigo-600 mb-2">
                  {project.category}
                </div>
                <h4 className="text-xl font-bold text-gray-900">{project.title}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to start your own success story?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold shadow-xl shadow-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/40 transition-all hover:scale-105"
          >
            <span>Start Your Project</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
