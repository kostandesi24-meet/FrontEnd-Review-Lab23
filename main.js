var c = 0 ;
function changeBackgroundColor(x,y) {
	if (c % 2 == 0) {	document.body.style.backgroundColor = x;
	c=c+1;}
	else {	document.body.style.backgroundColor = y;
	c=c+1;}


}