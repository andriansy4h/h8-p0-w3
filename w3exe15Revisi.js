function groupAnimals(animals) {
        var result=[];
        
    for (var i=0; i<animals.length; i++){
        var hasil=[];
        var awal= animals[i][0];
        var urutan=animals[i]
;
        
        for(var j=animals.length-1; j>i; j--){
          if(awal == animals[j][0])
          {
            urutan += ' , '+animals[j];
            animals.splice(j,1);
          }
        }
        hasil.push(urutan);
        result.push(hasil); 
    }
      return result.sort();
}
    
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil',]));