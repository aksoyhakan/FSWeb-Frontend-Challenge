import Introduction from "./components/Introduction";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Foot from "./components/Foot";
import { ContactForm } from "./components/ContactForm";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Introduction />
      <Switch>
        <Route exact path="/">
          <Skills />
          <Profile />
          <Projects />
          <Foot />
        </Route>
        <Route path="/contact">
          <ContactForm></ContactForm>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
