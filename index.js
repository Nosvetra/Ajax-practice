const button = document.getElementById("to-add-photo");
const sacredButton = document.getElementById("to-add-photo2");
button.addEventListener("click", () => {
  const xttp = new XMLHttpRequest();
  xttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let responseObj = JSON.parse(this.responseText);
      const img = document.getElementsByClassName("asyncImg")[0];
      img.src = responseObj.url;
    }
  };
  xttp.open("GET", "https://api.waifu.pics/sfw/waifu", true);
  xttp.send();
});

sacredButton.addEventListener("click", () => {
  const url = "https://api.waifu.pics/nsfw/waifu";
  const response = fetch(url, "GET");
  fetch(url)
    .then((response) => response.json())
    .then((ojj) => {
      const img2 = document.getElementsByClassName("asyncImg2")[0];
      img2.src = ojj["url"];
    })
    .catch((err) => console.error(err));
});
