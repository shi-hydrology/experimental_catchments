var stations={
    "type": "FeatureCollection",
    "name": "stations",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "name": "Метеостанция Ламмин-Суо", "id": 1, "type": "meteo", "description": "Метеоплощадка на суходоле. Функционировала с 1952 по 1972 годы в рамках эксперимента такого-то" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ 29.809562251149814, 60.238728112748177 ] ] } },
    { "type": "Feature", "properties": { "name": "Скважина Ламмин-Суо", "id": 2, "type": "well", "description": "Скважина на суходоле. Функционировала с 1952 по 1972 годы в рамках эксперимента такого-то" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ 29.821342290740077, 60.245849080500498 ] ] } }
    ]
    }
export default stations