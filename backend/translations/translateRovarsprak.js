const rovarspraket = (text) => {
  const consonants = 'bcdfghjklmnpqrstvwxyz';
  const upperConsonants = consonants.toUpperCase();

  return text
    .split('')
    .map((char) => {
      if (consonants.includes(char)) {
        return char + 'o' + char;
      }
      else if(upperConsonants.includes(char)) {
        return char + 'O' + char;
      }
      else {
        return char;
      }
    })
    .join('');
}

module.exports = rovarspraket;