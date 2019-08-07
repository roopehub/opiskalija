import React from 'react';
import L, { point } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import classes from './CustomMarkerCluster.css';

const customMarkerCluster = (props) => {

    const iconCreateFunction = (cluster) => {
      let ColorClass = props.type === 'Beer' ? classes.Beer : classes.Bike;
      let count = cluster.getChildCount();
      let clusters = L.divIcon({
        html: '<div><span>' + count + '</span></div>',
        className: [classes.CustomCluster + " " + ColorClass],
        iconSize: L.point(35, 35)
      });

      return clusters;
    }

  return (
    <MarkerClusterGroup
      iconCreateFunction={iconCreateFunction}
      maxClusterRadius={props.maxRadius}
      animateAddingMarkers='true'
      animate='true'
      chunkedLoading='true'>
      {props.children}
    </MarkerClusterGroup>
  )
}

export default customMarkerCluster;