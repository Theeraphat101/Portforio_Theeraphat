// ─── Language Content ───
const translations = {
  en: {
    htmlLang: 'en',
    title: 'Theeraphat Srikeing',
    typingRoles: ['Hey there!', 'Thanks for visiting my portfolio.', 'My name is Theeraphat Srikeing', 'Take a look around!'],
    nav: ['Home', 'About', 'Background', 'Skills', 'Projects', 'Contact'],
    text: {
      heroEyebrow: 'Computer Science student',
      heroRole: 'Computer Science Student Rangsit University | Passionate about Tech & Software Development | Aspiring Software Engineer eager to learn and build impactful solutions.',
      viewProjects: 'View Projects',
      resume: 'Resume',
      primaryStack: 'ธีรภัทร์ สีเกี๋ยง',
      gpa: 'GPA',
      projectsCompleted: 'Projects Completed',
      workExperience: 'Work Experience',
      netsuite: 'Age',
      aboutTitle: 'About',
    
      aboutBody1: 'I am a Computer Science student at Rangsit University with a strong passion for technology and software development. My journey in tech is driven by a love for problem-solving and turning complex ideas into clean, efficient code. I am constantly exploring modern frameworks and tech trends—particularly in web/mobile development and emerging technologies. Currently, I am seeking opportunities (such as internships or junior roles) where I can apply my academic foundation, collaborate with development teams, and contribute to building impactful software solutions.',
      interests: 'Engineering Interests',
      currently: 'Currently',
      currentRole: 'Software Developer @ Sirisoft',
      backgroundTitle: 'Background',
      skillsTitle: 'What I Work With',
      frontend: 'Frontend Development',
      devops: 'DevOps & Development Tools',
      projectsTitle: 'Selected Projects',
      details: 'View Details',
      keyFeatures: 'Features',
      liveDemo: 'Live Demo',
      github: 'GitHub',
      contactTitle: 'Get in Touch',
      contactLabel: 'Contact',
      contactLead: 'Open to opportunities and professional inquiries.',
      contactBody: 'Available for full-time positions, collaborative projects, and technical discussions related to backend systems and enterprise software development.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      sent: 'Sent!',
      footer: '© 2026 Theeraphat - All rights reserved'
    },
    placeholders: {
      name: 'Your name',
      email: 'your@email.com',
      message: 'Describe your project or inquiry...'
    },
    timeline: [
      {
        date: '2023 — 2026',
        title: 'EDUCATION',
        org: 'Rangsit University',
        body: 'Bachelor of Science (B.S.) in Computer Science'
      },
      {
        date: '2021 - 2024',
        title: 'EDUCATION',
        org: 'Siam Business Administration Technological College',
        body: 'High Vocational Certificate in Digital Business Technology'
      },
      {
        date: '2018 - 2021',
        title: 'EDUCATION',
        org: 'Siam Business Administration Technological College',
        body: 'Vocational Certificate in Business Computer'
      }
    ],
    projects: [
      {
        title: 'Lottery Marketplace Mobile Application',
        cardTitle: 'Lottery Marketplace Mobile Application',
        desc: 'Technologies used: Flutter, Firebase Authentication, Cloud Firestore',
        modalDesc: 'Developed a cross-platform mobile marketplace application using Flutter and Firebase, featuring secure role-based access and automated real-time cart calculations.',
        features: ['Auth & RBAC: Secured user login and separate Admin/User access.','Product & Cart: Implemented product CRUD and automated price calculation.','Real-time Backend: Managed live database operations via Firebase.']
      },
      {
        title: 'Real-time Thai Food Classification',
        cardTitle: 'Real-time Thai Food Classification',
        desc: 'Real-time Thai food detection: Use a webcam to detect and classify 10 types of Thai food.',
        modalDesc: 'Real-Time Thai Food Image Classification and Calorie Estimation Role: Developer / AI/Computer Vision Engineer Tech Stack / Tools: Python, PyTorch, OpenCV, Torchvision, Transfer Learning (MobileNetV2)',
        features: ['Real-time Thai food detection: Use a webcam camera.','Display the calorie value Kcal of that food on the screen.',]
      },
      {
        title: 'Employee Attendance Management System',
        cardTitle: 'Employee Attendance Management System',
        desc: 'Desktop application for recording employee clock-in and clock-out dates and times, developed with Java and using MySQL as the database.',
        modalDesc: 'Desktop application for recording employee clock-in and clock-out dates and times, developed with Java and using MySQL as the database.',
        features: ['Register employee code name.',' Clock in / Clock out record date and time.','Export clock-in and clock-out data to an Excel file.']
      },
      {
        title: 'Phonebook',
        cardTitle: 'Phonebook',
        desc: 'Phonebook Application is a project developed for the Data Structure & Algorithm',
        modalDesc: 'Phonebook Application is a project developed for the Data Structure & Algorithm course, focusing on data searching and data sorting by selecting and implementing appropriate algorithms.',
        features: ['Display ID Phone Number Name.','CRUD: Create Read Update and Delete data.','Search for information','Categorize and sort by name.']
      },
      {
        title: 'Game car',
        cardTitle: 'Game car',
        desc: 'It is a project for the computer graphics programming',
        modalDesc: 'It is a project for the computer graphics   course, focusing on drawing images by writing programs that render the desired output.',
        features: []
      },

    ]
  },
  th: {
    htmlLang: 'th',
    title: 'ธีรภัทร์ สีเกี๋ยง',
    typingRoles: ['สวัสดีครับ!', 'ขอบคุณที่แวะเข้ามาชมพอร์ตโฟลิโอครับ', 'ผมชื่อ ธีรภัทร์ สีเกี๋ยง', 'ลองมองไปรอบๆ ดูสิ!'],
    nav: ['หน้าแรก', 'เกี่ยวกับ', 'ประวัติ', 'ทักษะ', 'ผลงาน', 'ติดต่อ'],
    text: {
      heroEyebrow: 'นักศึกษาวิทยาการคอมพิวเตอร์',
      heroRole: 'นักศึกษาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยรังสิต | หลงใหลด้านเทคโนโลยีและการพัฒนาซอฟต์แวร์ | มุ่งมั่นเป็น Software Engineer ที่พร้อมเรียนรู้และสร้างสรรค์สิ่งที่มีคุณค่า',
      viewProjects: 'ดูผลงาน',
      resume: 'เรซูเม่',
      primaryStack: 'ธีรภัทร์ สีเกี๋ยง',
      gpa: 'เกรดเฉลี่ย',
      projectsCompleted: 'โปรเจกต์ที่ทำสำเร็จ',
      workExperience: 'ประสบการณ์ทำงาน',
      netsuite: 'อายุ',
      aboutTitle: 'เกี่ยวกับ',
      aboutBody1: 'ผมเป็นนักศึกษาวิทยาการคอมพิวเตอร์ที่มหาวิทยาลัยรังสิต มีความหลงใหลอย่างลึกซึ้งด้านเทคโนโลยีและการพัฒนาซอฟต์แวร์ เส้นทางของผมในโลกเทคโนโลยีขับเคลื่อนด้วยความรักในการแก้ปัญหาและการแปลงไอเดียที่ซับซ้อนให้กลายเป็นโค้ดที่สะอาดและมีประสิทธิภาพ ผมสำรวจเฟรมเวิร์กสมัยใหม่และเทรนด์เทคโนโลยีอย่างต่อเนื่อง โดยเฉพาะด้าน web/mobile development และเทคโนโลยีใหม่ ๆ ปัจจุบันกำลังมองหาโอกาส เช่น การฝึกงานหรือตำแหน่ง junior เพื่อนำความรู้ทางวิชาการมาประยุกต์ใช้ ร่วมงานกับทีมพัฒนา และมีส่วนร่วมในการสร้างซอฟต์แวร์ที่มีคุณค่า',
      interests: 'ความสนใจด้านวิศวกรรม',
      currently: 'ปัจจุบัน',
      currentRole: 'Software Developer @ Sirisoft',
      backgroundTitle: 'ประวัติ',
      skillsTitle: 'เครื่องมือที่ใช้งาน',
      frontend: 'Frontend Development',
      devops: 'DevOps และเครื่องมือพัฒนา',
      projectsTitle: 'ผลงานที่คัดเลือก',
      details: 'ดูรายละเอียด',
      keyFeatures: 'ฟีเจอร์',
      liveDemo: 'ดูเดโม',
      github: 'GitHub',
      contactTitle: 'ติดต่อ',
      contactLabel: 'ช่องทางติดต่อ',
      contactLead: 'เปิดรับโอกาสงานและการพูดคุยเชิงวิชาชีพ',
      contactBody: 'พร้อมสำหรับตำแหน่งงาน full-time โปรเจกต์ร่วมพัฒนา และการพูดคุยทางเทคนิคเกี่ยวกับ backend systems และ enterprise software development',
      name: 'ชื่อ',
      email: 'อีเมล',
      message: 'ข้อความ',
      send: 'ส่งข้อความ',
      sent: 'ส่งแล้ว!',
      footer: '© 2026 Theeraphat - All rights reserved'
    },
    placeholders: {
      name: 'ชื่อของคุณ',
      email: 'your@email.com',
      message: 'เล่าโปรเจกต์หรือเรื่องที่อยากสอบถาม...'
    },
    timeline: [
      {
        date: '2023 — 2026',
        title: 'การศึกษา',
        org: 'มหาวิทยาลัยรังสิต',
        body: 'วิทยาศาสตรบัณฑิต (วท.บ.) สาขาวิทยาการคอมพิวเตอร์'
      },
      {
        date: '2021 - 2024',
        title: 'การศึกษา',
        org: 'วิทยาลัยเทคโนโลยีสยามบริหารธุรกิจ',
        body: 'ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.) สาขาเทคโนโลยีธุรกิจดิจิทัล'
      },
      {
        date: '2018 - 2021',
        title: 'การศึกษา',
        org: 'วิทยาลัยเทคโนโลยีสยามบริหารธุรกิจ',
        body: 'ประกาศนียบัตรวิชาชีพ (ปวช.) สาขาคอมพิวเตอร์ธุรกิจ'
      }
    ],
    projects: [
      {
        title: 'แอปพลิเคชันมือถือตลาดลอตเตอรี่',
        cardTitle: 'แอปพลิเคชันมือถือตลาดลอตเตอรี่',
        desc: 'เทคโนโลยีที่ใช้: Flutter, Firebase Authentication, Cloud Firestore',
        modalDesc: 'พัฒนาแอปพลิเคชันตลาดบนมือถือแบบ cross-platform ด้วย Flutter และ Firebase มีระบบล็อกอินที่ปลอดภัยแบบ role-based และการคำนวณตะกร้าสินค้าแบบ real-time อัตโนมัติ',
        features: ['Auth & RBAC: ระบบล็อกอินและแยกสิทธิ์ Admin/User', 'สินค้าและตะกร้า: CRUD สินค้าและคำนวณราคาอัตโนมัติ', 'Backend real-time: จัดการฐานข้อมูลสดผ่าน Firebase']
      },
      {
        title: 'จำแนกอาหารไทยแบบ Real-time',
        cardTitle: 'จำแนกอาหารไทยแบบ Real-time',
        desc: 'ตรวจจับอาหารไทยแบบ real-time: ใช้กล้องเว็บแคมตรวจจับและจำแนกอาหารไทย 10 ชนิด',
        modalDesc: 'การจำแนกภาพอาหารไทยและประมาณค่าแคลอรี่แบบ Real-Time บทบาท: Developer / AI/Computer Vision Engineer Tech Stack: Python, PyTorch, OpenCV, Torchvision, Transfer Learning (MobileNetV2)',
        features: ['ตรวจจับอาหารไทยแบบ real-time ผ่านกล้องเว็บแคม', 'แสดงค่าแคลอรี่ (Kcal) ของอาหารบนหน้าจอ']
      },
      {
        title: 'ระบบบริหารจัดการการเข้างานพนักงาน',
        cardTitle: 'ระบบบริหารจัดการการเข้างานพนักงาน',
        desc: 'แอปพลิเคชัน Desktop สำหรับบันทึกวันและเวลาเข้า-ออกงานของพนักงาน พัฒนาด้วย Java และใช้ MySQL เป็นฐานข้อมูล',
        modalDesc: 'แอปพลิเคชัน Desktop สำหรับบันทึกวันและเวลาเข้า-ออกงานของพนักงาน พัฒนาด้วย Java และใช้ MySQL เป็นฐานข้อมูล',
        features: ['ลงทะเบียนรหัสและชื่อพนักงาน', 'บันทึกวันและเวลาเข้า-ออกงาน', 'ส่งออกข้อมูลการเข้า-ออกงานเป็นไฟล์ Excel']
      },
      {
        title: 'สมุดโทรศัพท์',
        cardTitle: 'สมุดโทรศัพท์',
        desc: 'แอปพลิเคชันสมุดโทรศัพท์ พัฒนาสำหรับวิชา Data Structure & Algorithm',
        modalDesc: 'แอปพลิเคชันสมุดโทรศัพท์ พัฒนาสำหรับวิชา Data Structure & Algorithm โดยเน้นการค้นหาและเรียงลำดับข้อมูลด้วยอัลกอริทึมที่เหมาะสม',
        features: ['แสดง ID หมายเลขโทรศัพท์ และชื่อ', 'CRUD: เพิ่ม ดู แก้ไข และลบข้อมูล', 'ค้นหาข้อมูล', 'จัดหมวดหมู่และเรียงลำดับตามชื่อ']
      },
      {
        title: 'เกมรถยนต์',
        cardTitle: 'เกมรถยนต์',
        desc: 'โปรเจกต์สำหรับวิชาการเขียนโปรแกรมกราฟิกคอมพิวเตอร์',
        modalDesc: 'โปรเจกต์สำหรับวิชากราฟิกคอมพิวเตอร์ เน้นการวาดภาพด้วยการเขียนโปรแกรมที่แสดงผลลัพธ์ตามที่ต้องการ',
        features: []
      }
    ]
  }
};

let currentLang = localStorage.getItem('lang') === 'th' ? 'th' : 'en';

// ─── Typing Animation ───
const typingEl = document.querySelector('.typing');
let roles = translations[currentLang].typingRoles;
let ri = 0, ci = 0, deleting = false, speed = 100;

function type() {
  const cur = roles[ri];
  typingEl.textContent = deleting
    ? cur.substring(0, ci - 1)
    : cur.substring(0, ci + 1);
  deleting ? ci-- : ci++;
  speed = deleting ? 45 : 100;
  if (!deleting && ci === cur.length) { deleting = true; speed = 2200; }
  else if (deleting && ci === 0) { deleting = false; ri = (ri + 1) % roles.length; speed = 400; }
  setTimeout(type, speed);
}

// ─── Scroll Reveal ───
const reveals = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); revealObs.unobserve(e.target); } });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
reveals.forEach(el => revealObs.observe(el));

// ─── Nav Active Link ───
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-center a');

const sectionObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const id = e.target.getAttribute('id');
      navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => sectionObs.observe(s));

// ─── Theme Toggle ───
const root = document.documentElement;
const themeBtn = document.getElementById('theme-toggle');
const themeIcon = themeBtn.querySelector('i');

const saved = localStorage.getItem('theme');
if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  root.classList.add('dark');
  themeIcon.classList.replace('fa-moon', 'fa-sun');
}

themeBtn.addEventListener('click', () => {
  root.classList.toggle('dark');
  const isDark = root.classList.contains('dark');
  themeIcon.classList.replace(isDark ? 'fa-moon' : 'fa-sun', isDark ? 'fa-sun' : 'fa-moon');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// ─── Lang Toggle ───
const langBtn = document.getElementById('lang-toggle');

function setText(selector, value) {
  const el = document.querySelector(selector);
  if (el) el.textContent = value;
}

function setHTML(selector, value) {
  const el = document.querySelector(selector);
  if (el) el.innerHTML = value;
}

function applyLanguage(lang) {
  const data = translations[lang];
  currentLang = lang;
  roles = data.typingRoles;
  ri = 0;
  ci = 0;
  deleting = false;
  if (typingEl) typingEl.textContent = '';

  document.documentElement.lang = data.htmlLang;
  document.title = data.title;
  langBtn.textContent = lang === 'th' ? 'TH / EN' : 'EN / TH';
  localStorage.setItem('lang', lang);

  document.querySelectorAll('.nav-center a').forEach((link, index) => {
    if (data.nav[index]) link.textContent = data.nav[index];
  });

  setText('.hero-eyebrow', data.text.heroEyebrow);
  setText('.hero-role-line', data.text.heroRole);
  setHTML('.hero-actions .btn-primary', `${data.text.viewProjects} <i class="fas fa-arrow-right" style="font-size:0.75rem"></i>`);
  setHTML('.hero-actions .btn-ghost', `<i class="fas fa-download" style="font-size:0.75rem"></i> ${data.text.resume}`);
  setText('.hero-badge .badge-label', data.text.primaryStack);
  setText('.hero-stats .stat-box:nth-child(1) .stat-label', data.text.gpa);
  setText('.hero-stats .stat-box:nth-child(2) .stat-label', data.text.projectsCompleted);
  setText('.hero-stats .stat-box:nth-child(3) .stat-label', data.text.workExperience);
  setText('.hero-stats .stat-box:nth-child(4) .stat-label', data.text.netsuite);

  setText('#about .section-title', data.text.aboutTitle);
  setText('.about-lead', data.text.aboutLead);
  document.querySelectorAll('#about .about-body').forEach((el, index) => {
    const values = [data.text.aboutBody1, data.text.aboutBody2, data.text.aboutBody3];
    if (values[index]) el.textContent = values[index];
  });
  setText('.interests-label', data.text.interests);
  setText('#about .stat-box .badge-label', data.text.currently);
  setText('#about .stat-box .badge-value', data.text.currentRole);

  setText('#background .section-title', data.text.backgroundTitle);
  document.querySelectorAll('.tl-item').forEach((item, index) => {
    const tl = data.timeline[index];
    if (!tl) return;
    setTextFor(item, '.tl-date', tl.date);
    setTextFor(item, '.tl-title', tl.title);
    setHTMLFor(item, '.tl-org', `<i class="${index === 0 ? 'fas fa-university' : index === 1 ? 'fas fa-school': index === 2 ? 'fas fa-school' : 'fas fa-building'}" style="font-size:0.7rem;"></i> ${tl.org}`);
    const body = item.querySelector('.tl-body');
    if (body) body.textContent = tl.body;
  });

  setText('#skills .section-title', data.text.skillsTitle);
  setHTML('#skills > .skills-wrapper > div:nth-child(4) .skill-cat-title', `<i class="fas fa-desktop" style="margin-right:0.5rem;font-size:0.75rem;"></i>${data.text.frontend}`);
  setHTML('#skills > .skills-wrapper > div:nth-child(5) .skill-cat-title', `<i class="fas fa-tools" style="margin-right:0.5rem;font-size:0.75rem;"></i>${data.text.devops}`);

  setText('#projects .section-title', data.text.projectsTitle);
  document.querySelectorAll('.project-card[data-project]').forEach((card, index) => {
    const project = data.projects[index];
    if (!project) return;
    card.dataset.langIndex = index;
    card.dataset.title = project.title;
    card.dataset.desc = project.modalDesc;
    card.dataset.features = project.features.join(',');
    setTextFor(card, '.project-title', project.cardTitle);
    setTextFor(card, '.project-desc', project.desc);
    setHTMLFor(card, '.project-arrow', `${data.text.details} <i class="fas fa-arrow-right" style="font-size:0.7rem;"></i>`);
  });

  setText('.modal-features-title', data.text.keyFeatures);
  setText('#contact .section-title', data.text.contactTitle);
  setText('.contact-info-label', data.text.contactLabel);
  setText('.contact-lead', data.text.contactLead);
  setText('#contact .about-body', data.text.contactBody);
  setText('.form-group:nth-child(1) .form-label', data.text.name);
  setText('.form-group:nth-child(2) .form-label', data.text.email);
  setText('.form-group:nth-child(3) .form-label', data.text.message);
  setHTML('#contact-form button[type=submit]', `${data.text.send} <i class="fas fa-paper-plane" style="font-size:0.75rem;"></i>`);
  setText('footer .footer-left', data.text.footer);

  const nameInput = document.querySelector('.form-group:nth-child(1) .form-input');
  const emailInput = document.querySelector('.form-group:nth-child(2) .form-input');
  const messageInput = document.querySelector('.form-textarea');
  if (nameInput) nameInput.placeholder = data.placeholders.name;
  if (emailInput) emailInput.placeholder = data.placeholders.email;
  if (messageInput) messageInput.placeholder = data.placeholders.message;

  if (modal.classList.contains('open')) closeModal();
}

function setTextFor(parent, selector, value) {
  const el = parent.querySelector(selector);
  if (el) el.textContent = value;
}

function setHTMLFor(parent, selector, value) {
  const el = parent.querySelector(selector);
  if (el) el.innerHTML = value;
}

langBtn.addEventListener('click', () => {
  applyLanguage(currentLang === 'th' ? 'en' : 'th');
});

// ─── Project Modal ───
const modal = document.getElementById('project-modal');
const modalImgArea = document.getElementById('modal-img-area');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalTags = document.getElementById('modal-tags');
const modalFeatures = document.getElementById('modal-features');
const modalLinks = document.getElementById('modal-links');
const modalClose = document.getElementById('modal-close');

document.querySelectorAll('.project-card[data-project]').forEach(card => {
  card.addEventListener('click', () => {
    // Image area
    const img = card.dataset.img;
    const closeBtn = `<div class="modal-header"><button class="modal-close-btn" id="modal-close-inner"><i class="fas fa-times"></i></button></div>`;
    if (img) {
      modalImgArea.style.background = '';
      modalImgArea.innerHTML = `<img src="${img}" alt="${card.dataset.title}">${closeBtn}`;
    } else {
      // Use the same gradient from the card's placeholder
      const thumb = card.querySelector('.project-thumb-placeholder');
      const bg = thumb ? thumb.style.background : '#1a1a1a';
      const icon = thumb ? thumb.innerHTML : '<i class="fas fa-code"></i>';
      modalImgArea.style.background = bg;
      modalImgArea.innerHTML = `<span style="font-size:3rem;">${icon}</span>${closeBtn}`;
    }
    document.getElementById('modal-close-inner').addEventListener('click', closeModal);

    // Content
    modalTitle.textContent = card.dataset.title;
    modalDesc.textContent = card.dataset.desc;
    modalTags.innerHTML = card.dataset.tags.split(',')
      .map(t => `<span class="project-tag">${t.trim()}</span>`).join('');
    modalFeatures.innerHTML = card.dataset.features.split(',')
      .map(f => `<li>${f.trim()}</li>`).join('');

    // Links
    let linksHtml = '';
    const langText = translations[currentLang].text;
    if (card.dataset.demo) linksHtml += `<a href="${card.dataset.demo}" target="_blank" rel="noopener" class="btn-primary"><i class="fas fa-external-link-alt" style="font-size:0.75rem;"></i> ${langText.liveDemo}</a>`;
    if (card.dataset.link) linksHtml += `<a href="${card.dataset.link}" target="_blank" rel="noopener" class="btn-ghost"><i class="fab fa-github" style="font-size:0.75rem;"></i> ${langText.github}</a>`;
    if (card.dataset.youtube) linksHtml += `<a href="${card.dataset.youtube}" target="_blank" rel="noopener" class="btn-ghost" style="color: #ff0000;"><i class="fab fa-youtube" style="font-size:0.75rem;"></i> YouTube</a>`;
    modalLinks.innerHTML = linksHtml;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Reset scroll
    const body = modal.querySelector('.modal-body');
    if (body) body.scrollTop = 0;
  });
});

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ─── Contact Form ───
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type=submit]');
    const orig = btn.innerHTML;
    btn.innerHTML = `<i class="fas fa-check" style="font-size:0.75rem;"></i> ${translations[currentLang].text.sent}`;
    btn.style.opacity = '0.7';
    setTimeout(() => { btn.innerHTML = orig; btn.style.opacity = ''; form.reset(); }, 3000);
  });
}

// ─── Init ───
document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(currentLang);
  type();
});