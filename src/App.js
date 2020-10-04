
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Home from 'shared/pages/home/Home.jsx';
import Education from 'shared/pages/education/Education.jsx';
import LessonPage from 'shared/pages/lessonPage/LessonPage.jsx';

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