// 向左切换幻灯片函数
function prevSlide(sectionId) {
  const slides = document.querySelector(`#${sectionId} .slides`);
  const slideWidth = document.querySelector(`#${sectionId} .slides img`).offsetWidth;
  slides.style.transform = `translateX(${slideWidth}px)`;
  const firstSlide = slides.firstElementChild;
  slides.appendChild(firstSlide);
  // 使用过渡动画让切换更流畅
  slides.style.transition = 'transform 0.5s ease'; 
  slides.style.transform = 'translateX(0)';
}

// 向右切换幻灯片函数
function nextSlide(sectionId) {
  const slides = document.querySelector(`#${sectionId} .slides`);
  const slideWidth = document.querySelector(`#${sectionId} .slides img`).offsetWidth;
  slides.style.transform = `translateX(-${slideWidth}px)`;
  setTimeout(() => {
      const lastSlide = slides.lastElementChild;
      slides.prepend(lastSlide);
      // 使用过渡动画让切换更流畅
      slides.style.transition = 'transform 0.5s ease'; 
      slides.style.transform = 'translateX(0)';
  }, 0);
}

// 启动自动轮播函数
function startAutoSlide(sectionId, direction) {
  return setInterval(() => {
      if (direction === 'next') {
          nextSlide(sectionId);
      } else {
          prevSlide(sectionId);
      }
  }, 3000);
}

// 初始化轮播图
function initSlider(sectionId) {
  const nextButton = document.querySelector(`#${sectionId} .next`);
  const prevButton = document.querySelector(`#${sectionId} .prev`);
  const slider = document.querySelector(`#${sectionId} .slider`);

  let autoSlideInterval;
  let currentDirection = 'next';

  // 开始自动顺时针轮播
  autoSlideInterval = startAutoSlide(sectionId, currentDirection);

  // 点击下一张按钮，停止自动轮播并顺时针切换
  nextButton.addEventListener('click', () => {
      clearInterval(autoSlideInterval);
      nextSlide(sectionId);
      currentDirection = 'next';
      autoSlideInterval = startAutoSlide(sectionId, currentDirection);
  });

  // 点击上一张按钮，停止自动轮播并逆时针切换
  prevButton.addEventListener('click', () => {
      clearInterval(autoSlideInterval);
      prevSlide(sectionId);
      currentDirection = 'prev';
      autoSlideInterval = startAutoSlide(sectionId, currentDirection);
  });

  // 鼠标移入，停止自动轮播
  slider.addEventListener('mouseenter', () => {
      clearInterval(autoSlideInterval);
  });

  // 鼠标移出，开始自动轮播
  slider.addEventListener('mouseleave', () => {
      autoSlideInterval = startAutoSlide(sectionId, currentDirection);
  });
}

// 页面加载完成后初始化轮播图
window.addEventListener('load', () => {
  initSlider('overview');
  initSlider('impact');
});