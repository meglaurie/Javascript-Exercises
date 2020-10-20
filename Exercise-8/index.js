function caesarCipher(str){
  var text = str.split('');
  for(var i = 0; i < text.length; i++){
    // Cipher
    switch(text[i]){
      case ' ':
      break;
      case 'z':
      text[i] = 'a';
      break;
      case 'Z':
      text[i] = 'A';
      break;
      default:
      text[i] = String.fromCharCode(1 + text[i].charCodeAt(0));
    }
    // Upper-case Vowels
    switch(text[i]){
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
      text[i] = text[i].toUpperCase();
    }
    document.getElementById('root').innerHTML =  text.join('');

  }
}

caesarCipher("Hello World!");
