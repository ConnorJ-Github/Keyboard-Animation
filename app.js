

document.addEventListener("keydown", event =>{
    event = event;
    let charCode = event.keyCode;

    //console.log(charCode);

    const activeKey = document.querySelectorAll('.k' + charCode);

    //console.log(activeKey);

        activeKey.forEach(activeKey => {
                document.querySelector('.active')?.classList.remove('active');
                activeKey.classList.add('active');
            })

})


