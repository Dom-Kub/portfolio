import React from 'react';
import './App.css';
import BACKGROUND from "./component/images/darkBackGround.jpg"
import AppRoutes from "./AppRoutes";
import {Parallax, ParallaxLayer} from "@react-spring/parallax"
import AboutMe from './component/Pages/AboutMe';
import Home from './component/Pages/Home';
import Experience from './component/Pages/Experience';

function App() {
  return (
    <div>
      <Parallax pages={2}>
        <ParallaxLayer
        offset={0}
        speed={1}
        factor={2}
        style={{
          backgroundImage:`url(${BACKGROUND})`,
          backgroundSize:'cover',
          width: '100vw',
          height: '100vh',
        }}
        />
        <ParallaxLayer speed={2} offset={0.1}>
        <Home/>
        </ParallaxLayer>
        <ParallaxLayer offset={0.99999999} speed={1} style={{
          backgroundColor:'black',
        }}>
        <AboutMe/>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={1} style={{
          backgroundColor:'black',
          backgroundSize:'cover',
        }}>
        <Experience/>
          </ParallaxLayer>
      </Parallax>
   
    </div>
  );
}

export default App;
