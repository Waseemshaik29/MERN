import React from 'react'
import Navbar1 from '../../components/Navbar1'
function Kerala() {
  return (
    <div className='remaining'>
    <div className='navbar'><Navbar1/></div>
    <h1 align='center'  style={{ color: 'Blue'}}>Kerala</h1>
    <img   src="data:image/jpeg;base64,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"></img>
    <h3>Kerala, located in the southwestern part of India, is known for its rich cultural heritage, diverse traditions, and natural beauty. Here are some key aspects of Kerala's culture:</h3>
    <h3>1.Backwaters and Houseboats: </h3> <h3>Kerala's backwaters are a unique feature of the state's geography and culture. These interconnected waterways, lakes, and lagoons are lined with coconut palms and provide a scenic backdrop for traditional houseboat cruises. Houseboats, or Kettuvallams, offer visitors a chance to experience Kerala's tranquil backwaters while enjoying traditional Kerala cuisine and hospitality.</h3>
    <h3>2.Ayurveda</h3> <h3>Kerala is known as the birthplace of Ayurveda, an ancient system of medicine that emphasizes holistic healing and natural remedies. Ayurvedic treatments and therapies, including massages, herbal medicines, and yoga, are widely practiced in Kerala and attract visitors from around the world seeking wellness and rejuvenation.</h3> 
      </div>
  )
}

export default Kerala
