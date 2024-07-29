import React from "react";
import type { AppProps } from "next/app";
import { store } from "@/store/store";
import { Provider } from "react-redux";

import "@/styles/globals.scss";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;