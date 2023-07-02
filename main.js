let codeSamples = document.querySelectorAll('pre');

for(let i = 0; i < codeSamples.length; i++) {
    let copyIcon = document.createElement('i');
    copyIcon.classList.add('fa-solid','fa-clipboard', 'copyIcon');

    let copyText = document.createElement('span');
    copyText.classList.add('copyText');
    copyText.innerText = 'Copied'

    codeSamples[i].addEventListener('mouseenter', (e) => {
        e.currentTarget.querySelector('.copyIcon').classList.add('show');
    })

    codeSamples[i].addEventListener('mouseleave', (e) => {
        e.currentTarget.querySelector('.copyIcon').classList.remove('show');
    })

    codeSamples[i].addEventListener('click', (e) => {
        // when dealing with icons => the part you clicked on is the (path) of the icon.
        // So you CAN'T do any thing (action) on that path.
        // you need to get the (parent) of this (path) to apply actions, this parent is the (svg) where you can find your classes.
        let copyIconSvg = e.target.parentElement;
        let codeSamplesOf_I = e.currentTarget; 

        if(copyIconSvg.classList.contains('copyIcon')) {
            navigator.clipboard.writeText(codeSamplesOf_I.innerText);
            copyText.style.opacity = '1'
            setTimeout(() => {
                copyText.style.opacity = '0'
            }, 1000)
        }

    })

    codeSamples[i].appendChild(copyText);
    codeSamples[i].appendChild(copyIcon);
}

