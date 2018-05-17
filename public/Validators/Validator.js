import {
    error
} from "util";


var Validator = {

    isValidate: (value, type, required = false) => {
        if (value) {

            switch (type) {
                case "String":
                    if (!isNaN(value))
                        throw Error("String Required");
                    else 
                        return value;
                    break;

                case "Number":
                    if (isNaN(value)) 
                        throw Error("Number Required");
                    else 
                        return value;
                    break;
            }
        } else {
            if (required) 
                throw Error("this filed is required");
            else 
                return value;
        }
    },

}



export {
    Validator
}