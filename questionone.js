let textArr = ['AMOR', 'XISELA', 'JAMON', 'ROMA', 'OMAR', 'MORA','ESPONJA','RAMO', 'JAPONES', 'ARMO', 'MOJAN', 'MARO','ORAM','MONJA', 'ALEXIS'];

function groupText(arrText){
  let result = '';
  for(i=0; i<arrText.length; i++){
    result += arrText[i];
    for(j=0; j<arrText.length; j++){
      if(i!==j){
        let checkArr = arrText[j].split('');
        let textlength = 0;
        for(x=0; x<checkArr.length; x++){
            if(arrText[i].includes(checkArr[x])){
              textlength += 1;
            }
        }
        if(arrText[i].length === textlength){
          result += ` - ${arrText[j]}` ;
        }
      }
    }
    result += "\n";
  }
  return result;
}

console.log(groupText(textArr));