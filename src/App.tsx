import React, { useRef } from 'react';
import './App.css';
import BACKGROUND from './component/images/darkBackGround.jpg';
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import AboutMe from './component/Pages/AboutMe';
import Home from './component/Pages/Home';
import Experience from './component/Pages/Experience';

function App() {
  const parallax = useRef<IParallax>(null!);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Parallax pages={2} ref={parallax}>
        <ParallaxLayer
        
          offset={0}
          speed={-0.3}
          factor={2}
          style={{
            pointerEvents: 'none',
            backgroundImage: `url(${BACKGROUND})`,
            backgroundSize: 'cover',
            width: '100vw',
            height: '100vh'
          }}
        />
        <ParallaxLayer speed={2} offset={0.1}>
          <Home />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.99999999}
          speed={1}
          style={{
            backgroundColor: 'black'
          }}
        >
          <AboutMe />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.9}
          style={{
            backgroundColor: 'black',
            backgroundSize: 'cover'
          }}
        >
          <Experience />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
