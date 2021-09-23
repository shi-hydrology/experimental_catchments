import {meteoIcon, wellIcon, prGaugeIcon, prGGI} from './type_icons.js'

var station_layers=[{'type_name':'meteo',
                     'rus_name':'Метеостанции',
                     'type_icon': meteoIcon},
                    {'type_name':'precipitation_gauge',
                     'rus_name':'Осадкомеры',
                     'type_icon': prGaugeIcon},
                    {'type_name':'well',
                     'rus_name':'Скважины',
                     'type_icon': wellIcon},
                    {'type_name':'kotiki_ggi',
                     'rus_name':'Котики',
                     'type_icon': prGGI},
]
export default station_layers
