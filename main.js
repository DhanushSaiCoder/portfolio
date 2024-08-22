// Function to handle scroll animation for cards
function handleCardAnimation() {
    const cards = document.querySelectorAll('.card:not(.exclude-animation)');
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        if (isInViewport(card, 0.65)) { // Check if at least 65% of the card is in viewport
            card.classList.add('animate');
        }
    }
}

// Event listener for scrolling
document.addEventListener('scroll', handleCardAnimation);

// Function to check if an element is in the viewport
function isInViewport(element, threshold) {
    const rect = element.getBoundingClientRect();
    const height = rect.height * threshold; // Calculate the threshold height
    return (
        rect.top >= -height &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + height &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Data for skills, projects, about me, and education
let skillsData = [
    {
        heading: 'Frontend Development',
        ifLink: false,
        link: '',
        rating: 'fourStar.png',
        bg: 'webDev.jpeg'
    },
    {
        bg: 'videoEditing.jpeg',
        heading: 'Video Editing',
        ifLink: false,
        link: '',
        rating: 'fourStar.png'
    },
    {
        bg: 'photoEditing.jpeg',
        heading: 'Photo Editing',
        ifLink: false,
        link: '',
        rating: 'fourStar.png'
    },
    {
        bg: 'uiux.jpeg',
        heading: 'UI/UX Design',
        ifLink: false,
        link: '',
        rating: 'threeStar.png'
    },
    {
        bg: 'graphicDesigner.jpeg',
        heading: 'Graphic Design',
        ifLink: false,
        link: '',
        rating: 'threeStar.png'
    }
];

var projects = [];
var about = [];
var education = [];

function show(i) {
    let arr = [];
    let heading = '';

    // Remove 'active' class from all buttons
    document.getElementById('skillsBtn').classList.remove('active');
    document.getElementById('projectsBtn').classList.remove('active');
    document.getElementById('AMeBtn').classList.remove('active');
    document.getElementById('eduBtn').classList.remove('active');

    if (i === 1) {
        arr = skillsData;
        heading = 'Skills';
        document.getElementById('skillsBtn').classList.add('active');
    } else if (i === 2) {
        arr = projects;
        heading = 'Projects';
        document.getElementById('projectsBtn').classList.add('active');
    } else if (i === 3) {
        arr = about;
        heading = 'About Me';
        document.getElementById('AMeBtn').classList.add('active');
    } else {
        arr = education;
        heading = 'Education';
        document.getElementById('eduBtn').classList.add('active');
    }

    // Hide the current content with a fade-out effect
    const dataDiv = document.getElementById('dataDiv');
    dataDiv.classList.remove('visible');

    // Add a short delay to ensure content is hidden before updating
    setTimeout(() => {
        // Update the content
        let innerHtml = `<h1 id="sectionNameTxt">${heading}</h1>`;
        for (let j = 0; j < arr.length; j++) {
            let html = '';
            if (j === 0) {
                html = `
                    <div id="demo${j}" class="card exclude-animation" style="background-image: url(${arr[j].bg});
                      background-size: cover;
                      background-position: center;
                    ">
                      <div class="shadowDiv">
                            <h3>${arr[j].heading}</h3>
                            <div>
                                <p>Skill Rating</p>     
                                <div class="ratingDiv">
                                    <img class="ratingImg" src="${arr[j].rating}" >
                                </div>
                            </div>
                        </div>
                    </div>`;
            } else {
                html = `
                    <div id="demo${j}" class="card" style="background-image: url(${arr[j].bg});
                      background-size: cover;
                      background-position: center;
                    ">
                        <div class="shadowDiv">
                            <h3>${arr[j].heading}</h3>
                            <div>
                                <p>Skill Rating</p>     
                                <div class="ratingDiv">
                                    <img class="ratingImg" src="${arr[j].rating}" >
                                </div>
                            </div>
                        </div>
                    </div>`;
            }
            innerHtml += html;
        }

        // Set the new content
        dataDiv.innerHTML = innerHtml;

        // Trigger the transition to show new content
        setTimeout(() => {
            dataDiv.classList.add('visible');
        }, 10); // Short delay to ensure transition effect
    }, 250); // Match this delay with the CSS transition duration
}

// Call show(1) when the page loads
window.onload = function() {
    show(1);
};
function profileClick() {
  alert('hdhd')
}