function makeid(l) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < l; i++) {
    let index = Math.floor(Math.random() * chars.length);
    result += chars[index];   // ✅ correct (chars, not char)
  }

  return result;
}

// Do not change below
const l = prompt("Enter a number.");
alert(makeid(Number(l)));