let arrow = document.getElementsByClassName('arrows');
let product_item = document.getElementsByClassName('product_list')
let product_page = Math.ceil(product_item.length / 3); //used to make sure that you don't go into negative when using the left arrow
let l = 0;
let cardDisplay = 33.34; //width max move e.g 33.34 = 33% = 3 cards
let maxCardDisplayed = 75; //amount of cards e.g. 100 = 3 card rotations(12 products) displayed, if you want the possibility of 9 products displayed then you would use 200.
// mobile_view	
let mob_view = window.matchMedia("(max-width: 750px)");
if (mob_view.matches) {
    cardDisplay = 100.36; // see above but optimized for mobile
    maxCardDisplayed = 402; // original + 4 to be shown adjust per 100 as you need. (Set to 2 as the slider worked better without round numbers)
}

let right_arrow = () => {
    l = l + cardDisplay;
    if (product_item == 1) { l = 0; }
    for (const i of product_item) {
        if (l > maxCardDisplayed) { l = l - cardDisplay; }
        i.style.left = '-' + l + '%';
    }

}
let left_arrow = () => {
    l = l - cardDisplay;
    if (l <= 0) { l = 0; }
    for (const i of product_item) {
        if (product_page > 1) {
            i.style.left = '-' + l + '%';
        }
    }
}
arrow[1].onclick = () => { right_arrow(); }
arrow[0].onclick = () => { left_arrow(); }