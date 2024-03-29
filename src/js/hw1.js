// ---------------Task1--------------
//Magazanin ayliq geliri 820mandir. Mudir bu gelirin 30faizini, mudir muavini ise , mudirin maasinin 60faizini alir. Mudir muavini ne qeder maas alir?
var ayliq_gelir = 820;
var mudir_maas = ayliq_gelir * 0.3;
var muavin_maas = mudir_maas * 0.6;
document.write('1. Müdir müavinin maaşı ' + muavin_maas + ' manatdır.');
document.write('<br></br>');

//-------------Task2----------------
//Derzi magazada olan 946 top parcanin 10faizini paltar tikdi. Yerde qalan parcanin yarisini ise, satdi. Derzi ne qeder parca satdi?
var parca = 946;
var tikilen_parca = parca * 0.1;
var satilan_parca = (parca - tikilen_parca)/2;
document.write('2. Dərzi ' + satilan_parca + ' top parça satdı.');
document.write('<br></br>');

//---------------------Task3------------
//Gul dukaninin illik geliri 12670mandir. Satici, yaz feslindeki qazanilan gelirin yarisi qeder maas alir.dukanin Her ay beraber pul qazandiglarini qebul etsek, saticinin maasini tapin.
var illik_gelir = 12660;
var yazfesli_gelir = illik_gelir/4;
var satici_maas = yazfesli_gelir/2;
document.write('3. Satıcının maaşı ' + satici_maas + ' manatdır.');
document.write('<br></br>');

//----------------Task4---------------
//Magazada yalniz 5manliq mallar satilir. Dukan sahibi bu mallari 5man alir. Satan zaman ise aldigi qiymetin uzerine , malin aliw qiymetinin 40faizini de elave ederek satir.  Malin yeni qiymeti ne qederdir?
var price = 5;
var new_price = price + price * 0.4;
document.write('4. Malın yeni qiyməti ' + new_price + ' manatdır.');