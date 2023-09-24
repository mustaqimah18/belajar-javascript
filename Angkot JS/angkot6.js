let noAngkot = 1;
let jmlAngkot = 10;
let angkotBeroperasi = 6;

for(noAngkot = 1; noAngkot<=jmlAngkot; noAngkot++) {
    if(noAngkot<=6 && noAngkot!=5){
        console.log('Angkot No. '+ noAngkot + ' sedang beroperasi dengan baik.');
    } else if (noAngkot === 10 || noAngkot === 8 || noAngkot === 5){
        console.log('Angkot No. '+ noAngkot + ' sedang lembur.');
    } else {
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
    }

    
} 

