function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
};

testWebP(function(support) {

    if (support == true){
    	document.querySelector('body').classList.add("webp");
    }
});

function toggle() {
	var sec = document.getElementById("sec");
	var nav = document.getElementById("navigation");
	sec.classList.toggle("active");
	nav.classList.toggle("active");
}
