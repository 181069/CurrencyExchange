import React from 'react';
import { Header } from '../../components/header/header.component';
import LiveExchange from '../../components/liveExchangeRate/live-exchange/liveExchange.component';
import { Navbar } from '../../components/navbar/navbar.component';

export const Home = () => {
  return <div>
  <Navbar/>
  <Header/>
  <LiveExchange/>
  </div>;
};
