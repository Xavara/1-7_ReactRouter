import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar";
import AboutPage from "../pages/AboutPage";
import CategoriesPage from "../pages/CategoriesPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import ProfilePage from "../pages/ProfilePage";

export default function AppRouter() {
  return (
    <Router>
        <Navbar></Navbar>
      <Switch>
        <Route exact path="/about" component={AboutPage}/>
        <Route exact path="/contact" component={ContactPage}/>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/profile/:username" component={ProfilePage}/>
        <Route exact path="/categories" component={CategoriesPage}/>
        <Route path="*" component={NotFoundPage}/>
      </Switch>
    </Router>
  );
}
