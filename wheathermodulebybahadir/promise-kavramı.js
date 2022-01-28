

const myPromise = new Promise((resolve, reject) => {
    console.log("3 Saniyelik İşlem Başlayacak.");
    setTimeout(() => {
        console.log("3 Saniyelik İşlem Bitti.");
        resolve("İşlem sonucu burada");
        reject("hata çıktı");
    }, 3000);

});

myPromise.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log("hata çıkttı " + err);
})