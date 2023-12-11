import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../styles/contact.css'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const libraries = ['places'];
var mapContainerStyle = {
  width: '40vh',
  height: '40vh',
};
const center = {
  lat: 14.58413028717041, 
  lng: 121.06291198730469,
};


function ContactUs() {

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyD30nVZOTOFKKViRXU0fzgbaILy3aKsFKI',
        libraries,
      });
    
      if (loadError) {
        return <div>Error loading maps</div>;
      }
    
      if (!isLoaded) {
        return <div>Loading maps</div>;
      }
    

  return (
    <Container>
        <Row>
            <Col lg="6">
                <div className='contact-form'>
                    <h2>Let us know how we can help!</h2>
                    <form action="" className='form'>
                        <div className='form_group2'>
                            
                            <input className="form-control form-control-sm" type="text" placeholder="First Name" aria-label=".form-control-sm example"/>
                            <input className="form-control form-control-sm" type="text" placeholder="Last Name" aria-label=".form-control-sm example"/>

                            <input className="form-control form-control-sm" type="email" placeholder="Email" aria-label=".form-control-sm example"/>

                            <input className="form-control form-control-sm" type="number" placeholder="+63" aria-label=".form-control-sm example"/>

                        </div>
                        

                        <div className='form_group3'>
                        <select className="form-select form-select-sm" aria-label="Small select example">
                            <option selected>Select</option>
                            <option value="Partnership">Partnership</option>
                            <option value="OrderTrack">Track an Order</option>
                            <option value="Refund">Request for a Refund</option>
                        </select>

                            <label for="formFileSm" className="form-label">Upload receipt here</label>
                            <input className="form-control form-control-sm" id="formFileSm" type="file"/>

                            <label for="exampleFormControlTextarea1" className="form-label">Tell us what happened</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            <br />
                            <button className='btn btn-dark'>Submit</button>
                        </div>
                    </form>
                </div>
            </Col>
            <Col lg="6">
                <div className='gmaps'>
                <h5>
        Main Office: <br /> <br />Unit 2605 Antel Global Center Julia Vargas <br /> Avenue Ortigas 1605</h5> <br />
                <GoogleMap id='maps-g'
                mapContainerStyle={mapContainerStyle}
                zoom={15}
                center={center}
                >
                <Marker position={center} />
            </GoogleMap>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default ContactUs