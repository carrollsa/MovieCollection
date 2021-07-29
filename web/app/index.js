import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css'
import Loading from './components/Loading'
import Nav from './components/Nav'
import { ThemeProvider } from './contexts/theme'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { VscRepoClone } from 'react-icons/vsc'

const MovieList = React.lazy(() => import('./components/MovieList'))
const Recommendations = React.lazy(() => import('./components/Recommendations'))

function App() {
    const [theme, setTheme] = React.useState('light')
    const toggleTheme = () => setTheme((theme) => theme === 'light' ? 'dark' : 'light')

    return (
        <Router>
            <ThemeProvider value={theme}>
                <div className={theme}>
                    <div className='container'>
                        <Nav toggleTheme={toggleTheme}/>

                        <React.Suspense fallback={<Loading />}>
                            <Switch>
                                <Route exact path='/' component={MovieList} />
                                <Route exact path='/recommendations' component={Recommendations} />
                                <Route render={() => <h1>404</h1>} />
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