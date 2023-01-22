import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from "leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js"
import LeafletRoutingmachine from '../components/LeafletRoutingmachine';
import LeafletGeocoder from '../components/LeafletGeocoder';

import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";

function LeafletContainer() {
  const position = [36.834740, 10.199916]

  return (
    <div className="App">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <LeafletGeocoder /> */}
        <LeafletRoutingmachine />
      </MapContainer>
    </div>
  );
}

let DefaultIcon = L.icon({
  iconUrl: "/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40]
});

L.Marker.prototype.options.icon = DefaultIcon;

export default LeafletContainer;
