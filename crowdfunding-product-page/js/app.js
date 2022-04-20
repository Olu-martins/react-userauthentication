/*----------------------Bookmark-------------------------*/ 
let bookmark = document.getElementById("bookmark")
let bookmarkText = document.querySelector(".bookmark");
/*-----------------Menubuttons && Icon-----------------*/
let hamburger = document.getElementById("subMenu");
let navItems = document.querySelector(".subMenu");
let subMenuIcon = document.getElementById("subMenuIcon");
let isMenuOpen = false;
let totalLayer = document.querySelector(".total_layer");
/*---------------------modal-----------------------------*/
let modalSnap = document.querySelector(".modal_snap");
let modalInner  = document.querySelectorAll(".modal_inner");
/*---------------reward selection------------------------*/ 
let selectReward = document.querySelectorAll(".select_reward");
/*------------------pledge input---------------------------*/ 
let inputPledge = document.querySelectorAll(".enter_pledge");
let pledgeValues = document.getElementsByName("pledge");
/*------------------thankscard---------------------------*/
let thanksCard = document.querySelector(".thanks_card") 
/*-----------------------closeModalSuccess------------------------------*/ 
let closeModalSuccess = document.getElementById("closeModalSuccess")
let ExitSuccess = document.getElementById("gotit")


/*---------------------MENU && SUBMENU DISPLAY------------------------------*/
hamburger.addEventListener('click', () => {
  isMenuOpen = !isMenuOpen;
  if(isMenuOpen){
    navItems.style.display = "block";
    totalLayer.classList.add("show");
    subMenuIcon.src = "./assets/icons/icon-close-menu.svg";
  }else{
    navItems.style.display = "none";
    totalLayer.classList.remove("show");
    subMenuIcon.src = "./assets/icons/icon-hamburger.svg";
  }
});
  
/*-----------------------------BOOKMARK-------------------------------*/
let bookmarked = false;
bookmark.addEventListener('click', () => {
    bookmarked = !bookmarked;
    bookmarked
    ? (bookmarkText.innerText = "Bookmarked")
    : (bookmarkText.innerText = "Bookmark" )
});

/*------------------------OPEN && CLOSE MODAL--------------------------- */
document.getElementById('close_modal').addEventListener('click', () => {
  modalSnap.classList.remove("show");
  totalLayer.classList.remove("show")
});

document.getElementById("open_modal").addEventListener('click', () => {
  modalSnap.classList.add("show");
  totalLayer.classList.add("show")
});

/* ----------------------- [on load] ------------------------------*/

/*----------------Retrieve info from a false web localstorage----------------------- */
if (typeof (Storage) !== "undefined") {
  /*----------------------Retrieve total amount----------------------*/ 
  if (localStorage.totalAmount) {
      let webAmount = parseInt(localStorage.getItem("totalAmount"));
      /*-----------------check if NaN value------------------------*/  
      if (webAmount == "NaN") {
          webAmount = 20;
      }
      document.getElementById("total-amount").innerHTML = webAmount;
  } else {
      document.getElementById("total-amount").innerHTML = 89914;
  }
}
/*-------------------------Retrieve backers---------------------------*/ 
if (localStorage.backers) {
  document.getElementById("backers").innerHTML = localStorage.getItem("backers");
} else {
  document.getElementById("backers").innerHTML = 5007;
}

/*--------------- [increment total amounts & backer] -------------- */
let pledge = document.getElementsByClassName("continue");
let quantity = document.getElementsByClassName("q-value");

for (let i = 0; i < pledge.length; i++) {
    document.getElementsByClassName("continue")[i].addEventListener("click", function () {      

        /*---------------------Fetch amount from imput---------------------*/ 
        let amount = parseInt(document.getElementsByClassName("input-bid")[i].value);        

        //Fetch minium amount 
        let nodeEl = document.getElementsByClassName("input-bid")[i];
        let minAmount = parseInt(nodeEl.getAttributeNode("min").value);
        if (amount >= minAmount) {
          incrementTotal(amount);
          incrementBackers();          
          displaythanks ();                    
        }        
    })    
}


/*----------------- [update total money raised] ------------------*/

function incrementTotal(amount) {
  let target = 100000;
  let amountPledged = parseInt(amount);
  let currentAmount = parseInt(document.getElementById("total-amount").innerHTML.replace(",", ""));
  let newAmount = currentAmount + amountPledged;
  document.getElementById("total-amount").innerHTML = newAmount.toLocaleString();
  
  localStorage.setItem("totalAmount", newAmount);  
}

/*------------------ [incrementation backers by 1] -----------------*/
function incrementBackers() {
  let currentBackers = parseInt(document.getElementById("backers").innerHTML.replace(",", ""))
  let newBackers = ++currentBackers;
  document.getElementById("backers").innerHTML = newBackers.toLocaleString();
  //Update local storage
  localStorage.setItem("backers", newBackers);  
}

/*---------------------------MODAL PLEDGE--------------------------------- */


function clearBorder () {
  for(let i = 0; i < pledge.length; i++){
    modalInner[i].style.border = "1px solid rgba(128, 128, 128, 0.479)";
    modalInner[i].classList.remove("display-pledge");
    // inputPledge[i].innerHTML = "";
  }
}

/*-------------SUCCESS DISPLAY-----------------*/

let isDisplayThanks = true;
function displaythanks () {
  if(isDisplayThanks){
    thanksCard.classList.add("show");
    totalLayer.classList.add("show");
    modalSnap.classList.remove("show");
    clearBorder();    
  }else{
    thanksCard.classList.remove("show");
    totalLayer.classList.add("show");
    modalSnap.classList.add("show");

    clearBorder();    
  }
  isDisplayThanks = !isDisplayThanks;  
  
  // toggleExit();

  };

//--------------------- BACKERS COUNTER----------------------------
function numberCal() {
  const counters = document.querySelectorAll(".counter");
  const rate1 = 500;
  const rate2 = 5000;    
  counters.forEach(counter => {
      const updateCount = () => {
          const target = +counter.getAttribute("data-target");
          const count = +counter.innerText;            
          let num = 0;

          if (target > 50000) {
              num = Math.floor(target / rate2);
          } else {
              num = Math.floor(target / rate1);
          }

          if (count < target) {
              counter.innerText = (count + num).toLocaleString();
              setTimeout(updateCount, 5);
          } else {
              counter.innerText = (target).toLocaleString();
          }
      };
      updateCount();
  });
}

/*----------------------------SUCCESS MODAL---------------------*/ 
let ContentPage = document.getElementById('total_layer');
// let showPage = ContentPage.style.display;
let ExitButton = document.getElementById('gotit');

ExitButton.addEventListener("click", () => {
  thanksCard.classList.remove("show");
  totalLayer.classList.remove("show");        
})


/*--------------------DISPLAY PLEDGE DIV-----------------*/
function noReward() {
  let noReward = document.getElementById("noReward");
  if (noReward.style.display === "none"){
    noReward.style.display = "block";        
  }else{
    noReward.style.display = "none";
  }
}

function bambooed() {
  let bambooed = document.getElementById("bambooed");
  if (bambooed.style.display === "none"){
    bambooed.style.display = "block";        
  }else{
    bambooed.style.display = "none";
  }
}

function blacked() {
  let blacked = document.getElementById("blacked");
  if (blacked.style.display === "none"){
    blacked.style.display = "block";        
  }else{
    blacked.style.display = "none";
  }
}



document.addEventListener("DOMContentLoaded", () => {
  numberCal();  
});
