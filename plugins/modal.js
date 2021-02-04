const _createModal = (options) => {
    const Default_width = '600px'
    const modal = document.createElement('div')
    modal.classList.add('imodal')
    modal.insertAdjacentHTML('afterbegin', `
        <div class="modal-overlay" data-close="true">
            <div class="modal-window" style="width: ${options.width || Default_width}">
                <div class="modal-header">
                    <span class="modal-title">${options.title || 'There is no Title'}</span>
                    ${ options.closable ? `<span class="modal-close" data-close="true">&times;</span>`: ''}
                </div>
                <div class="modal-body">
                    ${options.content || ''}
                </div>
                <div class="modal-footer">
                    <button>OK</button>
                    <button>Cancel</button>
                </div>
            </div>
        </div>
    `)
    document.body.append(modal)
    return modal
}


$.modal = function(options){
    const animation_speed = 200;
    const $modal = _createModal(options);
    let closing = false;
    let destroyed = false;

    const modal = {
        open() {
            if (destroyed) return 
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
    }
    
    const listener = event => {
        if (event.target.dataset.close){
            modal.close()
        }
    }

    $modal.addEventListener('click', listener)

    return Object.assign(modal, {
        destroy() {
            $modal.parentNode.removeChild($modal)
            $modal.removeEventListener('click', listener)
            destroyed = true
        }
    })
}