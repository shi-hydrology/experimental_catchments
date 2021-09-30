import {meteoIcon, wellIcon, prGaugeIcon, prGGI, snowIcon, soil_tempIcon, surf_elevIcon, thawIcon, evapIcon} from './type_icons.js'

var station_layers = [{
        'type_name': 'evaporation',
        'rus_name': 'Испарение',
        'type_icon': evapIcon
    },
    {
        'type_name': 'swamp_water',
        'rus_name': 'Болотные колодцы',
        'type_icon': wellIcon
    },
    {
        'type_name': 'groundwater',
        'rus_name': 'Подземные воды',
        'type_icon': wellIcon
    },
    {
        'type_name': 'surf_elev',
        'rus_name': 'surf_elev',
        'type_icon': surf_elevIcon
    },
    {
        'type_name': 'soil_temp',
        'rus_name': 'soil_temp',
        'type_icon': soil_tempIcon
    },
    {
        'type_name': 'runoff',
        'rus_name': 'Расходы',
        'type_icon': prGGI
    },
    {
        'type_name': 'precipitation',
        'rus_name': 'Осадкомеры',
        'type_icon': prGaugeIcon
    },
    {
        'type_name': 'meteo',
        'rus_name': 'Метеостанции',
        'type_icon': meteoIcon
    },
    {
        'type_name': 'thaw',
        'rus_name': 'Thaw',
        'type_icon': thawIcon
    },
    {
        'type_name': 'snow',
        'rus_name': 'Снегомеры',
        'type_icon': snowIcon
    },
    {
        'type_name': 'kotiki_ggi',
        'rus_name': 'Котики',
        'type_icon': prGGI
    },
]




export default station_layers
