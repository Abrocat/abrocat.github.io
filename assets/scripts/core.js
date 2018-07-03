function openTab(event, tabName){
    //Hide all elements with class tabContent
    //Get all elements with tabContent
    tabContent = document.getElementsByClassName("tabContent");
    for (var i = 0; i < tabContent.length; i ++) { // hide them
        tabContent[i].style.display = "none";
    }

    //Get all tabLinks and remove active class
    tabLinks = document.getElementsByClassName("tabLinks");
    for (var i = 0;i < tabLinks.length;i++){
        tabLinks[i].className = tabLinks[i].className.replace(" active", ""); //remove the class
    }

    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";

}

function screenPos() {
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop

    if(scrollTop < 100) {
        document.getElementById("navbar").style.opacity = scrollTop/100;
    }
    else{
        
        document.getElementById("navbar").style.opacity = 1;
    }     
}

function setup() {
    var barHeight = document.getElementById("navItembar").style.height;
    document.getElementById("navbar").style.height = barHeight;
}


function populateTable() {
    var myTable = document.getElementById("myTable");


    for(var i = 1; i <1000;i++) {
        var newRow = myTable.insertRow();
        var newCell1 = newRow.insertCell();
        var newCell2 = newRow.insertCell();
        newCell1.innerHTML = "Row " + i;
        newCell2.innerHTML = "Row " + i;
    }
}
