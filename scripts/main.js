let h1Tag = document.querySelector('h1')  // ilk h1 için css ayarları

h1Tag.style.textAlign = 'center'
h1Tag.style.lineHeight = '1px'

let h2Tag = document.querySelector('h2') // ilk h2 için css ayarları

h2Tag.style.textAlign = 'center'
h2Tag.style.textDecoration = 'underline'
h2Tag.style.fontSize = '20px'
h2Tag.style.fontWeight = 'normal'
h2Tag.style.lineHeight = '1rem'

let h3Tag = document.querySelector('h3') // ilk h3 için css ayarları

h3Tag.style.textAlign = 'center'
h3Tag.style.textDecoration = 'underline'
h3Tag.style.fontSize = '16px'
h3Tag.style.fontWeight = 'normal'
h3Tag.style.lineHeight = '.5px'


let divTagStyle = document.querySelector('div') // ilk div için css ayarları
divTagStyle.style.marginLeft = '30%'
divTagStyle.style.marginTop = '5rem'
divTagStyle.style.width = '37%';
divTagStyle.style.height = '100%';



let divTag = document.getElementsByClassName('wrapper')[0] // class wrapper içine p tag yazabilmek için [0] eklendi.

for (let i = 0; i <= 101; i++) {



    let pTag = document.createElement('p') // p etiketi oluşturuldu ve p etiketi için css ayarları

    pTag.appendChild(document.createTextNode(i)) // Creates a new Text node. This method can be used to escape HTML characters.


    pTag.style.fontSize = '30px'
    pTag.style.color = 'white'
    pTag.style.textAlign = 'center'
    pTag.style.lineHeight = '3rem'
    pTag.style.marginTop = '.5vh'
    pTag.style.marginBottom = '.1vh'
    pTag.style.marginLeft = '.5vh'
    pTag.style.width = '100px'
    pTag.style.height = '60px'
    pTag.style.padding = '.5vh .25vh'
    pTag.style.display = 'inline-block'
    divTag.appendChild(pTag)

    if (i % 2 === 0) {

        pTag.style.background = '#21BF73'

    }

    else if (i % 2 !== 0) {
        pTag.style.background = '#FDDB3A'
    }

    let isPrime = true
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (i > 1 && isPrime === true) {
        pTag.style.background = '#FD5E53'
    }


}