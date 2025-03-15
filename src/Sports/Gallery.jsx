import React from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

export default function Gallery() {
  return (
    <MDBContainer fluid style={{ padding: '80px' }}>
      <MDBRow>
        {/* Column 1 */}
        <MDBCol lg={4} md={12} className="mb-4 mb-lg-0">
          <img
            src="https://res.cloudinary.com/dfkkdv8et/image/upload/v1741981105/WhatsApp_Image_2025-03-15_at_01.05.14_f7e01922_iwffmz.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />
          <img
            src="https://res.cloudinary.com/dfkkdv8et/image/upload/v1741981105/WhatsApp_Image_2025-03-15_at_01.05.14_70de6542_s0gygt.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Wintry Mountain Landscape"
          />
        </MDBCol>

        {/* Column 2 */}
        <MDBCol lg={4} md={12} className="mb-4 mb-lg-0">
          <img
            src="https://res.cloudinary.com/dfkkdv8et/image/upload/v1741981105/WhatsApp_Image_2025-03-15_at_01.05.13_5a0aa98c_ncfxip.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Mountains in the Clouds"
          />
          <img
            src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735142315/hrmvpkizwj5jl9bhkusl.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />
        </MDBCol>

        {/* Column 3 */}
        <MDBCol lg={4} md={12} className="mb-4 mb-lg-0">
          <img
            src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735142315/r6p4wukqc9gmvxect3fe.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Waves at Sea"
          />
          <img
            src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735121311/vnowofiby9vkfookilxp.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Yosemite National Park"
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
