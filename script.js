const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if(window.scrollY > 10) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

const text = "Welcome to my profile";
const h1 = document.querySelector("#home h1");

let index = 0;
let isDeleting = false;
let speed = 100; // ความเร็วพิมพ์

function type() {
  if (!isDeleting) {
    h1.textContent = text.substring(0, index + 1);
    index++;
    if (index === text.length) {
      isDeleting = true;
      speed = 1500; // หยุดก่อนลบ
    } else {
      speed = 100;
    }
  } else {
    h1.textContent = text.substring(0, index - 1);
    index--;
    if (index === 0) {
      isDeleting = false;
      speed = 500; // หยุดก่อนพิมพ์ใหม่
    } else {
      speed = 50;
    }
  }
  setTimeout(type, speed);
}

type();

window.addEventListener('DOMContentLoaded', () => {
  const image = document.getElementById('discordImage');
  if (!image) {
    console.error('ไม่พบ element id=discordImage');
    return;
  }

  image.addEventListener('mousemove', (e) => {
    const rect = image.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;

    image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  image.addEventListener('mouseleave', () => {
    image.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
  });

  // เพิ่มฟังก์ชัน scroll แบบ smooth ให้ nav-link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const targetId = link.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
