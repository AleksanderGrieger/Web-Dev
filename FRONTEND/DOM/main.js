let form = document.querySelector("#addForm");
let itemList = document.querySelector("#items");
let filter = document.getElementById("filter");

addItem = (e) => {
  e.preventDefault();

  let newItem = document.getElementById("item").value;

  let li = document.createElement("li");
  li.className = "list-group-item";

  li.appendChild(document.createTextNode(newItem));

  let deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  deleteBtn.appendChild(document.createTextNode("X"));

  li.appendChild(deleteBtn);

  //   let txt = newItem.value;
  //   li.innerText = txt;
  //   console.log(li);
  itemList.appendChild(li);
};

form.addEventListener("submit", addItem);

removeItem = (e) => {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?!")) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
};

itemList.addEventListener("click", removeItem);

// Filter Items
function filterItems(e) {
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName("li");
  // Convert to an array
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

filter.addEventListener("keyup", filterItems);
