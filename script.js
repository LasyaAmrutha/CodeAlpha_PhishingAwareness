const quizData = [

{
    question: "Which is a common sign of phishing?",
    options: [
        "Urgent password request",
        "Official secure portal",
        "Trusted HTTPS site",
        "Verified sender"
    ],
    answer: "Urgent password request"
},

{
    question: "What is Smishing?",
    options: [
        "Voice phishing",
        "SMS phishing",
        "Email spam",
        "WiFi attack"
    ],
    answer: "SMS phishing"
},

{
    question: "What should you do before clicking suspicious links?",
    options: [
        "Open immediately",
        "Ignore antivirus",
        "Verify sender and URL",
        "Share with friends"
    ],
    answer: "Verify sender and URL"
},

{
    question: "Which is safest?",
    options: [
        "123456",
        "password",
        "Admin@123",
        "qwerty"
    ],
    answer: "Admin@123"
},

{
    question: "What helps prevent phishing?",
    options: [
        "Sharing OTP",
        "Weak passwords",
        "Multi-Factor Authentication",
        "Ignoring updates"
    ],
    answer: "Multi-Factor Authentication"
}

];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");
const progressBar = document.getElementById("progress-bar");

function loadQuestion(){

    const currentQuiz = quizData[currentQuestion];

    questionElement.innerText = currentQuiz.question;

    optionsElement.innerHTML = "";

    currentQuiz.options.forEach(option => {

        const button = document.createElement("button");

        button.innerText = option;
        button.classList.add("option-btn");

        button.addEventListener("click", () => selectAnswer(option));

        optionsElement.appendChild(button);
    });

    updateProgress();
}

function selectAnswer(selected){

    const correct = quizData[currentQuestion].answer;

    if(selected === correct){
        score++;
        alert("✅ Correct Answer!");
    }
    else{
        alert("❌ Wrong Answer!");
    }
}

nextButton.addEventListener("click", () => {

    currentQuestion++;

    if(currentQuestion < quizData.length){
        loadQuestion();
    }

    else{

        questionElement.innerText = "🎉 Quiz Completed!";

        optionsElement.innerHTML = "";

        nextButton.style.display = "none";

        scoreElement.innerHTML =
        `Your Score: ${score} / ${quizData.length}`;
    }
});

function updateProgress(){

    const progress =
    ((currentQuestion) / quizData.length) * 100;

    progressBar.style.width = progress + "%";
}

loadQuestion();