import {meteoIcon, wellIcon, prGaugeIcon} from './type_icons.js'

var station_layers=[{'type_name':'meteo',
                     'rus_name':'Метеостанции',
                     'type_icon': meteoIcon},
                    {'type_name':'precipitation_gauge',
                     'rus_name':'Осадкомеры',
                     'type_icon': prGaugeIcon},
                    {'type_name':'well',
                     'rus_name':'Скважины',
                     'type_icon': wellIcon}, 
]
export default station_layers