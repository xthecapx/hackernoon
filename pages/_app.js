import "../styles/globals.scss";
import "@ibm/plex/css/ibm-plex.min.css"

import MainNav from "../src/components/MainNav";
import SubNav from "../src/components/SubNav";
import TopNavAd from "../src/components/TopNavAd";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSun } from '@fortawesome/free-solid-svg-icons'

library.add(faSun)

function MyApp({ Component, pageProps }) {
  return (
    <div className="Page__Layout">
      <header className="Header__Layout">
        <MainNav />
        <SubNav />
        <TopNavAd />
      </header>
      <main className="Page__Content">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
