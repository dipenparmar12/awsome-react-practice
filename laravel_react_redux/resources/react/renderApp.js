import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
//
// import Test from "./components/Test";
import store from "./store";

export const reactApp = ReactContainerComponent => documentID => {
    if (!documentID) return null;
    ReactDOM.render(
        <AppContainer>
            {/*<React.StrictMode>*/}
            <Provider store={store()}>
                {/* <BrowserRouter> OR HashRouter */}
                <HashRouter>
                    <ReactContainerComponent />
                </HashRouter>
                {/* </BrowserRouter> */}
            </Provider>
            {/*</React.StrictMode>*/}
        </AppContainer>,
        documentID
    );
};
