
const questions = [

  // PART I: TRUE OR FALSE

  {
    part: "tf",
    text: "One of the basic characteristics of philosophy is its rational attempt to make the world as a whole.",
    options: ["TRUE", "FALSE"],
    answer: 0,
    explanation: "Philosophy uses rational thinking to understand the world."
  },

  {
    part: "tf",
    text: "Studying philosophy helps to achieve intellectual and behavioral independence.",
    options: ["TRUE", "FALSE"],
    answer: 0,
    explanation: "This is a benefit of studying philosophy."
  },

  {
    part: "tf",
    text: "Citizens with low critical-thinking skills, creativity, and problem-solving abilities can contribute to society in a meaningful way.",
    options: ["TRUE", "FALSE"],
    answer: 1,
    explanation: "These skills support meaningful contribution to society."
  },

  {
    part: "tf",
    text: "Rationalists believe that knowledge is acquired through our senses and experiences.",
    options: ["TRUE", "FALSE"],
    answer: 1,
    explanation: "This describes empiricism rather than rationalism."
  },

  {
    part: "tf",
    text: "The study of philosophy does not enhance critical thinking and decision-making.",
    options: ["TRUE", "FALSE"],
    answer: 1,
    explanation: "Philosophy can develop these abilities."
  },

  // PART II: MULTIPLE CHOICE

  {
    part: "mc",
    text: "Which one is NOT correct about argument and explanation?",
    options: [
      "In an argument one tries to persuade the audience, but in an explanation one tries to explain.",
      "In argument, premises present reasons, but in explanation, explanans do the explaining.",
      "In both, the statement that precedes because has the same purpose and labeling.",
      "None."
    ],
    answer: 2
  },

  {
    part: "mc",
    text: "Which one is correct when you reason deductively?",
    options: [
      "If reasoning is valid and premises are true, the conclusion must be true.",
      "True premises always produce a false conclusion.",
      "The premises do not entail the conclusion.",
      "All."
    ],
    answer: 0
  },

  {
    part: "mc",
    text: "Among the following statements, which one is incorrect?",
    options: [
      "An argument consists of premises and a conclusion.",
      "The premises give reasons for the conclusion.",
      "The premises can be either true or false.",
      "In a good argument, the conclusion is implied by the premises."
    ],
    answer: null,
    explanation: "This question is excluded from scoring because the photographed choices appear ambiguous."
  },

  {
    part: "mc",
    text: "Which one is correct about Napoleon dying because he was poisoned with arsenic?",
    options: [
      "Napoleon died is the conclusion.",
      "He was poisoned with arsenic is the explanation.",
      "He was poisoned with arsenic is the premise.",
      "Because is a premise indicator."
    ],
    answer: 1
  },

  {
    part: "mc",
    text: "Which is a deductive argument?",
    options: [
      "From knowledge of a cause to an effect.",
      "A conclusion based on what someone said.",
      "From general truth to a particular case.",
      "A prediction about the future."
    ],
    answer: 2
  },

  {
    part: "mc",
    text: "If global warming happens, polar ice will decline. Polar ice will not decline. Therefore:",
    options: [
      "Global warming is happening.",
      "Polar ice will decline.",
      "Global warming is not happening.",
      "All but A."
    ],
    answer: 2
  },

  {
    part: "mc",
    text: "The above global warming argument is:",
    options: [
      "Deductive – valid.",
      "Inductive – strong.",
      "Inductive – valid.",
      "Hypothetical syllogism – invalid."
    ],
    answer: 0
  },

  {
    part: "mc",
    text: "An argument could be unsound:",
    options: [
      "When the premises are false.",
      "When the conclusion does not follow.",
      "When the argument is invalid.",
      "All."
    ],
    answer: 3
  },

  {
    part: "mc",
    text: "Most who live in Wolaita Sodo speak Wolaitatto. Belay lives there. Therefore, Belay speaks Wolaitatto. Which is correct?",
    options: [
      "The conclusion does not necessarily follow.",
      "The conclusion is probably true.",
      "It is an inductive argument.",
      "All."
    ],
    answer: 3
  },

  {
    part: "mc",
    text: "The Department of Defense Building has the shape of a hexagon. It follows that it has seven sides. This argument is:",
    options: [
      "Deductive – definition.",
      "Inductive – sign.",
      "Inductive – causation.",
      "Deductive – syllogism."
    ],
    answer: 0
  },

  {
    part: "mc",
    text: "Arguments based on similarity between things are:",
    options: [
      "Deductive – mathematical.",
      "Inductive – analogy.",
      "Inductive – causation.",
      "Deductive – categorical."
    ],
    answer: 1
  },

  {
    part: "mc",
    text: "Which one is incorrect?",
    options: [
      "A deductive argument is almost valid or invalid.",
      "An inductive argument is either weak or strong.",
      "An argument in logic never refers to disagreement.",
      "All."
    ],
    answer: 0
  },

  {
    part: "mc",
    text: "Which is a common characteristic of philosophical questions?",
    options: [
      "They are strictly empirical.",
      "They involve fundamental concepts.",
      "They are purely semantic.",
      "They are irrelevant to everyday situations."
    ],
    answer: 1
  },

  {
    part: "mc",
    text: "A branch of philosophy concerned with reality and existence is:",
    options: [
      "Existentialism.",
      "Cosmology.",
      "Metaphysics.",
      "Meta Ethics."
    ],
    answer: 2
  },

  {
    part: "mc",
    text: "Which branch explores beauty and the principles of art?",
    options: [
      "Epistemology.",
      "Metaphysics.",
      "Aesthetics.",
      "Ethics."
    ],
    answer: 2
  }

];

const form = document.getElementById("examForm");

const tfRoot =
  document.getElementById("trueFalseQuestions");

const mcRoot =
  document.getElementById("multipleChoiceQuestions");

let secondsLeft = 20 * 60;
let timerId = null;
let started = false;
let submitted = false;


// DISPLAY QUESTIONS

function renderQuestions(part, root) {

  questions
    .filter(q => q.part === part)
    .forEach((q, index) => {

      const questionIndex = questions.indexOf(q);

      const card = document.createElement("section");
      card.className = "question";

      const heading = document.createElement("h3");

      heading.textContent =
        `Question ${index + 1}. ${q.text}`;

      card.appendChild(heading);

      q.options.forEach((option, optionIndex) => {

        const label = document.createElement("label");
        label.className = "option";

        const input = document.createElement("input");

        input.type = "radio";
        input.name = `q${questionIndex}`;
        input.value = optionIndex;

        input.addEventListener("change", updateProgress);

        const text = document.createElement("span");

        text.textContent = part === "mc"
          ? `${String.fromCharCode(65 + optionIndex)}. ${option}`
          : option;

        label.append(input, text);

        card.appendChild(label);

      });

      root.appendChild(card);

    });

}

renderQuestions("tf", tfRoot);
renderQuestions("mc", mcRoot);


// UPDATE ANSWER PROGRESS

function updateProgress() {

  let answered = 0;

  questions.forEach((q, index) => {

    if (form.querySelector(
      `input[name="q${index}"]:checked`
    )) {
      answered++;
    }

  });

  document.getElementById("progress").textContent =
    `Answered: ${answered} / 20`;

}


// COUNTDOWN TIMER

function showTimer() {

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  document.getElementById("timer").textContent =
    `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  if (secondsLeft <= 0) {
    submitExam(true);
    return;
  }

  secondsLeft--;

}


// START EXAM

document.getElementById("startBtn")
  .addEventListener("click", function() {

    if (started) return;

    started = true;

    document.getElementById("startPanel").hidden = true;
    document.getElementById("examArea").hidden = false;

    showTimer();

    timerId = setInterval(showTimer, 1000);

  });


// SUBMIT BUTTONS

document.getElementById("submitBtn")
  .addEventListener("click", () => submitExam(false));

document.getElementById("submitBottom")
  .addEventListener("click", () => submitExam(false));


// AUTOMATIC GRADING

function submitExam(isAutomatic = false) {

  if (submitted) return;

  if (!isAutomatic &&
      !confirm("Are you sure you want to submit your exam?")) {
    return;
  }

  submitted = true;

  clearInterval(timerId);

  form.querySelectorAll("input").forEach(input => {
    input.disabled = true;
  });

  let correct = 0;
  let incorrect = 0;
  let unanswered = 0;
  let excluded = 0;

  const review = document.createElement("div");

  questions.forEach((q, index) => {

    const selected = form.querySelector(
      `input[name="q${index}"]:checked`
    );

    const item = document.createElement("div");
    item.className = "review-item";

    const title = document.createElement("div");
    title.textContent = `${index + 1}. ${q.text}`;

    item.appendChild(title);

    const status = document.createElement("p");

    if (q.answer === null) {

      excluded++;
      status.textContent =
        "Needs instructor review – excluded from score.";
      status.className = "small";

    } else if (!selected) {

      unanswered++;
      status.textContent = "Not answered.";
      status.className = "incorrect";

    } else if (Number(selected.value) === q.answer) {

      correct++;
      status.textContent = "Correct.";
      status.className = "correct";

    } else {

      incorrect++;
      status.textContent =
        `Incorrect. Correct answer: ${q.options[q.answer]}`;

      status.className = "incorrect";

    }

    item.appendChild(status);

    if (q.explanation) {

      const explanation = document.createElement("p");
      explanation.className = "small";
      explanation.textContent = q.explanation;

      item.appendChild(explanation);

    }

    review.appendChild(item);

  });


  const scoredQuestions = questions.length - excluded;

  const percentage =
    Math.round((correct / scoredQuestions) * 100);

  const result = document.getElementById("result");

  result.replaceChildren();

  const title = document.createElement("h2");

  title.textContent = isAutomatic
    ? "Time is up – exam submitted"
    : "Exam submitted";

  const score = document.createElement("div");

  score.className = "score";
  score.textContent =
    `${correct} / ${scoredQuestions} (${percentage}%)`;

  const summary = document.createElement("p");

  summary.textContent =
    `Correct: ${correct} · Incorrect: ${incorrect} · Unanswered: ${unanswered} · Needs review: ${excluded}`;

  const reviewTitle = document.createElement("h3");

  reviewTitle.textContent = "Answer Review";

  result.append(
    title,
    score,
    summary,
    reviewTitle,
    review
  );

  document.getElementById("examArea").hidden = true;

  result.hidden = false;

  result.scrollIntoView({ behavior: "smooth" });

}


// BASIC COPY RESTRICTIONS

function examIsActive() {
  return started && !submitted;
}

document.addEventListener("contextmenu", function(event) {
  if (examIsActive()) event.preventDefault();
});

document.addEventListener("copy", function(event) {
  if (examIsActive()) event.preventDefault();
});

document.addEventListener("cut", function(event) {
  if (examIsActive()) event.preventDefault();
});

document.addEventListener("selectstart", function(event) {
  if (examIsActive()) event.preventDefault();
});

document.addEventListener("keydown", function(event) {

  if (!examIsActive()) return;

  const key = event.key.toLowerCase();

  if (
    (event.ctrlKey || event.metaKey) &&
    ["c", "x", "u", "s", "p", "a"].includes(key)
  ) {
    event.preventDefault();
  }

  if (
    event.key === "F12" ||
    (event.ctrlKey && event.shiftKey &&
     ["i", "j", "c"].includes(key))
  ) {
    event.preventDefault();
  }

});
