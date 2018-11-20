document.onscroll = function() {
	var a = document.getElementById('header');
	var x = document.documentElement.scrollTop||document.body.scrollTop;
	if (x > 100) {
		a.style.height = 300+'px';
	}
};
window.onload=function(){
		var box = document.getElementById("box");
		var ul = document.getElementById("lunbo");
		var bo = document.getElementById("b-ul");
		var span = bo.getElementsByTagName("span");
		var a = 0;
		var d = -820;
		timer = null;
		function b() {
			a -=820;
			if (a == -4100) {
				a = 0;
			};
			ul.style.left = a + "px";
		};
	timer = setInterval(b,1000);
	box.onmouseover = function () {
 	clearInterval(timer);
 	}
 	box.onmouseout = function () {
 	timer = setInterval(b,1000);
 	}
			for(var i=0;i<5;i++){
				function b(){
					var e=i;
					span[e].onclick=function(){
						if(e!=0){
							ul.style.left = (d*e) + "px";
						}
						else{
							ul.style.left = 0 + "px";
						}
					}
				}b();

			}

}
var zx = document.getElementById("zx");
var news = document.getElementById("news");
var lis = zx.getElementsByTagName("li");
var newsleft = news.getElementsByTagName('div');
for (var i=0;i<lis.length;i++){
		(function f(a){
			lis[a].onmouseover=function (){
				for(var j=0;j<newsleft.length;j++){
					newsleft[j].style.display="none";
					lis[j].style.color = "#666666";
					lis[j].style.borderBottom = '0px';
					lis[j].style.fontWeight = 'normal';
				}
				newsleft[a].style.display="block";
				lis[a].style.color = "#E2743B";
				lis[a].style.borderBottom  = "3px solid #E2743B";
				lis[a].style.fontWeight="bold";
			}
		})(i);
	};
	
var crn = document.getElementById("crn");
var lin = crn.getElementsByTagName("li");
var cr = document.getElementById("cr");
var newsright = cr.getElementsByTagName('div');
for (var i=0;i<lin.length;i++){
		(function f(a){
			lin[a].onmouseover=function (){
				for(var j=0;j<newsright.length;j++){
					newsright[j].style.display="none";
					lin[j].style.color = "#666666";
					lin[j].style.borderBottom = '0px';
					lin[j].style.fontWeight = 'normal';
				}
				newsright[a].style.display="block";
				lin[a].style.color = "#E2743B";
				lin[a].style.borderBottom  = "3px solid #E2743B";
				lin[a].style.fontWeight="bold";
			}
		})(i);
	};