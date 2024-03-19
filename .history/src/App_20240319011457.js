import SideBar from './components/SideBar'
import Link from './components/Link'
import Route from './components/Route'
import AccordionPage from './pages/AccordionPage'
import DropdownPage from './pages/DropdownPage'

const App = () => {
  return (
    <div>
        <SideBar/>
        <Link to='/accordion'>Go to accordion</Link>
        <Link to='/dropdown'>Go to dropdown</Link>
        <div>
            <Route path='/accordion'>
                <AccordionPage/>
            </Route>
            <Route path='/'>
                <DropdownPage/>
            </Route>
        </div>
    </div>
  )
}

export default App