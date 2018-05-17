import {
    error
} from "util";


var Validator = {

    isValidate: (value, type) => {
        if (value) {

            switch (type) {
                case "String":
                    if (!isNaN(value)) {
                        throw Error("String Required");
                    }
                    break;
                case "Number":
                    if (isNaN(value)) {
                        throw Error("Number Required");
                    }
                    break;
            }
        } else {
            throw Error("this filed is required");
        }
    },

}



export {
    Validator
}