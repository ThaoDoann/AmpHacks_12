import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from 'shared/pages/home/home';
import Education from 'shared/pages/education/education.jsx';
import LessonPage from 'shared/pages/lessonPage/lessonPage.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/education" component={Education} exact /> 
          <Route exact path="/education/:lessonID" render={(props) => <LessonPage {...props} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
