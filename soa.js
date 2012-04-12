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
