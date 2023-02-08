let all = document.getElementsByTagName("button")

function onBtnClick(item) {
    let res = document.getElementById("res")
    item = item.innerHTML
    res.value += item
}

window.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("=").click();
    }
  });

document.getElementById("=").addEventListener("click", function () {
    let result = "";
    try{
        result = eval(document.getElementById("res").value)
        document.getElementById("res").value += `=${result}`;
    }
    catch{
    document.getElementById("res").value = "Error";
        
    }
})
