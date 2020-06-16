var map;
var chageimgBalde1 = document.getElementById('baldefrente'); 
var chageimgCaneca1 = document.getElementById('caneca');
chageimgBalde1.addEventListener('mouseenter', baldeimg);
chageimgBalde1.addEventListener('mouseout', baldeimg2)
chageimgCaneca1.addEventListener('mouseenter', canecaimg1);
chageimgCaneca1.addEventListener('mouseout', canecaimg2);
     

//map 
function initialize(){
        var mapProp = {
            center: new google.maps.LatLng(-14.898325, -41.965276),
            scrollWeel:false,
            zoom:18,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        }
        map= new google.maps.Map(document.getElementById("mapa"), mapProp);
    }

    function addMarker(lat,long,icon,content){
        var latLng = {'lat':lat,'lng':long};

        var marker = new google.maps.Marker({
            position:latLng,
            map:map,
            icon:icon
        });
        var infoWindow = new google.maps.infoWindow({
            content:content,
            maxwidth:200,
            pixelOffset: new google.map.Size(0,20)
        });
        infoWindow.open(map,marker);
    }

    initialize();

    addMarker(-14.898325, -41.965276);

 
//Change img

function baldeimg(){
  chageimgBalde1.src="/img/baldeCosta.jpeg"
}
function baldeimg2(){
    chageimgBalde1.src="/img/baldeFrente.jpeg"
}
function canecaimg1 (){
    chageimgCaneca1.src="/img/canecaCosta.jpeg"
}
function canecaimg2(){
    chageimgCaneca1.src="/img/canecaFrente.jpeg"
}

