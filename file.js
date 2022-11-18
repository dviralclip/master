
function getPosts(json) {
    var list = [];
    var data = json.feed.entry;
	var count = 0;
    for (var i = 0; i < data.length; i++) {
		if(count>5){
			count = 0
		}
        
        var title = "<h6 u-custom-font u-font-oswald u-text u-text-default u-text-1'><strong>&nbsp;&nbsp;&nbsp;&nbsp;" + data[i].title.$t.substr(0, 15) + "...</strong></h6>";
        var link = data[i].link.pop().href;
        var summary = "<p class='u-text u-text-2'>" + data[i].content.$t.replace(/<\/?[^>]+(>|$)/g, "").substr(0, 50) + "...</p>";
         
        	var doc = new DOMParser().parseFromString(data[i].content.$t, "text/html");
        	var imgtag = doc.querySelector('img');
        	if (imgtag) {
        		var img = "<img alt='' class='u-image u-image-round u-radius-17 u-image-1' data-image-width='2000' data-image-height='1333' src='" + imgtag.src + "'/>";
        	} else {
        		var img = "";
        	}
			
        	
        

        list.push("<div class='u-align-left u-container-style u-list-item u-repeater-item u-list-item-1'><div class='u-container-layout u-similar-container u-valign-bottom-lg u-container-layout-1'>" + img +title+summary+"<a href='"+link+"' class='u-black u-border-none u-btn u-button-style u-hover-black u-btn-1'>read more</a></div></div>");
    }
    document.getElementById('demo').innerHTML = list.join('');

}


