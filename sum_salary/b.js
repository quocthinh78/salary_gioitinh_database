var arr = document.getElementsByClassName('nv1');
var a = [];
function add(){
	for(var i = 0 ;i<arr.length;i++){
		a.push(arr[i].value);
	}
	a.forEach(myFunction);
	function myFunction(item, index) {
	if(item>180) {
		document.getElementById("text").innerHTML +='Nhân viên thứ '+ (index+1)+ " không có thuế thu nhập"   + "<br>";
	}
	}
}