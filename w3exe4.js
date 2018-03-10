function dataHandling2(input) {
  input.splice(1,2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
  input.splice(4,0,"Pria");
  input.splice(5,1,"SMA Internasional Metro");
  console.log(input);
  var data = input[3].split('/');
  var data_number = [parseInt(data[0]), parseInt(data[1]), parseInt(data[2])];
  switch (data_number[1]) {
    case 1: console.log('Januari'); break;
    case 2: console.log('Februari'); break;
    case 3: console.log('Maret'); break;
    case 4: console.log('April'); break;
    case 5: console.log('Mei'); break;
    default : console.log('Bulan invalid');
  }
  data_number.sort(function(value1, value2) { return value1 < value2 });
  console.log(data_number);
  console.log(data.join('-'));
  
  console.log(input[1].slice(0,15));
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);