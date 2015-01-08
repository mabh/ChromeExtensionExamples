chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message == "hello") {
	  var elements = document.getElementsByClassName("noodle-leftnav-branch");
	  var ret = [];
	  for(var i = 0; i < elements.length; i++) {
		if(elements[i].tagName.toLowerCase() == "a") {
			ret.push({
				text: elements[i].innerHTML,
				id: elements[i].id
			});
		}
	  }
	  sendResponse({resp: ret});
	} else if(request.message == "click") {
		document.getElementById(request.id).click();
	} else if(request.message == "init") {
		//expand all spans
	  /*var elements = document.getElementsByClassName("noodle-leftnav-branch");
	  for(var i = 0; i < elements.length; i++) {
		if(elements[i].tagName.toLowerCase() == "span") {
			elements[i].click();
		}
	  }*/
	  sendResponse({resp: "ok"});
	}
  });