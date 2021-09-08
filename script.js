const ul = document.getElementById("fetchedData");
const addBtn = document.getElementById("addData");
const url =
  "https://script.google.com/macros/s/AKfycbw77BhNZceqxTbOtllVIiZUhFHoQKr33vKeUKQYxi9fvNEwxco/exec";

//Fetch API Json Data
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

//fetch API Using async and await
const getData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
getData()
  .then((data) => {
    console.log(data[0].hi);
  })
  .catch((error) => {
    console.log("Data not Found", error);
  });

//Fetch API Posting Data
function sheetData(){
	fetch(url,{
		method:"POST",
		mode:"no-cors",
		cache:"no-cache",
		headers:{
			"Content-type":"application/json"
		},
		redirect:"follow",
		body: JSON.stringify({restuarant:"Oliven"})
	});
}

addBtn.addEventListener("click",sheetData);