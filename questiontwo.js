function reverseTest(text){
    let arrText = text.split('');
    let result = ''
    for(i=0; i<arrText.length; i++){
      if(arrText[i] === '('){
        for(j=arrText.length-2; j>=i+1; j--){
          result += arrText[j];
        }
        break;
      }
      result += arrText[i];
    }
    return result;
  }
  
  console.log(reverseTest('foo(bar)'));
  console.log(reverseTest('(bar)'));