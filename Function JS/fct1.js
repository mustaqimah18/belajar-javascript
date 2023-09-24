//Game Suwit Jawa
let tanya = true;
while (tanya) {
//Menangkap pilihan Player
    let player = prompt('Pilih : Gajah, Semut, Orang');


    //Menangkan pilihan Komputer
    //Membangkitkan pilihan random
    let comp = Math.random();

    if( comp < 0.34){
        comp = 'gajah';
    }
    else if ( comp >= 0.34 && comp < 0.67){
        comp = 'semut';
    }
    else {
        comp = 'orang';
    }

    //Menentukan Rules
    let hasil = ''

    if ( player == comp){
        hasil = 'Seri!';
    }
    else if ( player == 'gajah') {
        hasil = ( comp == 'orang') ? 'Kalah!' : 'Menang!';
    }
    else if ( player == 'orang') {
        hasil = ( comp == 'gajah') ? 'Menang!' : 'Kalah!';
    }
    else if ( player == 'semut' ) {
        hasil = ( comp == 'gajah') ? 'Menang!' : 'Kalah!';
    }
    else {
        hasil = 'memasukkan pilihan yang salah';
    }

    //Tampilkan hasilnya
    alert('Kamu memilih ' + player + ' \nKomputer memilih ' + comp + '\nHasilnya : Kamu ' + hasil);
    tanya = confirm('Ulangi lagi?');
}
alert('Terima kasih sudah bermain :)');