// membuat object angkot
function Angkot(sopir, trayek, isiPenumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.isiPenumpang = isiPenumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang) {
        this.isiPenumpang.push(namaPenumpang);
        return this.isiPenumpang;
    }

    this.penumpangTurun = function(namaPenumpang, bayar) {
        if(this.isiPenumpang.length === 0) {
            alert('angkot masih kosong!');
            return this.isiPenumpang;
        }
        for(let p = 0; p < this.isiPenumpang.length; p++) {
            if(this.isiPenumpang[p] == namaPenumpang) {
                this.isiPenumpang[p] = undefined;
                this.kas += bayar;
                return ({ 
                    'isiPenumpang' : this.isiPenumpang, 
                    'kas' : this.kas });
            }
            
        }

    }

}

var angkot1 = new Angkot('ari', ['cimahi', 'bandung'], [], 0);

var angkot2 = new Angkot('ima', ['jakarta','batam'], [], 0);