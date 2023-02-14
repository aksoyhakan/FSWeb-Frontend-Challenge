import { Link, Route, Switch, useHistory } from "react-router-dom";
import AddingNewProject from "./AddingNewProject";
import AddingNewSkill from "./AddingNewSkill";
import { useSelector } from "react-redux";

export default function AddingPage() {
  const addPageSta = useSelector((store) => store.addPageStatus);

  const history = useHistory();

  return addPageSta ? (
    <div className="max-w-screen-xl mx-auto my-20">
      <Switch>
        <Route exact path="/adding">
          <Link to="/adding/newskill">
            <div className="w-1/3 mx-auto text-center my-8 px-8 py-4 text-2xl bg-green-500 rounded-lg text-green-700 border-green-700 border-2 border-solid hover:bg-green-600 hover:text-green-900 hover:border-green-900">
              Adding new skill
            </div>
          </Link>
          <Link to="/adding/newproject">
            <div className="w-1/3 mx-auto text-center my-8 px-8 py-4 text-2xl bg-green-500 rounded-lg text-green-700 border-green-700 border-2 border-solid hover:bg-green-600 hover:text-green-900 hover:border-green-900">
              Adding new project
            </div>
          </Link>
        </Route>
        <Route path="/adding/newskill">
          <AddingNewSkill />
        </Route>
        <Route path="/adding/newproject">
          <AddingNewProject />
        </Route>
      </Switch>
    </div>
  ) : (
    history.push("/")
  );
}
