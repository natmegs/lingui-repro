import React, { Component } from 'react';
import { Trans, Plural } from "@lingui/macro";
import { I18nProvider } from "@lingui/react";
import logo from './logo.svg';
import './App.css';
import catalogEn from "./locales/en/messages.js";

class App extends Component {
  render() {
    const variable = "variable";
    return (
      <div className="App">
        <I18nProvider language="en" catalogs={{ cs: catalogEn }}>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Trans>
              Some string with {variable}
            </Trans>
            <p>
              <Plural 
                value={1}
                one={`Only one`}
                other={`More than one`}
              />
            </p>
          </header>
        </I18nProvider>
      </div>
    );
  }
}

export default App;
