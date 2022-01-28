
console.log("Program Başladı.");

getUser(12345, userGetir);

function userGetir(userObject) {
    getCourse(userObject.ad, kurslarıGöster);

}
function kurslarıGöster(kursDizisi) {
    getComments(kursDizisi[0], yorumGöster);
}

function yorumGöster(yorum) {
    console.log(yorum);
}

console.log("Program Bitti.");

function getUser(id, callback) {
    console.log(id + " idli User Getiriliyor.");
    setTimeout(() => {
        callback({ id: id, ad: "bahadır" });
    }, 1500);
}
function getCourse(userName, callback) {
    console.log(userName + " kişisinin kursları getirilecek.");
    setTimeout(() => {
        callback(['java', 'kotlin', 'flutter']);
        // return ['java', 'kotlin', 'flutter'];
    }, 2000);
}
function getComments(kursAdi, callback) {
    console.log(kursAdi + " isimli kursun yorumları getiriliyor.");
    setTimeout(() => {
        callback("Harika Bir Kurs.");
    }, 2000);
}