// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// let i = [
//     {name: 'Кораловий риф'},
//     {name: 'Текст довільний'},
//     {name: 'Смерть москалям'},
//     {name: 'Цікавий фрагмент'},
//     {name: 'Україна переможе'},
//     {name: 'Хутін пуйло'},
//     {name: 'Політика - лайно'},
//     {name: 'Футбол - сила'},
//     {name: 'Фізкульт ура'},
//     {name: 'Герої не вмирають'}
// ]
// for (const iElement of i) {
//     console.log(iElement);
//     document.write(`<div class="box"><h3>${iElement.name}</h3></div>`)
// }
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i <10; i++) {
//     document.write(`<div class="box">Слава Україні ${i}</div>`)
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i < 20){
//     document.write(`<div class="box"><h1>Text</h1></div>`);
//     i++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;
// while (i < 20){
//     document.write(`<div class="box"><h1>Hello: інд."${i}"</h1></div>`);
//     i++;
// }
//
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
    //
    // ШАБЛОН:
    // <ul>
    // <li>ITEM OF ARRAY</li>
    // <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
    // </ul>
    //
    // замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
    //

// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// document.write('<ul>')
// for (const i of listOfItems) {
//     document.write(`<li>${i}</li>`)
//     console.log(`<li>${i}</li>`)
// }
// document.write('</ul>')


    // -----------------------------------------------
    //
    // Використовуючи данні з масиву, за допомоги document.write та циклу
    // побудувати структуру по шаблону
    // Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
    //
    // let products = [
    // {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
//
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// for (const product of products) {
//
//     document.write(`<div className="product-card">`)
//     document.write(`<h3 className="product-title">${product.title} Price - ${product.price}</h3>`);
//     document.write(`<img src="${product.image}" alt="" className="product-image">`);
//     document.write(`</div>`)
// }
// //
// --------------------
//     є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// for (const user of users) {
//     if (user.status===true){
//         console.log(user)
//     }
// }
//
// for (const user of users) {
//     if (user.status===false){
//         console.log(user)
//     }
// }
//
// for (const user of users) {
//     if (user.age>30){
//         console.log(user)
//     }
// }