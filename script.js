function firstChar(text) {
  // your code here
	let str = text.trim();
	if (str === '') {
		return '';
	}else{
			return str[0];
		
}
}
// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
