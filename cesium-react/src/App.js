import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Viewer, Entity, PointGraphics, EntityDescription } from 'resium';
import { Cartesian3 } from 'cesium';
import * as Cesium from 'cesium';
import Color from 'cesium/Source/Core/Color';



function App() {
  return (
    <Viewer full>
    <Entity
      name="tokyo"
      position={Cartesian3.fromDegrees(139.767052, 35.681167, 100)}
      point={{ 
        pixelSize: 10,
        color: Color.CRIMSON,
        }}>
    </Entity>
    <Entity
      name="coyote springs"
      position={Cartesian3.fromDegrees(-115.0, 37.0)}
      point={{ 
        pixelSize: 10,
        color: Color.AQUA,
        }}>
    </Entity>
    <Entity
      name="truth or conseq in NM"
      position={Cartesian3.fromDegrees(-107.0, 33.0)}
      point={{ 
        pixelSize: 10,
        color: Color.DARKGOLDENROD,
        }}>
    </Entity>
  </Viewer>
  );
}

export default hot(App);
