function Matrica(a){
    var niz = [];
  
    for(var i = 0; i<a; i++){
      for(var j = 0; j<a; j++){
        niz[i] = [];
      }
    }

  var brojac = 0;
  for(var i = 0; i<a; i++){
      for(var j = 0; j<a; j++){
        niz[i][j] = brojac++;
      }
    }
  return niz;
  }
  
  function ProvjeriSusjede(r,k){
    var provjera = true;
    if(r === 0 || r === 9 || k === 0 || k === 9){
      provjera = false;
    }
    return provjera;
  }

  
  const x = 10;
  var niz = Matrica(x);
  var r,k,sum;

  var broj = parseInt(prompt("Unesite broj: "), 10) ;
  
  for(var i = 0; i < x; i++){
    for(var j= 0; j < x; j++){
      if(niz[i][j] === broj){
        var provjera = ProvjeriSusjede(i,j);
        if(provjera){
            sum = niz[i][j] + niz[i][j+1]+ niz[i][j-1] + niz[i-1][j] + niz[i-1][j-1] + niz[i-1][j+1] + niz[i+1][j] + niz[i+1][j-1]+ niz[i+1][j+1];
            break;
        }
      }
    }
  }

  console.log("Suma unesenog broja i brojeva koji ga okruzuju je: " + sum);
