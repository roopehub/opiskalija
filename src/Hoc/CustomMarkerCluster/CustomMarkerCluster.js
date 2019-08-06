import React from 'react';
import L from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import classes from './CustomMarkerCluster.css';

const customMarkerCluster = (props) => {

    // const createIcon = (cluster) => {
    //   const count = cluster.getChildCount();
    //   let size = 'LargeXL';
    
    //   if (count < 5) {
    //     size = 'Small';
    //   }
    //   else if (count >= 5 && count < 10) {
    //     size = 'Medium';
    //   }
    //   else if (count >= 10 && count < 1000) {
    //     size = 'Large';
    //   }
    //   let options = {
    //     cluster: `MarkerCluster${size}`,
    //   };

    //   let clusterStyle = options.cluster;
    //   return L.divIcon({
    //     html:
    //       `<div>
    //         <span class="MarkerClusterLabel">${count}</span>
    //       </div>`,
    //     className: clusterStyle,
    //   });
    // };

  return (
    <MarkerClusterGroup
      // iconCreateFunction={createIcon}
      maxClusterRadius={props.maxRadius}
      animateAddingMarkers='true'
      animate='true'
      chunkedLoading='true'>
      {props.children}
    </MarkerClusterGroup>
  )
}

export default customMarkerCluster;