window.cipher = {
  
  encode: (offset, string) => {
    let nuevoString = "";
    for (let i = 0; i < string.length; i++) {
      let positionAscii = string.charCodeAt(i);
      let newPositionAscii = ((positionAscii - 65 + offset) % 26 + 65);
      let newCharacter = String.fromCharCode(newPositionAscii);
      nuevoString = nuevoString+newCharacter;
    }
  
        return nuevoString;
      }

    // console.log (nuevoString);

  ,decode: (offset,string) => {
    let segundoString = "";
    for (let i=0; i < string.length; i++) {
      let positionAscii = stringh.charCodeAt (i);
      let newPositionAscii = ((positionAscii +65 - offset) % 26 +65);
      let newCharacter = String.fromCharCode(newPositionAscii);
      segundoString = segundoString+newCharacter;
    }
  }  
     
  
}