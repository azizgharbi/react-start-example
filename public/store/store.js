import React from "react";

const store = {
    name : "Default value"
}
const TestContext = React.createContext(store.name);

export default TestContext;