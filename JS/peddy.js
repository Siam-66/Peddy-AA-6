// fetch categories
const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => displayPetCategories(data.categories))
    .catch((error) => console.log(error));
    };

// show categories

const displayPetCategories = (categories) => {
    const petCategories = document.getElementById("categories");
    petCategories.innerHTML = " "
    categories.forEach((item) => {
    const { category, category_icon,  } = item;
    const buttonContainer = document.createElement("div");
    buttonContainer.innerHTML = `
            <button id="btn-${category}" onclick="loadPetsCategory('${category}')" class="flex justify-center items-center border-[#0E7A81s1A] border  text-xl font-bold md:py-4 md:px-10 p-4 rounded-full category-btn " >
                <img class="md:w-10 w-7" src="${category_icon}" alt="">
                <p>${category}</p>
            </button>
    `;


    petCategories.append(buttonContainer);
    });
};

loadCategories();


// fetch all pet

const loadAllPets = () => {
    fetch(" https://openapi.programming-hero.com/api/peddy/pets")
    .then((res) => res.json())
    .then((data) => displayAllPet(data.pets))
    .catch((error) => console.log(error));
    };

// show all pets

const displayAllPet = (pets) => {
    const allPetsShow = document.getElementById("pets");
    allPetsShow.innerHTML = " "

    if (pets.length == 0) {
        allPetsShow.classList.remove("grid");
        allPetsShow.innerHTML = `
        <div class=" flex flex-col gap-5 justify-center items-center">
        
        <img src="assets/error.webp" /> 
        <h2 class="text-center text-5xl font-bold"> No Information Available </h2> 
        <p class="text-center">No pets available right now, but check back soon for your future furry friend!</p>
        </div>`;
    } else {
        allPetsShow.classList.add("grid");
    }

    pets.forEach((item) => {
    const{pet_name,gender,date_of_birth,price,image,breed,petId} = item
    
    const petsButtonContainer = document.createElement("div");
    petsButtonContainer.innerHTML = `
                    <div class="card bg-base-100 md:w-6/6 lg:w-5/6 shadow-md">
                    <figure>
                    <img class="h-full w-full object-cover"
                        src="${image}"
                        alt="Shoes" />
                    </figure>
                    <div class="card-body">
                    <h2 class="card-title">${pet_name?pet_name:"not found"}</h2>
                    
                    <div class="flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                        </svg>
                        <p>Breed: ${breed?breed:"not found"}</p>
                    </div>

                    <div class="flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                    </svg>
                    <p>Birth: ${date_of_birth?date_of_birth:"not available"}</p>
                    </div>

                    <div class="flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                        </svg>
                        <p>Gender: ${gender?gender:"unknown"}</p>
                        
                    </div>

                    <div class="flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <p>Price: ${price?price:"not found"}</p>
                    </div>

                    <div class="card-actions flex justify-around items-center mt-5">

                        <button onclick = "likeImageShow('${image}')" class="bg-white text-black hover:text-white hover:bg-[#0E7A81] py-2 px-5  rounded-md"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="lg:size-9 size-6 ">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                        </svg>
                        </button>

                        <button onclick="openModal()" class="bg-white text-black hover:text-white hover:bg-[#0E7A81]  p-2  rounded-md">Adopt</button>

                        <button onclick="loadDetails('${petId}')" class="bg-white text-black hover:text-white hover:bg-[#0E7A81] p-2 rounded-md">Details</button>
                    </div>
                    </div>
                </div>
    `;


    allPetsShow.append(petsButtonContainer);
    });
};

loadAllPets();

// fetch and show by categories

const removeActiveClass = () => {
    const buttons = document.getElementsByClassName("category-btn");
    console.log(buttons);
    for (let btn of buttons) {
    btn.classList.remove("active");
    }
};

const loadPetsCategory = (category) => {
    
    document.getElementById("overlay").style.display = "block";
    document.getElementById("loading").style.display = "block";

    
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
        .then((res) => res.json())
        .then((data) => {
            
            setTimeout(() => {
                
                document.getElementById("overlay").style.display = "none";
                document.getElementById("loading").style.display = "none";

                
                removeActiveClass();

                
                const activeBtn = document.getElementById(`btn-${category}`);
                activeBtn.classList.add("active");

                
                displayAllPet(data.data);
            }, 2000); 
        })
        .catch((error) => {
            
            document.getElementById("overlay").style.display = "none";
            document.getElementById("loading").style.display = "none";
            console.log(error);
        });
};



// modal

const loadDetails = async (id) => {
    const uri = `https://openapi.programming-hero.com/api/peddy/pet/${id}`;
    const res = await fetch(uri);
    const data = await res.json();
    displayDetails(data.petData); 
};

const displayDetails = (pet) => {
    const detailContainer = document.getElementById("modal-content");

    detailContainer.innerHTML = `
    <figure class="">
    <img class= "h-400 w-full rounded-2xl"
        src=${pet.image}
        alt="Shoes"
        class="rounded-xl" />
    </figure>
    <div class="space-y-4">
    <h2 class="card-title text-2xl pt-4">${pet.pet_name ? pet.pet_name : "not found"}</h2>
                <div class="flex justify-start items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                </svg>
                <p>Breed: ${pet.breed?pet.breed:"not found"}</p>
            </div>

            <div class="flex justify-start items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
            <p>Birth: ${pet.date_of_birth?pet.date_of_birth:"not available"}</p>
            </div>

            <div class="flex justify-start items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                </svg>
                <p>Gender: ${pet.gender?pet.gender:"unknown"}</p>
                
            </div>

            <div class="flex justify-start items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <p>Price: ${pet.price?pet.price:"not found"}</p>
            </div>
<div class="divider">
</div>
<p class="font-bold text-xl">Description</p>
<p>${pet.pet_details}</p>
    
    </div>
</div>
    `;

    document.getElementById("custommodal").showModal();
};

// show image

const likeImageShow = (image) => {
    const imageContainer = document.getElementById("showImage");
    const showImages = document.createElement("div");
    showImages.innerHTML = `
        <img class= "rounded-xl h-[100px]  " src = "${image}" alt="">
        `;
    imageContainer.appendChild(showImages);
};

function openModal() {
    $('#adoptModal').modal('show');
}

// Function to open the modal
function openModal() {
    var modal = document.getElementById('adoptModal');
    modal.classList.remove('hidden'); 
    
    setTimeout(function() {
        closeModal(); 
    }, 3000);
}


function closeModal() {
    var modal = document.getElementById('adoptModal');
    modal.classList.add('hidden'); 
}

