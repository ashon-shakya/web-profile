import { useState, useEffect } from "react";

// Navigation Item Component
const NavItem = ({ href, icon, text, isActive }) => (
  <a
    href={href}
    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
      isActive
        ? "bg-orange-500 text-white"
        : "text-orange-400 hover:text-orange-300"
    }`}
  >
    <i className={`bx ${icon} text-xl`}></i>
    <span>{text}</span>
  </a>
);

// Social Link Component
const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-orange-400 hover:text-orange-300 transition-colors duration-300 transform hover:scale-110"
  >
    <i className={`bx ${icon} text-2xl`}></i>
  </a>
);

// Skill Item Component
const SkillItem = ({ skill }) => (
  <li className="bg-gray-800 text-orange-400 px-4 py-2 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
    {skill}
  </li>
);

// Project Card Component
const ProjectCard = ({ title, description, imgSrc, href }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img
        src={imgSrc}
        alt={title}
        className="w-full h-40 object-contain bg-black p-4"
      />
      <div className="p-6">
        <h4 className="text-xl font-semibold text-orange-400">{title}</h4>
        <p className="text-gray-300 mt-2">{description}</p>
      </div>
    </a>
  </div>
);

// Render Card Component
const RenderCard = ({ title, description, imgSrc }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
    <img src={imgSrc} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h4 className="text-xl font-semibold text-orange-400">{title}</h4>
      <p className="text-gray-300 mt-2">{description}</p>
    </div>
  </div>
);

// Resume Item Component
const ResumeItem = ({ title, period, institution, details }) => (
  <div className="mb-6">
    <h4 className="text-xl font-semibold text-orange-400">{title}</h4>
    <p className="text-gray-300">{period}</p>
    <p className="text-gray-300 italic">{institution}</p>
    {details && (
      <ul className="list-disc list-inside text-gray-300 mt-2">
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    )}
  </div>
);

// Main App Component
const App = () => {
  const [activeSection, setActiveSection] = useState("hero");

  // Handle scroll to update active navigation item
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "skills",
        "resume",
        "projects",
        "renders",
        "contact",
      ];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Navigation */}
      <header className="fixed top-0 left-0 w-64 h-full bg-gray-900 p-6 flex flex-col space-y-4 z-50">
        <h3 className="text-2xl font-bold text-orange-400">Ashon Shakya</h3>
        <nav className="flex flex-col space-y-2">
          <NavItem
            href="#hero"
            icon="bx-home"
            text="Home"
            isActive={activeSection === "hero"}
          />
          <NavItem
            href="#about"
            icon="bx-user"
            text="About"
            isActive={activeSection === "about"}
          />
          <NavItem
            href="#skills"
            icon="bx-universal-access"
            text="Skills"
            isActive={activeSection === "skills"}
          />
          <NavItem
            href="#resume"
            icon="bx-file-blank"
            text="Resume"
            isActive={activeSection === "resume"}
          />
          <NavItem
            href="#projects"
            icon="bx-server"
            text="Projects"
            isActive={activeSection === "projects"}
          />
          <NavItem
            href="#renders"
            icon="bx-book-content"
            text="Renders"
            isActive={activeSection === "renders"}
          />
          <NavItem
            href="#contact"
            icon="bx-envelope"
            text="Contact"
            isActive={activeSection === "contact"}
          />
        </nav>
      </header>

      {/* Main Content */}
      <main className="ml-64">
        {/* Hero Section */}
        <section
          id="hero"
          className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black"
        >
          <div className="text-center animate-fade-in">
            <h1 className="text-6xl font-bold text-orange-400">Ashon Shakya</h1>
            <p className="text-3xl mt-4 text-gray-300">
              I'm a{" "}
              <span className="text-orange-400">
                Creator, Developer, Freelancer
              </span>
            </p>
            <div className="flex justify-center space-x-6 mt-6">
              <SocialLink
                href="https://www.instagram.com/hellion_de_lord/"
                icon="bxl-instagram"
              />
              <SocialLink
                href="https://www.linkedin.com/in/ashon-shakya"
                icon="bxl-linkedin"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-orange-400 mb-8 text-center animate-fade-in">
              About
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex justify-center">
                <img
                  src="assets/img/profile-img.jpg"
                  alt="Profile"
                  className="rounded-full w-64 h-64 object-cover shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="animate-fade-in">
                <p className="text-gray-300 mb-4">
                  Versatile Software Engineer with 7+ years' experience in
                  JavaScript, Node.js, TypeScript, Python, React. Led
                  development at a successful navigation startup. Skilled in
                  APIs, web plugins, agile methods, technical writing. Blend
                  coding, design, 3D rendering for creative solutions. Seeking
                  opportunities to apply diverse abilities in a dynamic team.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>
                    <strong>Website:</strong> ashonshakya.com.np
                  </li>
                  <li>
                    <strong>City:</strong> Harris Park, NSW
                  </li>
                  <li>
                    <strong>Freelance:</strong> Available
                  </li>
                  <li>
                    <strong>Degree:</strong> Bachelor's Degree in Computer
                    Engineering
                  </li>
                  <li>
                    <strong>Email:</strong> dingosloth@gmail.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-8 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-orange-400 mb-8 text-center animate-fade-in">
              Skills
            </h2>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Node.js",
                "Python",
                "React.js",
                "Babylon.js",
                "HTML",
                "CSS",
                "JavaScript",
                "PHP (Laravel)",
                "Progress OpenEdge 4GL",
                "MongoDB",
                "MySQL",
                "PostgreSQL",
                "Docker",
                "Git",
                "CI/CD, Ansible",
                "WordPress/CMS",
                "Blender",
                "Photoshop",
                "InDesign",
                "Illustrator",
                "Premier Pro",
              ].map((skill) => (
                <SkillItem key={skill} skill={skill} />
              ))}
            </ul>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-orange-400 mb-8 text-center animate-fade-in">
              Resume
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-orange-400 mb-4">
                  Education
                </h3>
                <ResumeItem
                  title="Bachelor in Computer Engineering"
                  period="2010 - 2014"
                  institution="Kathmandu Engineering College, Nepal"
                />
                <ResumeItem
                  title="Intermediate in Science"
                  period="2008 - 2010"
                  institution="St. Xavier's College, Nepal"
                />
                <ResumeItem
                  title="School Leaving Certificate"
                  period="1997 - 2008"
                  institution="St. Xavier's School, Nepal"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-orange-400 mb-4">
                  Work Experience
                </h3>
                <ResumeItem
                  title="Senior Software Engineer"
                  period="2023 - Present"
                  institution="Galli Express Pvt. Ltd., Nepal"
                  details={[
                    "Lead full-cycle API-to-UI development, including requirements, coding, deployment, and support.",
                    "Analysed client needs for innovative navigation solutions.",
                    "Employed Node.js and TypeScript for efficient API development.",
                  ]}
                />
                <ResumeItem
                  title="Senior Software Engineer | Technical Lead"
                  period="2019 - 2023"
                  institution="Javra Software, Nepal / Netherlands"
                  details={[
                    "Led agile teams in SaaS development and R&D Department.",
                    "Implemented microservices with Node, TypeScript, Python, and MongoDB.",
                    "Integrated third-party APIs to enhance user experience.",
                  ]}
                />
                <ResumeItem
                  title="Software Engineer"
                  period="2016 - 2019"
                  institution="Javra Software, Nepal / Netherlands"
                  details={[
                    "Developed customized ERP systems based on customer requirements.",
                    "Led migration of legacy systems to modern HTML5 web platforms.",
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-8 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-orange-400 mb-8 text-center animate-fade-in">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ProjectCard
                title="Galli Maps"
                description="A navigation application for streets of Nepal."
                imgSrc="./assets/img/gallimaps_logo.png"
                href="https://www.gallimaps.com"
              />
              <ProjectCard
                title="Health Research and Action"
                description="A private company registered in Nepal for health research."
                imgSrc="./assets/img/health_research_logo.png"
                href="https://healthactionandresearch.com"
              />
              <ProjectCard
                title="The Xavierian"
                description="Designed annual magazine for St. Xavier’s School."
                imgSrc="./assets/img/sxg_logo.png"
                href="https://sxg.edu.np"
              />
            </div>
            <div className="mt-8">
              <iframe
                src="https://ashonshakya.com.np/solarsystem/"
                className="w-full h-96 rounded-lg shadow-lg"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-8">
              <iframe
                src="https://ashonshakya.com.np/photo_frame/"
                className="w-full h-96 rounded-lg shadow-lg"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* Renders Section */}
        <section id="renders" className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-orange-400 mb-8 text-center animate-fade-in">
              My Renders
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Bowl Render",
                  description: "The Bowl",
                  imgSrc: "assets/img/portfolio/bowl2.png",
                },
                {
                  title: "The Bulb",
                  description: "Bulb Render",
                  imgSrc: "assets/img/portfolio/bulb.png",
                },
                {
                  title: "The Chair",
                  description: "Chair Render",
                  imgSrc: "assets/img/portfolio/chair11.png",
                },
                {
                  title: "The Couch",
                  description: "Couch Render",
                  imgSrc: "assets/img/portfolio/couch2.png",
                },
                {
                  title: "The Curtain",
                  description: "Curtain Render",
                  imgSrc: "assets/img/portfolio/curtain.png",
                },
                {
                  title: "The Donut",
                  description: "Donut Render",
                  imgSrc: "assets/img/portfolio/donut4.png",
                },
              ].map((render) => (
                <RenderCard
                  key={render.title}
                  title={render.title}
                  description={render.description}
                  imgSrc={render.imgSrc}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-8 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-orange-400 mb-8 text-center animate-fade-in">
              Contact
            </h2>
            <div className="text-center text-gray-300 space-y-4">
              <p>
                <i className="bi bi-geo-alt mr-2"></i>Harris Park, NSW 2150
              </p>
              <p>
                <i className="bi bi-envelope mr-2"></i>dingosloth@gmail.com
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 text-center">
        <h3 className="text-2xl font-bold text-orange-400">Ashon Shakya</h3>
        <p className="text-gray-300 mt-2">
          Empowering innovation through technology and design.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <SocialLink
            href="https://www.instagram.com/hellion_de_lord/"
            icon="bxl-instagram"
          />
          <SocialLink
            href="https://www.linkedin.com/in/ashon-shakya"
            icon="bxl-linkedin"
          />
        </div>
        <p className="text-gray-300 mt-4">
          2024 © Copyright <strong>Ashon Shakya</strong>. All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default App;
