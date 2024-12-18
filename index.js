import axios from "axios";

const apiButton = document.getElementById("apiButton");
const apiData = document.getElementById("apiData");

apiButton.addEventListener("click", async () => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    apiData.innerHTML = response.data
      .slice(0, 5)
      .map(post => `<div class="p-3 border-b">${post.title}</div>`)
      .join("");
  } catch (error) {
    apiData.innerHTML = `<div class="text-red-500">Error fetching data</div>`;
  }
});
