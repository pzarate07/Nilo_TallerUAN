var size = 0;
var placement = 'point';
function categories_Trabajofinal_ClaseGeologaNilo_Clip_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'b6k6-Stm':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,255,212,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'e6e9-Sc':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(254,230,165,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'k1k6-Stm':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(254,196,108,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'k6E1-Stm':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(254,153,41,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Q-al':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(229,114,23,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Q-ca':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(196,81,11,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(153,52,4,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Trabajofinal_ClaseGeologaNilo_Clip_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("SimboloUC");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_Trabajofinal_ClaseGeologaNilo_Clip_2(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
