import "../styles/globals.scss";
import MainNav from "../src/components/MainNav";
import StoryNav from "../src/components/StoryNav";
import SubNav from "../src/components/SubNav";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSun } from '@fortawesome/free-solid-svg-icons'

library.add(faSun)

function MyApp({ Component, pageProps }) {
  return (
    <div className="Page__Layout">
      <header className="Header__Layout">
        <MainNav />
        <StoryNav />
        <SubNav />
      </header>
      <main className="Page__Content">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
