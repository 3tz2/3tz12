function openModal() {
    document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}
window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
window.onload = function() {
    document.querySelector('.navbar').style.top = '0';
}
/*           */
document.getElementById("image-navbar").addEventListener("click", function() {
    window.location.href = "index.html";
});
// 
function openModalFunction(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = 'block';
}

function closeModalFunction(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

window.onclick = function(event) {
    // يمكن إضافة مزيد من الشروط هنا لإغلاق النوافذ المنبثقة بشكل عام
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = 'none';
        }
    }
}

// 

document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('#accordion input[type="checkbox"]');
    
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            const content = this.parentElement.querySelector('.content');
            
            if (this.checked) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = 0;
            }
        });
    });
});
// 
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('faq-content').style.display ='block';
});
//id 
function openModal2() {
    document.getElementById('myModal2').style.display = 'block';
}

function closeModal2() {
    document.getElementById('myModal2').style.display = 'none';
}

window.onclick = function(event) {
    var modal = document.getElementById('myModal2');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
//  
// 
// 
function showPrice(id, price) {
   var Idmodal = document.getElementById('IdDisplay');
   var Pricemodal = document.getElementById('priceDisplay');
   Idmodal.innerText = 'ID :' +" " + id ;
   Pricemodal.innerText = 'Price :' + " "+ price +'$';
   Idmodal.style.color = "red";
   Pricemodal.style.color = "green";
}



//money-------
function openModal3() {
    document.getElementById('myModal3').style.display = 'block';
}

function closeModal3() {
    document.getElementById('myModal3').style.display = 'none';
}

window.onclick = function(event) {
    var modal = document.getElementById('myModal3');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
//  
// 
// 
function showPriceMoney(mony, priceMony) {
   var Monymodal = document.getElementById('MoneyPrice');
   var PriceMOnymodal = document.getElementById('priceDisplayMoney');
    Monymodal.innerText = 'Amount :' +" " + mony+'$' ;
    PriceMOnymodal.innerText = 'Price :' + " "+ priceMony +'$';
    Monymodal.style.color = "red";
     PriceMOnymodal.style.color = "green";
}
// 
// 
// 
//coins-------
function openModal4() {
    document.getElementById('myModal4').style.display = 'block';
}

function closeModal4() {
    document.getElementById('myModal4').style.display = 'none';
}

window.onclick = function(event) {
    var modal = document.getElementById('myModal4');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
// 
// 
function showPriceCoins(coins, priceCoins) {
    var Coinsmodal = document.getElementById('CoinsPrice');
    var PriceCoinsmodal = document.getElementById('priceDisplayCoins');
     Coinsmodal.innerText = 'Coins :' +" " + coins;
     PriceCoinsmodal.innerText = 'Price :' + " "+ priceCoins +'$';
     Coinsmodal.style.color = "red";
     PriceCoinsmodal.style.color = "green";
 }
//  
// 
// 
// 
// 
// Function to open a modal
function openModalForShop(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

// Function to close a modal
function closeModalForShop(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Function to switch from one modal to another
function switchModalForShop(currentModalId, nextModalId) {
    closeModalForShop(currentModalId);
    openModalForShop(nextModalId);
}


// Open the first modal on page load 
window.onload = function() {
    openModalForShop('myModal2');
}
window.onload = function() {
    openModalForShop('myModal3');
}
window.onload = function() {
    openModalForShop('myModal4');
}



// time out img


// var myCarousel = document.querySelector('#carouselExampleCaptions');
// var carousel = new bootstrap.Carousel(myCarousel, {
//     interval: 8000 // 8 seconds
// });


