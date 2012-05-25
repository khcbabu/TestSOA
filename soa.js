function startSearch(){
	var searchitem= document.getElementById("search_text");
	var searchText=searchitem.value;
	
		
	if(searchText==""){
		alert("Empty search");
		searchitem.placeholder="Search...";
		searchitem.blur();
	}
	else {
		alert(searchText);
	}
}

function toggle(showHideDiv, switchImgTag) {
        var ele = document.getElementById(showHideDiv);
        var imageEle = document.getElementById(switchImgTag);
        if(ele.style.display == "block") {
                ele.style.display = "none";
		imageEle.innerHTML = '<img src="images/plus.gif">';
        }
        else {
                ele.style.display = "block";
                imageEle.innerHTML = '<img src="images/minus.gif">';
        }
}