const voixLacte = document.getElementById('voixLacte');
const lointain = document.getElementById('lointain');
const koroko = document.getElementById('koroko');

function displayMenu(menu) {
    switch(menu) {
        case"voixLacte":
           voixLacte.style.display = (voixLacte.style.display == 'block') ? 'none' : "block"
           lointain.style.display = "none"
           koroko.style.display = "none"
           
        break;

        case "lointain":
            lointain.style.display = (lointain.style.display == 'block') ? 'none' : "block"
            voixLacte.style.display = "none"
            koroko.style.display = "none"
        break;

        case "koroko":
            koroko.style.display = (koroko.style.display == 'block') ? 'none' : "block"
            voixLacte.style.display = "none"
            lointain.style.display = "none"
        break;

        default:
            null
    }
}