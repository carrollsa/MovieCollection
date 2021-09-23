import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css'
import Loading from './components/Loading'
import Logout from './components/Logout'
import Nav from './components/Nav'
import { ThemeProvider } from './contexts/theme'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Home = React.lazy(() => import('./components/Home'))
const MyCollection = React.lazy(() => import('./components/MyCollection'))
const NotFound = React.lazy(() => import('./components/NotFound'))

function App() {
    const [theme, setTheme] = React.useState('light')
    const toggleTheme = () => setTheme((theme) => theme === 'light' ? 'dark' : 'light')

    return (
        <Router>
            <ThemeProvider value={theme}>
                <div className={theme}>
                    <div className='container'>
                        <Logout />
                        <Nav toggleTheme={toggleTheme} />
                        <React.Suspense fallback={<Loading />}>
                            <Switch>
                                <Route exact path='/' component={Home} />
                                <Route exact path='/mycollection' component={MyCollection} />
                                <Route path='*' component={NotFound} />
                            </Switch>
                        </React.Suspense>
                    </div>
                </div>
            </ThemeProvider>
        </Router>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);