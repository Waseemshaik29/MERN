import React from 'react';
import Navbar from '../components/Navbar';

function About() {
  return (
    <div>
      <div className='navbar' style={styles.navbar}>
        <Navbar />
      </div>

      <div className='remaining' style={styles.remaining}>
        <h1 style={styles.heading}>About Page</h1>
        <div style={styles.imageContainer}>
          <img
            src='https://media.licdn.com/dms/image/D4D12AQFzIbj_dfnPMA/article-cover_image-shrink_720_1280/0/1693203021003?e=2147483647&v=beta&t=LpGDzW5blWgUg5lyQCNRkwfdgwCcREJP-BtB91lo2uY'
            alt='Indian Culture'
            style={styles.image}
          />
        </div>
        <p style={styles.paragraph}>
          An Indian Culture Management System is a digital platform designed to preserve, promote, and manage various aspects of Indian culture. Here's an overview of what such a system might entail:
        </p>
        <h2 style={styles.subHeading}>1. Documentation and Preservation</h2>
        <p style={styles.paragraph}>
          The system would serve as a repository for various cultural artifacts, historical documents, artworks, literature, and other forms of cultural heritage. It would include digitized versions of ancient texts, manuscripts, artworks, and artifacts, ensuring their preservation and accessibility for future generations.
        </p>
        <h2 style={styles.subHeading}>2. Cultural Education and Awareness</h2>
        <p style={styles.paragraph}>
          The system would provide educational resources, articles, videos, and interactive content to educate users about different aspects of Indian culture, including its history, traditions, customs, rituals, languages, art forms, music, dance, and cuisine. It would aim to raise awareness and appreciation for India's rich cultural diversity and heritage.
        </p>
        <h2 style={styles.subHeading}>3. Tourism Promotion</h2>
        <p style={styles.paragraph}>
          The system could feature information about popular tourist destinations, heritage sites, monuments, museums, festivals, and cultural events across India. It would help promote tourism by providing travelers with insights into India's cultural attractions and facilitating trip planning and exploration.
        </p>
      </div>
    </div>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 0',
  },
  remaining: {
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  imageContainer: {
    margin: '20px auto',
  },
  image: {
    width: '500px',
    height: '60vh',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  paragraph: {
    fontSize: '18px',
    lineHeight: '1.6',
    marginBottom: '20px', 
  },
  subHeading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
};

export default About;
