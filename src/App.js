import { Route, Switch ,useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./components/Theme"
import { darkTheme } from "./components/Theme"
import GlobalStyle from "./GlobalStyles"
import { AnimatePresence } from "framer-motion"
import { Routes } from "react-router-dom";

//Components
import Main from './components/Main'
import AboutPage from './components/AboutPage'
import BlogPage from './components/BlogPage'
import WorkPage from "./components/WorkPage"
import SkillsPage from './components/SkillsPage'


function App() {

  const location = useLocation();

  return <div>

    <GlobalStyle />

    <ThemeProvider theme={lightTheme}>
      <AnimatePresence exitBeforeEnter initial={false}>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/blog" component={BlogPage} />
        <Route exact path="/skills" component={SkillsPage} />
        <Route exact path="/work" component={WorkPage} />
        <Route exact path="*" component={Main}/>
      </Switch>
      </AnimatePresence>
    </ThemeProvider>
    
    </div>
    
}

export default App

