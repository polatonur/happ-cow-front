import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styles from "../styles/Map.module.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

type Props = {
  location: {
    lng: number;
    lat: number;
  };
  type: string;
};
const Map = ({ location, type }: Props) => {
  //create src  image uri
  const getImageUri = () => {
    const imageUri = `https://www.happycow.net/img/category/category_${type
      .toLowerCase()
      .replace(/\s/g, "-")}.svg`;
    return imageUri;
  };

  return (
    <div className={styles.map}>
      <MapContainer
        style={{ height: 300, width: 300 }}
        center={[location.lat, location.lng]}
        zoom={80}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          icon={L.icon({
            iconUrl: getImageUri(),
            iconSize: [40, 40],
          })}
          alt="ok"
          position={[location.lat, location.lng]}
        ></Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
