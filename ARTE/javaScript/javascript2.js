function asd() {
  const input = document.getElementById("Search").value;

  fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=3d9d722b5c59445bb2b992f459f99e09&addRecipeInformation=true&number=100&query=" + input)

    .then((response) => response.json())
    .then((data) => {
      console.log("data", data);
      display(data);
    });

  async function display(data) {
    let table = "";
    let results = data.results;
    await results.forEach((results) => {
      table += "<tr>";
      table += `<td>${results.title}</td>
                <td>${results.sourceUrl}</td>
                <td><img src="${results.image}" style = "width: 50px; height: 50px; border-radius:50%"></td>`;
      table += "</tr>";
    });
    document.querySelector("tbody").innerHTML = await table;

    $(document).ready(
      function () {
        $("#example").DataTable();
      });
  }
}

