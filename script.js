 // Mobile menu toggle
 const menuBtn = document.querySelector('.mobile-menu-btn');
 const navLinks = document.querySelector('.nav-links');
 
 menuBtn.addEventListener('click', () => {
     navLinks.classList.toggle('active');
     
     // İkon değiştirme
     if (navLinks.classList.contains('active')) {
         menuBtn.innerHTML = '<i class="fas fa-times"></i>';
     } else {
         menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
     }
 });



 document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.slider-track');
    const items = document.querySelectorAll('.slider-item');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentIndex = 0;
    const itemCount = items.length;
    
    // Slider'ı belirtilen indekse kaydır
    function goToSlide(index) {
        if (index < 0) {
            index = itemCount - 1;
        } else if (index >= itemCount) {
            index = 0;
        }
        
        track.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;
        
        // Dots güncelleme
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }
    
    // Sonraki slayta geç
    function nextSlide() {
        goToSlide(currentIndex + 1);
    }
    
    // Önceki slayta geç
    function prevSlide() {
        goToSlide(currentIndex - 1);
    }
    
    // Dots tıklama eventleri
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
    });
    
    // Buton eventleri
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Klavye kontrolleri
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        }
    });
    
    // Otomatik slider (opsiyonel)
    let autoSlide = setInterval(nextSlide, 5000);
    
    // Slider'a hover olunca otomatik geçişi durdur
    const slider = document.querySelector('.property-slider');
    slider.addEventListener('mouseenter', () => {
        clearInterval(autoSlide);
    });
    
    slider.addEventListener('mouseleave', () => {
        autoSlide = setInterval(nextSlide, 5000);
    });
});



  // Sayfa yüklendiğinde ilk resmi aktif hale getir
document.addEventListener('DOMContentLoaded', function() {
    // İlk thumbnail ve resmi seç
    var firstThumbnail = document.querySelector('.kaythumbnail');
    var firstImageSrc = firstThumbnail.querySelector('img').getAttribute('src').replace('/200/', '/1470/');
    
    // Ana resmi ilk thumbnail'in büyük versiyonu ile güncelle
    document.getElementById('kaymainImage').src = firstImageSrc;
    
    // Tüm thumbnail'lerden active class'ını kaldır ve ilkine ekle
    var thumbnails = document.querySelectorAll('.kaythumbnail');
    thumbnails.forEach(function(thumb) {
        thumb.classList.remove('active');
    });
    firstThumbnail.classList.add('active');
});

// Thumbnail tıklandığında resmi değiştir
function kaychangeImage(src, element) {
    document.getElementById('kaymainImage').src = src;
    
    // Tüm thumbnail'lerden active class'ını kaldır
    var thumbnails = document.querySelectorAll('.kaythumbnail');
    thumbnails.forEach(function(thumb) {
        thumb.classList.remove('active');
    });
    
    // Tıklanan thumbnail'e active class'ını ekle
    element.classList.add('active');
}
let kayCurrentIndex = 0;
function kaychangeImage(src, element) {
    const thumbnails = Array.from(document.querySelectorAll('.kaythumbnail'));
    const index = thumbnails.indexOf(element);
    kayCurrentIndex = index;

    document.getElementById('kaymainImage').src = src;

    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    element.classList.add('active');
}


function kayprevImage() {
    const thumbnails = Array.from(document.querySelectorAll('.kaythumbnail'));
    if (kayCurrentIndex > 0) {
        kayCurrentIndex--;
        const newThumb = thumbnails[kayCurrentIndex];
        newThumb.click();
        if (document.getElementById('kaylightbox').style.display === 'block') {
            document.getElementById('kaylightbox-img').src = newThumb.querySelector('img').src;
        }
    }
}

function kaynextImage() {
    const thumbnails = Array.from(document.querySelectorAll('.kaythumbnail'));
    if (kayCurrentIndex < thumbnails.length - 1) {
        kayCurrentIndex++;
        const newThumb = thumbnails[kayCurrentIndex];
        newThumb.click();
        if (document.getElementById('kaylightbox').style.display === 'block') {
            document.getElementById('kaylightbox-img').src = newThumb.querySelector('img').src;
        }
    }
}



// Resme tıklanınca lightbox'ı aç
document.getElementById('kaymainImage').addEventListener('click', function () {
    const currentSrc = this.src;
    const thumbnails = Array.from(document.querySelectorAll('.kaythumbnail'));
    kayCurrentIndex = thumbnails.findIndex(t => t.querySelector('img').src === currentSrc);

    document.getElementById('kaylightbox-img').src = currentSrc;
    document.getElementById('kaylightbox').style.display = "block";
});


// Lightbox'ı kapat


document.getElementById('kaycloseBtn').addEventListener('click', function (e) {
    document.getElementById('kaylightbox').style.display = "none";
});




let ceyImages = document.querySelectorAll(".ceyimg");
let ceyModal = document.getElementById("foyymodal");
let ceyModalImg = document.getElementById("ceymodal-img");
let ceyCaption = document.getElementById("ceycaption");
let currentIndex = 0;

ceyImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    showModal();
  });
});

function showModal() {
  ceyModal.style.display = "block";
  ceyModalImg.src = ceyImages[currentIndex].src;
  ceyCaption.innerHTML = ceyImages[currentIndex].alt;
}

function ceyCloseModal() {
  ceyModal.style.display = "none";
}

function ceyChangeSlide(n) {
  currentIndex = (currentIndex + n + ceyImages.length) % ceyImages.length;
  showModal();
}