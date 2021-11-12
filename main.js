console.log("JavaScript is working!")

//move the background mountain up 100px 
gsap.to ('#background',{
    scrollTrigger: {
        trigger: "#opening-section",
        start: "top 3em",
        scrub: 1,
        pin: true,
    },
    y: -100
})

//move the midground mountain up 150px
gsap.to ('#midground',{
    scrollTrigger: {
        trigger: "#opening-section",
        start: "top 3em",
        scrub: 1,
        pin: true,
    },
    y: -125
})

//move the foreground mountain up 200px
gsap.to ('#foreground',{
    scrollTrigger: {
        trigger: "#opening-section",
        start: "top 3em",
        scrub: 1,
        pin: true,
    },
    y: -175
})

//move the left clouds left 100px
gsap.to ('#left-clouds',{
    scrollTrigger: {
        trigger: "#opening-section",
        start: "top 3em",
        scrub: 1,
        pin: true,
    },
    x: -100
})

//move the right clouds right 100px
gsap.to ('#right-clouds',{
    scrollTrigger: {
        trigger: "#opening-section",
        start: "top 3em",
        scrub: 1,
        pin: true,
    },
    x: 100
})

//move the sun down 100px
gsap.to ('#sun',{
    scrollTrigger: {
        trigger: "#opening-section",
        start: "top 3em",
        scrub: 1,
        pin: true,
    },
    y: 25
})

//Make an array of content blocks
let blocks = ['causes01', 'causes02', 'causes03'];

//For each content block 
blocks.forEach(function(block){
    //Make the blockName the content block class
    const blockName = document.querySelector('.'+block);
    //Make content block lose transparency and move up 75px over 1.5s when the top of the content block reaches the center of the scrollbar
    gsap.from (blockName,{
        scrollTrigger: {
            trigger: blockName,
            start: 'top 40%',
            //Play the animation when the top of the block reaches the center of the scrollbar and reset the animation when scrolling above the start position
            toggleActions: "play none none none",
        },
        autoAlpha: 0,
        y: 60,
        duration: 1
    })
})

//Make an array of the dialog names
let dialogNames = ['dairy', 'pub-trans', 'renewable', 'recycle', 'activism'];

//For each dialog name
dialogNames.forEach(function(dialogName){
    //Get the actual dialog
    const dialog = document.querySelector('#'+dialogName+'-dialog');
    //Get the corresponding dialog image
    const dialogOpen = document.querySelector('#'+ dialogName + '-btn');
    //Open the dialog when the corresponding image is clicked
    dialogOpen.addEventListener('click', () => dialog.show())
})

//Get newsletter subscription form
const form = document.querySelector('.form');
//Alert subscriber that sign up was completed successful after form has been submitted
form.addEventListener('sl-submit', () => alert('Newsletter sign up completed successfully'));

//Get bg music, audio off button, and audio on button
const bgMusic = document.querySelector('#bg-music');
const audioOff = document.querySelector('#audio-off');
const audioOn = document.querySelector('#audio-on');

//Loop bg music when it plays
document.getElementById('bg-music').loop = true

//When audio off button is clicked:
audioOff.addEventListener('click', function(){
    // hide audio off button
    audioOff.classList.toggle('hide');
    //show audio on button
    audioOn.classList.toggle('hide');
    //play bg music
    bgMusic.play(); 
});

//When audio on button is clicked:
audioOn.addEventListener('click', function(){
    //hide audio on button
    audioOn.classList.toggle('hide');
    //show audio off button
    audioOff.classList.toggle('hide');
    //pause bg music
    bgMusic.pause();
});

//Get mobile navigation buttons, nav menu open button, and nav menu close button
const mobileNav = document.querySelector('.mobile-nav');
const openMenuBtn = document.querySelector('.open-menu-btn');
const closeMenuBtn = document.querySelector('.close-menu-btn');

//Make an array with both mobile menu buttons
let menuBtns = [openMenuBtn, closeMenuBtn]

//For each mobile menu button
menuBtns.forEach(function(menuBtn){
    //When the mobile menu button is clicked
    menuBtn.addEventListener('click',function(){
        //For each mobile menu button
        menuBtns.forEach(function(menuBtn){
            //Toggle the hide class
            menuBtn.classList.toggle('hide');
        })
        //Toggle the show class on the mobile navigation
        mobileNav.classList.toggle('show');
    })
})
