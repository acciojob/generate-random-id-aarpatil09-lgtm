function makeid(l) {
  // write your code here
	const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let result = "";
	for(let i=0;i < l;i++){
		let index = Math.floor(Math.random * char.length);
		result += chars[index];
	}
	return result;
}

// Do not change the code below.
 const l = prompt("Enter a number.");
 alert(makeid(l));
