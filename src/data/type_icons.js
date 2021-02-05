import * as L from 'leaflet';
import meteo_icon from '../images/meteo.png';
import well_icon from '../images/well.png';
import pr_gauge_icon from '../images/rainfall.png';

const meteoIcon = L.icon({
    iconUrl: meteo_icon,
    iconSize: [45, 45],
    iconAnchor: [45, 22],
    popupAnchor: [0, 0],
});

const wellIcon = L.icon({
    iconUrl: well_icon,
    iconSize: [40, 40],
    iconAnchor: [40, 20],
    popupAnchor: [0, 0],
});

const prGaugeIcon = L.icon({
    iconUrl: pr_gauge_icon,
    iconSize: [45, 45],
    iconAnchor: [45, 22],
    popupAnchor: [0, 0],
});

export {meteoIcon, wellIcon, prGaugeIcon}