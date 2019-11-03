import React from 'react';
import{BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
import Home from './Components/Pages/PageHome'
import Blog from './Components/Pages/PageBlog'
import Contacto from './Components/Pages/PageContacto'
import Nosotros from './Components/Pages/PageNosotros'
function App() {
  return (
    <BrowserRouter>
    <Redirect from="/" to="/PageHome" />
    <Switch>
      <Route exact path = "/PageHome" render = {()=><Home/>}/>
      <Route exact path = "/PageNosotros" render = {() => <Nosotros/>} />
      <Route exact path = "/PageBlog" render = {() => <Blog/>} />
      <Route exact path = "/PageContacto" render = {() => <Contacto/>} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
