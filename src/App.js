import {BrowserRouter as Router, Route} from 'react-router-dom'
import Landing from './views/Landing'
import AnotherPage from './views/AnotherPage'
import './App.css'

function App() {
  return (
    <Router>
        <Route path='/' exact component={Landing} />
        {/* you can access the following page by visiting http://localhost:3000/test */}
        <Route path='/test' exact component={AnotherPage} />
    </Router>
  )
}

export default App
