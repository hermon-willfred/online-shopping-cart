var productcontainer = document.getElementById("product")
var search = document.getElementById("search")
var productlist= productcontainer.querySelectorAll("div")

search.addEventListener("keyup", function(){
    var searchvalue = event.target.value.toLowerCase()

    for(count=0; count<productlist.length; count=count+1){
        var productname = productlist[count].querySelector("p").textContent
        if(productname.toLowerCase().indexOf(searchvalue) <0){
            productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
        }   
    }
})