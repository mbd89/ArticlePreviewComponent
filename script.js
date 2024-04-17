const MichellesAppletonShareArrow = document.querySelector('.share-icon');
const socials = document.querySelector('.socials-block');
const avatarImageBlock = document.querySelector('.avatar-block');
const ShareBlockArrow = document.querySelector('.icon-share');
const desktopSocials = document.querySelector('.socials-active-state-desktop');

function showShareOptions() {

    if (window.innerWidth < 999) {
        MichellesAppletonShareArrow.addEventListener('click', () => {
            avatarImageBlock.style.display = 'none'
            socials.style.display = 'flex';
            desktopSocials.style.display = 'none'
        })


        ShareBlockArrow.addEventListener('click', () => {
            socials.style.display = 'none'
            avatarImageBlock.style.display = "flex"
            desktopSocials.style.display = 'none'
        })
        desktopSocials.style.display = 'none'

    } else {
        socials.style.display = 'none'
        avatarImageBlock.style.display = "flex"
        MichellesAppletonShareArrow.addEventListener('click', () => {
            avatarImageBlock.style.display = "flex"
            socials.style.display = 'none'
            desktopSocials.style.display = 'flex'


        })
     

    }
}

/*function showShareOptionsDesktop(){
    if(window.innerWidth > 999){

    }
} */


// run on page load
showShareOptions()

// run when the user changes the browser size using the "resize" event on the window object
window.addEventListener("resize", showShareOptions)










