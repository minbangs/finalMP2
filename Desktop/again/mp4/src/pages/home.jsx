import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import Helmet from '../components/Helmet/Helmet'
import products from '../assets/data/products'
import heroImg from '../assets/images/heroImg.png'
import counterImg from '../assets/images/counter-timer.png'
import Services from '../services/Services'
import ProductList from '../components/UI/ProductList'
import Clock from '../components/UI/Clock'
import '../styles/home.css'

const Home = () => {

  const[trendingClothes, setTrendingClothes] = useState([])
  const[bestSellers, setBestSellers] = useState([])
  const[newArrivals, setNewArrivals] = useState([])
  const[mostLiked, setMostLiked] = useState([])
  const[pants, setPants] = useState([])

  const year = new Date().getFullYear();

  useEffect(() =>{
    const filteredTrendingClothes = products.filter(item => item.category === 'Jackets');
    const filteredBestSellers = products.filter(item => item.category === 'Cargo');
    const filteredNewArrivals = products.filter(item => item.category === 'Relaxed Set');
    const filteredPants = products.filter(item => item.category === 'Legacy');
    const filteredMostLiked = products.filter(item => item.category === 'Accessories');

    setTrendingClothes(filteredTrendingClothes)
    setBestSellers(filteredBestSellers)
    setNewArrivals(filteredNewArrivals)
    setMostLiked(filteredMostLiked)
    setPants(filteredPants)
  }, [])
  return (
    <Helmet title={"Home"}>
    <section className="hero__section">
    <Container> 
        <Row>
          <Col lg="6" md="6">
            <div className='hero__content'>
              <p className="hero__subtitle">Trending products in {year}</p>
              <h2>Merge the trend styles with elegance</h2>
              <p>The latest styles with the best price in one place. Where luxury meets affordability.</p>
              
              <motion.button whileHover={{scale: 1.1, backgroundColor: "#617D92", color: "#fff"}} whileTap={{scale: 1.2}} className="shop__btn"><Link to='/shop'>SHOP NOW</Link></motion.button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="hero__img">
              <img src={heroImg} alt=""></img>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="trending__products">
    <Services />
      <Container id='trend_cont'>
        <Col lg='12' className='text-center mb-5'>
         <h2 className='section__title'>Trending Clothes</h2>
        </Col>
        <Row>
          <ProductList data={trendingClothes} id="trend_prod"/>
        </Row>
      </Container>
    </section>

    <section className="best__sales">
      <Container id='best_cont'>
      <Col lg='12' className='text-center mb-5'>
        <h2 className='section__title'>Best Sellers</h2>
      </Col>
        <Row>
          <ProductList data={bestSellers}/>
        </Row>
      </Container>
    </section>
    <section className="timer__count">
      <Container>
        <Row>
          <Col lg='6' md='12' className='count__down-col'>

            <div className="clock__top-content">
              <h4 className='fs-6 mb-2'>Limited Offer </h4>
              <h3 className='fs-5 mb-3'>Black Hoodie</h3>
            </div>
            <Clock />

            <motion.button whileTap={{scale: 1.2}} whileHover={{scale: 1.1, backgroundColor: "#617D92", color: "#fff"}} className='shop__btn store__btn'><Link to ='/shop'>Visit Store</Link></motion.button>
          </Col>

          <Col lg='6' md='12' className='text-end counter__img'>
            <motion.img whileHover={{scale: 1.1}} src={counterImg} alt=""/>
          </Col>
        </Row>
      </Container>
    </section> 

    <section className="new__arrivals">
      <Container id='new_cont'>
        <Col lg='12' className='text-center mb-5'>
          <h2 className='section__title'>New Arrivals</h2>
        </Col>
        <Row>
          <ProductList data={newArrivals}/>
          <ProductList data={pants}/>
        </Row>
      </Container>
    </section>
    
    <section className="popular__category">
    <Container id='most_cont'>
      <Col lg='12' className='text-center mb-5'>
        <h2 className='section__title'>Most Liked</h2>
      </Col>
        <Row>
          <ProductList data={mostLiked}/>
        </Row>
      </Container>
    </section>
    </Helmet>
  )
}

export default Home