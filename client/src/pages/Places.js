import React from 'react';
import Navbar1 from '../components/Navbar1';
import { Link } from 'react-router-dom';

function Places() {
  return (
    <div className='container w-100'>
      <div className='row'>
        <Navbar1 />
      <div className='col-12 pt-5 text-center'>
        <h1 align='center' style={{ color: 'Black'}}>𝙷𝙸𝚂𝚃𝙾𝚁𝙸𝙲𝙰𝙻 𝙿𝙻𝙰𝙲𝙴𝚂</h1>
        <img src='https://travelobiz.com/wp-content/uploads/2020/10/Historical-Places-In-India.jpg'/>
      </div>
      <div className='col-3 p-3'>
        <Link to='/ch'><img className='w-100 shadow' src='https://www.adotrip.com/public/images/areas/master_images/5c4edc96a044b-Charminar_Places_to_See.jpg'/></Link>
        <p className='text-center'>Charminar</p>
      </div>
      <div className='col-3 p-3'>
        <Link to='/tm'><img className='w-100 shadow' src='https://d36tnp772eyphs.cloudfront.net/blogs/1/2019/09/Taj-Mahal-1200x849.jpg'/></Link>
        <p className='text-center'>TajMahal</p>
      </div>
      <div className='col-3 p-3'>
        <Link to='/rf'><img className='w-100 shadow' src='https://www.agrashivtourandtravels.com/wp-content/uploads/2020/07/red-fort.jpg'/></Link>
        <p className='text-center'>RedFort</p>
      </div>
      <div className='col-3 p-3'>
        <Link to='/ig'><img className='w-100 shadow' src='https://www.holidify.com/images/cmsuploads/compressed/5621259188_e74d63cb05_b_20180302140149.jpg'/></Link>
        <p className='text-center'>IndiaGate</p>
      </div>
    </div>
    </div>
  );
}

export default Places;
