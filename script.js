const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Đặt tên các hình ảnh tại đây
let currentIndex = 0;

const imageElement = document.getElementById('image');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

function updateImage() {
    imageElement.src = 'images/' + images[currentIndex];
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    }
    updateImage();
});

nextButton.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
    }
    updateImage();
});

updateImage();
const likeButton = document.getElementById('like-button');

likeButton.addEventListener('click', () => {
    likeButton.style.backgroundColor = '#ff9900'; // Màu mới khi yêu thích
});

