import React from 'react'
// import '../js/script.js'
import  { useEffect } from 'react';
import './style.css'

const Par_main = () => {
    useEffect(() => {
        const menuIcon = document.getElementById('menu-icon');
        const navbar = document.querySelector('.navbar');
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('header nav a');
        const header = document.querySelector('header');
        const footer = document.querySelector('footer');
        const progress = document.getElementById('progressbar');
        const totalHeight = document.body.scrollHeight - window.innerHeight;
    
        const toggleMenu = () => {
          menuIcon.classList.toggle('bx-x');
          navbar.classList.toggle('active');
        };
    
        const handleScroll = () => {
          // Sticky navbar
          sections.forEach((sec) => {
            const top = window.scrollY;
            const offset = sec.offsetTop - 100;
            const height = sec.offsetHeight;
            const id = sec.getAttribute('id');
    
            if (top >= offset  && top < offset + height) {
              navLinks.forEach((link) => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(id)) {
                  link.classList.add('active');
                }
              });
    
              sec.classList.add('show-animate');
            } else {
              sec.classList.remove('show-animate');
            }
          });
    
          header.classList.toggle('sticky', window.scrollY > 100);
    
          // Remove toggle icon and navbar
          menuIcon.classList.remove('bx-x');
          navbar.classList.remove('active');
    
          // Animation footer
          footer.classList.toggle(
            'show-animate',
            window.innerHeight + window.scrollY >= document.scrollingElement.scrollHeight
          );
    
          // Scroll progress
          const progressHeight = (window.pageYOffset / totalHeight) * 100;
          progress.style.width = progressHeight + "%";
        };
    
        menuIcon.addEventListener('click', toggleMenu);
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          menuIcon.removeEventListener('click', toggleMenu);
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
    <div className='about_page'>
        
        <header className="header">
      <a href="#" className="logo"
        ><img src="images/log.png" width="35" height="35" alt=""/> <span className="animate" style={{"--i": 1}}></span></a>
      <div></div>
      <div className="bx bx-menu" id="menu-icon">
        <span className="animate" style={{"--i": 2}}></span>
      </div>

      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>

        <span className="active-nav"></span>
        <span className="animate" style={{"--i": 2}}></span>
        <div id='progressbar'></div>
        <div id='scrollPath'></div>
      </nav>
    </header>

    {/* <!-- home section design --> */}

    <section id="home" className="home show-animate">
      <div className="home-content">
        <h1>
          Hi, I'm <span>Hemanth Bandi</span>
          <span className="animate" style={{"--i": 2}}></span>
        </h1>
        <div className="text-animate">
          <h3>Fronted Developer</h3>
          <span className="animate" style={{"--i": 3}}></span>
        </div>
        <p>
          Web Developer | YouTuber | Professional Video Editor | 3D Video Editor
          | Enjoy learning new stuff on computers. Try to be self-reliant about
          everything.
        </p>
        <span className="animate" style={{"--i": 4}}></span>
        <div className="btn-box">
          <a href="#" className="btn">Hire Me</a>
          <a href="#" className="btn">Let's Talk</a>
          <span className="animate" style={{"--i": 5}}></span>
        </div>
      </div>

      <div className="home-sci">
        <a href=""><i className="bx bxl-facebook"></i></a>
        <a href=""><i className="bx bxl-twitter"></i></a>
        <a href=""><i className="bx bxl-linkedin"></i></a>
        <span className="animate" style={{"--i": 6}}></span>
      </div>
      <div className="home-imgHover"></div>
      <span className="animate home-img" style={{"--i": 7}}></span>
    </section>

    {/* <!-- about section design --> */}

    <section className="about" id="about">
      <h2 className="heading">
        About <span>Me</span>
        <span className="animate scroll" style={{"--i": 1}}></span>
      </h2>
      <div className="about-img">
        <img src="images/profile_pic.jpeg" alt="" />
        <span className="circle-spin"></span>
        <span className="animate scroll" style={{"--i": 2}}></span>
      </div>

      <div className="about-content">
        <h3>
          Fronted Developer! <span className="animate scroll" style={{"--i": 3}}></span>
        </h3>
        <p>
          Enjoy learning new stuff on computers. Try to be self-reliant about
          everything. Don't let any work fall by the wayside. Always have faith
          in me. I'll motivate others to work with me. I think I'm completely
          focused on and interested in emerging technologies like React,
          artificial intelligence, machine learning, deep learning, etc.
          <span className="animate scroll" style={{"--i": 4}}></span>
        </p>
      </div>

      <div className="btn-box btns">
        <a href="#" className="btn">Read More</a>
        <span className="animate scroll" style={{"--i": 5}}></span>
      </div>
    </section>

    {/* <!-- education section design --> */}

    <section className="education" id="education">
      <h2 className="heading">
        My <span>Journey</span>
        <span className="animate scroll" style={{"--i": 1}}></span>
      </h2>
      <div className="education-row">
        <div className="education-column">
          <h3 className="title">
            Education <span className="animate scroll" style={{"--i": 2}}></span>
          </h3>

          <div className="education-box">
            <div className="education-content">
              <div className="content">
                <div className="year">
                  <i className="bx bxs-calendar"> 2021 - 2024</i>
                </div>
                <h3>University</h3>
                <div>
                  <div className="sec">
                    <p>Aditya Institute of Technology and Management</p>
                    <p>2021 – 2024</p>
                  </div>
                  <div className="con">
                    Where I adapt to learn new things, new technologies, etc.
                  </div>
                </div>
              </div>
            </div>

            <div className="education-content">
              <div className="content">
                <div className="year">
                  <i className="bx bxs-calendar"> 2018 - 2020</i>
                </div>
                <h3>Intermediate</h3>
                <div>
                  <div className="sec">
                    <p>Sri Chaitanya junior College</p>
                    <p>2018 – 2020</p>
                  </div>
                  <div className="con">Restructured me, Influenced me a lot</div>
                </div>
              </div>
            </div>

            <div className="education-content">
              <div className="content">
                <div className="year">
                  <i className="bx bxs-calendar"> 2006 - 2018</i>
                </div>
                <h3>School-SSC</h3>
                <div>
                  <div className="sec">
                    <p>ST .Mary's English Medium High School</p>
                    <p>2006 – 2018</p>
                  </div>
                  <div className="con">
                    This is the place where I came to know about the world with
                    miracles.
                  </div>
                </div>
              </div>
            </div>
            <span className="animate scroll" style={{"--i": 3}}></span>
          </div>
        </div>

        <div className="education-column">
          <h3 className="title">
            Experience <span className="animate scroll" style={{"--i": 5}}></span>
          </h3>

          <div className="education-box">
            <div className="education-content">
              <div className="content">
                <div className="year">
                  <i className="bx bxs-calendar"> 2020</i>
                </div>
                <h3>Web developer</h3>
                <p>
                  Highly skilled and motivated Frontend Developer with expertise
                  in React.js and Express.js. Proven ability to design and
                  develop user-friendly, responsive, and visually appealing web
                  applications. Strong problem-solving skills and a passion for
                  creating intuitive and seamless user experiences.
                </p>
              </div>
            </div>

            <div className="education-content">
              <div className="content">
                <div className="year">
                  <i className="bx bxs-calendar"> 2017 - 2018</i>
                </div>
                <h3>CERTIFICATES</h3>
                <p>
                  Android Frontend Developer with expertise in Flutter
                  framework, dedicated to creating visually captivating and
                  intuitive mobile applications. Proficient in leveraging
                  Flutter's widget ecosystem and Dart programming language to
                  deliver exceptional user experiences. Strong knowledge of
                  mobile app development principles, UI/UX design.
                </p>
              </div>
            </div>

            <div className="education-content">
              <div className="content">
                <div className="year">
                  <i className="bx bxs-calendar"> 2017 - 2018</i>
                </div>
                <h3>Competitive Programmer</h3>
                <p>
                  Competitive Programmer skilled in C++, Python, Java, and C,
                  with a focus on using C++ for competitions. Strong
                  problem-solving abilities and expertise in efficient
                  algorithmic solutions. Continuously learning and staying
                  updated with programming techniques and data structures.
                  Thrives in fast-paced coding competitions and delivers
                  high-quality solutions under time constraints.
                </p>
              </div>
            </div>
            <span className="animate scroll" style={{"--i": 6}}></span>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- skills section design --> */}

    <section className="skills" id="skills">
      <h2 className="heading">
        My <span>Skills</span>
        <span className="animate scroll" style={{"--i": 1}}></span>
      </h2>

      <div className="skills-row">
        <div className="skills-column">
          <h3 className="title">
            Coding Skills <span className="animate scroll" style={{"--i": 2}}></span>
          </h3>

          <div className="skills-box">
            <div className="skills-content">
              <div className="progress">
                <h3>HTML <span>90%</span></h3>
                <div className="bar"><span></span></div>
              </div>

              <div className="progress">
                <h3>CSS <span>90%</span></h3>
                <div className="bar"><span></span></div>
              </div>

              <div className="progress">
                <h3>HTML <span>90%</span></h3>
                <div className="bar"><span></span></div>
              </div>

              <div className="progress">
                <h3>HTML <span>90%</span></h3>
                <div className="bar"><span></span></div>
              </div>
            </div>
            <span className="animate scroll" style={{"--i": 3}}></span>
          </div>
        </div>

        <div className="skills-column">
          <h3 className="title">
            Professional Skills
            <span className="animate scroll" style={{"--i": 5}}></span>
          </h3>

          <div className="skills-box">
            <div className="skills-content">
              <div className="progress">
                <h3>HTML <span>90%</span></h3>
                <div className="bar"><span></span></div>
              </div>

              <div className="progress">
                <h3>CSS <span>90%</span></h3>
                <div className="bar"><span></span></div>
              </div>

              <div className="progress">
                <h3>HTML <span>90%</span></h3>
                <div className="bar"><span></span></div>
              </div>

              <div className="progress">
                <h3>HTML <span>90%</span></h3>
                <div className="bar"><span></span></div>
              </div>
            </div>
            <span className="animate scroll" style={{"--i": 6}}></span>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- contact section design --> */}

    <section className="contact" id="contact">
      <h2 className="heading">
        Contact <span>Me!</span>
        <span className="animate scroll" style={{"--i": 1}}></span>
      </h2>
      <form action="#">
        <div className="input-box">
          <div className="input-field">
            <input type="text" placeholder="Full Name" required />
            <span className="focus"></span>
          </div>
          <div className="input-field">
            <input type="text" placeholder="Email Address" required />
            <span className="focus"></span>
          </div>

          <span className="animate scroll" style={{"--i": 3}}></span>
        </div>

        <div className="input-box">
          <div className="input-field">
            <input type="number" placeholder="Mobile Number" required />
            <span className="focus"></span>
          </div>
          <div className="input-field">
            <input type="text" placeholder="Email Subject" required />
            <span className="focus"></span>
          </div>

          <span className="animate scroll" style={{"--i": 5}}></span>
        </div>

        <div className="textarea-field">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <span className="focus"></span>

          <span className="animate scroll" style={{"--i": 7}}></span>
        </div>

        <div className="btn-box btns">
          <button type="submit" className="btn">Submit</button>
          <span className="animate scroll" style={{"--i": 9}}></span>
        </div>
      </form>
    </section>

    {/* <!-- footer design  --> */}

    <footer className="footer">
      <div className="footer-text">
        <p>Hey There Redesigned Website</p>
        <span className="animate scroll" style={{"--i": 1}}></span>
      </div>

      <div className="footer-iconTop">
        <a href="#"><i className="bx bx-up-arrow-alt"></i></a>
        <span className="animate scroll" style={{"--i": 9}}></span>
      </div>
    </footer>
    <script src="js/script.js"></script>
    </div>
  )
}

export default Par_main