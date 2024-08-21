'use strict';


//PROMISY

// console.log('запрос данных....');

// const req = new Promise((resolve, reject) => {
    
//     setTimeout(() => {
//         console.log('подготовка..');
        
    
//         const product = {
//             name: 'TV',
//             price: 2000
//         }
    

//         resolve(product);
//     }, 2000);

// })

// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//             // reject();
//         }, 2000);
//     });
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then((data) => {
//     console.log(data);
// }).catch(() => {
//     console.log('Произошла ошибка');
// }).finally(() => {
//     console.log('finally');
// });




//method All
const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};


// test(1000).then(() => console.log('1000'));
// test(2000).then(() => console.log('1000'));

Promise.all([test(1000), test(2000)]).then(() => {
    console.log('all');
    
})


//method race
Promise.race([test(1000), test(2000)]).then(() => {
    console.log('first');
    
})