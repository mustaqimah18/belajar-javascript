var isiPenumpang = [];
var tambahPenumpang = function(namaPenumpang) {
    // jika angkot kosong
    if (isiPenumpang.length == 0) {
        // tambah penumpang di awal array
        isiPenumpang.push (namaPenumpang);
        // kembalikan isi array & keluar dari function
        return isiPenumpang;
    }
    // else
    else {
        // telusuri seluruh kursi dari awal
        for (var p = 0; p < isiPenumpang.length; p++ ) {
            // jika sudah ada nama yang sama
            if (isiPenumpang[p] == namaPenumpang) {
                // tampilkan pesan kesalahannya
                console.log (namaPenumpang + ' sudah ada di dalam angkot');
                // kembalikan isi array & keluar dari function
                return isiPenumpang;
            }
        }
        for (var p = 0; p < isiPenumpang.length; p++ ) {
            // jika ada kursi kosong
            if (isiPenumpang[p] == undefined) {
                // tambah penumpang di kursi tersebut
                isiPenumpang[p] = namaPenumpang;
                // kembalikan isi array & keluar dari function
                return isiPenumpang;
            }
                // jika seluruh kursi terisi
            else if (p == isiPenumpang.length -1 ) {
                // tambah penumpang di akhir array
                isiPenumpang.push(namaPenumpang);
                // kembalikan isi array & keluar dari function
                return isiPenumpang;
            }
        }
    }
}
// console.log(isiPenumpang);

var hapusPenumpang = function(namaPenumpang) {
    // jika angkot kosong
    if (isiPenumpang.length == 0) {
        // tidak mungkin ada penumpang turun
        console.log ('Angkot masih kosong!');
        // kembalikan isi array & keluar dari function
        return isiPenumpang;
    }    // else
    else {
        // telusuri seluruh isi kursi dari awal
        for (var p = 0; p < isiPenumpang.length; p++ ) {
            // jika nama penumpang sesuai
            if (isiPenumpang[p] == namaPenumpang) {
                // hapus penumpang dengan mengubah namanya,
                // menjadi undefined
                isiPenumpang[p] = undefined;
                // kembalikan isi array & keluar dari function
                return isiPenumpang;
            }
            // jika tidak ada nama yang sesuai 
            else if (p == isiPenumpang.length -1) {
                // tampilkan pesan kesalahannya
                console.log( namaPenumpang + ' tidak ada di dalam angkot');
                // kembalikan isi array & keluar dari function
                return isiPenumpang;
            }
            
        }
    }
}
console.log(isiPenumpang);