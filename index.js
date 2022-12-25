let images = [{
    url: "images/image_1.png"
  }, {
    url: "images/image_2.png"
  }, {
    url: "images/image_3.png"
  }];

function initSlider(options) {
    if (!images || !images.length) return;

    options = options || {
        points: true,
        Navigator: true
      };
    
    let sliderImages = document.querySelector(".second_images");
    let sliderVectors = document.querySelector(".second_vectors");
    let sliderPoints = document.querySelector(".second_points");
    let sliderNavigator = document.querySelector(".second_items");

    initImages();
    initVectors();
    initPoints();
    initNavigator();

    
    function initImages() {
      images.forEach((image, index) => {
        let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
        sliderImages.innerHTML += imageDiv;
      });
    }
    
    function initVectors() {
        sliderVectors.querySelectorAll(".second_vector").forEach(vector => {
        vector.addEventListener("click", function() {
          let curNumber = +sliderImages.querySelector(".active").dataset.index;
          let nextNumber;
          if (vector.classList.contains("left")) {
            nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
          } else {
            nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
          }
          moveSlider(nextNumber);
        });
      });
    }

    function initNavigator() {
        sliderNavigator.querySelectorAll(".second_item").forEach(navigator => {
            navigator.addEventListener("click", function() {
            let curNumber = +sliderImages.querySelector(".active").dataset.index;
          let nextNumber;
          if (navigator.classList.contains("left")) {
            nextNumber = 0;
          } else 
          if (navigator.classList.contains("sentr")) {
            nextNumber = 1;
          } else {
            nextNumber = 2;
          }
          moveSlider(nextNumber);
        });
      });
    }

    function initPoints() {
        images.forEach((image, index) => {
          let point = `<div class="second_points-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
          sliderPoints.innerHTML += point;
        });
        sliderPoints.querySelectorAll(".second_points-item").forEach(point => {
            point.addEventListener("click", function() {
            moveSlider(this.dataset.index);
          })
        })
    }    

    function moveSlider(num) {
        sliderImages.querySelector(".active").classList.remove("active");
        sliderImages.querySelector(".n" + num).classList.add("active");
        if (options.points) {
            sliderPoints.querySelector(".active").classList.remove("active");
            sliderPoints.querySelector(".n" + num).classList.add("active");
        }
    }
}

let sliderOptions = {
    points: true,
    navigator: true
};

document.addEventListener("DOMContentLoaded", function() {
    initSlider(sliderOptions);
});