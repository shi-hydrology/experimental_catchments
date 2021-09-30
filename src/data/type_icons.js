import * as L from 'leaflet';
import meteo_icon from '../images/icons/meteo.png';
import well_icon from '../images/icons/well.png';
import pr_gauge_icon from '../images/icons/rainfall.png';
import ggi_icon from '../images/icons/ggi_cat_icon.png';
import snow_icon from '../images/icons/snow.ico';
import soil_temp_icon from '../images/icons/soil_temp.png';
import surf_elev_icon from '../images/icons/surf_elev.png';
import thaw_icon from '../images/icons/thaw.png';
import evap_icon from '../images/icons/evap.png';

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

const prGGI = L.icon({
    iconUrl: ggi_icon,
    iconSize: [45, 45],
    iconAnchor: [45, 22],
    popupAnchor: [0, 0],
});

const snowIcon = L.icon({
    iconUrl: snow_icon,
    iconSize: [45, 45],
    iconAnchor: [45, 22],
    popupAnchor: [0, 0],
});

const soil_tempIcon = L.icon({
    iconUrl: soil_temp_icon,
    iconSize: [45, 45],
    iconAnchor: [45, 22],
    popupAnchor: [0, 0],
});

const surf_elevIcon = L.icon({
    iconUrl: surf_elev_icon,
    iconSize: [45, 45],
    iconAnchor: [45, 22],
    popupAnchor: [0, 0],
});

const thawIcon = L.icon({
    iconUrl: thaw_icon,
    iconSize: [45, 45],
    iconAnchor: [45, 22],
    popupAnchor: [0, 0],
});

const evapIcon = L.icon({
    iconUrl: evap_icon,
    iconSize: [45, 45],
    iconAnchor: [45, 22],
    popupAnchor: [0, 0],
});

export {meteoIcon, wellIcon, prGaugeIcon, prGGI, snowIcon, soil_tempIcon, surf_elevIcon, thawIcon, evapIcon}
