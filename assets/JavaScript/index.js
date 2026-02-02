let strengths = [
    "Discreet",
    "Attentive",
    "Organized",
    "Logic"
];
let weaknesses = [
    "Impostor syndrome",
    "Lack of communication skills",
    "Too discreet",
    "Too stressed",
    "Lack of self-confidence",
    "Underestimate myself",
    "Tendency to compare myself to others"
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
    "French (native language)",
    "English",
    "Spanish"
];
let tools = [
    "Visual Studio Code",
    "Figma",
    "Adobe suite",
    "Microsoft Office 365 suite",
    "Wordpress"
];
let interests = [
    "Animes",
    "Video games",
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