import React from "react";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };
  // Google OAuth needs to be loaded as soon as the component is mounted.
  componentDidMount() {
    // This reaches into the window to get access to gapi library
    window.gapi.load("client:auth2", () => {
      // We provide a callback arrow function for once the library has loaded
      // We then initialize the Google Auth object
      window.gapi.client
        .init({
          clientId:
            "879519479138-lphnumhfgdboqaa754tjl8b1plij37il.apps.googleusercontent.com",
          scope: "email"
        })
        // Once the promise is fulfilled we call getAuthInstance() and assign
        // the returned object to this.auth. We then check if the user is signed
        // in and the setState.
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>Signed in?</div>;
    } else if (this.state.isSignedIn) {
      return <div>Signed in</div>;
    } else {
      return <div>Signed out</div>;
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
