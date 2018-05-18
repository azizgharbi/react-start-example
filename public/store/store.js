import React from "react";

const store = {
    name = "Default name dude"
}
const TestContext = React.createContext(store.name);

export default TestContext;