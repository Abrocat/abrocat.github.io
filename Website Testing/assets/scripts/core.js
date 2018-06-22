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
