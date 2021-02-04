

const modal = $.modal({
    title: "Become the best version of yourself",
    closable: true,
    content: `
        <p>Modal is working!</p>
        <p>Yes I did it</p>
    `,
    width: '400px',
    footerButtons: [
        {text: 'Ok', type: 'primary', handler(){
            console.log('Primary btn clicked')
        }},
        {text: 'Cancel', type: 'danger', handler(){
            console.log('Danger btn clicked')
        }}
    ]
});


