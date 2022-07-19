import Header from "components/Header";
import { Link, Route } from "wouter";

import { GifsContextProvider } from "context/GifContext";
import { UserContextProvider } from "context/userContext";

import Detail from "pages/Detail";
import Home from "pages/Home";
import SearchResults from "pages/SearchResults";
import Login from "pages/LoginPage";

import "./styles.css";

export default function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <Header />
        <section>
          <h1>
            <Link to="/">App</Link>
          </h1>
          <GifsContextProvider>
            <Route path="/" component={Home} />
            <Route path="/search/:keyword/:rating?" component={SearchResults} />
            <Route path="/gif/:id" component={Detail} />
            <Route path="/login" component={Login} />
          </GifsContextProvider>
        </section>
      </div>
    </UserContextProvider>
  );
}