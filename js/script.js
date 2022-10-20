// dev: Francesco Cimino;
// proj: Oue Team;
// lang: js;

// our-team-array
const ourTeam = [

    // Wayne Barnett (card-data);
    {
    name:"Wayne Barnett",
    role: "Founder & CEO",
    imgProfile: "wayne-barnett-founder-ceo.jpg"
    },

    // Angela Caroll (card-data);
    {
    name:"Angela Caroll",
    role: "Chief Editor",
    imgProfile: "angela-caroll-chief-editor.jpg"
    },

    // Walter Gordon (card-data);
    {
    name:"Walter Gordon",
    role: "Office Manager",
    imgProfile: "walter-gordon-office-manager.jpg"
    },

    // Angela Lopez (card-data);
    {
    name:"Angela Lopez",
    role: "Social Media Manager",
    imgProfile: "angela-lopez-social-media-manager.jpg"
    },

    // Scott Estrada (card-data);
    {
    name:"Scott Estrada",
    role: "Developer",
    imgProfile: "scott-estrada-developer.jpg"
    },

    // Barbara Ramos (card-data);
    {
    name:"Barbara Ramos",
    role: "Graphic Designer",
    imgProfile: "barbara-ramos-graphic-designer.jpg"
    }
    
];

// item-loop
const cards = document.getElementById("cards");

for (let i = 0; i < ourTeam.length; i++) {
    const item = ourTeam[i];

    // team-list-items
    cards.innerHTML += `

        <li>
            <img src="img/${item.imgProfile}" alt="profiles images"> 
            <div class="card-name"><span class="title"></span>${item["name"]}<div>
            <div class="card-name"><span class="title"></span>${item.role}</div>
        </li>`
}