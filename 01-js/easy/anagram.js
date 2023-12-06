/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length != str2.length) return false;
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  const ana1 = [];
  const ana2 = [];

  for (let i = 0; i < str1.length; i++) {
    ana1[str1.charCodeAt(i)] = (ana1[str1.charCodeAt(i)] || 0) + 1;
  }
  for (let i = 0; i < str2.length; i++) {
    ana2[str2.charCodeAt(i)] = (ana2[str2.charCodeAt(i)] || 0) + 1;
  }
  for (let i = 0; i < ana1.length; i++) {
    if (ana1[i] != ana2[i]) return false;
  }

  return true;
}

module.exports = isAnagram;
