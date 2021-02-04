const fruits = [
    {id: 0, title: 'Apple', price: 20, img: 'https://i2.wp.com/ceklog.kindel.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png?fit=641%2C618&ssl=1',},
    {id: 1, title: 'Orange', price: 40, img: 'https://brkelgmbh.com/wp-content/uploads/2018/02/orange-web04.jpg',},
    {id: 2, title: 'Mango', price: 30, img: 'http://www.svz.com/wp-content/uploads/2018/05/Mango-1.jpg',}
]

/* 
    1. Dinamically show the content from the array above.
    2. Show all the information using Modal(it shoud be only one modal)
    3. Modal for Deleting an Element with 2 buttons.
*/

const cards = []

for (let i = 0; i < fruits.length; i++){
    const c = $.cards(fruits[i])
    cards.push(c)
}

function buildModal(id){
    const modal = $.modal({
        title: `The Price of ${fruits[id].title}`,
        closable: true,
        content: `<p>Price is <b>${fruits[id].price}</b></p>`,
        width: '400px',
        footerButtons: [
            {text: 'Ok', type: 'primary', handler(){
                modal.close()
            }}
        ]
    })
}






// const modal = $.modal({
//     title: "Price of ",
//     closable: true,
//     content: `
//         <p>Modal is working!</p>
//         <p>Yes I did it</p>
//     `,
//     width: '400px',
//     footerButtons: [
//         {text: 'Ok', type: 'primary', handler(){
//             modal.close()
//         }},
//         {text: 'Cancel', type: 'danger', handler(){
//             modal.close()
//         }}
//     ]
// });


