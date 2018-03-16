import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <Link to="/signup"><button>Sign Up</button></Link>
      <Link to="/signin"><button>Log In</button></Link>
    </div>
  )
}

export default Home;