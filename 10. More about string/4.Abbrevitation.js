function getAbbreviation(str) {
  let word = str.split(' ');
  let abbreviatRes = '';
  for (let i = 0; i < word.length; i++) {
    if (word[i].length >= 3) {
      let firstLit = word[i].toUpperCase().charAt(0);
      abbreviatRes += firstLit;
    }
  }
  return abbreviatRes;
}
console.log(getAbbreviation('some company name'));