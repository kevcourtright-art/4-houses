import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="website">
    <!-- Navigation -->
    <nav class="nav">
      <div class="nav-container">
        <div class="nav-brand">
          <span class="brand-text">ModernWeb</span>
        </div>
        <div class="nav-links">
          <a href="#home" class="nav-link active">Home</a>
          <a href="#about" class="nav-link">About</a>
          <a href="#services" class="nav-link">Services</a>
          <a href="#contact" class="nav-link">Contact</a>
        </div>
        <button class="nav-toggle" id="navToggle">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero" id="home">
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title">
            Build Amazing
            <span class="gradient-text">Digital Experiences</span>
          </h1>
          <p class="hero-description">
            We create modern, responsive websites and applications that drive results. 
            From concept to launch, we bring your vision to life with cutting-edge technology.
          </p>
          <div class="hero-buttons">
            <button class="btn btn-primary">Get Started</button>
            <button class="btn btn-secondary">View Portfolio</button>
          </div>
        </div>
        <div class="hero-visual">
          <div class="floating-card card-1">
            <div class="card-icon">🚀</div>
            <div class="card-text">Fast Performance</div>
          </div>
          <div class="floating-card card-2">
            <div class="card-icon">📱</div>
            <div class="card-text">Mobile First</div>
          </div>
          <div class="floating-card card-3">
            <div class="card-icon">⚡</div>
            <div class="card-text">Modern Tech</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features" id="about">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Why Choose Us</h2>
          <p class="section-description">
            We combine creativity with technical expertise to deliver exceptional results
          </p>
        </div>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🎨</div>
            <h3 class="feature-title">Beautiful Design</h3>
            <p class="feature-description">
              Stunning, user-friendly interfaces that captivate and convert visitors into customers.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3 class="feature-title">Lightning Fast</h3>
            <p class="feature-description">
              Optimized for speed and performance, ensuring your users have the best experience.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📱</div>
            <h3 class="feature-title">Fully Responsive</h3>
            <p class="feature-description">
              Perfect on every device, from mobile phones to desktop computers.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔒</div>
            <h3 class="feature-title">Secure & Reliable</h3>
            <p class="feature-description">
              Built with security best practices and reliable hosting solutions.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services" id="services">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Services</h2>
          <p class="section-description">
            Comprehensive solutions for all your digital needs
          </p>
        </div>
        <div class="services-grid">
          <div class="service-card">
            <div class="service-header">
              <div class="service-icon">💻</div>
              <h3 class="service-title">Web Development</h3>
            </div>
            <p class="service-description">
              Custom websites and web applications built with modern technologies and best practices.
            </p>
            <ul class="service-features">
              <li>React & TypeScript</li>
              <li>Responsive Design</li>
              <li>SEO Optimization</li>
            </ul>
          </div>
          <div class="service-card featured">
            <div class="service-badge">Popular</div>
            <div class="service-header">
              <div class="service-icon">🎯</div>
              <h3 class="service-title">Digital Strategy</h3>
            </div>
            <p class="service-description">
              Complete digital transformation with strategy, design, and implementation.
            </p>
            <ul class="service-features">
              <li>Brand Strategy</li>
              <li>User Experience</li>
              <li>Growth Analytics</li>
            </ul>
          </div>
          <div class="service-card">
            <div class="service-header">
              <div class="service-icon">📊</div>
              <h3 class="service-title">Analytics & Insights</h3>
            </div>
            <p class="service-description">
              Data-driven insights to optimize performance and drive business growth.
            </p>
            <ul class="service-features">
              <li>Performance Tracking</li>
              <li>User Behavior</li>
              <li>Conversion Optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact" id="contact">
      <div class="container">
        <div class="contact-content">
          <div class="contact-info">
            <h2 class="contact-title">Let's Work Together</h2>
            <p class="contact-description">
              Ready to start your next project? Get in touch and let's create something amazing together.
            </p>
            <div class="contact-details">
              <div class="contact-item">
                <div class="contact-icon">📧</div>
                <div>
                  <div class="contact-label">Email</div>
                  <div class="contact-value">hello@modernweb.com</div>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">📱</div>
                <div>
                  <div class="contact-label">Phone</div>
                  <div class="contact-value">+1 (555) 123-4567</div>
                </div>
              </div>
            </div>
          </div>
          <form class="contact-form">
            <div class="form-group">
              <label for="name" class="form-label">Name</label>
              <input type="text" id="name" class="form-input" placeholder="Your name">
            </div>
            <div class="form-group">
              <label for="email" class="form-label">Email</label>
              <input type="email" id="email" class="form-input" placeholder="your@email.com">
            </div>
            <div class="form-group">
              <label for="message" class="form-label">Message</label>
              <textarea id="message" class="form-input form-textarea" placeholder="Tell us about your project..."></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-full">Send Message</button>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <span class="brand-text">ModernWeb</span>
            <p class="footer-description">
              Creating digital experiences that matter.
            </p>
          </div>
          <div class="footer-links">
            <div class="footer-section">
              <h4 class="footer-title">Services</h4>
              <ul class="footer-list">
                <li><a href="#" class="footer-link">Web Development</a></li>
                <li><a href="#" class="footer-link">Digital Strategy</a></li>
                <li><a href="#" class="footer-link">Analytics</a></li>
              </ul>
            </div>
            <div class="footer-section">
              <h4 class="footer-title">Company</h4>
              <ul class="footer-list">
                <li><a href="#" class="footer-link">About</a></li>
                <li><a href="#" class="footer-link">Portfolio</a></li>
                <li><a href="#" class="footer-link">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 ModernWeb. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
`

// Add smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    const targetId = link.getAttribute('href')?.substring(1)
    const targetElement = document.getElementById(targetId!)
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
    
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'))
    link.classList.add('active')
  })
})

// Mobile navigation toggle
const navToggle = document.getElementById('navToggle')
const navLinks = document.querySelector('.nav-links')

navToggle?.addEventListener('click', () => {
  navLinks?.classList.toggle('active')
  navToggle.classList.toggle('active')
})

// Form submission
document.querySelector('.contact-form')?.addEventListener('submit', (e) => {
  e.preventDefault()
  
  // Simple form validation and feedback
  const form = e.target as HTMLFormElement
  const formData = new FormData(form)
  
  // Show success message (in a real app, you'd send this to a server)
  const submitBtn = form.querySelector('.btn-primary') as HTMLButtonElement
  const originalText = submitBtn.textContent
  
  submitBtn.textContent = 'Sending...'
  submitBtn.disabled = true
  
  setTimeout(() => {
    submitBtn.textContent = 'Message Sent!'
    submitBtn.style.backgroundColor = '#10b981'
    
    setTimeout(() => {
      submitBtn.textContent = originalText
      submitBtn.disabled = false
      submitBtn.style.backgroundColor = ''
      form.reset()
    }, 2000)
  }, 1000)
})

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav')
  if (window.scrollY > 100) {
    nav?.classList.add('scrolled')
  } else {
    nav?.classList.remove('scrolled')
  }
})