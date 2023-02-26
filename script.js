var taskList = [];

function markCompleted(item) {
  document.querySelectorAll("." + item).forEach((element) => {
    var childList = element.childNodes;
    for (let i = 0; i < childList.length; i++) {
      if (childList[i].style["text-decoration"] === "line-through") {
        childList[i].style["text-decoration"] = "none";
      } else {
        childList[i].style["text-decoration"] = "line-through";
      }
    }
  });
}

function deleteItem(item) {
  document.querySelectorAll("." + item).forEach((element) => {
    element.remove();
  });
}

function generateMiniLI(itemText, day, clasaDubioasa) {
  let dayBox = document.getElementById(day);
  let dayTaskList = dayBox.children[0];
  var miniLI = document.createElement("li");
  miniLI.classList.add("miniLI");
  miniLI.classList.add(clasaDubioasa);

  var miniSpan = document.createElement("span");
  miniSpan.innerHTML = itemText;
  miniLI.appendChild(miniSpan);
  dayTaskList.appendChild(miniLI);
}

function generateSpan(className, functionName, innerHTML, li) {
  var span = document.createElement("span");
  span.className = className;
  span.setAttribute("onclick", functionName);
  span.setAttribute("keypress", functionName);
  span.innerHTML = innerHTML;
  li.appendChild(span);
}

function createItem() {
  var itemText = document.getElementById("newItem").value;

  console.log(itemText)
  if (itemText === "") {
    return;
  }

  var orderedList = document.getElementById("orderedList");
  var day = document.getElementById("daySelect").value;
  var childrenNumber = orderedList.childElementCount;
  
  var li = document.createElement("li");
  var id = `item_${childrenNumber + 1}`;
  li.setAttribute("id", id);
  const clasaDubioasa =
    "item_" + itemText.replace(" ", "") + "_" + day + "_" + childrenNumber + 1;
  li.classList.add("item");
  li.classList.add(clasaDubioasa);

  generateSpan("itemName", `markCompleted('${clasaDubioasa}')`, itemText, li);
  generateSpan("itemDelete", `deleteItem('${clasaDubioasa}')`, "X", li);

  orderedList.appendChild(li);

  generateMiniLI(itemText, day, clasaDubioasa);

  document.getElementById("newItem").value = "";
}
