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

var projects = [
  {
    url:'https://dhanushsaicoder.github.io/Expense-Tracker-Project/',
    heading:'Expense Tracker',
    bg:'expense.jpg',
    techStack:['HTML','CSS','JavaScript'],
  },
  {
    bg:'codepen.jpg',
    url:'https://dhanushsaicoder.github.io/CodePen/',
    heading:'Codepen Clone',
    techStack:['HTML','CSS','JavaScript']
  },
  {
    bg:'flames.jpg',
  
    url:'https://dhanushsaicoder.github.io/flames/',
    heading:'Flames Game',
    techStack:['HTML','CSS','JavaScript']
  }
];

var about = [
    {
        heading: 'About Me',
        text: 'I am a passionate web developer with a focus on creating user-friendly, visually appealing websites. Currently pursuing a diploma in Computer Engineering, I have honed my skills in various programming languages and web technologies. My journey in tech started with a curiosity about how things work behind the scenes on the web, and this has driven me to continuously learn and improve.'
    },{
      text:`With a solid foundation in web development, I've worked on several projects, including [<a href="https://codepen.42web.io">Codepen Clone</a>, <a href="https://flames.42web.io/">Flames Online</a>, <a href="http://myexpenses.infinityfreeapp.com/">MyExpenses</a>]. I specialize in front-end development but have a strong interest in back-end processes as well, making me a well-rounded developer capable of tackling diverse challenges.`
      
    },{
      text:"When I'm not coding, I engage in exploring emerging technologies, studying Sanatan texts, playing cricket, drawing, learning about rocket science, and expanding my expertise in multimedia and design.<br><br>"
    }
];

var education = [
    {
        heading: 'Diploma in Computer Engineering',
        institution: 'Andhra Polytechnic',
        year: '2023 - Present',
        description: 'Currently pursuing a diploma in Computer Engineering with a focus on Frontend Development. The curriculum has provided me with in-depth knowledge of web technologies, programming languages, and design principles.'
    }
];

function show(i) {
    let arr = [];
    let heading = '';
    let isSkillsSection = false;

    // Remove 'active' class from all buttons
    document.getElementById('skillsBtn').classList.remove('active');
    document.getElementById('projectsBtn').classList.remove('active');
    document.getElementById('AMeBtn').classList.remove('active');
    document.getElementById('eduBtn').classList.remove('active');

    if (i === 1) {
        arr = skillsData;
        heading = 'Skills';
        isSkillsSection = true;
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

            if (isSkillsSection) {
                // Display content in card format for Skills section
                html = `
                    <div id="demo${j}" class="card ${j === 0 ? 'exclude-animation' : ''}" style="background-image: url(${arr[j].bg});
                      background-size: cover;
                      background-position: center;
                    ">
                    </div>
                    <div class="info card ${j === 0 ? 'exclude-animation' : ''}">
                      <h3 class="heading">${arr[j].heading}</h3>
                      <div class="ratingDivOut">
                          <p>Skill Rating</p>     
                          <div class="ratingDiv">
                              <img class="ratingImg" src="${arr[j].rating}">
                          </div>
                      </div>
                    </div>
                `;
            } else if (i === 2) {
                // Display content in a different format for other sections
                html = `
                    <div id="demo${j}" class="card procard ${j === 0 ? 'exclude-animation' : ''}" style="background-image: url(${arr[j].bg});
                      background-size: cover;
                      background-position: center;
                    ">
                      <div class="shadowDiv">
                            <h3 class="proHeading">${arr[j].heading}</h3>
                             <div class="visitBtnDiv">
                              <button class="visitBtn" onclick="window.location='${arr[j].url}'">Visit</button>
                             </div>
                        </div>
                    </div>
                `;
            } else if (i === 3) {
                // Display content for About Me section
                html = `<br><p>${arr[j].text}</p>`;
            } else {
                // Display content for Education section
                html = `
                <br>
                    <div class="education-card">
                        <h3>${arr[j].heading}</h3>
                        <p>${arr[j].institution}</p>
                        <p>${arr[j].year}</p><br>
                        <p>${arr[j].description}</p>
                    </div><br>
                `;
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
document.getElementById('contactDiv').style.display="none"

function contact(){
  document.getElementById('contentDiv').style.display="none"
  document.getElementById('contactDiv').style.display="flex"
}

function content(){
  document.getElementById('contentDiv').style.display="block"
  document.getElementById('contactDiv').style.display="none"
  
}

let instagram = document.getElementById('instagram');
let youtube = document.getElementById('youtube');
let github = document.getElementById('github');
let mail = document.getElementById('mail');
instagram.addEventListener('click',function(){
    window.location="https://www.instagram.com/dhanushsaieditz/"
});
github.addEventListener('click',function(){
    window.location="https://github.com/DhanushSaiCoder"
});
youtube.addEventListener('click',function(){
    window.location="https://youtube.com/@dhanushsaieditz3009?si=90-Nq-8s1bgvy_nP"
});
mail.addEventListener('click',function(){
    window.location="https://youtube.com/@dhanushsaieditz3009?si=90-Nq-8s1bgvy_nP"
});

document.getElementById("mail").addEventListener("click", function() {
    // Text to be copied
    const textToCopy = "dhanushsai1467@gmail.com";

    // Create a temporary input element
    const tempInput = document.createElement("input");
    tempInput.value = textToCopy;
    
    // Add the input element to the document body
    document.body.appendChild(tempInput);
    
    // Select the text inside the input element
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices
    
    // Execute the copy command
    document.execCommand("copy");
    
    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Optionally, you can alert the user that the text has been copied
});

document.getElementById("mail").addEventListener("click", function() {
    // Text to be copied
    const textToCopy = "dhanushsai1467@gmail.com";

    // Create a temporary input element
    const tempInput = document.createElement("input");
    tempInput.value = textToCopy;

    // Add the input element to the document body
    document.body.appendChild(tempInput);

    // Select the text inside the input element
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices

    // Execute the copy command
    document.execCommand("copy");

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Display the "Mail Copied!" message
    const copiedMessage = document.getElementById("copiedMessage");
    copiedMessage.style.opacity = 1; // Make the message visible

    // Hide the message after 3 seconds
    setTimeout(function() {
        copiedMessage.style.opacity = 0;
    }, 3000); // Adjust this time as needed
});
