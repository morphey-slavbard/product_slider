# product_slider

**How to Use**

**Important files in  Git branch**

README.md - Instructions, please read.
Index.html -  Full HTML, CSS and Script tag to the JS that controls the carousel.
Main.js - raw JS file for controls.
Style.css - final form of the css file.

img folder contains some files that are referenced, not massively important.

**Steps**
1. Open Index.html and click the copy icon in the top right 
2. Go to https://demostore.x-cart.com/fashion/clothing/oversized-hoodie-in-grey ( I am used Chrome for this test)
3. right click just above the producrt details menu on class = product-details-tabs
4. click inspect
5. right click on class="product-details-tabs"
6. Click Edit as HTML
7. Hit Enter twice
8. Paste copied HTML from index.html and click outside of the block ( The html should now appear)
9. Go to main.js and copy the content
10. Go back to the inspect view and click on the console
11. paste in the JS and hit enter.

You should now be able to test and use the product recommendation block.

**Points to note**

I was unable to deploy its as one file hence why the JS needs to be added in the console after, using this method seemed like a better option rather than using more complex JS.

Things considered launch a one file implementation
* Extension using content script but I decided that was out of scope and required to much work
* Using insertAdjacentHTML() method, but I run out of time to test completely.






