import React, { lazy, Suspense, useState } from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/styles";
import Progress from "./components/Progress";

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));

const generateClassName = createGenerateClassName({
    productionPrefix: "co"
});

export default () => {
    const [isSignedIn, setisSignedIn] = useState(false);
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header
                        onSignOut={() => setisSignedIn(false)}
                        isSignedIn={isSignedIn}
                    />
                    <Suspense fallback={<Progress />}>
                        <Switch>
                            <Route path="/auth">
                                <AuthLazy
                                    onSignIn={() => setisSignedIn(true)}
                                />
                            </Route>
                            <Route path="/" component={MarketingLazy} />
                        </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </BrowserRouter>
    );
};
