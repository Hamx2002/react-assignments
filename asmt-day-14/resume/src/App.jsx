function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold text-blue-800">HAMDAN AHMAD</h1>
              <p className="text-lg text-blue-600 mt-1">Web Developer</p>
            </div>
            <nav className="mt-4 md:mt-0">
              <ul className="flex flex-wrap justify-center gap-6">
                <li>
                  <a
                    href="#profile"
                    className="hover:text-blue-600 font-medium"
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="hover:text-blue-600 font-medium"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#education"
                    className="hover:text-blue-600 font-medium"
                  >
                    Education
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-blue-600 font-medium"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3">
              <h2 className="text-4xl font-bold mb-4 text-blue-900">
                Hi, I'm Hamdan Ahmad
              </h2>
              <p className="text-xl text-gray-700 mb-6">
                A passionate Web Developer with a foundation in Electronics and
                Communication Engineering. I build efficient, user-focused
                applications with clean and scalable code.
              </p>
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg inline-block"
              >
                Get In Touch
              </a>
            </div>
            <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
              <div className="w-48 h-48 bg-blue-200 rounded-full flex items-center justify-center">
                <i className="fas fa-user text-blue-600 text-8xl"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        {/* Profile Section */}
        <section id="profile" className="mb-16">
          <h2 className="section-title">Profile</h2>
          <div className="card">
            <p className="text-lg leading-relaxed">
              Results-driven Computer Science enthusiast with a foundation in
              Electronics and Communication Engineering. Skilled in modern web
              frameworks and backend development, with hands-on experience in
              building efficient, user-focused applications. Passionate about
              solving real-world problems through clean, scalable, and
              innovative code.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-16">
          <h2 className="section-title">Projects</h2>

          <div className="card">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-blue-800">
                Email Reminder App
              </h3>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                2023
              </span>
            </div>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>Designed and developed an Android application</li>
              <li>Implemented email parsing functionality</li>
              <li>Integrated email reminder features</li>
            </ul>
          </div>

          <div className="card">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-blue-800">
                Automatic Fare Collection in Public Transport
              </h3>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                2024
              </span>
            </div>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>Designed and developed a webpage</li>
              <li>Integrated payment gateway APIs</li>
              <li>Integrated QR code technology</li>
            </ul>
          </div>
        </section>

        {/* Internships Section */}
        <section id="internships" className="mb-16">
          <h2 className="section-title">Internships</h2>
          <div className="card">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-blue-800">
                Project Engineer
              </h3>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                2022
              </span>
            </div>
            <p className="text-lg font-medium text-gray-700 mb-3">
              National Small Industries Corporation Ltd, Chennai
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Assisting with ongoing embedded systems projects</li>
              <li>Contributing to the design and development</li>
              <li>Involvement in the integration of hardware components</li>
            </ul>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-16">
          <h2 className="section-title">Education</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="text-xl font-bold text-blue-800">BE ECE</h3>
              <p className="text-lg font-medium text-gray-700 mt-2">
                Bannari Amman Institute of Technology
              </p>
              <p className="text-gray-600">2020 - 2024</p>
              <div className="mt-3">
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full">
                  GPA: 7.2
                </span>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-blue-800">HSE</h3>
              <p className="text-lg font-medium text-gray-700 mt-2">
                Gandhi Matric. Hi. Sec. School
              </p>
              <p className="text-gray-600">2018 - 2020</p>
              <div className="mt-3">
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full">
                  Score: 69.6%
                </span>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-blue-800">SSLC</h3>
              <p className="text-lg font-medium text-gray-700 mt-2">
                Gandhi Matric. Hi. Sec. School
              </p>
              <p className="text-gray-600">2017 - 2018</p>
              <div className="mt-3">
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full">
                  Score: 86.4%
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Languages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Skills */}
          <section>
            <h2 className="section-title">Skills</h2>
            <div className="card">
              <div className="flex flex-wrap gap-3">
                {[
                  "JavaScript",
                  "Object-Oriented Programming",
                  "RDBMS (SQL)",
                  "Web Technologies",
                  "Version Control (Git)",
                  "Problem Solving",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Languages */}
          <section>
            <h2 className="section-title">Languages</h2>
            <div className="card">
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-lg text-gray-800">English</h4>
                  <p className="text-gray-600">Speak, Read, Write</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-800">Tamil</h4>
                  <p className="text-gray-600">Speak, Read, Write</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Certifications */}
        <section className="mb-16">
          <h2 className="section-title">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-xl font-bold text-blue-800">
                Programming in JAVA - NPTEL
              </h3>
              <p className="text-gray-600 mt-2">2022</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-blue-800">
                Full-Stack Web Development - IBM
              </h3>
              <p className="text-gray-600 mt-2">2025</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-16">
          <h2 className="section-title">Contact</h2>
          <div className="card">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-4">
                  Get In Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <i className="fas fa-phone text-blue-600 text-xl w-8"></i>
                    <span className="ml-3 text-lg">+91 9361468714</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-envelope text-blue-600 text-xl w-8"></i>
                    <span className="ml-3 text-lg">
                      hamdanahamed426@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-map-marker-alt text-blue-600 text-xl w-8"></i>
                    <span className="ml-3 text-lg">T Nagar, Chennai</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-4">
                  Connect With Me
                </h3>
                <div className="space-y-4">
                  <a
                    href="www.linkedin.com/in/hamx2002"
                    className="flex items-center text-blue-600 hover:text-blue-800"
                  >
                    <i className="fab fa-linkedin text-2xl w-10"></i>
                    <span className="ml-3 text-lg">LinkedIn Profile</span>
                  </a>
                  <p className="text-gray-600 mt-6">
                    Feel free to reach out for collaboration, opportunities, or
                    just to say hello!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-4">
            © {new Date().getFullYear()} Hamdan Ahmad. All rights reserved.
          </p>
          <p className="text-blue-200">Designed with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
