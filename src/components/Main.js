import React from 'react';
import Section from './Section';
import Article from './Article';
import Aside from './Aside';
import './Main.css';

function Main() {
  return (
    <main className="main-grid">
      <Section />
      <Article />
      <Aside />
    </main>
  );
}

export default Main;