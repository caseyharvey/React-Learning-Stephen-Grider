import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    //you should call super(props) before any other statement. Otherwise,
    //this.props will be undefined in the constructor
    this.state = { spans: 0 };
    // Constructor is the only place where you should assign this.state directly
    this.imageRef = React.createRef();
    // Refs are created using React.createRef() and attached to React elements
    // via the ref attribute.( <img ref={this.imageRef}) Refs are commonly assigned
    // to an instance property when a component is constructed so they can be referenced
    // throughout the component.
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
    //THE LOAD EVENT IS FIRED WHEN THE WHOLE PAGE HAS LOADED,
    // INCLUDING ALL DEPENDENT RESOURCES SUCH AS STYLESHEETS AND IMAGES
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    // HERE THE REF IS ACCESSED TO READ THE CLIENT HEIGHT

    const spans = Math.ceil(height / 10);

    this.setState({ spans });
    // IS THE SAME AS (this.setState({ spans: spans });) AS OF ES2015
  };

  render() {
    const { description, urls } = this.props.image;
    // OBJECT DESTRUCTURING TO CREATE VARIABLES THAT CAN BE REFERENCED DIRECTLY.
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}

export default ImageCard;
