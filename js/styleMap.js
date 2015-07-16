styleMap = [{
    "featureType": "all",
    "elementType": "labels.text.fill",
    "stylers": [{"saturation": 36}, {"color": "#000000"}, {"lightness": 40}]
}, {
    "featureType": "all",
    "elementType": "labels.text.stroke",
    "stylers": [{"visibility": "on"}, {"color": "#000000"}, {"lightness": 16}]
}, {
    "featureType": "all",
    "elementType": "labels.icon",
    "stylers": [{"visibility": "off"}]
}, {
    "featureType": "administrative",
    "elementType": "geometry.fill",
    "stylers": [{"color": "#000000"}, {"lightness": 20}]
}, {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [{"color": "#000000"}, {"lightness": 17}, {"weight": 1.2}]
}, {
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [{"color": "#000000"}, {"lightness": 20}]
}, {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [{"color": "#000000"}, {"lightness": 21}]
}, {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [{"color": "#000000"}, {"lightness": 17}]
}, {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [{"color": "#000000"}, {"lightness": 29}, {"weight": 0.2}]
}, {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [{"color": "#44413E"}, {"lightness": 0}]
}, {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [{"color": "#000000"}, {"lightness": 16}]
}, {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [{"color": "#000000"}, {"lightness": 19}]
}, {"featureType": "water", "elementType": "geometry", "stylers": [{"color": "#E6DDCF"}, {"lightness": 17}]}];
var shapes = [];
var path = [
    new google.maps.LatLng(4.650256835094068, -74.04873166233301),
    new google.maps.LatLng(4.650299609166094, -74.04933247715235),
    new google.maps.LatLng(4.6497435460273655, -74.05036244541407),
    new google.maps.LatLng(4.648845289260727, -74.05089888721704),
    new google.maps.LatLng(4.647626224674414, -74.05175719410181),
    new google.maps.LatLng(4.64589386610884, -74.05225072056055),
    new google.maps.LatLng(4.6447603452374, -74.0526369586587),
    new google.maps.LatLng(4.643947631038295, -74.05313048511744),
    new google.maps.LatLng(4.643477111863441, -74.05351672321558),
    new google.maps.LatLng(4.643156303155182, -74.05420336872339),
    new google.maps.LatLng(4.6424077489352795, -74.05615601688623),
    new google.maps.LatLng(4.642792719776153, -74.05669245868921),
    new google.maps.LatLng(4.642985205117801, -74.05765805393457),
    new google.maps.LatLng(4.642856881562533, -74.05834469944239),
    new google.maps.LatLng(4.642065552455963, -74.05883822590113),
    new google.maps.LatLng(4.639092713560128, -74.05967507511377),
    new google.maps.LatLng(4.636526223870435, -74.0599325671792),
    new google.maps.LatLng(4.635563787832826, -74.05991110950708),
    new google.maps.LatLng(4.634515800434404, -74.06029734760523),
    new google.maps.LatLng(4.633531974115668, -74.06072650104761),
    new google.maps.LatLng(4.632697859425105, -74.06072650104761),
    new google.maps.LatLng(4.632270107920036, -74.06074795871973),
    new google.maps.LatLng(4.6314787669535455, -74.06100545078516),
    new google.maps.LatLng(4.630174121805441, -74.06197104603052),
    new google.maps.LatLng(4.629724981115735, -74.06246457248926),
    new google.maps.LatLng(4.628249231127985, -74.06218562275171),
    new google.maps.LatLng(4.627415110208483, -74.06201396137476),
    new google.maps.LatLng(4.626580988306115, -74.06190667301416),
    new google.maps.LatLng(4.626003518721104, -74.06224999576807),
    new google.maps.LatLng(4.6259821309496525, -74.06297955662012),
    new google.maps.LatLng(4.6265382127974455, -74.06557593494654),
    new google.maps.LatLng(4.626131845336244, -74.06568322330713),
    new google.maps.LatLng(4.626110457568672, -74.06591925770044),
    new google.maps.LatLng(4.627137069683555, -74.06673464924097),
    new google.maps.LatLng(4.627350947020115, -74.06718526035547),
    new google.maps.LatLng(4.627757313781544, -74.06836543232203),
    new google.maps.LatLng(4.637253396896006, -74.06677756458521),
    new google.maps.LatLng(4.643134915902796, -74.06570468097925),
    new google.maps.LatLng(4.650449318397668, -74.06439576297998),
    new google.maps.LatLng(4.65301575741839, -74.06379494816065),
    new google.maps.LatLng(4.655624960831208, -74.06244311481714),
    new google.maps.LatLng(4.658939918423439, -74.06171355396509),
    new google.maps.LatLng(4.658576343192367, -74.06096253544092),
    new google.maps.LatLng(4.654855032961414, -74.05553374439478),
    new google.maps.LatLng(4.654149265007414, -74.05441794544458),
    new google.maps.LatLng(4.653251013860547, -74.05334506183863),
    new google.maps.LatLng(4.652866048732446, -74.0520790591836),
    new google.maps.LatLng(4.652245826694353, -74.05145678669214),
    new google.maps.LatLng(4.65164699110469, -74.05044827610254),
    new google.maps.LatLng(4.6514972821277, -74.0500620380044),
    new google.maps.LatLng(4.65115509006078, -74.04969725757837),
    new google.maps.LatLng(4.650385157302307, -74.04858145862818),
    new google.maps.LatLng(4.650235448057095, -74.04868874698877)];
var polyline = new google.maps.Polygon({path: path, strokeColor: "#594e41    ", strokeOpacity: 1.0, strokeWeight: 4});

var map;

function initialize() {


    var loc = new google.maps.LatLng(4.637042, -74.062692);
    var myLatLng = new google.maps.LatLng(4.642303, -74.061619);
    var mapOptions = {
        /*
         drag: false,
         dragend: false,
         dragstart: false,
         draggable: false,
         scrollwheel: false,
         navigationControl: false,
         mapTypeControl: false,
         scaleControl: false,*/

        zoom: 14,
        center: myLatLng,
        styles: styleMap
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
    var image = 'images/icon.png';


    var myLatLng = new google.maps.LatLng(4.637042, -74.062692);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image,
        animation: google.maps.Animation.DROP,
        content: 'I am the content of this infobox. Wow, what a text.<br><br><a href="#">The good thing is: Tags are also possible</a>'
    });

    polyline.setMap(map);
    shapes.push(polyline);
}

google.maps.event.addDomListener(window, 'load', initialize);





