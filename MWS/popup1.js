
document.addEventListener("DOMContentLoaded", function () {

	var t = null;
	var tabid = null;
	
	document.getElementById("MWSbox").addEventListener("keyup", function() {
		var value = document.getElementById("MWSbox").value;
		var list = document.getElementById("MWSlist");
		list.innerHTML = "";
		var regex = new RegExp(value, "i");
		for(var iter = 0; iter < t.length; iter++) {
			if(t[iter].text.match(regex)) {
				//add a list item
				var node=document.createElement("li");
				var anchor = document.createElement("a");
				anchor.innerHTML = t[iter].text;
				anchor.href = "#####" + t[iter].id;
				anchor.addEventListener("click", function() {
					var arr = this.href.split("#####");
					chrome.tabs.sendMessage(tabid, {message: "click", id: arr[1]});
				});
				node.appendChild(anchor);
				list.appendChild(node);
			}
		}
	});
	
	chrome.tabs.getSelected(null, function(tab) {
	  chrome.tabs.sendMessage(tab.id, {message: "init"}, function(response) {
		  chrome.tabs.sendMessage(tab.id, {message: "hello"}, function(response) {
			tabid = tab.id;
			t = response.resp;
		  });	  
	  });
	});

	document.getElementById("MWSbox").focus();
});