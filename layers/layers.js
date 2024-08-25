var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Trabajofinal_ClasePendNilo_Clip_1 = new ol.format.GeoJSON();
var features_Trabajofinal_ClasePendNilo_Clip_1 = format_Trabajofinal_ClasePendNilo_Clip_1.readFeatures(json_Trabajofinal_ClasePendNilo_Clip_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trabajofinal_ClasePendNilo_Clip_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trabajofinal_ClasePendNilo_Clip_1.addFeatures(features_Trabajofinal_ClasePendNilo_Clip_1);
var lyr_Trabajofinal_ClasePendNilo_Clip_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trabajofinal_ClasePendNilo_Clip_1, 
                style: style_Trabajofinal_ClasePendNilo_Clip_1,
                popuplayertitle: "Trabajo final_Clase — PendNilo_Clip",
                interactive: true,
    title: 'Trabajo final_Clase — PendNilo_Clip<br />\
    <img src="styles/legend/Trabajofinal_ClasePendNilo_Clip_1_0.png" /> 1<br />\
    <img src="styles/legend/Trabajofinal_ClasePendNilo_Clip_1_1.png" /> 2<br />\
    <img src="styles/legend/Trabajofinal_ClasePendNilo_Clip_1_2.png" /> 3<br />\
    <img src="styles/legend/Trabajofinal_ClasePendNilo_Clip_1_3.png" /> 4<br />\
    <img src="styles/legend/Trabajofinal_ClasePendNilo_Clip_1_4.png" /> <br />'
        });
var format_Trabajofinal_ClaseGeologaNilo_Clip_2 = new ol.format.GeoJSON();
var features_Trabajofinal_ClaseGeologaNilo_Clip_2 = format_Trabajofinal_ClaseGeologaNilo_Clip_2.readFeatures(json_Trabajofinal_ClaseGeologaNilo_Clip_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trabajofinal_ClaseGeologaNilo_Clip_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trabajofinal_ClaseGeologaNilo_Clip_2.addFeatures(features_Trabajofinal_ClaseGeologaNilo_Clip_2);
var lyr_Trabajofinal_ClaseGeologaNilo_Clip_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trabajofinal_ClaseGeologaNilo_Clip_2, 
                style: style_Trabajofinal_ClaseGeologaNilo_Clip_2,
                popuplayertitle: "Trabajo final_Clase — GeologíaNilo_Clip",
                interactive: true,
    title: 'Trabajo final_Clase — GeologíaNilo_Clip<br />\
    <img src="styles/legend/Trabajofinal_ClaseGeologaNilo_Clip_2_0.png" /> b6k6-Stm<br />\
    <img src="styles/legend/Trabajofinal_ClaseGeologaNilo_Clip_2_1.png" /> e6e9-Sc<br />\
    <img src="styles/legend/Trabajofinal_ClaseGeologaNilo_Clip_2_2.png" /> k1k6-Stm<br />\
    <img src="styles/legend/Trabajofinal_ClaseGeologaNilo_Clip_2_3.png" /> k6E1-Stm<br />\
    <img src="styles/legend/Trabajofinal_ClaseGeologaNilo_Clip_2_4.png" /> Q-al<br />\
    <img src="styles/legend/Trabajofinal_ClaseGeologaNilo_Clip_2_5.png" /> Q-ca<br />\
    <img src="styles/legend/Trabajofinal_ClaseGeologaNilo_Clip_2_6.png" /> <br />'
        });
var format_Trabajofinal_ClaseCoberturaNilo_Clip_3 = new ol.format.GeoJSON();
var features_Trabajofinal_ClaseCoberturaNilo_Clip_3 = format_Trabajofinal_ClaseCoberturaNilo_Clip_3.readFeatures(json_Trabajofinal_ClaseCoberturaNilo_Clip_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trabajofinal_ClaseCoberturaNilo_Clip_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trabajofinal_ClaseCoberturaNilo_Clip_3.addFeatures(features_Trabajofinal_ClaseCoberturaNilo_Clip_3);
var lyr_Trabajofinal_ClaseCoberturaNilo_Clip_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trabajofinal_ClaseCoberturaNilo_Clip_3, 
                style: style_Trabajofinal_ClaseCoberturaNilo_Clip_3,
                popuplayertitle: "Trabajo final_Clase — CoberturaNilo_Clip",
                interactive: true,
    title: 'Trabajo final_Clase — CoberturaNilo_Clip<br />\
    <img src="styles/legend/Trabajofinal_ClaseCoberturaNilo_Clip_3_0.png" /> ALTA<br />\
    <img src="styles/legend/Trabajofinal_ClaseCoberturaNilo_Clip_3_1.png" /> BAJA<br />\
    <img src="styles/legend/Trabajofinal_ClaseCoberturaNilo_Clip_3_2.png" /> MEDIA<br />\
    <img src="styles/legend/Trabajofinal_ClaseCoberturaNilo_Clip_3_3.png" /> MUY BAJA<br />\
    <img src="styles/legend/Trabajofinal_ClaseCoberturaNilo_Clip_3_4.png" /> <br />'
        });
var format_Trabajofinal_ClaseClimaNilo_Clip_4 = new ol.format.GeoJSON();
var features_Trabajofinal_ClaseClimaNilo_Clip_4 = format_Trabajofinal_ClaseClimaNilo_Clip_4.readFeatures(json_Trabajofinal_ClaseClimaNilo_Clip_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trabajofinal_ClaseClimaNilo_Clip_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trabajofinal_ClaseClimaNilo_Clip_4.addFeatures(features_Trabajofinal_ClaseClimaNilo_Clip_4);
var lyr_Trabajofinal_ClaseClimaNilo_Clip_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trabajofinal_ClaseClimaNilo_Clip_4, 
                style: style_Trabajofinal_ClaseClimaNilo_Clip_4,
                popuplayertitle: "Trabajo final_Clase — ClimaNilo_Clip",
                interactive: true,
    title: 'Trabajo final_Clase — ClimaNilo_Clip<br />\
    <img src="styles/legend/Trabajofinal_ClaseClimaNilo_Clip_4_0.png" /> Cálido<br />\
    <img src="styles/legend/Trabajofinal_ClaseClimaNilo_Clip_4_1.png" /> <br />'
        });
var format_Trabajofinal_ClaseAmenaza_Dissolve_5 = new ol.format.GeoJSON();
var features_Trabajofinal_ClaseAmenaza_Dissolve_5 = format_Trabajofinal_ClaseAmenaza_Dissolve_5.readFeatures(json_Trabajofinal_ClaseAmenaza_Dissolve_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trabajofinal_ClaseAmenaza_Dissolve_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trabajofinal_ClaseAmenaza_Dissolve_5.addFeatures(features_Trabajofinal_ClaseAmenaza_Dissolve_5);
var lyr_Trabajofinal_ClaseAmenaza_Dissolve_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trabajofinal_ClaseAmenaza_Dissolve_5, 
                style: style_Trabajofinal_ClaseAmenaza_Dissolve_5,
                popuplayertitle: "Trabajo final_Clase — Amenaza_Dissolve",
                interactive: true,
    title: 'Trabajo final_Clase — Amenaza_Dissolve<br />\
    <img src="styles/legend/Trabajofinal_ClaseAmenaza_Dissolve_5_0.png" /> Muy baja<br />\
    <img src="styles/legend/Trabajofinal_ClaseAmenaza_Dissolve_5_1.png" /> Baja<br />\
    <img src="styles/legend/Trabajofinal_ClaseAmenaza_Dissolve_5_2.png" /> Media<br />\
    <img src="styles/legend/Trabajofinal_ClaseAmenaza_Dissolve_5_3.png" /> Alta<br />'
        });

lyr_ESRIGraylight_0.setVisible(true);lyr_Trabajofinal_ClasePendNilo_Clip_1.setVisible(true);lyr_Trabajofinal_ClaseGeologaNilo_Clip_2.setVisible(true);lyr_Trabajofinal_ClaseCoberturaNilo_Clip_3.setVisible(true);lyr_Trabajofinal_ClaseClimaNilo_Clip_4.setVisible(true);lyr_Trabajofinal_ClaseAmenaza_Dissolve_5.setVisible(true);
var layersList = [lyr_ESRIGraylight_0,lyr_Trabajofinal_ClasePendNilo_Clip_1,lyr_Trabajofinal_ClaseGeologaNilo_Clip_2,lyr_Trabajofinal_ClaseCoberturaNilo_Clip_3,lyr_Trabajofinal_ClaseClimaNilo_Clip_4,lyr_Trabajofinal_ClaseAmenaza_Dissolve_5];
lyr_Trabajofinal_ClasePendNilo_Clip_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'PendPorc': 'PendPorc', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'penpond': 'penpond', });
lyr_Trabajofinal_ClaseGeologaNilo_Clip_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'SimboloUC': 'SimboloUC', 'N_CartaCo': 'N°CartaCo', 'Descripcio': 'Descripcio', 'Edad': 'Edad', 'UGIntegrad': 'UGIntegrad', 'Comentario': 'Comentario', 'GlobalID': 'GlobalID', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'geopond': 'geopond', });
lyr_Trabajofinal_ClaseCoberturaNilo_Clip_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'codigo': 'codigo', 'leyenda': 'leyenda', 'insumo': 'insumo', 'confiabili': 'confiabili', 'cambio': 'cambio', 'Shape_Leng': 'Shape_Leng', 'Incidencia': 'Incidencia', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'cobpond': 'cobpond', });
lyr_Trabajofinal_ClaseClimaNilo_Clip_4.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'GRIDCODE': 'GRIDCODE', 'RANGOS': 'RANGOS', 'CALIFIC': 'CALIFIC', 'Shape_Leng': 'Shape_Leng', 'RULEID': 'RULEID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'climpond': 'climpond', });
lyr_Trabajofinal_ClaseAmenaza_Dissolve_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FInal_Pond': 'FInal_Pond', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Amenaza': 'Amenaza', });
lyr_Trabajofinal_ClasePendNilo_Clip_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'Range', 'PendPorc': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'penpond': 'Range', });
lyr_Trabajofinal_ClaseGeologaNilo_Clip_2.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'Range', 'SimboloUC': 'TextEdit', 'N_CartaCo': 'TextEdit', 'Descripcio': 'TextEdit', 'Edad': 'TextEdit', 'UGIntegrad': 'TextEdit', 'Comentario': 'TextEdit', 'GlobalID': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'geopond': 'Range', });
lyr_Trabajofinal_ClaseCoberturaNilo_Clip_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'codigo': 'Range', 'leyenda': 'TextEdit', 'insumo': 'TextEdit', 'confiabili': 'TextEdit', 'cambio': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Incidencia': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'cobpond': 'Range', });
lyr_Trabajofinal_ClaseClimaNilo_Clip_4.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'Range', 'GRIDCODE': 'TextEdit', 'RANGOS': 'TextEdit', 'CALIFIC': 'TextEdit', 'Shape_Leng': 'TextEdit', 'RULEID': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'climpond': 'Range', });
lyr_Trabajofinal_ClaseAmenaza_Dissolve_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'FInal_Pond': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Amenaza': 'Range', });
lyr_Trabajofinal_ClasePendNilo_Clip_1.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'PendPorc': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'penpond': 'no label', });
lyr_Trabajofinal_ClaseGeologaNilo_Clip_2.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'SimboloUC': 'no label', 'N_CartaCo': 'no label', 'Descripcio': 'no label', 'Edad': 'no label', 'UGIntegrad': 'no label', 'Comentario': 'no label', 'GlobalID': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'geopond': 'no label', });
lyr_Trabajofinal_ClaseCoberturaNilo_Clip_3.set('fieldLabels', {'OBJECTID': 'no label', 'codigo': 'no label', 'leyenda': 'no label', 'insumo': 'no label', 'confiabili': 'no label', 'cambio': 'no label', 'Shape_Leng': 'no label', 'Incidencia': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'cobpond': 'no label', });
lyr_Trabajofinal_ClaseClimaNilo_Clip_4.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'GRIDCODE': 'no label', 'RANGOS': 'no label', 'CALIFIC': 'no label', 'Shape_Leng': 'no label', 'RULEID': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'climpond': 'no label', });
lyr_Trabajofinal_ClaseAmenaza_Dissolve_5.set('fieldLabels', {'OBJECTID': 'no label', 'FInal_Pond': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'Amenaza': 'no label', });
lyr_Trabajofinal_ClaseAmenaza_Dissolve_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});