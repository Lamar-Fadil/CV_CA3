let scrollSpy = new bootstrap.ScrollSpy(document.body, { target: '#dot-nav'})

// To get navigation dot label on hover
let tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
let tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Project info
function ecomLearn() {
  alert("A Python group project developed using the Django framework." + "\n\n" + "My work included creating a wishlist with dynamic features, along with an advanced search." + "\n\n" + "For more information:" + "\n" +"https://dev.azure.com/X00195342/2nd%20Year%20Project/_git/2nd_Year_Project");
}

function visLearn() {
  alert("Created a visualisation that looks for correlation between student performance and family life using Tableau." + "\n\n" + "The seven stages of visualisations were applied to gather findings");
}

function creditLearn() {
  alert("A study that attempted to find any relation between online purchases and credit card fraud." + "\n\n" + " Findings were gathered using libraries such as pandas, matplotlib, and seaborn." + "\n\n" + "For more information:"+ "\n" + "https://colab.research.google.com/drive/1p0Vgw2lxjv4k38VYntALnfirfx8PVvNe");
}

function pipeLearn() {
  alert("Developed a fully functioning pipeline using Azure DevOps" + "\n\n" + "Several stages live within the pipeline, such as Code Analysis and Deploy stages, along with SonarCloud and Jacoco Coverage" + "\n\n" + "For more information:" + "\n" + "https://dev.azure.com/X00195342/X00195342_CA2");
}

// Joke fetch api
const URL = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&format=txt";

const jokeBtn = document.getElementById("getJoke");

if(Notification.permission== "granted"){
  Notification.requestPermission().then((permission) => {
    console.log("Notification permission:", permission)
  });
  
}

jokeBtn.addEventListener("click", async () => {

    const joke = await fetchData("");
    if (joke) {
        displayDataInConsole(joke);

          if(Notification.permission== "granted"){
          new Notification("Programming Joke", { body: joke });
        }
        else{
          console.log("Notification permission not granted")
        }
        }   
    }
);

async function fetchData() {

    try {
        const response = await fetch(URL);
        return await response.text();
    } 
    catch (error) {
        console.error("Error:", error);
        return null;
    }
}


function displayDataInConsole( joke ) {

  console.log( "Data Type returned:", typeof joke  );
  console.log( "Joke:", joke );
  console.log( "==================================================" );
}

// activities gallery
function showImage( event ) {
  console.log( event.target );

  const src = event.target.getAttribute("src");
  console.log( src );
  document.querySelector(".modal-img").src = src;

  const img = event.target;
  const desc = img.getAttribute("data-desc");
  document.getElementById("modalDesc").innerText = desc;

  document.querySelector(".modal-img").height = "200";
  document.querySelector(".modal-img").width = "300";

  const myModal = new bootstrap.Modal( document.getElementById( 'galleryModal' ) );
  myModal.show();
}





function showGalleryImages() {

  if ( document.getElementById("gallerySelect").value == 1 ) {
    document.getElementById("StudentAmbassador").style.display = "block";
    document.getElementById("Hackathons").style.display = "block";
    document.getElementById("Events").style.display = "block";
  }
  else if ( document.getElementById("gallerySelect").value == 2 ) {
    document.getElementById("Hackathons").style.display = "none"
    document.getElementById("StudentAmbassador").style.display = "block";
    document.getElementById("Events").style.display = "none";
  }
  else if ( document.getElementById("gallerySelect").value == 3 ) {
    document.getElementById("Hackathons").style.display = "block"
    document.getElementById("StudentAmbassador").style.display = "none";
    document.getElementById("Events").style.display = "none";
  }
  else {
    document.getElementById("StudentAmbassador").style.display = "none"
    document.getElementById("Hackathons").style.display = "none";
    document.getElementById("Events").style.display = "block";
  }
}