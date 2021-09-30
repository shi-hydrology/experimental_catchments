var stations1 ={
    "type": "FeatureCollection",
    "name": "stations",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    {
    "type": "Feature",
    "properties": {
        "name": "Метеостанция Ламмин-Суо",
        "id": 1,
        "type": "meteo",
        "description": "Метеоплощадка на суходоле. Функционировала с 1952 по 1972 годы в рамках эксперимента такого-то"
    },
    "geometry": {
        "type": "MultiPoint",
        "coordinates": [
            [29.809562251149814, 60.238728112748177]
        ]
    }
},
    { "type": "Feature", "properties": { "name": "Скважина Ламмин-Суо", "id": 2, "type": "well", "description": "Скважина на суходоле. Функционировала с 1952 по 1972 годы в рамках эксперимента такого-то" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ 29.821342290740077, 60.245849080500498 ] ] } },
    { "type": "Feature", "properties": { "name": "Осадкомер Ламмин-Суо", "id": 3, "type": "precipitation", "description": "Осадкомер на суходоле. Функционировала с 1952 по 1972 годы в рамках эксперимента такого-то" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ 29.811342290740077, 60.245849080500498 ] ] } },
    { "type": "Feature", "properties": { "name": "Осадкомер Ламмин-Суо", "id": 4, "type": "precipitation", "description": "Осадкомер№2 на суходоле. Функционировала с 1952 по 1972 годы в рамках эксперимента такого-то" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ 29.821342290740077, 60.235849080500498 ] ] } },
    { "type": "Feature", "properties": { "name": "ГГИ", "id": 666, "type": "kotiki_ggi", "description": "Тестовая станция. Место где обитают лучшие котики из ГИС группы " }, "geometry": { "type": "MultiPoint", "coordinates": [ [ 30.286667, 59.941944 ] ] } }
    ]
    }





var stations = {
  "crs": {
    "properties": {
      "name": "EPSG:4326"
    },
    "type": "name"
  },
  "features": [
    {
      "geometry": {
        "coordinates": [
          29.8155833,
          60.2433611
        ],
        "type": "Point"
      },
      "properties": {
        "id": 28,
        "lat": 60.2433611,
        "lon": 29.8155833,
        "meta": "{'status':'closed', 'dates':'1950-1969'}",
        "name": "meteo_2",
        "name_en": "sukhodol'naya",
        "name_short": "2",
        "obs_type": {
          "meteo": {
            "intervals": [
              "hourly",
              "daily"
            ],
            "rows": [
              "air_temp",
              "air_temp_min",
              "air_temp_max",
              "humidity",
              "wind_speed",
              "cloudiness_total",
              "cloudiness_lower",
              "air_pressure"
            ]
          }
        },
        "station_id": 1
      },
      "type": "Feature"
    },
    {
      "geometry": {
    "coordinates": [
      29.810368,
      60.246979
    ],
    "type": "Point"
  },
      "properties": {
    "id": 30,
    "lat": 60.246979,
    "lon": 29.810368,
    "meta": "{'status':'active', 'dates':'1952-2020'}",
    "name": "precipitation_7",
    "name_en": "7",
    "name_short": "7",
    "obs_type": {
      "precipitation": {
        "intervals": [
          "hourly",
          "daily"
        ],
        "rows": [
          "precipitation",
          "solid"
        ]
      }
    },
    "station_id": 1
  },
      "type": "Feature"
    },
    {
     "geometry": {
       "coordinates": [
         29.8138889,
         60.2443889
       ],
       "type": "Point"
     },
     "properties": {
       "id": 75,
       "lat": 60.2443889,
       "lon": 29.8138889,
       "meta": "{'status':'active', 'dates':'1954-2020'}",
       "name": "thaw_106",
       "name_en": "site 2",
       "name_short": "106",
       "obs_type": {
         "thaw": {
           "intervals": [
             "daily"
           ],
           "rows": [
             "frozen",
             "thaw",
             "water_content",
             "terrain_type"
           ]
         }
       },
       "station_id": 1
     },
     "type": "Feature"
   },
   {
      "geometry": {
        "coordinates": [
          29.812111,
          60.245613
        ],
        "type": "Point"
      },
      "properties": {
        "id": 2,
        "lat": 60.245613,
        "lon": 29.812111,
        "meta": "{'status':'active', 'dates':'1956-2020'}",
        "name": "evaporation_1",
        "name_en": "1",
        "name_short": "1",
        "obs_type": {
          "evaporation": {
            "intervals": [
              "10d",
              "annual"
            ],
            "rows": [
              "evaporation"
            ]
          }
        },
        "station_id": 1
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          29.814161,
          60.244471
        ],
        "type": "Point"
      },
      "properties": {
        "id": 45,
        "lat": 60.244471,
        "lon": 29.814161,
        "meta": "{'status':'active', 'dates':'1988-2020'}",
        "name": "surf_elev_103",
        "name_en": "line-1",
        "name_short": "103",
        "obs_type": {
          "surf_elev": {
            "intervals": [
              "5y"
            ],
            "rows": [
              "surf_elev"
            ]
          }
        },
        "station_id": 1
      },
      "type": "Feature"
    },
  ],
  "name": "stations",
  "type": "FeatureCollection"
}


export default stations
