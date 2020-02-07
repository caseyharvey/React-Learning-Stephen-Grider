import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };

  onFormSubmit = event => {
    //USING AN ARROW FUNCTION BINDS THE VALUE OF THIS TO THE ENCLOSING SCOPE
    event.preventDefault();

    this.props.onSubmit(this.state.term);
    //TO ACCESS PROPS IN A CLASS BASED COMPONENT THE THIS KEYWORD IS NEEDED.
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            Image search
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
              //ANOTHER EXAMPLE OF THIS BEING BOUND TO THE ENCLOSING SCOPE USING AN INLINE ARROW FUNCTION.
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
