
//Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2
function multiplyNumeric(obj){
    for(key in obj){
      if(typeof obj[key] == 'number'){
        obj[key] *= 2;
      }
    }
  }
  
  function showInsideObject(obj){
    for(key in obj){
      console.log(obj[key]);
    }
  }
  
  let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  showInsideObject(menu);
  multiplyNumeric(menu);
  showInsideObject(menu);