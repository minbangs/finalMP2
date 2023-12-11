import React, { useState } from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import "../styles/shop.css";
import products from "../assets/data/products";
import ProductList from "../components/UI/ProductList";

const Shop = () => {
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;

    if (filterValue === "Jackets") {
      const filteredProducts = products.filter(
        (item) => item.category === "Jackets"
      );

      setProductsData(filteredProducts);
    }

    if (filterValue === "Cargo") {
      const filteredProducts = products.filter(
        (item) => item.category === "Cargo"
      );

      setProductsData(filteredProducts);
    }

    if (filterValue === "Relaxed Set") {
      const filteredProducts = products.filter(
        (item) => item.category === "Relaxed Set"
      );

      setProductsData(filteredProducts);
    }

    if (filterValue === "Legacy") {
      const filteredProducts = products.filter(
        (item) => item.category === "Legacy"
      );

      setProductsData(filteredProducts);
    }

    if (filterValue === "Accessories") {
      const filteredProducts = products.filter(
        (item) => item.category === "Accessories"
      );

      setProductsData(filteredProducts);
    }
  };
  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    const searchedProducts = products.filter((item) =>
      item.productName
        .toLocaleLowerCase()
        .includes(searchTerm.toLocaleLowerCase())
    );

    setProductsData(searchedProducts);
  };

  return (
    <Helmet title="Shop">
      <CommonSection title="Products" />

      <section id="top-filter">
        <Container>
          <Row>
            <Col lg="3" md="6" id="first-filter-col">
              <div className="filter__widget">
                <select onChange={handleFilter} name="" id="">
                  <option>Filter by Category</option>
                  <option value="Jackets">Jackets</option>
                  <option value="Cargo">Cargo</option>
                  <option value="Relaxed Set">Relaxed Set</option>
                  <option value="Legacy">Legacy</option>
                  <option value="Accessories">Accessories</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="6" className="text-end">
              <div className="filter__widget">
                <select name="" id="">
                  <option>Sort by Category</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="12">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search for products..."
                  onChange={handleSearch}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="product-section">
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className="text-center fs-4">No products are found!</h1>
            ) : (
              <ProductList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
