var SOL;

fetch('https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/18.1489/lat/57.3081/data.json')
  .then(res => res.json())
  .then(data => SOL = data)
  //.then(() => console.log(SOL))

setTimeout(function(){
  tiden();
}, 200);



d = new Date();
var o = d.toLocaleDateString();

function tiden() {
    for (n = 0; n <= 35; n++) {
    const tid = SOL.timeSeries[n].validTime;
    
        if (tid == o + "T04:00:00Z") {
           insertSMHI();  }

        if (tid == o + "T10:00:00Z") {
          insertSMHI2(); }       

        if (tid == o + "T16:00:00Z") {
                insertSMHI3();  }
    }
  }


function insertSMHI() {
  const ettH = SOL.timeSeries[n].validTime;
  const ettT = SOL.timeSeries[n].parameters[1].values[0];
  const ettGR = SOL.timeSeries[n].parameters[13].values[0];
  const ettVS = SOL.timeSeries[n].parameters[14].values[0];
  const ettM = SOL.timeSeries[n].parameters[18].values[0]; 

  const ettDate = new Date(ettH);
  const ettTid = ettDate.getHours();

  let table = document.getElementById("SMHI");
  let row = table.insertRow(-1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);

  if (ettGR>=24 && ettGR<=68){
    ettVR = "NE &#8599;";}
  else if (ettGR>=69 && ettGR<=113){
    trteVR = "E &#8593;";}
  else if (ettGR>=114 && ettGR<=158){
    ettVR = "SE &#8600;";}
  else if (ettGR>=159 && ettGR<=203){
    ettVR = "S &#8595;";}
  else if (ettGR>=204 && ettGR<=248){
    ettVR = "SW &#8601;";}
  else if (ettGR>=249 && ettGR<=293){
    ettVR = "W &#8592;";}
  else if (ettGR>=294 && ettGR<=336){
    ettVR = "NW &#8598;";}
  else {
    ettVR = "N &#8593;";} 

    if (ettM == 1) {
      ettMH = "Klart";}
    else if (ettM == 2) {
      ettMH = "Lätt molnighet";} 
    else if (ettM == 3) {
      ettMH = "Varierande molnighet";} 
    else if (ettM == 4) {
      ettMH = "Halvklart";} 
    else if (ettM == 5) {
      ettMH = "Molnigt";} 
    else if (ettM == 6) {
      ettMH = "Mulet";} 
    else if (ettM == 7) {
      ettMH = "Dimma";} 
    else if (ettM == 8) {
      ettMH = "Lätt regnskurar";} 
    else if (ettM == 9) {
      ettMH = "Regnskurar";} 
    else if (ettM == 10) {
      ettMH = "Kraftiga regnskurar";} 
    else if (ettM == 11) {
      ettMH = "Åskskurar";} 
    else if (ettM == 12) {
      ettMH = "Lätt by av regn och snö";} 
    else if (ettM == 13) {
      ettMH = "By av regn och snö";} 
    else if (ettM == 14) {
      ettMH = "Kraftig by av regn och snö";} 
    else if (ettM == 15) {
      ettMH = "Lätt snöbyar";} 
    else if (ettM == 16) {
      ettMH = "Snöbyar";} 
    else if (ettM == 17) {
      ettMH = "Kraftiga snöbyar";} 
    else if (ettM == 18) {
      ettMH = "Lätt regn";} 
    else if (ettM == 19) {
      ettMH = "Regn";} 
    else if (ettM == 20) {
      ettMH = "Kraftigt regn";} 
    else if (ettM == 21) {
      ettMH = "Åska";} 
    else if (ettM == 22) {
      ettMH = "Lätt snöblandat regn";} 
    else if (ettM == 23) {
      ettMH = "Snöblandat regn";} 
    else if (ettM == 24) {
      ettMH = "Kraftigt snöblandat regn";} 
    else if (ettM == 25) {
      ettMH = "Lätt snöfall";} 
    else if (ettM == 26) {
      ettMH = "Snöfall";} 
    else {
      ettMH = "Kraftigt snöfall";} 


  cell1.innerHTML = ettTid;
  cell2.innerHTML = ettT + "&#176;";
  cell3.innerHTML = ettVR + " " + ettVS + " m/s";
  cell4.innerHTML = ettMH;
}

function insertSMHI2() {
  const tvaH = SOL.timeSeries[n].validTime;
  const tvaT = SOL.timeSeries[n].parameters[11].values[0];
  const tvaGR = SOL.timeSeries[n].parameters[13].values[0];
  const tvaVS = SOL.timeSeries[n].parameters[14].values[0];
  const tvaM = SOL.timeSeries[n].parameters[18].values[0]; 
 
  const tvaDate = new Date(tvaH);
  const tvaTid = tvaDate.getHours();

  let table = document.getElementById("SMHI");
  let row = table.insertRow(-1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);

  if (tvaGR >= 24 && tvaGR <= 68){
    tvaVR = "NE &#8599;";}
  else if (tvaGR >=69 && tvaGR<=113){
    trteVR = "E &#8593;";}
  else if (tvaGR>=114 && tvaGR<=158){
    tvaVR = "SE &#8600;";}
  else if (tvaGR>=159 && tvaGR<=203){
    tvaVR = "S &#8595;";}
  else if (tvaGR>=204 && tvaGR<=248){
    tvaVR = "SW &#8601;";}
  else if (tvaGR>=249 && tvaGR<=293){
    tvaVR = "W &#8592;";}
  else if (tvaGR>=294 && tvaGR<336){
    tvaVR = "NW &#8598;";}
  else {
    tvaVR = "N &#8593;";} 

    if (tvaM == 1) {
      tvaMH = "Klart";}
    else if (tvaM == 2) {
      tvaMH = "Lätt molnighet";} 
    else if (tvaM == 3) {
      tvaMH = "Varierande molnighet";} 
    else if (tvaM == 4) {
      tvaMH = "Halvklart";} 
    else if (tvaM == 5) {
      tvaMH = "Molnigt";} 
    else if (tvaM == 6) {
      tvaMH = "Mulet";} 
    else if (tvaM == 7) {
      tvaMH = "Dimma";} 
    else if (tvaM == 8) {
      tvaMH = "Lätt regnskurar";} 
    else if (tvaM == 9) {
      tvaMH = "Regnskurar";} 
    else if (tvaM == 10) {
      tvaMH = "Kraftiga regnskurar";} 
    else if (tvaM == 11) {
      tvaMH = "Åskskurar";} 
    else if (tvaM == 12) {
      tvaMH = "Lätt by av regn och snö";} 
    else if (tvaM == 13) {
      tvaMH = "By av regn och snö";} 
    else if (tvaM == 14) {
      tvaMH = "Kraftig by av regn och snö";} 
    else if (tvaM == 15) {
      tvaMH = "Lätt snöbyar";} 
    else if (tvaM == 16) {
      tvaMH = "Snöbyar";} 
    else if (tvaM == 17) {
      tvaMH = "Kraftiga snöbyar";} 
    else if (tvaM == 18) {
      tvaMH = "Lätt regn";} 
    else if (tvaM == 19) {
      tvaMH = "Regn";} 
    else if (tvaM == 20) {
      tvaMH = "Kraftigt regn";} 
    else if (tvaM == 21) {
      tvaMH = "Åska";} 
    else if (tvaM == 22) {
      tvaMH = "Lätt snöblandat regn";} 
    else if (tvaM == 23) {
      tvaMH = "Snöblandat regn";} 
    else if (tvaM == 24) {
      tvaMH = "Kraftigt snöblandat regn";} 
    else if (tvaM == 25) {
      tvaMH = "Lätt snöfall";} 
    else if (tvaM == 26) {
      tvaMH = "Snöfall";} 
    else {
      tvaMH = "Kraftigt snöfall";} 
 
  cell1.innerHTML = tvaTid;
  cell2.innerHTML = tvaT + "&#176;";
  cell3.innerHTML = tvaVR + " " + tvaVS + " m/s";
  cell4.innerHTML = tvaMH;
}

function insertSMHI3() {
  const treH = SOL.timeSeries[n].validTime;
  const treT = SOL.timeSeries[n].parameters[11].values[0];
  const treGR = SOL.timeSeries[n].parameters[13].values[0];
  const treVS = SOL.timeSeries[n].parameters[14].values[0];
  const treM = SOL.timeSeries[n].parameters[18].values[0]; 

  const treDate = new Date(treH);
  const treTid = treDate.getHours();

  let table = document.getElementById("SMHI");
  let row = table.insertRow(-1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);

  if (treGR>=24 && treGR<=68){
    treVR = "NE &#8599;";}
  else if (treGR>=69 && treGR<=113){
    trteVR = "E &#8593;";}
  else if (treGR>=114 && treGR<=158){
    treVR = "SE &#8600;";}
  else if (treGR>=159 && treGR<=203){
    treVR = "S &#8595;";}
  else if (treGR>=204 && treGR<=248){
    treVR = "SW &#8601;";}
  else if (treGR>=249 && treGR<=293){
    treVR = "W &#8592;";}
  else if (treGR>=294 && treGR<=336){
    treVR = "NW &#8598;";}
  else {
    treVR = "N &#8593;";} 

    if (treM == 1) {
      treMH = "Klart";}
    else if (treM == 2) {
      treMH = "Lätt molnighet";} 
    else if (treM == 3) {
      treMH = "Varierande molnighet";} 
    else if (treM == 4) {
      treMH = "Halvklart";} 
    else if (treM == 5) {
      treMH = "Molnigt";} 
    else if (treM == 6) {
      treMH = "Mulet";} 
    else if (treM == 7) {
      treMH = "Dimma";} 
    else if (treM == 8) {
      treMH = "Lätt regnskurar";} 
    else if (treM == 9) {
      treMH = "Regnskurar";} 
    else if (treM == 10) {
      treMH = "Kraftiga regnskurar";} 
    else if (treM == 11) {
      treMH = "Åskskurar";} 
    else if (treM == 12) {
      treMH = "Lätt by av regn och snö";} 
    else if (treM == 13) {
      treMH = "By av regn och snö";} 
    else if (treM == 14) {
      treMH = "Kraftig by av regn och snö";} 
    else if (treM == 15) {
      treMH = "Lätt snöbyar";} 
    else if (treM == 16) {
      treMH = "Snöbyar";} 
    else if (treM == 17) {
      treMH = "Kraftiga snöbyar";} 
    else if (treM == 18) {
      treMH = "Lätt regn";} 
    else if (treM == 19) {
      treMH = "Regn";} 
    else if (treM == 20) {
      treMH = "Kraftigt regn";} 
    else if (treM == 21) {
      treMH = "Åska";} 
    else if (treM == 22) {
      treMH = "Lätt snöblandat regn";} 
    else if (treM == 23) {
      treMH = "Snöblandat regn";} 
    else if (treM == 24) {
      treMH = "Kraftigt snöblandat regn";} 
    else if (treM == 25) {
      treMH = "Lätt snöfall";} 
    else if (treM == 26) {
      treMH = "Snöfall";} 
    else {
      treMH = "Kraftigt snöfall";} 
 
  cell1.innerHTML = treTid ;
  cell2.innerHTML = treT + "&#176;";
  cell3.innerHTML = treVR + " " + treVS + " m/s";
  cell4.innerHTML = treMH;
}


