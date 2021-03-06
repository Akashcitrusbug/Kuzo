import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import ForgotPasswordComponent from "./components/ForgotPassword/ForgotPasswordComponent";
import RegistrationComponent from "./components/Registration/RegistrationComponent";
import ResetpasswordComponent from "./components/Resetpassword/ResetpasswordComponent";
import AddCredits from "./components/UserAccount/AddCredits";
import ChangeBilling from "./components/UserAccount/ChangeBilling";
import ChangePassword from "./components/UserAccount/ChangePassword";
import AccountPage from "./pages/AccountPage";
import BookInfluncer from "./pages/BookInfluncer";
import Browse from "./pages/Browse";
import IndexPage from "./pages/IndexPage";
import Influencer from "./pages/Influencer";
import LoginPage from "./pages/LoginPage";
import BookInfluencerDirectPurchase from "./components/BookInfluencer/BookInfluencerDirectPurchase";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path={"/"} component={IndexPage} />
        <Route exact path={"/login"} component={LoginPage} />
        <Route exact path={"/registration"} component={RegistrationComponent} />
        <Route
          exact
          path={"/forgot-password"}
          component={ForgotPasswordComponent}
        />
        <Route
          exact
          path={"/reset-password"}
          component={ResetpasswordComponent}
        />
        <Route exact path={"/account-summary"} component={AccountPage} />
        <Route exact path={"/change-billing"} component={ChangeBilling} />
        <Route exact path={"/add-credits"} component={AddCredits} />
        <Route exact path={"/change-password"} component={ChangePassword} />
        <Route exact path={"/browse"} component={Browse} />
        <Route exact path={"/influencer/:id"} component={Influencer} />
        <Route exact path={"/book-influencer/:id"} component={BookInfluncer} />
        <Route exact path={"/book-influencer-direct/:id"} component={BookInfluencerDirectPurchase} />
      </Router>
    </Provider>
  );
}

export default App;
