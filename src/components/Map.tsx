import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styles from "../styles/Map.module.css";

type Props = {
  location: {
    lng: number;
    lat: number;
  };
};
const Map = ({ location }: Props) => {
  return (
    <div className={styles.map}>
      <MapContainer
        center={[location.lng, location.lat]}
        zoom={100}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[location.lng, location.lat]}></Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
