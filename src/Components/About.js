import React, { Suspense } from "react";
import { Link, Route, Switch } from "react-router-dom";

const Work = React.lazy(() => import("./Nested"));

function About() {
  return (
    <Suspense fallback={<span>Loading Inner......</span>}>
      <Switch>
        <Route path="/about" exact render={() => <div><h1>Helllllo</h1> <Link to="/about/work">Or work</Link></div> } />
        <Route path="/about/work" component={Work} />
      </Switch>
    </Suspense>
  );
}

export default About;
