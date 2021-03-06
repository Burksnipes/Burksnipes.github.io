var map = L.map( 'map', {
    center: [35.9522, -84.0500],
    minZoom: 2,
    zoom: 11
});
var Complex = L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: ['a','b','c']
});
var Plain = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
}).addTo(map);
var Imagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});
var TileLayer = {
    "Plain Map": Plain,
    "Complex Map": Complex,
    "Imagery": Imagery,
    
  
};
  
var greenIcon = L.icon({
        iconUrl: 'https://i.imgur.com/LtAJ7UT.jpg',
        iconSize: [30, 50], // size of the icon
        iconAnchor: [16,48],
        popupAnchor: [-1,-34]
        });
var yellowIcon = L.icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
        iconSize: [30, 50], // size of the icon
        iconAnchor: [16,48],
        popupAnchor: [-1,-34]
        });
var orangeIcon = L.icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
        iconSize: [30, 50], // size of the icon
        iconAnchor: [16,48],
        popupAnchor: [-1,-34]
        });
var redIcon = L.icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        iconSize: [30, 50], // size of the icon
        iconAnchor: [16,48],
        popupAnchor: [-1,-34]
        });
var blackIcon = L.icon({
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Oak_Ridge_National_Laboratory_logo.svg',
        iconSize: [80, 40], // size of the icon
        popupAnchor: [0,-15]
        });
var greyIcon = L.icon({
        iconUrl: 'http://www.freeiconspng.com/uploads/bus-icon-10.png',
        iconSize: [60, 60], // size of the icon
        iconAnchor: [30,30],
        popupAnchor: [0,-12]
        });
var universityIcon = L.icon({
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Tennessee_Volunteers_logo.svg/1000px-Tennessee_Volunteers_logo.svg.png',
        iconSize: [25, 30], // size of the icon
        popupAnchor: [0,-15]
        });
var appleIcon = L.icon({
        iconUrl: 'http://tablethype.de/wp-content/uploads/2016/10/Apple_logo_black.png',
        iconSize: [40, 40], // size of the icon
        popupAnchor: [0,-15]
        });
var marketIcon = L.icon({
        iconUrl: 'https://www.todocanada.ca/wp-content/uploads/noun_13641.png',
        iconSize: [50, 25], // size of the icon
        popupAnchor: [0,-15]
        });
var sunIcon = L.icon({
        iconUrl: 'https://i1.wp.com/knox.vote/wp-content/uploads/2017/02/Sunsphere.png?resize=246%2C540&ssl=1',
        iconSize: [20, 40], // size of the icon
        popupAnchor: [0,-15]
        });
var turkeyIcon = L.icon({
        iconUrl: 'http://freevector.co/wp-content/uploads/2010/10/47054-turkey-bird-shape-from-side-view.png',
        iconSize: [35, 40], // size of the icon
        popupAnchor: [0,-15]
        });
var oldcityIcon = L.icon({
        iconUrl: 'http://freevector.co/wp-content/uploads/2009/01/69847-old-building.png',
        iconSize: [35, 40], // size of the icon
        popupAnchor: [0,-15]
        });
var bridgeIcon = L.icon({
        iconUrl: 'http://fscomps.fotosearch.com/compc/CSP/CSP993/k15619336.jpg',
        iconSize: [50, 50], // size of the icon
        popupAnchor: [0,-15]
        });
var TrafficIcon = L.icon({
        iconUrl: 'https://financialtribune.com/sites/default/files/field/image/17january/12_traffic_5.png',
        iconSize: [50, 50], // size of the icon
        popupAnchor: [0,-15]
        });
var Sun1Icon = L.icon({
        iconUrl: 'http://girlontheroof.com/wp-content/uploads/2016/06/sunsphere1.png',
        iconSize: [20, 50], // size of the icon
        popupAnchor: [0,-15]
        });
var TVATower = L.icon({
        iconUrl: 'https://www.shareicon.net/download/2015/12/23/691889_office_512x512.png',
        iconSize: [50, 50], // size of the icon
        popupAnchor: [0,-15]
        });
var Stadium = L.icon({
        iconUrl: 'https://cdn2.iconfinder.com/data/icons/location-map-vehicles/100/Locations-53-512.png',
        iconSize: [50, 50], // size of the icon
        popupAnchor: [0,-15]
        });
var Y12Logo = L.icon({
        iconUrl: 'https://pbs.twimg.com/profile_images/1139499586/y12_twitter_400x400.png',
        iconSize: [50, 50], // size of the icon
        popupAnchor: [0,-15]
        });
var Centennial = L.marker([35.9987, -84.1933], {icon: orangeIcon})
    ThePreserve = L.marker([35.9522, -84.1668], {icon: orangeIcon})
    LondonTown = L.marker([35.9385, -84.0117], {icon: yellowIcon})
    MarbleAlley = L.marker([35.9672, -83.9176], {icon: redIcon})
    TaraHills = L.marker([36.0186, -84.2292], {icon: yellowIcon})
    TheManhatten = L.marker([36.0123, -84.2515], {icon: greenIcon})
    BristolPark = L.marker([36.018036, -84.239866], {icon: orangeIcon})
    WhistCourt = L.marker([35.970496, -83.922740], {icon: orangeIcon})
    SequoyahVillage = L.marker([35.931707, -83.964325], {icon: orangeIcon})
    RollingHills = L.marker([36.006205, -84.274476], {icon: yellowIcon})
    BrendonPark = L.marker([35.925775, -84.083787], {icon: yellowIcon})
    JFGBuilding = L.marker([35.969412, -83.919596], {icon: orangeIcon})
    SterchiLoft = L.marker([35.968473, -83.920031], {icon: orangeIcon})
    LovellCrossing = L.marker([35.9341, -84.1507], {icon: orangeIcon})
    Maplehurst = L.marker([35.958438, -83.921398], {icon: orangeIcon})
    Amberleigh = L.marker([35.903838, -84.090949], {icon: orangeIcon})
    Landings = L.marker([35.964759, -83.906194], {icon: orangeIcon})
    FourOneFour = L.marker([35.943445, -83.983993], {icon: redIcon})
    MountainBrook = L.marker([35.951533, -83.974550], {icon: orangeIcon})
    EightOneOne = L.marker([35.966777, -83.906251], {icon: redIcon})
    
    TheStandard = L.marker([35.957020, -83.933028], {icon: greenIcon})
    TheKnox = L.marker([35.959649, -83.930202], {icon: greenIcon})
    TheCommons = L.marker([35.961757, -83.934871], {icon: greenIcon})
    TheCrowne = L.marker([35.958705, -83.942369], {icon: greenIcon})
    TheTower = L.marker([35.952795, -83.944501], {icon: greenIcon})
    TheBridge = L.marker([35.962404, -83.926805], {icon: greenIcon})
    
    Tester = L.marker([37.0123, -84.2515], {icon: greenIcon})
    
    MarketSquare = L.marker([35.965439, -83.919754], {icon: marketIcon})
    SolwayBridge = L.marker([35.991468, -84.194734], {icon: TrafficIcon})
    OldCity = L.marker([35.969712, -83.918576], {icon: oldcityIcon})
    TurkeyCreek = L.marker([35.900865, -84.155008], {icon: turkeyIcon})
    SunSphere = L.marker([35.961633, -83.923322], {icon: Sun1Icon})
    AppleStore = L.marker([35.924434, -84.037232], {icon: appleIcon})
    TVATowers = L.marker([35.966389, -83.920295], {icon: TVATower})
    Stadium = L.marker([35.954897, -83.924901], {icon: Stadium})
    University = L.marker([35.954175, -83.929291], {icon: universityIcon}).addTo(map)
    TheLab = L.marker([35.9311, -84.3100], {icon: blackIcon}).addTo(map)
    Y12 = L.marker([35.989341, -84.249957], {icon: Y12Logo}).addTo(map)
    
    Bus2 = L.marker([35.954374, -84.155292], {icon: greyIcon})
    Bus1 = L.marker([35.947429, -84.167298], {icon: greyIcon})
    Bus3 = L.marker([35.958094, -83.928241], {icon: greyIcon})
    Bus4 = L.marker([35.931136, -84.310881], {icon: greyIcon})
    
    
Centennial.bindPopup("<b>Centennial Village</b><br>Drive: 15 min<br>Price: Mid High<br><a href=http://www.centennialvillageapts.com>Website Link</a>");
ThePreserve.bindPopup("<b>The Preserve</b><br>Drive: 20 min<br>Price: Mid High<br><a href=http://thepreserveathardinvalley.com>Website Link</a>");
LondonTown.bindPopup("<b>LondonTown</b><br>Drive: 30 min<br>Price: Mid Low<br><a href=http://bacorealtycorp.com/816/londontown-apartments-apartments-for-rent/knoxville/37909>Website Link</a>");
MarbleAlley.bindPopup("<b>Marble Alley</b><br>Drive: 35 min<br>Price: High<br><a href=http://www.marblealley-lofts.com>Website Link</a>");
TaraHills.bindPopup("<b>Tara Hills</b><br>Drive: 20 min<br>Price: Mid Low<br><a href=https://tarahills.prospectportal.com>Website Link</a>");
TheManhatten.bindPopup("<b>The Manhatten</b><br>Drive: 20 min<br>Price: Low<br><a href=https://www.apartments.com/the-manhattan-oak-ridge-tn/90ts467/>Website Link</a>");
BristolPark.bindPopup("<b>Bristol Park</b><br>Drive: 20 min<br>Price: Mid High<br><a href=http://www.bristolparkoakridge.com>Website Link</a>");
RollingHills.bindPopup("<b>Rolling Hills</b><br>Drive: 20 min<br>Price: Mid Low<br><a href=http://www.rollinghillsoakridge.com>Website Link</a>");
WhistCourt.bindPopup("<b>Whist Court</b><br>Drive: 35 min<br>Price: Mid High<br><a href=https://www.google.com/search?rlz=1C1GGRV_enUS750US750&q=whist+court+apartments&npsic=0&rflfq=1&rlha=0&rllag=35968334,-83922948,240&tbm=lcl&ved=0ahUKEwj1ybzEsKfWAhXLhFQKHbZQAv0QtgMIRg&tbs=lrf:!2m1!1e2!3sIAE,lf:1,lf_ui:2&rldoc=1#rlfi=hd:;si:14674372236897090752;mv:!1m3!1d2354.5712874045985!2d-83.922948!3d35.968334299999995!2m3!1f0!2f0!3f0!3m2!1i13!2i140!4f13.1>Website Link</a>");
SequoyahVillage.bindPopup("<b>Sequoyah Village</b><br>Drive: 35 min<br>Price: Mid High<br><a href=https://www.sequoyahvillage.com>Website Link</a>");
JFGBuilding.bindPopup("<b>JFG Building</b><br>Drive: 35 min<br>Price: Mid High<br><a href=https://jfgflats.com>Website Link</a>");
SterchiLoft.bindPopup("<b>Sterchi Loft</b><br>Drive: 35 min<br>Price: Mid High<br><a href=https://www.terminusrealestate.com>Website Link</a>");
LovellCrossing.bindPopup("<b>Lovell Crossing</b><br>Drive: 25 min<br>Price: Mid High<br><a href=http://lovellcrossing.com>Website Link</a>");
BrendonPark.bindPopup("<b>Brendon Park</b><br>Drive: 25 min<br>Price: Mid Low<br><a href=http://www.brendonpark.com>Website Link</a>");
Maplehurst.bindPopup("<b>Maplehurst</b><br>Drive: 35 min<br>Price: Mid High<br><a href=http://maplehurstparkapts.com>Website Link</a>");
Amberleigh.bindPopup("<b>Amberleigh Bluff</b><br>Drive: 25 min<br>Price: Mid High<br><a href=http://www.livewellamberleighbluff.com>Website Link</a>");
Landings.bindPopup("<b>The Landings</b><br>Drive: 35 min<br>Price: Mid High<br><a href=http://www.landingsknoxville.com>Website Link</a>");
FourOneFour.bindPopup("<b>414 Flats</b><br>Drive: 30 min<br>Price: High<br><a href=http://www.414flats.com>Website Link</a>");
MountainBrook.bindPopup("<b>Mountain Brook</b><br>Drive: 30 min<br>Price: Mid High<br><a href=http://mountainbrook-knoxville.com>Website Link</a>");
EightOneOne.bindPopup("<b>811 Apartments</b><br>Drive: 35 min<br>Price: High<br><a href=https://www.live811eastdowntown.com>Website Link</a>");
TheStandard.bindPopup("<b>The Standard</b><br>Drive: 35 min<br>Price: Mid Low<br>Sublease only<br><a href=https://www.thestandardatknoxville.com>Website Link</a>");
TheKnox.bindPopup("<b>The Knox</b><br>Drive: 35 min<br>Price: Mid Low<br>Sublease only<br><a href=http://livetheknox.com>Website Link</a>");
TheCommons.bindPopup("<b>The Commons</b><br>Drive: 35 min<br>Price: Mid Low<br>Sublease only<br><a href=http://www.commonsatknoxville.com>Website Link</a>");
TheCrowne.bindPopup("<b>The Crowne</b><br>Drive: 35 min<br>Price: Mid Low<br>Sublease only<br><a href=http://www.crownecampuspointe.com>Website Link</a>");
TheTower.bindPopup("<b>The Tower</b><br>Drive: 35 min<br>Price: Mid Low<br>Sublease only<br><a href=http://www.toweratmorganhill.com>Website Link</a>");
TheBridge.bindPopup("<b>The Bridge</b><br>Drive: 35 min<br>Price: Mid Low<br>Sublease only<br><a href=http://www.thecommonsonbridge.com>Website Link</a>");
Bus4.bindPopup("<b>ORNL Visitor Center<br>7:56am<br>12:56pm<br>4:46pm<br><a href=http://ridethet.utk.edu/wp-content/uploads/sites/51/2017/08/ORNL-PSCC-Route-Info-2017-18-Aug-17-rev.pdf>Website Link</a>");        
Bus3.bindPopup("<b>Cumberland Ave. @ James Agee St.<br>6:50am<br>12:00pm<br>3:40pm<br><a href=http://ridethet.utk.edu/wp-content/uploads/sites/51/2017/08/ORNL-PSCC-Route-Info-2017-18-Aug-17-rev.pdf>Website Link</a>");
Bus1.bindPopup("<b>Clayton Performing Arts Center<br>7:10am<br>12:20pm<br>4:00pm<br><a href=http://ridethet.utk.edu/wp-content/uploads/sites/51/2017/08/ORNL-PSCC-Route-Info-2017-18-Aug-17-rev.pdf>Website Link</a>");
Bus2.bindPopup("<b>NTRC<br>7:20am<br>12:30pm<br>4:10pm<br><a href=http://ridethet.utk.edu/wp-content/uploads/sites/51/2017/08/ORNL-PSCC-Route-Info-2017-18-Aug-17-rev.pdf>Website Link</a>");
        
TheLab.bindPopup("<b>Oak Ridge National Laboratory<br>Click on Icons for information<br>Use boxes in top right to edit search").openPopup();
Y12.bindPopup("<b>Y12");
SolwayBridge.bindPopup("<b>Solway Bridge<br>Evening Traffic");
TurkeyCreek.bindPopup("<b>Turkey Creek Mall");
OldCity.bindPopup("<b>Old City");
University.bindPopup("<b>University of Tennessee");
Tester.bindPopup("<br><a href=https://www.w3schools.com/html/>Visit our HTML tutorial</a>").openPopup();
MarketSquare.bindPopup("<b>Market Square");
AppleStore.bindPopup("<b>Apple Store");
SunSphere.bindPopup("<b>Sunsphere at Worlds Fair Park");       
TVATowers.bindPopup("<b>TVA Towers");
Stadium.bindPopup("<b>Neyland Stadium");  
        
var OneBOneB = L.layerGroup([EightOneOne, FourOneFour, Landings, Amberleigh, Maplehurst, LovellCrossing, RollingHills,BristolPark, Centennial, ThePreserve, MarbleAlley, LondonTown, TaraHills, TheManhatten, SequoyahVillage,
                             WhistCourt, Tester, JFGBuilding, SterchiLoft, BrendonPark]);
var TwoBOneB = L.layerGroup([FourOneFour, Amberleigh, Maplehurst, RollingHills, LondonTown, TaraHills, TheManhatten, SequoyahVillage, SterchiLoft, JFGBuilding, BrendonPark]);
var TwoBTwoB = L.layerGroup([EightOneOne, MountainBrook, FourOneFour, Landings, Amberleigh, Maplehurst, LovellCrossing, Centennial, ThePreserve, BristolPark, MarbleAlley, WhistCourt, JFGBuilding]);
var Summer = L.layerGroup([TheBridge, TheCrowne, TheStandard, TheKnox, TheCommons]);
var landmarks = L.layerGroup([AppleStore, MarketSquare, SunSphere, TurkeyCreek, OldCity, SolwayBridge, TVATowers, Stadium]);
var off = L.layerGroup([]);
var geojsonFeature = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -84.3104338645935,
            35.93100396284354
          ],
          [
            -84.31077718734741,
            35.93142095686926
          ],
          [
            -84.31086301803589,
            35.93171632630676
          ],
          [
            -84.31097030639648,
            35.93180319946071
          ],
          [
            -84.3109917640686,
            35.93195957089726
          ],
          [
            -84.31079864501953,
            35.93201169464074
          ],
          [
            -84.31066989898682,
            35.93194219630849
          ],
          [
            -84.3105626106262,
            35.93189007251922
          ],
          [
            -84.30878162384033,
            35.93230706187119
          ],
          [
            -84.30736541748047,
            35.93270667460297
          ],
          [
            -84.3051552772522,
            35.93350589400669
          ],
          [
            -84.30380344390869,
            35.93421823492584
          ],
          [
            -84.30137872695921,
            35.935538654774426
          ],
          [
            -84.29863214492798,
            35.937015414002865
          ],
          [
            -84.29702281951904,
            35.93783196314264
          ],
          [
            -84.29230213165283,
            35.941080702766484
          ],
          [
            -84.28964138031006,
            35.942783197475315
          ],
          [
            -84.28584337234497,
            35.94528475581323
          ],
          [
            -84.27927732467651,
            35.94961018024711
          ],
          [
            -84.27535057067871,
            35.951903080296205
          ],
          [
            -84.27352666854858,
            35.95298002553207
          ],
          [
            -84.27047967910767,
            35.954873329142714
          ],
          [
            -84.26889181137085,
            35.955915495252114
          ],
          [
            -84.26644563674927,
            35.957496087609805
          ],
          [
            -84.26483631134033,
            35.95852085036893
          ],
          [
            -84.2620038986206,
            35.96034454781638
          ],
          [
            -84.25835609436035,
            35.962498193427706
          ],
          [
            -84.25316333770752,
            35.965659083040734
          ],
          [
            -84.24962282180786,
            35.96779521700724
          ],
          [
            -84.24610376358032,
            35.969948659417554
          ],
          [
            -84.24436569213867,
            35.97132057999947
          ],
          [
            -84.24307823181152,
            35.97218887184538
          ],
          [
            -84.24179077148438,
            35.973039788588565
          ],
          [
            -84.24101829528809,
            35.973491291707205
          ],
          [
            -84.23900127410889,
            35.97462003820546
          ],
          [
            -84.23737049102783,
            35.975540388788865
          ],
          [
            -84.23601865768433,
            35.97626971559191
          ],
          [
            -84.23460245132445,
            35.97699903565592
          ],
          [
            -84.2333149909973,
            35.97772834898076
          ],
          [
            -84.2316198348999,
            35.97863129899828
          ],
          [
            -84.22870159149169,
            35.98019407269283
          ],
          [
            -84.22640562057494,
            35.98139217823463
          ],
          [
            -84.22453880310059,
            35.982399267372536
          ],
          [
            -84.22196388244629,
            35.983770971557576
          ],
          [
            -84.2201828956604,
            35.98491693398726
          ],
          [
            -84.21893835067749,
            35.98566353691944
          ],
          [
            -84.2178440093994,
            35.986410132787064
          ],
          [
            -84.21720027923583,
            35.986844196904315
          ],
          [
            -84.21582698822021,
            35.987208808917345
          ],
          [
            -84.21383142471313,
            35.98762550629756
          ],
          [
            -84.21252250671387,
            35.98759078159993
          ],
          [
            -84.21134233474731,
            35.98759078159993
          ],
          [
            -84.21056985855103,
            35.98783385416237
          ],
          [
            -84.20938968658447,
            35.9884588944556
          ],
          [
            -84.2073082923889,
            35.9897089601865
          ],
          [
            -84.20557022094727,
            35.99076802815339
          ],
          [
            -84.20372486114502,
            35.99142776822423
          ],
          [
            -84.20202970504761,
            35.992000695914726
          ],
          [
            -84.20054912567139,
            35.99227847753955
          ],
          [
            -84.19893980026245,
            35.992347922792895
          ],
          [
            -84.19737339019775,
            35.9921395868494
          ],
          [
            -84.19378995895386,
            35.99132359910619
          ],
          [
            -84.1917085647583,
            35.99092428287934
          ],
          [
            -84.19089317321776,
            35.99057704973473
          ],
          [
            -84.19005632400513,
            35.99010828256508
          ],
          [
            -84.18872594833374,
            35.98870196434345
          ],
          [
            -84.1868805885315,
            35.98651430839298
          ],
          [
            -84.18361902236938,
            35.982624992485064
          ],
          [
            -84.18203115463257,
            35.98076708196048
          ],
          [
            -84.18145179748535,
            35.98024616461636
          ],
          [
            -84.17984247207642,
            35.97927377637424
          ],
          [
            -84.17898416519165,
            35.97859657034248
          ],
          [
            -84.17849063873291,
            35.97802354531536
          ],
          [
            -84.17827606201172,
            35.97696430628188
          ],
          [
            -84.1783618927002,
            35.975592483784
          ],
          [
            -84.17831897735596,
            35.97468949900124
          ],
          [
            -84.17816877365112,
            35.973769138496614
          ],
          [
            -84.17726755142212,
            35.971060090583386
          ],
          [
            -84.17647361755371,
            35.96859408152867
          ],
          [
            -84.17572259902954,
            35.96717001304784
          ],
          [
            -84.17441368103027,
            35.96553751270294
          ],
          [
            -84.17306184768677,
            35.964356533966765
          ],
          [
            -84.17095899581909,
            35.962463457674154
          ],
          [
            -84.16808366775513,
            35.959840864159155
          ],
          [
            -84.16516542434692,
            35.95721818355288
          ],
          [
            -84.16093826293944,
            35.95339690361731
          ],
          [
            -84.15915727615356,
            35.95178148878271
          ],
          [
            -84.15808439254761,
            35.95079137949213
          ],
          [
            -84.15714025497437,
            35.94961018024711
          ],
          [
            -84.1559386253357,
            35.94729984243961
          ],
          [
            -84.15480136871338,
            35.9451110390429
          ],
          [
            -84.15394306182861,
            35.94363443107607
          ],
          [
            -84.15319204330444,
            35.94253998619097
          ],
          [
            -84.15248394012451,
            35.94168874080135
          ],
          [
            -84.1513466835022,
            35.94061164165755
          ],
          [
            -84.15020942687988,
            35.93967351108797
          ],
          [
            -84.14297819137573,
            35.933453771248395
          ],
          [
            -84.13806438446045,
            35.92931858958172
          ],
          [
            -84.12984609603882,
            35.922177073347875
          ],
          [
            -84.12424564361572,
            35.91753734860842
          ],
          [
            -84.1208553314209,
            35.91465258852865
          ],
          [
            -84.11950349807738,
            35.91369677132435
          ],
          [
            -84.11840915679932,
            35.913262305141146
          ],
          [
            -84.11714315414429,
            35.91298424553172
          ],
          [
            -84.11452531814575,
            35.91317541161819
          ],
          [
            -84.11016941070557,
            35.91395744988898
          ],
          [
            -84.1023588180542,
            35.91564315053622
          ],
          [
            -84.09506320953369,
            35.91727668184046
          ],
          [
            -84.08639430999756,
            35.91917084079574
          ],
          [
            -84.08008575439453,
            35.920578397430106
          ],
          [
            -84.07182455062865,
            35.92236821721866
          ],
          [
            -84.0637993812561,
            35.92412324389198
          ],
          [
            -84.05364990234375,
            35.92639950759733
          ],
          [
            -84.04219150543213,
            35.92888420920678
          ],
          [
            -84.02360916137695,
            35.93300203923689
          ],
          [
            -84.01689291000366,
            35.93460046399232
          ],
          [
            -84.01466131210327,
            35.935469159542784
          ],
          [
            -84.00927543640137,
            35.93823154794556
          ],
          [
            -84.0010142326355,
            35.94259210295776
          ],
          [
            -83.99940490722656,
            35.94361705905344
          ],
          [
            -83.99633646011353,
            35.94599699057879
          ],
          [
            -83.99427652359009,
            35.94714350135056
          ],
          [
            -83.99174451828003,
            35.94820314045253
          ],
          [
            -83.9868950843811,
            35.949783887125996
          ],
          [
            -83.98350477218628,
            35.95082612037905
          ],
          [
            -83.97886991500854,
            35.95304950536571
          ],
          [
            -83.973548412323,
            35.95570706313024
          ],
          [
            -83.969407081604,
            35.95787820409149
          ],
          [
            -83.96708965301514,
            35.95883348720779
          ],
          [
            -83.96520137786865,
            35.959180860021796
          ],
          [
            -83.96279811859131,
            35.959285071568054
          ],
          [
            -83.96045923233032,
            35.95942402008252
          ],
          [
            -83.95816326141357,
            35.95994507483455
          ],
          [
            -83.9558458328247,
            35.961004542228956
          ],
          [
            -83.95121097564697,
            35.963279743842804
          ],
          [
            -83.9501166343689,
            35.963939713725125
          ],
          [
            -83.9491081237793,
            35.9642523291126
          ],
          [
            -83.94784212112427,
            35.964026551456904
          ],
          [
            -83.94719839096068,
            35.96364446472276
          ],
          [
            -83.9464259147644,
            35.962463457674154
          ],
          [
            -83.94653320312499,
            35.960813491782005
          ],
          [
            -83.94657611846924,
            35.95860769405941
          ],
          [
            -83.94610404968262,
            35.95718344547702
          ],
          [
            -83.94528865814209,
            35.955915495252114
          ],
          [
            -83.94408702850342,
            35.954578046245224
          ],
          [
            -83.94256353378296,
            35.952649995487704
          ],
          [
            -83.93685579299927,
            35.954838590035585
          ],
          [
            -83.93192052841187,
            35.9567318491005
          ],
          [
            -83.92983913421631,
            35.95746134965615
          ]
        ]
      }
    }
  ]
}
var baselayMaps = {
    "One Bed One Bath": OneBOneB.addTo(map),
    "Two Bed One Bath": TwoBOneB,
    "Two Bed Two Bath": TwoBTwoB,
    "Summer Housing": Summer,
    "Off": off
};
        
var json = L.geoJSON(geojsonFeature);
var bus = L.layerGroup([json,Bus1,Bus2,Bus3,Bus4]);
var off = L.layerGroup([]);
var busmap = {
    "Bus Stops": bus,
    "Landmarks": landmarks
    
   
};
        
        L.control.layers(TileLayer,null,{collapsed:false}).addTo(map);
        L.control.layers(baselayMaps,busmap,{collapsed:false}).addTo(map);
        
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
