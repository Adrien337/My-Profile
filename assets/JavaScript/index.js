let strengths = [
    "Discret",
    "Attentif",
    "Organisé",
    "Logique"
];
let weaknesses = [
    "Syndrome de l'imposteur",
    "Manque de communication",
    "Trop discret",
    "Trop stressé",
    "Manque de confiance en soi",
    "Sous-estimation",
    "Tendance à me comparer aux autres"
];
let programmationLanguages = [
    "HTML",
    "CSS",
    "Javascript",
    "Python",
    "PHP",
    "C++"
];
let languagesSpoken = [
    "Français (langue maternelle)",
    "Anglais",
    "Espagnol"
];
let tools = [
    "Visual Studio Code",
    "Figma",
    "Suite Adobe",
    "Suite Microsoft Office 365",
    "Wordpress"
];
let interests = [
    "Animes",
    "Jeux vidéos",
    "Programmation"
];

function displayLists (list, listName, displayLength) { // Works well so I never touch it again
    let beforeButton = document.querySelector(`#${listName}-before-button`);
    let afterButton = document.querySelector(`#${listName}-after-button`);
    let text = document.querySelector(`#${listName}-text`);
    let currentIndex = 0;
    
    function showList() {
        let output = [];

        for (let i = 0; i < displayLength; i++) {
            output.push(list[(currentIndex + i) % list.length]);
        }

        text.textContent = output.join(", ");
    }

    showList();
    beforeButton.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + list.length) % list.length;
        showList();
    });
    afterButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 1 + list.length) % list.length;
        showList();
    });
}

displayLists(strengths, "strengths" , 2);
displayLists(weaknesses, "weaknesses", 1);
displayLists(programmationLanguages, "programmation-languages" , 2);
displayLists(languagesSpoken, "languages-spoken" , 1);
displayLists(tools, "tools", 2);
displayLists(interests, "interests", 2)