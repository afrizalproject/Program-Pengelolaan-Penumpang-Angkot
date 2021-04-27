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