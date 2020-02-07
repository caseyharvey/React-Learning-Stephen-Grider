import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  //ONE WAY OF HANDLING ASYNCHRONOUS FUNCTIONS
  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });

    this.setState({ images: response.data.results });
    // this has been bound using the arrow function method.
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
    // SearchBar IS BEING PASSED THE onSearchSubmit FUNCTION SO IT CAN BE CALLED WITHIN THE COMPONENT.
    // ImageList IS BEING PASSED THE IMAGES ARRAY ONCE IT HAD BEEN POPULATED.
  }
}

export default App;

//    ANOTHER WAY TO HANDLE ASYNCHRONOUS FUNCTIONS.

//   onSearchSubmit(term) {
//     axios
//       .get('https://api.unsplash.com/search/photos', {
//         params: { query: term },
//         headers: {
//           Authorization:
//             'Client-ID b460a8f6966468a77ef7b320240980a2e6c7a4216d99f63261920df6d62e6f64'
//         }
//       })
//       .then(response => {
//         //ATTACHES CALLBACKS FOR THE RESOLUTION AND/OR REJECTION OF THE PROMISE.
//         console.log(response.data.results);
//       });
//   }
