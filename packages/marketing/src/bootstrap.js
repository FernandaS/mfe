import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// Find Mount function to start up the app

const mount = (el) => {
  ReactDOM.render(<App />, el);
};

//  If we are in development and in asolation
// call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");

  if (devRoot) {
    mount(devRoot);
  }
}

// If we are running through a container
// and we should expor the mount function

export { mount };

// I could possibly expor the component here also
// And inside the container instead of import { mount}
// We would import the { marketinComponent }
