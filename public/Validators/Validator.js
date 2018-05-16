import { error } from "util";


var Validator = {

	isString :(value) => {
        if(value.length > 0) {
            if(!isNaN(value)){
                throw Error("String Required");
           }
           return value;
        }
    },
    isNumeric :(value) => {
        if(value.length > 0) {
            if(isNaN(value)){
                throw Error("String Required");
           }
           return value;
        }
    },
    
  }

  export{
      Validator
  }