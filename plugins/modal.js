const _createModal = (options) => {
    const modal = document.createElement('div')
    modal.classList.add('imodal')
    modal.insertAdjacentHTML('afterbegin', `
        <div class="modal-overlay">
            <div class="modal-window">
                <div class="modal-header">
                    <span class="modal-title">${options.title}</span>
                    <span class="modal-close" onclick=${"exit()"}>&times;</span>
                </div>
                <div class="modal-body">
                    ${options.content}
                </div>
                <div class="modal-footer">
                    <button>OK</button>
                    <button onclick=${"exit()"}>Cancel</button>
                </div>
            </div>
        </div>
    `)
    document.body.append(modal)
    return modal
}

function exit(e){
    const modal = document.getElementsByClassName('imodal')
    modal[0].classList.remove('open')
    modal[0].classList.add('hide')
    setTimeout(() => {
        modal[0].classList.remove('hide')
    }, 200)  
}



$.modal = function(options){
    const animation_speed = 200;
    const $modal = _createModal(options);
    let closing = false;

    return {
        title: options.title,
        open() {
            !closing && $modal.classList.add('open')
        },
        close() {
            closing = true
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout(() => {
                $modal.classList.remove('hide')
                closing = false
            }, animation_speed)
        },
        destroy() {},
    }
}