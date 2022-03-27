let textArr = ['AMOR', 'XISELA', 'JAMON', 'ROMA', 'OMAR', 'MORA','ESPONJA','RAMO', 'JAPONES', 'ARMO', 'MOJAN', 'MARO','ORAM','MONJA', 'ALEXIS'];

function groupText(arrText){
  for(i=0; i<arrText.length; i++){
    for(j=0; j<arrText.length; j++){
      if(i!==j){
        let checkArr = arrText[j].split('');
        for(x=0; x<checkArr.length; x++){
            if(arrText[i].includes(checkArr[x])){}
        }
      }
      
    }
  }
}

groupText(textArr);