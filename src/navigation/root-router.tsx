/**
 * The root navigator is used to switch between major navigation flows of app.
 * Generally speaking, it will contain nested navigators depending on your flow.
 */

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import WelcomePage from "./pages/welcome-page";

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * We recommend using MobX-State-Tree store(s) to handle state rather than navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */


export default function RootRouter() {
  return (
    <BrowserRouter>
      <Switch>
        {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}
        <Route path="/about">
          <WelcomePage name={'Bohun'} />
        </Route>

        {/* Note how these two routes are ordered. The more specific
            path="/contact/:id" comes before path="/contact" so that
            route will render when viewing an individual contact */}
        <Route path="/contact/:id">
          {/*<Contact />*/}
        </Route>
        <Route path="/contact">
          {/*<AllContacts />*/}
        </Route>

        {/* If none of the previous routes render anything,
            this route acts as a fallback.

            Important: A route with path="/" will *always* match
            the URL because all URLs begin with a /. So that's
            why we put this one last of all */}
        <Route path="/">
          <WelcomePage name={'Jon Doe'} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
