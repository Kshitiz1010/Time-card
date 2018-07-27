var qrcode = new QRCode(document.getElementById("qrcode"), {
	width : 100,
	height : 100
});
function run(){
	var elText = document.getElementById("vehicle").value;
	var elText1 = document.getElementById("time").value;
	var elText2 = document.getElementById("date").value;
	var elText3 = document.getElementById("name").value;
	var elText4 = document.getElementById("address").value;
	var a = "Vehicle: " + elText +"\n"+ "time: " + elText1 +"\ndate: " + elText2 +"\n"+ "name: " + elText3 +"\n"+ "address: " + elText3;

	
	qrcode.makeCode(a);
	
}



function makeCode (a) {		
	if (!elText.value) {
		alert("Input a text");
		elText.focus();
		return;
	}
}

function time(){
	var d = new Date();
	d.getHours(); // => 9
	d.getMinutes(); // =>  30
	d.getSeconds();
	document.getElementById("time").value = d.getHours() + ":" + 
	d.getMinutes() + ":"+ 
	d.getSeconds(); 
	// console.log(d.getHours() + ":" + 
	// d.getMinutes() + ":"+ 
	// d.getSeconds());
}