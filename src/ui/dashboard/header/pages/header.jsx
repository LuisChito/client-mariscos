import React from 'react';
import Header from '../components/header';
import Carrucel from '../components/carrucel';
import Text from '../components/text';

const Dashboard = () => {
  return (
    <div>
      <Carrucel>
        <Header />
        <Text />
      </Carrucel>
    </div>
  )
}

export default Dashboard
