let listItem = document.getElementsByTagName("li");


newListItem = () => {
    let close = document.getElementsByClassName("close");
    let dateValue = document.querySelector('input[type="date"]').value;
    let newItem = document.createElement("li");
    let inputValue = document.getElementById("input").value;
    let newText = document.createTextNode(inputValue);
    newItem.appendChild(newText);
    if (inputValue === '') {
        alert ("Enter text into text-bar.")
    } else {
        document.getElementById("listItems").appendChild(newItem);
    }
    document.getElementById("input").value = "";

    

    for (let i = 0; i < listItem.length; i++) {
        const item = document.createElement("span");
        const x = document.createTextNode("\u2716");
        item.className = "close";
        item.appendChild(x);
        listItem[i].appendChild(item);
    }

    for (let i = 0; i < listItem.length; i++) {
        const deadline = document.createElement("span");
        const dateEntry = document.createTextNode(dateValue);
        deadline.className = "dates";
        deadline.appendChild(dateEntry);
        listItem[i].appendChild(deadline);       
    }

    for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
        }
    }
}


clearText = () => {
    document.getElementById('input').value = '';
}

