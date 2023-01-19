//Data
let slideshow_images = [
  {
    image: "https://n3.sdlcdn.com/imgs/j/8/e/Health_ID_Snapdeal_ABDM_1300X410-6c79d.jpg",
  },
  {
    image: "https://n3.sdlcdn.com/imgs/k/f/v/12_april_WB_Breezy_Dresses_WEB-5febf.jpg",
  },
  {
    image: "https://n1.sdlcdn.com/imgs/k/f/v/12_april_WB_Kitchen_Essentials_WEB-cca82.jpg",



  },
  {
    image: "https://n1.sdlcdn.com/imgs/k/f/v/12_april_WB_Festive_kurta_sets_WEB_1-9d9b7.jpg",
  },
  {
    image: "https://n2.sdlcdn.com/imgs/j/w/0/LightingsWeb_27sep-b4418.jpg",
  },
  {
    image: "https://n1.sdlcdn.com/imgs/j/w/0/OrganizeHomeWeb_27sep-9e6e0.jpg",
  },
  {
    image: "https://n2.sdlcdn.com/imgs/j/w/0/KitchenStorageWeb_27sep-7484d.jpg",
  },
  {
    image: "https://n2.sdlcdn.com/imgs/j/w/0/KitchenAppliancesWeb_27sep-f91a3.jpg",
  }

];

//Setting inital localStorage
// if (localStorage.getItem("users" === null)) {
//     localStorage.setItem("users", JSON.stringify([]));
// }

function showSlideShow() {
  let img = document.createElement("img");
  let counter = 0;
  img.src = slideshow_images[counter].image;
  counter++;
  let div = document.getElementById("slideshow");
  div.append(img);
  setInterval(() => {
    div.innerHTML = "";
    if (counter == slideshow_images.length) {
      counter = 0;
    }
    img.src = slideshow_images[counter].image;
    div.append(img);
    counter++;
  }, 4000);
}

showSlideShow();
