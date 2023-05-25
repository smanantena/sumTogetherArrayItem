function addTogether(arg1) {
    if(arguments.length >= 2) {
      let result = 0;
      for(let i = 0 ; i < arguments.length ; i++) {
        if(typeof(arguments[i])=="number") {
          result += arguments[i];
        } else {
          return undefined;
        }
      }
      if(result != false) {
        return result;
      }
    } else if(typeof(arg1) != "string" && typeof(parseInt(arg1)=="number")){
      let result = 0;
      return function(arg2) {
        if(typeof(arg2) != "string" && !Array.isArray(arg2)) {
          result += arg1;
          for(let i = 0; i < arguments.length; i++) {
            result += arguments[i];
          }
          return result;
        }
      }
    }
    
  }
  
  console.log(addTogether(5, undefined));