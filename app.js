//Picking static objects
const form = document.querySelector("form");
const saveBtn = document.querySelector("#save");
const clearBtn = document.querySelector("#clear");
const bannerList = document.querySelector("#banners-list");

//Show the banners if there are banners saved
const showBanners = () => {
  const banners = localStorage.getItem("banners-data");
  if (banners) {
    bannerList.innerHTML = banners;
  }
};

//Function to create a new banner
const createNewBanner = (redirect_link, banner_img, element_id) => {
  const aTag = document.createElement("a");
  const banner = document.createElement("img");

  aTag.href = redirect_link;
  aTag.target = "_blank";

  banner.style.height = "320px";
  banner.style.width = "320px";
  banner.style.cursor = "pointer";
  banner.id = element_id;
  banner.src = banner_img;

  bannerList.appendChild(aTag).appendChild(banner);
};

//When the form is submited create new banner and reset the inputs
form.onsubmit = (e) => {
  e.preventDefault();
  const image = e.target[0].value;
  const redirect = e.target[1].value;
  createNewBanner(redirect, image, "banners-list");
  form.reset();
};

//Save button to save the data to local storage
saveBtn.onclick = () => {
  const banners = document.querySelector("#banners-list").innerHTML;
  localStorage.setItem("banners-data", banners);
};

//Clear data from local storage
clearBtn.onclick = () => {
  localStorage.removeItem("banners-data");
};
