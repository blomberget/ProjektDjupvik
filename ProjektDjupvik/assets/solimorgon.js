var SOL;

fetch('https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/18.1489/lat/57.3081/data.json')
  .then(res => res.json())
  .then(data => SOL = data)
  //.then(() => console.log(SOL))

setTimeout(function(){
  tidenimorgon();
}, 200);

var d = new Date();
var od = new Date();
od.setDate(d.getDate()+1);
var iod = od.toLocaleDateString();

function tidenimorgon() {
    for (n = 0; n <= 35; n++) {
    const tid = SOL.timeSeries[n].validTime;

        if (tid == iod + "T04:00:00Z") {
            insertSMHIimorgon(); }

        if (tid == iod + "T10:00:00Z") {
            insertSMHIimorgon2(); }       

        if (tid == iod + "T16:00:00Z") {
            insertSMHIimorgon3(); }
    }
}



function insertSMHIimorgon() {
    const iettH = SOL.timeSeries[n].validTime;
    const iettT = SOL.timeSeries[n].parameters[1].values[0];
    const iettGR = SOL.timeSeries[n].parameters[3].values[0];
    const iettVS = SOL.timeSeries[n].parameters[4].values[0];
    const iettM = SOL.timeSeries[n].parameters[18].values[0];
  
    const iettDate = new Date(iettH);
    const iettTid = iettDate.getHours();
  
    let table = document.getElementById("SMHI-imorgon");
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
  
    if (iettGR>=24 && iettGR<=68){
      iettVR = "NE &#8599;";}
    else if (iettGR>=69 && iettGR<=113){
      iettVR = "E &#8593;";}
    else if (iettGR>=114 && iettGR<=158){
      iettVR = "SE &#8600;";}
    else if (iettGR>=159 && iettGR<=203){
      iettVR = "S &#8595;";}
    else if (iettGR>=204 && iettGR<=248){
      iettVR = "SW &#8601;";}
    else if (iettGR>=249 && iettGR<=293){
      iettVR = "W &#8592;";}
    else if (iettGR>=294 && iettGR<=336){
      iettVR = "NW &#8598;";}
    else {
      iettVR = "N &#8593;";} 
    
      if (iettM == 1) {
        iettMH = "Klart";}
      else if (iettM == 2) {
        iettMH = "Lätt molnighet";} 
      else if (iettM == 3) {
        iettMH = "Varierande molnighet";} 
      else if (iettM == 4) {
        iettMH = "Halvklart";} 
      else if (iettM == 5) {
        iettMH = "Molnigt";} 
      else if (iettM == 6) {
        iettMH = "Mulet";} 
      else if (iettM == 7) {
        iettMH = "Dimma";} 
      else if (iettM == 8) {
        iettMH = "Lätt regnskurar";} 
      else if (iettM == 9) {
        iettMH = "Regnskurar";} 
      else if (iettM == 10) {
        iettMH = "Kraftiga regnskurar";} 
      else if (iettM == 11) {
        iettMH = "Åskskurar";} 
      else if (iettM == 12) {
        iettMH = "Lätt by av regn och snö";} 
      else if (iettM == 13) {
        iettMH = "By av regn och snö";} 
      else if (iettM == 14) {
        iettMH = "Kraftig by av regn och snö";} 
      else if (iettM == 15) {
        iettMH = "Lätt snöbyar";} 
      else if (iettM == 16) {
        iettMH = "Snöbyar";} 
      else if (iettM == 17) {
        iettMH = "Kraftiga snöbyar";} 
      else if (iettM == 18) {
        iettMH = "Lätt regn";} 
      else if (iettM == 19) {
        iettMH = "Regn";} 
      else if (iettM == 20) {
        iettMH = "Kraftigt regn";} 
      else if (iettM == 21) {
        iettMH = "Åska";} 
      else if (iettM == 22) {
        iettMH = "Lätt snöblandat regn";} 
      else if (iettM == 23) {
        iettMH = "Snöblandat regn";} 
      else if (iettM == 24) {
        iettMH = "Kraftigt snöblandat regn";} 
      else if (iettM == 25) {
        iettMH = "Lätt snöfall";} 
      else if (iettM == 26) {
        iettMH = "Snöfall";} 
      else {
        iettMH = "Kraftigt snöfall";} 
  
    cell1.innerHTML = iettTid;
    cell2.innerHTML = iettT + "&#176;";
    cell3.innerHTML = iettVR + " " + iettVS + " m/s";
    cell4.innerHTML = iettMH;
  }
  
  function insertSMHIimorgon2() {
    const itvaH = SOL.timeSeries[n].validTime;
    const itvaT = SOL.timeSeries[n].parameters[1].values[0];
    const itvaGR = SOL.timeSeries[n].parameters[3].values[0];
    const itvaVS = SOL.timeSeries[n].parameters[4].values[0];
    const itvaM = SOL.timeSeries[n].parameters[18].values[0];
  
    const itvaDate = new Date(itvaH);
    const itvaTid = itvaDate.getHours();
  
    let table = document.getElementById("SMHI-imorgon");
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
  
    if (itvaGR >= 24 && itvaGR <= 68){
      itvaVR = "NE &#8599;";}
    else if (itvaGR >= 69 && itvaGR <= 113){
      trteVR = "E &#8593;";}
    else if (itvaGR >= 114 && itvaGR <= 158){
      itvaVR = "SE &#8600;";}
    else if (itvaGR >=159 && itvaGR <= 203){
      itvaVR = "S &#8595;";}
    else if (itvaGR >= 204 && itvaGR <= 248){
      itvaVR = "SW &#8601;";}
    else if (itvaGR >= 249 && itvaGR <= 293){
      itvaVR = "W &#8592;";}
    else if (itvaGR >= 294 && itvaGR <= 336){
      itvaVR = "NW &#8598;";}
    else {
      itvaVR = "N &#8593;";} 
  
      if (itvaM == 1) {
        itvaMH = "Klart";}
      else if (itvaM == 2) {
        itvaMH = "Lätt molnighet";} 
      else if (itvaM == 3) {
        itvaMH = "Varierande molnighet";} 
      else if (itvaM == 4) {
        itvaMH = "Halvklart";} 
      else if (itvaM == 5) {
        itvaMH = "Molnigt";} 
      else if (itvaM == 6) {
        itvaMH = "Mulet";} 
      else if (itvaM == 7) {
        itvaMH = "Dimma";} 
      else if (itvaM == 8) {
        itvaMH = "Lätt regnskurar";} 
      else if (itvaM == 9) {
        itvaMH = "Regnskurar";} 
      else if (itvaM == 10) {
        itvaMH = "Kraftiga regnskurar";} 
      else if (itvaM == 11) {
        itvaMH = "Åskskurar";} 
      else if (itvaM == 12) {
        itvaMH = "Lätt by av regn och snö";} 
      else if (itvaM == 13) {
        itvaMH = "By av regn och snö";} 
      else if (itvaM == 14) {
        itvaMH = "Kraftig by av regn och snö";} 
      else if (itvaM == 15) {
        itvaMH = "Lätt snöbyar";} 
      else if (itvaM == 16) {
        itvaMH = "Snöbyar";} 
      else if (itvaM == 17) {
        itvaMH = "Kraftiga snöbyar";} 
      else if (itvaM == 18) {
        itvaMH = "Lätt regn";} 
      else if (itvaM == 19) {
        itvaMH = "Regn";} 
      else if (itvaM == 20) {
        itvaMH = "Kraftigt regn";} 
      else if (itvaM == 21) {
        itvaMH = "Åska";} 
      else if (itvaM == 22) {
        itvaMH = "Lätt snöblandat regn";} 
      else if (itvaM == 23) {
        itvaMH = "Snöblandat regn";} 
      else if (itvaM == 24) {
        itvaMH = "Kraftigt snöblandat regn";} 
      else if (itvaM == 25) {
        itvaMH = "Lätt snöfall";} 
      else if (itvaM == 26) {
        itvaMH = "Snöfall";} 
      else {
        itvaMH = "Kraftigt snöfall";} 
   
    cell1.innerHTML = itvaTid;
    cell2.innerHTML = itvaT + "&#176;";
    cell3.innerHTML = itvaVR + " " + itvaVS + " m/s";
    cell4.innerHTML = itvaMH;
  }
  
  function insertSMHIimorgon3() {
    const itreH = SOL.timeSeries[n].validTime;
    const itreT = SOL.timeSeries[n].parameters[1].values[0];
    const itreGR = SOL.timeSeries[n].parameters[3].values[0];
    const itreVS = SOL.timeSeries[n].parameters[4].values[0];
    const itreM = SOL.timeSeries[n].parameters[18].values[0];
  
    const itreDate = new Date(itreH);
    const itreTid = itreDate.getHours();
  
    let table = document.getElementById("SMHI-imorgon");
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
  
    if (itreGR>=24 && itreGR<=68){
      itreVR = "NE &#8599;";}
    else if (itreGR>=69 && itreGR<=113){
      itreVR = "E &#8593;";}
    else if (itreGR>=114 && itreGR<=158){
      itreVR = "SE &#8600;";}
    else if (itreGR>=159 && itreGR<=203){
      itreVR = "S &#8595;";}
    else if (itreGR>=204 && itreGR<=248){
      itreVR = "SW &#8601;";}
    else if (itreGR>=249 && itreGR<=293){
      itreVR = "W &#8592;";}
    else if (itreGR>=294 && itreGR<=336){
      itreVR = "NW &#8598;";}
    else {
      itreVR = "N &#8593;";} 
    
  
      if (itreM == 1) {
        itreMH = "Klart";}
      else if (itreM == 2) {
        itreMH = "Lätt molnighet";} 
      else if (itreM == 3) {
        itreMH = "Varierande molnighet";} 
      else if (itreM == 4) {
        itreMH = "Halvklart";} 
      else if (itreM == 5) {
        itreMH = "Molnigt";} 
      else if (itreM == 6) {
        itreMH = "Mulet";} 
      else if (itreM == 7) {
        itreMH = "Dimma";} 
      else if (itreM == 8) {
        itreMH = "Lätt regnskurar";} 
      else if (itreM == 9) {
        itreMH = "Regnskurar";} 
      else if (itreM == 10) {
        itreMH = "Kraftiga regnskurar";} 
      else if (itreM == 11) {
        itreMH = "Åskskurar";} 
      else if (itreM == 12) {
        itreMH = "Lätt by av regn och snö";} 
      else if (itreM == 13) {
        itreMH = "By av regn och snö";} 
      else if (itreM == 14) {
        itreMH = "Kraftig by av regn och snö";} 
      else if (itreM == 15) {
        itreMH = "Lätt snöbyar";} 
      else if (itreM == 16) {
        itreMH = "Snöbyar";} 
      else if (itreM == 17) {
        itreMH = "Kraftiga snöbyar";} 
      else if (itreM == 18) {
        itreMH = "Lätt regn";} 
      else if (itreM == 19) {
        itreMH = "Regn";} 
      else if (itreM == 20) {
        itreMH = "Kraftigt regn";} 
      else if (itreM == 21) {
        itreMH = "Åska";} 
      else if (itreM == 22) {
        itreMH = "Lätt snöblandat regn";} 
      else if (itreM == 23) {
        itreMH = "Snöblandat regn";} 
      else if (itreM == 24) {
        itreMH = "Kraftigt snöblandat regn";} 
      else if (itreM == 25) {
        itreMH = "Lätt snöfall";} 
      else if (itreM == 26) {
        itreMH = "Snöfall";} 
      else {
        itreMH = "Kraftigt snöfall";} 
  
   
    cell1.innerHTML = itreTid ;
    cell2.innerHTML = itreT + "&#176;";
    cell3.innerHTML = itreVR + " " + itreVS + " m/s";
    cell4.innerHTML = itreMH;
  }
  
  
  