const rightBtn = document.getElementById("right-arrow");
const leftBtn = document.getElementById("left-arrow");
const imageContainer = document.getElementById("image-container");
let currentIndex = 0;

// console.log(imageContainer.children[0]);

function rightSlide() {
    if (currentIndex === 7) {
        currentIndex = 0;
        // console.log(imageContainer.children[currentIndex]);
        imageContainer.children[currentIndex].style.display = "flex";

    } else {
        // console.log(imageContainer.children[currentIndex]);
        imageContainer.children[currentIndex].style.display = "none";
        imageContainer.children[currentIndex += 1].style.display = "flex";

    }
 }


 function autoSlide() {
  setInterval(()=>{
         rightSlide();
     }, 2000);
 }
  autoSlide();


// function leftSlide() {
//     if (currentIndex === 0) {
//         imageContainer.children[currentIndex].style.display = "none";
//         currentIndex = 7;
//         imageContainer.children[currentIndex].style.display = "block";
//     } else {
//         imageContainer.children[currentIndex].style.display = "none";
//         imageContainer.children[currentIndex -=1 ].style.display = "block";
//     }
//  }


function leftSlide() {
  // पहले current image को hide करो
  imageContainer.children[currentIndex].style.display = "none";

  // अगर currentIndex 0 है तो आखिरी image पर जाओ
  if (currentIndex === 0) {
    currentIndex = imageContainer.children.length - 1;
  } else {
    currentIndex = currentIndex - 1;
  }

  // अब नई image को दिखाओ
  imageContainer.children[currentIndex].style.display = "block";
}






