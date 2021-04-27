var penumpang = [];
var tambahPenumpang = function (namaPenumpang, penumpang) {
    if (penumpang.length == 0) {
        penumpang.push(namaPenumpang);
        return penumpang;
    } else {
        for (let index = 0; index < penumpang.length; index++) {
            if (penumpang[index] == undefined) {
                penumpang[index] = namaPenumpang;
                return penumpang;
            } else if (penumpang[index] == namaPenumpang) {
                console.log(namaPenumpang + ' sudah ada di angkot');
                return penumpang;
            } else if (index == penumpang.length - 1) {
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }
    }
}

var hapusPenumpang = function (namaPenumpang, penumpang) {
    if (penumpang.length == 0) {
        console.log('Angkot Masih kosong');
        return penumpang;
    } else {
        for (let index = 0; index < penumpang.length; index++) {
            if (namaPenumpang == penumpang[index]) {
                penumpang[index] = undefined;
                return penumpang;
            } else if (index == penumpang.length - 1) {
                console.log(namaPenumpang + ' tidak ada diangkot');
                return penumpang;
            }

        }
    }
}

//membuat objek angkot
function Angkot(sopir, trayek, kas, penumpang) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.kas = kas;
    this.penumpang = penumpang;

    this.penumpangNaik = function (namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun = function (namaPenumpang, bayar) {
        if (this.penumpang.length === 0) {
            alert('angkot masih kosong');
            return false;
        }

        for (let i = 0; i < this.penumpang.length; i++) {
            if (this.penumpang[i] == namaPenumpang) {
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            } else if (penumpang[i] != namaPenumpang) {
                console.log(namaPenumpang + ' tidak ditemukan dalam angkot');
                return false;
            }

        }
    }
}

var angkot1 = new Angkot('afrizal', ['ngoro', ' mojokerto'], 0, []);
var angkot2 = new Angkot('yanto', ['ngoro', ' jombang'], 0, []);