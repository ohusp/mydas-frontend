import { Switch, Route, Redirect } from 'react-router-dom';
import Landing from 'pages/Landing';
import WhoWeAre from 'pages/WhoWeAre';
import Programmes from 'pages/Programmes';
import Profile from 'pages/Profile';
import Login from 'pages/Login';
import Register from 'pages/Register';

// Font Awesome Style Sheet
import '@fortawesome/fontawesome-free/css/all.min.css';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';
import 'assets/styles/style.css';

function App() {
    return (
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/who-we-are" component={WhoWeAre} />
            <Route exact path="/programmes" component={Programmes} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Redirect from="*" to="/" />
        </Switch>
    );
}

export default App;
