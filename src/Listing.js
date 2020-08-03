import React, { Component } from "react";
import ProductWrapper from "./Product/ProductWrapper";
import NykaaLogo from "./NykaaLogo";
import ScrollArrow from "./ScrollTop";
import { searchWrapper, inputWrapper, buttonWrapper } from "./styles";
import ErrorComponent from "./ErrorComponent";

class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: [], // to store all the products data
      activeState: [],
      visible: 12, // cards to be visible to user
      errorMessage: false
    };
    this.inputField = React.createRef();
    this.handleSearch = this.handleSearch.bind(this);
    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    this.setState(prev => {
      return { visible: prev.visible + 8 };
    });
  }

  componentDidMount() {
    const apiUrl = "http://localhost:8000/products"; //API Call

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => this.setState({ productData: data, activeState: data }))
      .catch(error => {
        console.error(error);
      });
  }

  handleSearch = () => {
    const { productData } = this.state;
    this.setState({ errorMessage: false });
    const inputData = this.inputField.value;
    let searchProducts = [];
    for (var i = 0; i < productData.length; i++) {
      if (productData[i].title === inputData) {
        searchProducts.push(productData[i]);
      }
    }
    if (searchProducts.length === 0) {
      // Either user searches wrong word or user searches nothing
      if (inputData !== "") {
        this.setState({ errorMessage: true });
      }
      searchProducts = [...productData];
    }
    this.setState({ activeState: searchProducts });
  };

  render() {
    const { errorMessage, activeState, visible } = this.state;
    return (
      <div>
        <NykaaLogo />
        <div className={searchWrapper}>
          <input
            className={inputWrapper}
            type="text"
            placeholder="Search your products here..."
            ref={elem => (this.inputField = elem)}
          />
          <button className={buttonWrapper} onClick={this.handleSearch}>
            Search
          </button>
        </div>
        <ErrorComponent errorMessage={errorMessage} />
        <ProductWrapper
          data={activeState}
          visible={visible}
          loadMore={this.loadMore}
        />
        <ScrollArrow />
      </div>
    );
  }
}

export default Listing;
