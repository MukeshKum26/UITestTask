import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import Student from './containers/Student/StudentList'
import Projects from './containers/Projects/ProjectsList'
import StudentDetails from './containers/Student/StudentDetails'
import rootReducers from './redux-saga/reducers'
import sagas from './redux-saga/saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore( rootReducers, applyMiddleware( sagaMiddleware ) )
sagaMiddleware.run( sagas )

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <React.Fragment>
            <Route exact path='/projects' component={Projects}/>
            <Route exact path="/students" component={Student}/>
            <Route exact path="/student/:id" component={StudentDetails} />
            <Route exact path="/students/create" component={StudentDetails} />
          </React.Fragment>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App;
