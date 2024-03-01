const myApi = "BKySYviNeLW5xSmwICeXuA==qXrkplyWlwen0DuZ";

function fetchData() {
  $.ajax({
    method: "GET",
    url: "https://api.api-ninjas.com/v1/bucketlist",
    headers: { "X-Api-Key": myApi },
    contentType: "application/json",
    success: function (result) {
      console.log(result);
      generate(result.item);
    },
    error: function ajaxError(jqXHR) {
      console.error("Error: ", jqXHR.responseText);
    },
  });
}

function generate(item) {
  const displayText = document.getElementById("displayText");
  displayText.textContent = item;
}

const generateEl = document.getElementById("generate");
generateEl.addEventListener("click", fetchData);
