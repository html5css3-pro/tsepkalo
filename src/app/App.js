import React from 'react';
import Header from 'components/Header'
import Intro from 'components/Intro'
import About from 'components/About'
import Bio from 'components/Bio'
import MapContainer from 'containers/MapContainer'
import Footer from 'components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Bio />
      <MapContainer />
      <Footer />
    </div>
  );
}

export default App;
