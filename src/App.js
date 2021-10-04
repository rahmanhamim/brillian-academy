import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import AllCourses from "./components/AllCourses/AllCourses";
import About from "./components/About/About";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
 return (
  <Router>
   <Header></Header>
   <Switch>
    <Route exact path="/">
     <Home></Home>
    </Route>
    <Route exact path="/home">
     <Home></Home>
    </Route>
    <Route exact path="/courses">
     <AllCourses></AllCourses>
    </Route>
    <Route exact path="/testimonials">
     <Testimonials></Testimonials>
    </Route>
    <Route exact path="/about">
     <About></About>
    </Route>
    <Route path="*">
     <NotFound></NotFound>
    </Route>
   </Switch>
   <Footer></Footer>
  </Router>
 );
}

export default App;
