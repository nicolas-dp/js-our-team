const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

/* MILESTONE 1 (da fare entro le 18):
stampare su console le informazioni di nome, 
ruolo e la stringa della foto */

// Ciclo for in per stampare in console tutte le definizioni presenti
for (let i = 0; i < team.length; i++) {
    const member = team[i]; //singolo elemento del team

    console.log(`Utente in posizione ${i}`);
    console.log(member.name);
    console.log(member.role);
    console.log(member.image);
    console.log('_______________________');

}

//CORREZZIONE




/* MILESTONE 2 (se ce la fai falla entro le 18 
altrimenti puoi consegnare anche dopo le 18 - easy):
stampare le stesse informazioni su DOM sottoforma di stringhe */

/*  const teamElement = document.querySelector(".team")

for (let i = 0; i < team.length; i++) {
    const member = team[i]; 
    const memberMarkup = `
    <div class="member">
        <p>${member.name}<p>
        <p>${member.role}<p>
        <p>${member.image}<p>
    </div>
    `
    teamElement.insertAdjacentHTML("beforeend" , memberMarkup)
    
  } */


/* BONUS 1 
(solo se non sei giá frustrato dalle milestone 1 e 2):
trasformare la stringa foto in una immagine effettiva

// BONUS 2 
(solo se non sei giá fuso):
organizzare i singoli membri in card/schede */

/*const teamElement = document.querySelector(".team")

for (let i = 0; i < team.length; i++) {
    const member = team[i];
     const memberMarkup = `
    <div class="member">
        <img src="./assets/img/${member.image}">
        <div class="details">
            <h5>${member.name}</h5>
            <p>${member.role}</p>
        </div>
    </div>
    ` 

    const memberMarkup = generateMemberMarkup(member)
    teamElement.insertAdjacentHTML("beforeend", memberMarkup)

}*/


//Creamo la funzione per visualizzare le card

/**
 * Genera le card nella dom a partire da un array di oggetti
 * @param {array} team Array di oggetti da stampare
 * @param {string} cssSelector Selettore di un elemento della DOM
 */
function generate_team_card(team, cssSelector) {
    const teamElement = document.querySelector(cssSelector)
    teamElement.innerHTML = " ";
    console.log(teamElement);
    for (let i = 0; i < team.length; i++) {
        const member = team[i];    
        const memberMarkup = generateMemberMarkup(member)
        teamElement.insertAdjacentHTML("beforeend", memberMarkup)
}
}
generate_team_card(team, ".team")

//Creamo la funzione per visualizzare l'oggetto nella dom 
/**
 * Generate a markup for a member object with nome, role and image propr.
 * @param {object} member_object A member object
 */
function generateMemberMarkup(member_object) {
    return `
    <div class="member">
        <img src="./assets/img/${member_object.image}">
        <div class="details">
            <h5>${member_object.name}</h5>
            <p>${member_object.role}</p>
        </div>
    </div>
    `
}

/* Dopo aver creato il form dobbiamo farlo funzionare*/

//Selezionare il form
const formElement = document.querySelector("form")
// aggiungere l'event listener
formElement.addEventListener("submit" , function(event) {
    //prevenire refresh pagina
    event.preventDefault()
    // Prendere valori degli input
    const nameValue = event.target.name.value;
    const roleValue = event.target.role.value;
    const imageValue = event.target.image.value;
    console.log(nameValue, roleValue, imageValue);

    //usare i valori prese dagli input
    const newMember = {
        name: nameValue,
        role: roleValue,
        image: imageValue,
    }

    console.log(newMember);
    // Inserisco nell'array team l'oggetto creato
    team.push(newMember)
    console.log(team)
    //Visualizziamolo nella dom

    /* const memberMarkup = generateMemberMarkup(newMember)
    teamElement.insertAdjacentHTML("beforeend", memberMarkup)
 */
    generate_team_card(team, ".team");

    //ripulire gli elementi nel form
    document.getElementById("name").value = ""
    document.getElementById("role").value = ""
    document.getElementById("image").value = ""
})

