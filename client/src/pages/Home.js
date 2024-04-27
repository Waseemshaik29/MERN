import React from 'react'
import Navbar from '../components/Navbar'
import pic1 from './States/pic1.jpg'
import pic2 from './States/pic2.jpg'
import pic3 from './States/pic3.jpg'
import bgvideo from './v1.mp4';

function Home1() {
  return (
    <div>
        <div className='navbar'>
      <Navbar/>
      </div>
    <div className='remaining'>
            {/* <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100 h-50" src={pic1} alt="First slide" style={{height: "500px"}}/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 h-50" src={pic2} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 h-50" src={pic3} alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a> */}
  <video id="video"loop autoPlay muted>
          <source src={bgvideo} type="video/mp4"/>
        </video>
</div>

            <p style={{fontSize:"20px"}}>Culture is considered as a symbolic, continuous and progressive process. It is the expression of
finer aspects of the life-style of a group which refers to the patterns of thought and behaviour of
people. It also includes values, beliefs, rules of conduct, and patterns of social, political and
economic organizations. These are passed on from one generation to the next by formal as well
as informal processes. Culture consists of the ways in which we think and act as members of a
society. Thus, all the achievements of group life are collectively called culture. In popular
dialect, the material aspects of culture, such as scientific and technological achievements are
seen as distinct from culture which is left with the non-material and higher achievements of
group life. 
</p>

<h2 align='center' style={{fontSize:"35px", fontFamily:"roboto" }}> Idea of Culture</h2>
<p style={{fontSize:"20px"}}>
The English word ‘Culture’ is derived from the Latin term ‘cult or cultus’ meaning tilling, or
cultivating or refining and worship. In sum it means cultivating and refining a thing to such an
extent that its end product evokes our admiration and respect. This is practically the same as
‘Sanskriti’ of the Sanskrit language. Culture is a way of life. The food you eat, the clothes you
wear, the language you speak in and the God you worship all are different aspects of culture. In
very simple terms, we can say that culture is the embodiment of the way in which we think and
do things.</p>
<h2 align='center' style={{fontSize:"35px", fontFamily:"roboto" }}>Importance of Culture in Human life:</h2>
<p style={{fontSize:"20px"}}>
Culture is closely linked with life. It is not an an ornament that we as human beings can use. It is
not merely a touch of colour. It is what makes us human. Without culture, there would be no
humans. Culture is made up of traditions, beliefs, and way of life, from the most spiritual to the
most material. It gives us meaning, a way of leading our lives. Human beings are creators of
culture and, at the same time, culture is what makes us human. A fundamental element of culture
is the issue of religious belief and its symbolic expression. We must value religious identity and
be aware of current efforts to make progress in terms of interfaith dialogue, which is actually an
intercultural dialogue. </p>
</div>
  )
}

export default Home1