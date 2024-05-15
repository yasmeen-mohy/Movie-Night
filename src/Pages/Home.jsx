import React, { useContext, useEffect } from 'react';
import Movies from '../Components/Movies';
import { UContext } from '../Context/UserContext';

const Home = () => {
  const { CurrentUser } = useContext(UContext);

  useEffect(() => {
    console.log('current user from home', CurrentUser);
  },[CurrentUser] );

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Movies />
    </div>
  );
}

export default Home;
