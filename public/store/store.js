import React from "react";

const store = {
    name : "Default"
}
const TestContext = React.createContext(store.name);

export default TestContext;