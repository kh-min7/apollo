import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={Detail} />
    </Router>
  );
}
export default App;
