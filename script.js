const ul = document.getElementById("fetchedData");

fetch("data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      const textNode = document.createTextNode(data[i].name);
      const li = document.createElement("li");
      li.appendChild(textNode);
      ul.appendChild(li);
    }
  })
  .catch((error) => {
    console.log(error);
  });

//  Using async and await
const getData = async () => {
  const response = await fetch("data.json");
  const data = await response.json();
  return data;
};
getData()
  .then((data) => {
    console.log(data[0]);
  })
  .catch((error) => {
    console.log("Data not Found", error);
  });
