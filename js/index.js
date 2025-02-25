let file_path = "../api/dog.json";
let data;
const imageContainer = document.getElementById('loja-div');
let itemname;
let itemimg;
let itempath;

function deleteDiv(){

  var divs = document.querySelectorAll(".card");
  divs.forEach(function(div) {
      div.remove();
  });
  displayPetFoods();
}

async function filter(event){

  event.preventDefault();

  // Create a FormData object from the form
  const formData = new FormData(event.target);

  const file = formData.get('pet_name');
  file_path = file;
  console.log(file_path);
  deleteDiv();
}

async function loadPetFoods(jsonPath) {
    try {
      const response = await fetch(jsonPath);
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error loading JSON:', error);
      throw error; // Re-throw the error for further handling if needed
    }
  }

  // Function to display the pet food data in the console
  async function displayPetFoods() {
    try {
      data = await loadPetFoods(file_path);
      const petFoods = data.petFoods;
     
      
      
      petFoods.forEach(pet => {
        //console.log(`Pet Type: ${pet.petType}`);
       
       
       
        pet.brands.forEach(brand => {
          
        const img = document.createElement('img');
        const a = document.createElement('a');
        const card = document.createElement('div');
        const card_head = document.createElement('div');
        const card_body = document.createElement('div');
        
        img.src = `${brand.image}`; 
        a.href = 'item.html';
        card.className = 'card';
        card.id = 'card';
        card_head.className = 'card-head';
        card_body.className = 'card-body';
        img.alt = `${brand.image}`;
        img.id = 'products';
        img.style.width = '100px';
        img.style.height = '100px';


        card.style = 'max-width: 150px;';
        card.style = 'max-height: 150px';
        
        card_head.textContent = `${brand.name}`;
        a.appendChild(img);
        card_body.appendChild(a);
        card.appendChild(card_head);
        card.appendChild(card_body);
        imageContainer.appendChild(card);

         
        a.addEventListener("click", function() {
            itemname =`${brand.name}`; 
            itemimg = `${brand.image}`;
            itempath = file_path;
            sessionStorage.setItem("itempath", itempath);
            sessionStorage.setItem("itemname", itemname);
            sessionStorage.setItem("itemimage", itemimg);     
          });


          
        });
        


      });
    } catch (error) {
      console.error('Error displaying pet foods:', error);
    }

  }

  // Trigger the display of pet foods when the script loads
  
  displayPetFoods();
  



