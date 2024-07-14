const button = document.getElementById("to-add-photo");
const sacredButton = document.getElementById("to-add-photo2");
button.addEventListener("click", () => {
  const img = document.getElementsByClassName("asyncImg")[0];
  const xttp = new XMLHttpRequest();
  xttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      img.style.display = "block";
      let responseObj = JSON.parse(this.responseText);
      img.src = responseObj.url;
    }
  };
  xttp.open("GET", "https://api.waifu.pics/sfw/waifu", true);
  xttp.send();
});

sacredButton.addEventListener("click", () => {
  const img2 = document.getElementsByClassName("asyncImg2")[0];
  const url = "https://api.waifu.pics/nsfw/waifu";
  fetch(url, { method: "get" })
    .then((response) => response.json())
    .then((ojj) => {
      img2.style.display = "block";
      img2.src = ojj["url"];
    })
    .catch((err) => console.error(err));
});
