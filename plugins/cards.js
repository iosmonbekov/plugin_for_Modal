const _createCards = options => {
    const cards = document.createElement('div')
    cards.classList.add('col')
    cards.insertAdjacentHTML('afterbegin', `
    <div class="card" >
        <img src=${options.img} class="card-img-top" >
        <div class="card-body">
            <h5 class="card-title">${options.title}</h5>
            <a href=${options.id} class="btn btn-primary">See Price</a>
            <a href=${options.id} class="btn btn-danger">Delete</a>
        </div>
    </div>
    `)
    document.querySelector('.row').append(cards)

    return cards
}


$.cards = function(options){
    const $cards = _createCards(options)

    return Object.assign($cards, {
        seePrice() {
            console.log("see price")
            console.log(options.price)
        },
        delete() {
            console.log("delete")
        }
    })
}