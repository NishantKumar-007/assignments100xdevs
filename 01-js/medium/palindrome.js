/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const str1 = str.toLowerCase();
  const str2 = str1.replace(/ /g, "");
  const str3 = str2.replace(/[^a-zA-Z0-9]/g, "");
  let p1 = 0;
  let p2 = str3.length - 1;
  while (p1 < p2) {
    if (str3.charAt(p1) != str3.charAt(p2)) {
      return false;
    }
    p1++;
    p2--;
  }
  return true;
}

module.exports = isPalindrome;
