import { Link, Route } from "wouter";
import { GifsContextProvider } from "./context/GifContext";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <section>
        <h1>
          <Link to="/">App</Link>
        </h1>
        <GifsContextProvider>
          <Route path="/" component={Home} />
          <Route path="/search/:keyword/:rating?" component={SearchResults} />
          <Route path="/gif/:id" component={Detail} />
        </GifsContextProvider>
      </section>
    </div>
  );
}

export default App;
