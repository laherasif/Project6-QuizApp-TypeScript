import React from 'react';
import Home from '../componentes/Home/main/Home'
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import Card from '../componentes/Home/QuestionCard';
import Result from '../componentes/Home/Result';


const App: React.FC = () => {
 
  return (
    <React.Fragment>
      <Router> 
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/QuizQuestions" component={Card}/>
        <Route path="/QuizResult" component={Result}/>
       </Switch>
      </Router>

    </React.Fragment>
  );
}

export default App;
