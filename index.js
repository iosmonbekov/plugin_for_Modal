let fruits = [
    {id: 0, title: 'Apple', price: 20, img: 'https://i2.wp.com/ceklog.kindel.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png?fit=641%2C618&ssl=1',},
    {id: 1, title: 'Orange', price: 40, img: 'https://brkelgmbh.com/wp-content/uploads/2018/02/orange-web04.jpg',},
    {id: 2, title: 'Mango', price: 30, img: 'http://www.svz.com/wp-content/uploads/2018/05/Mango-1.jpg',}
]


const toHTML = fruit => `
    <div class="col">
    <div class="card">
        <img class="card-img-top" src=${fruit.img} >
        <div class="card-body">
            <h5 class="card-title">${fruit.title}</h5>
            <a href="#" class="btn btn-primary" data-btn="price" data-id=${fruit.id}>See Price</a>
            <a href="#" class="btn btn-danger" data-btn="remove" data-id=${fruit.id} >Delete</a>
        </div>
    </div>
    </div>
`

function render() {
    const html = fruits.map(el => toHTML(el)).join('');
    document.getElementById('fruits').innerHTML = html
}

render()




const priceModal = $.modal({
    title: "Price of an item $ ",
    closable: true,
    width: '400px',
    footerButtons: [
        {text: 'Close', type: 'primary', handler(){
            priceModal.close()
        }},
    ]
});


document.addEventListener('click', event => {
    event.preventDefault()

    const id = +event.target.dataset.id
    const fruit = fruits.find(f => f.id === id)


    if (event.target.dataset.btn  === 'price') {
        priceModal.setContent(`
            <p>Price of ${fruit.title}: <strong>${fruit.price}$</strong></p>
        `)

        priceModal.open()
    }else if (event.target.dataset.btn === 'remove'){
        $.confirm({
            title: 'Are you sure ?',
            content: `<p>You are deleting fruit: <strong>${fruit.title}</strong></p>`
        }).then( () => {
            fruits = fruits.filter(f => f.id !== id)
            render()
        }
        ).catch(() => {
            console.log('Cancel')
        })
    }
})
