
console.log("Başladı");
console.log("Bitti");
function getUser(id) {

    return new Promise((resolve, reject) => {

        console.log(id + " idli User Getiriliyor.");
        setTimeout(() => {
            resolve({ id: id, ad: "bahadır" });
        }, 1500)
    });
}

function getCourse(userName) {
    console.log(userName + " kişisinin kursları getirilecek.");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['java', 'flutter', 'kotlin'])
        }, 2000);
    })
}

function getComments(courseName) {
    return new Promise((resolve, reject) => {
        console.log(courseName + " isimli kursun yorumları getiriliyor.");
        setTimeout(() => {
            reject("yorumlarda hata");
            resolve("Harika Bir Kurs.");
        }, 2000);
    });


}
//Promise Then kullanarak
/*
getUser(123)
    .then(userObject => getCourse(userObject.ad))
    .then(kursDizisi => getComments(kursDizisi[0]))
    .then(comment => console.log(comment))
    .catch(hata=> consolo.log("hata"+hata);*/

//Async Await Kullanarak
//--await kullanıyorsak await ddiğimiz fonk.nun promise olması gerekir
// ve onu sarmalayan bir async function içinde olması gerekir.
async function YorumGetir() {
    try {
        const userObject = await getUser(12345);
        const courseArray = await getCourse(userObject.ad);
        const comment = await getComments(courseArray[0]);
        console.log(comment);
    } catch (error) {
        console.log("hata " + error);
    }

}

YorumGetir();



