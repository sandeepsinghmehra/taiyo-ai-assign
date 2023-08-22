import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import { MapPin } from 'lucide-react';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;
export const Map:React.FC<any> = ({countryData}) => {

    return (
        <MapContainer style={{height: '400px', width: '100%'}} center={[51.505, -0.09]} zoom={2} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {countryData.map((country:any) => (
              <Marker key={country.countryInfo.iso2} position={[country.countryInfo.lat, country.countryInfo.long]}>
                <Popup>
                  <div>
                    <h3>{country.country}</h3>
                    <p>Active Cases: {country.active}</p>
                    <p>Recovered: {country.recovered}</p>
                    <p>Deaths: {country.deaths}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
        </MapContainer>
    )
}