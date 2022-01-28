
/*const promiseBasarili = Promise.resolve("Başarılı bir şekilde Promise Sonuçlandı.");
const promiseHata = Promise.reject(new Error("Hata oluştu"));
promiseBasarili.then((result) => console.log(result));

promiseHata.then((result) => console.log(result))
    .catch(err => console.log(err));*/



const p1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("p1 3 saniye sonra bitti.")
    }, 3000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        //reject("p2 de hata çıktı.");
        resolve("p2 4 saniye sonra bitti.")
    }, 4000);
});
const promiseAll = Promise.all([p1, p2]);
promiseAll
    .then(result => console.log(result))
    .catch(e => console.log(e))

const promiseRace = Promise.race([p1, p2]);
promiseRace
    .then(result => console.log("race:" + result))
    .catch(e => console.log(e));