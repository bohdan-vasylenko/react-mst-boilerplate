
import React, {useEffect, useState} from 'react';
import { hot } from "react-hot-loader/root";
import RootRouter from "./navigation/root-router";
import { RootStore, RootStoreProvider, setupRootStore } from './store';
import GlobalStyles from "./theme/global-styles";
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
// @ts-ignore
import en from './translations/en.json';
// @ts-ignore
import fr from './translations/fr.json'

function App() {

    const [rootStore, setRootStore] = useState<RootStore | null>(null);

    // Kick off initial async loading actions, like loading fonts and RootStore
    useEffect(() => {
        (async () => {
            setupRootStore().then(setRootStore);
        })();
    }, []);

    // Before we show the app, we have to wait for our state to be ready.
    // In the meantime, don't render anything. This will be the background
    // color set in native by rootView's background color. You can replace
    // with your own loading component if you wish.
    if (!rootStore) {
        return null;
    }

  i18next.init({
    interpolation: { escapeValue: false },
    lng: 'en',                              // language to use
    resources: {
      en: {
        common: en
      },
      fr: {
        common: fr
      },
    },
  });

    return (
      <RootStoreProvider value={rootStore}>
        <I18nextProvider i18n={i18next}>
          <RootRouter />
          <GlobalStyles/>
        </I18nextProvider>
      </RootStoreProvider>
    );
}

export default hot(App);
