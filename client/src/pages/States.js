import React from 'react';
import Navbar1 from '../components/Navbar1';
import { Link } from 'react-router-dom';
import bgvideo from './v1.mp4';

function States() {
  return (
    <div className='container w-100'>
      <Navbar1/>
      <div className='row'>
        <div className='col-12 text-center pt-5'>
          <h1 style={{ color: 'Black',textAlign:'center'}}>𝚂𝚃𝙰𝚃𝙴𝚂</h1>
          <img src='https://www.mapsofindia.com/images/indian-states-and-union-ter.jpg?v:1.0'/>
        </div>
        <div className='col-3 pt-3'>
          <Link to='/ap'><img className='w-100 shadow' src='https://wallpaperaccess.com/full/3479515.jpg'/></Link>
          <p className='text-center'>Andhra Pradesh</p>
        </div>
        <div className='col-3 pt-3'>
          <Link to='/tel'><img className='w-100 shadow' src='https://www.adotrip.com/public/images/areas/master_images/5c4edc96a044b-Charminar_Places_to_See.jpg'/></Link>
          <p className='text-center'>Telangana</p>
        </div>
        <div className='col-3 pt-3'>
          <Link to='/tn'><img className='w-100 shadow' src='https://www.journeysinternational.com/wp-content/uploads/2019/04/meenakshi-amman-temple-india.jpg'/></Link>
          <p className='text-center'>Tamil Nadu</p>
        </div>
        <div className='col-3 pt-3'>
          <Link to='/ker'><img className='w-100 shadow' src='https://s1.1zoom.me/b5545/524/India_Rivers_Riverboat_Alappuzha_Kerala_Palms_527898_2560x1440.jpg'/></Link>
          <p className='text-center'>Kerala</p>
        </div>
        <div className='col-3 pt-3'>
          <Link to='/kar'><img className='w-100 shadow' src='https://www.worldatlas.com/r/w1200-h630-c1200x630/upload/e5/0e/5f/shutterstock-122322643.jpg'/></Link>
          <p className='text-center'>Karnataka</p>
        </div>
        <div className='col-3 pt-3'>
          <Link to='/od'><img className='w-100 shadow' src='https://www.gozocabs.com/blog/wp-content/uploads/2018/03/jagannath-temple.jpg'/></Link>
          <p className='text-center'>Odisha</p>
        </div>  
        <div className='col-3 pt-3'>
          <Link to='/gu'><img className='w-100 shadow' src='https://3.bp.blogspot.com/-QPDHWud6Tvk/UxHMN4Kpo7I/AAAAAAAAGv0/-IHaLPjG9T8/s1600/Mahabat-ka-Maqbara.jpg'/></Link>
          <p className='text-center'>Gujarat</p>
        </div>
      </div>
    </div>  
  );
}

export default States;
