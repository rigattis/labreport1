let map;

const points = {
    mf3: {
      center: { lat: 42.33365, lng: -71.15507 },
      value: 0.876,
    },
    md3: {
      center: { lat: 42.3394759, lng: -71.1586132 },
      value: 0.889,
    },
    srcp1: {
      center: { lat: 42.3438889, lng: -71.1658333 },
      value: 1.225,
    },
    walden: {
      center: { lat: 42.4385833, lng: -71.3351111 },
      value: 1.25,
    },
    ba03: {
      center: { lat: 42.3352751, lng: -71.1699731 },
      value: 1.28,
    },
    nz2: {
      center: { lat: 42.3354444, lng: -71.1627778 },
      value: 2.87,
    },
    jz03: {
      center: { lat: 42.34142, lng: -71.16609 },
      value: 1.3375,
    },
    as2: {
      center: { lat: 39.2646665, lng: -75.8674863 },
      value: 1.36,
    },
    al3: {
      center: { lat: 42.6360336, lng: -71.3873487 },
      value: 1.375,
    },
    lk2: {
      center: { lat: 42.3441284, lng: -71.1656275 },
      value: 1.41,
    },
    as1: {
      center: { lat: 38.30167, lng: -77.455972 },
      value: 1.51,
    },
    lk3: {
      center: { lat: 42.3652858, lng: -71.1376477 },
      value: 1.81,
    },
    mf2: {
      center: { lat: 42.8614, lng: -72.10809 },
      value: 1.9,
    },
    bgn01: {
      center: { lat: 42.35286, lng: -71.070327 },
      value: 2.13,
    },
    jz02: {
      center: { lat: 42.33957, lng: -71.16562 },
      value: 2.35,
    },
    al1: {
      center: { lat: 42.5525769, lng: -71.3730357 },
      value: 2.45,
    },
    rc1: {
      center: { lat: 42.3383333, lng: -71.1705556 },
      value: 2.46,
    },
    bgn03: {
      center: { lat: 42.337728, lng: -71.151131 },
      value: 2.58,
    },
    mc3: {
      center: { lat: 42.3383333, lng: -71.1705556 },
      value: 2.8,
    },
    ee03: {
      center: { lat: 42.3375, lng: -71.13724 },
      value: 2.82,
    },
    jz01: {
      center: { lat: 42.3333, lng: -71.1703 },
      value: 2.875,
    },
    charles: {
      center: { lat: 42.3595, lng: -71.1662 },
      value: 3.03,
    },
    lk1: {
      center: { lat: 42.3500579, lng: -71.1493884 },
      value: 3.1,
    },
    ba01: {
      center: { lat: 42.44034, lng: -71.34132 },
      value: 3.16,
    },
    xy3: {
      center: { lat: 42.33566, lng: -71.16249 },
      value: 3.66,
    },
    yz3: {
      center: { lat: 42.33566, lng: -71.16249 },
      value: 3.74,
    },
    an2: {
      center: { lat: 42.3598444, lng: -71.19035 },
      value: 4.01,
    },
    nz3: {
      center: { lat: 42.3354444, lng: -71.1627778 },
      value: 2.38,
    },
    nz1: {
      center: { lat: 42.3354444, lng: -71.1627778 },
      value: 1.88,
    },
    xy2: {
      center: { lat: 42.33198, lng: -71.15657 },
      value: 4.48,
    },
    yz2: {
      center: { lat: 42.33198, lng: -71.15657 },
      value: 4.49,
    },
    rz2: {
      center: { lat: 42.2439544, lng: -71.4669459 },
      value: 4.59,
    },
    srwp1: {
      center: { lat: 42.44, lng: -71.3347222 },
      value: 4.91,
    },
    srcr1:{
      center: {lat: 42.3595556, lng: -71.1662778},
      value: 5.087,
    },
    an1: {
      center: { lat: 44.1211361, lng: -71.6829889 },
      value: 5.84,
    },
    rc2: {
      center: { lat: 42.3361111, lng: -71.1694444 },
      value: 6,
    },
    chandler: {
      center: { lat: 42.3441389, lng: -71.1661111 },
      value: 6.2,
    },
    mf1: {
      center: { lat: 42.3591, lng: -71.16559 },
      value: 6.36,
    },
    an3: {
      center: { lat: 42.3598444, lng: -71.19035 },
      value: 6.71,
    },
    al2: {
      center: { lat: 42.6372444, lng: -71.3818642 },
      value: 7.6125,
    },
    yz1: {
      center: { lat: 42.33428, lng: -71.16193 },
      value: 7.69,
    },
    xy1: {
      center: { lat: 42.33428, lng: -71.16193 },
      value: 7.81,
    },
    md1: {
      center: { lat: 42.0031321, lng: -71.1588308 },
      value: 9.4,
    },
    rz1: {
      center: { lat: 42.3555094, lng: -71.3854644 },
      value: 9.86,
    },
    md2: {
      center: { lat: 41.9975176, lng: -71.1660577 },
      value: 13.9,
    },
    rz3: {
      center: { lat: 42.3459485, lng: -71.1669532 },
      value: 56.25,
    },
    ee02: {
      center: { lat: 42.34984, lng: -71.092 },
      value: 76.5,
    },
    mc2: {
      center: { lat: 42.3591667, lng: -71.0775 },
      value: 206,
    },
    mc3: {
      center: { lat: 42.3644444, lng: -71.0755556 },
      value: 231,
    },
    mc1: {
      center: { lat: 42.3616667, lng: -71.0777778 },
      value: 257,
    },
    ee01: {
      center: { lat: 42.35213, lng: -71.09039 },
      value: 350,
    },
    rc3: {
      center: { lat: 42.3452778, lng: -71.0830556 },
      value: 521,
    },
    mc2_2: {
      center: { lat: 42.3444444, lng: -71.0841667 },
      value: 1088,
    },
    mc1_2: {
      center: { lat: 42.3358333, lng: -71.1705556 },
      value: 3360,
    },
    ba02: {
      center: { lat: 42.4171458, lng: -70.9068869 },
      value: 8990,
    },
    bgn02: {
      center: { lat: 42.3840171, lng: -71.0101714 },
      value: 13300,
    },                       
  };

  function check_color(color){
    if (color<=360){
      return color;
    }
    else{
      return 0;
    }
  }
  function getColorFromValue(value) {
    let color_value = 120; //start at green
    let lightness = 40;
    let counter = value;
    if(value<=10){
        while(counter>0){
            counter-=1;
            color_value+=10;
        }
    }
    else if (value<600){
      color_value = 220;
        while(counter>0){
            counter -= 10
            color_value += 3.33;
            color_value = check_color(color_value)
        }
    }
    else{
        lightness = 0;
    }
    return `hsl(${color_value}, 100%, ${lightness}%)`;
  }

async function initMap() {
  // The location of the res
  const position = { lat: 42.33365, lng: -71.15507 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 12,
    center: position,
    mapId: "Lab report 1",
  });
  const legend = document.getElementById("legend");
  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(legend);
  for (const key in points){
    const point = points[key]
    const circleIcon = {
        path: google.maps.SymbolPath.CIRCLE, 
        fillColor: getColorFromValue(point.value),
        fillOpacity: 1,
        strokeWeight: 2, 
        strokeColor: getColorFromValue(point.value),
        scale: 10, 
      };
    const marker = new google.maps.Marker({
        map: map,
        position: point.center,
        icon: circleIcon,
      });
    const infoWindow = new google.maps.InfoWindow({
      content: `Sample: ${key}, Value: ${point.value}`
    });
      
    marker.addListener("mouseover", () => {
       infoWindow.open(map, marker);
    });
      
    marker.addListener("mouseout", () => {
      infoWindow.close();
    });
  }
  
}

initMap();