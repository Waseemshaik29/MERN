import React from 'react';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <div style={styles.container}>
      <Navbar />
      <div style={styles.content}>
        <h1 style={styles.content}>
          CONTACT US
        </h1>
        <p style={styles.text}>
          Dear Visitors,  
        </p>
        <p style={styles.text}>
          Thank you for your interest in our Indian Culture Management System. We value your feedback, inquiries, and suggestions as they help us improve our services and provide you with a better experience.
        </p>
        <p style={styles.text}>
          If you have any questions regarding our platform, want to share your thoughts, or need assistance, please feel free to reach out to us. Our dedicated team is here to assist you.
        </p>
        <p style={styles.text}>
          We strive to respond to all inquiries promptly and efficiently. Your satisfaction is our priority, and we look forward to hearing from you.
        </p>
        <p style={styles.text}>
          Thank you for choosing our Indian Culture Management System.
        </p>
        <p style={styles.signature}>
          Warm regards,
        </p>
        <p style={styles.signature}>Waseem Shaik</p>
        <p style={styles.signature}>Sai Aryan</p>
        <p style={styles.signature}>Ruthvik Vundi</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f0f0',
    paddingTop: '20px',
  },
  content: {
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
    textAlign: 'center',
  },
  heading: {
    color: 'blue',
    marginBottom: '30px',
  },
  text: {
    marginBottom: '20px',
  },
  signature: {
    marginBottom: '10px',
  }
};

export default Contact;
