const NameInput = document.getElementById("name");
const titleInput = document.getElementById("title-review");
const reviewInput = document.getElementById("review");
const button = document.getElementById("submit");
const stack = document.getElementById('feed-collection')
const starrating = document.querySelectorAll('.stars')
let selectedrating = 0;

// isme hr star ko select krre h or function mai bhejre h jo color krega
starrating.forEach(element => {
    element.addEventListener('click', () => {
        selectedrating = parseInt(element.id);  // id = 1,2
        starcolor()
    })
});

// yeh yha color krra h
function starcolor() {
    starrating.forEach(element => {
        if(parseInt(element.id) <= selectedrating) {  
            element.style.color = 'Gold'
        } else {
            element.style.color = 'Grey'
        }
    })
}

button.addEventListener('click', () => {
    const name = NameInput.value
    const title = titleInput.value
    const review = reviewInput.value

    const ptag = document.createElement('p');
    ptag.classList.add('review-entry');
    ptag.innerHTML = `<h3>${title}</h3>
    <p>${name}</p>
    <p>${review}</p>`
    stack.appendChild(ptag);

    for(let i = 1; i<=5; i++){
        const spantag = document.createElement('span');
        spantag.innerHTML = '&#9733;'
        if(i<=selectedrating){ 
            spantag.style.color = 'Gold';
        } else {
            spantag.style.color = 'white';
        }
        stack.appendChild(spantag);
    }
});