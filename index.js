let currentQuestion = 0;
let score = 0;

let container = document.getElementById("Quizzz");
let questionEl = document.getElementById("question");
let opt1 = document.getElementById("option1");
let opt2 = document.getElementById("option2");
let opt3 = document.getElementById("option3");
let opt4 = document.getElementById("option4");

function Question(text, answer, options) {
  this.text = text;
  this.answer = answer;
  this.options = options;
}

let questions = [
  new Question("are you upset about the class has switched to online", "yes", [
    "no",
    "maybe",
    "yes",
    "don't care"
  ]),
  new Question(
    "if an bat and a ball cost $1.10 together, and the ball is $1 more then the bat. how much is the ball",
    "$1.05",
    ["$1.05", "$1", "$.05", "$.10"]
  ),
  new Question(
    "what makes a kangaroo",
    "one donkey and one rabbit as parents",
    [
      "what carbron and nitrogen becomes after billions of years of cosmic evolution and nature selecion",
      "one donkey and one rabbit as parents",
      "creationism",

      "manufactured and produced by Toyota(®) and FIFA"
    ]
  ),
  new Question(
    "In the first story arc of season 7, in Star Wars the Clone Wars; who does Caption Rex resuce",
    "Clone Trooper: Echo",
    ["Asoka Tano", "The Senate", "Clone Trooper: Fives", "Clone Trooper: Echo"]
  ),
  new Question(
    "which Egyptian god defeats, Seth god of chaos",
    "Horus"[("Osiris", "Horus", "Isis", "Zues")]
  )
];
let allQuestion = questions;
console.log(questions[2].answer == questions[0].options[2] ? "wrong" : "right");
console.log(questions[0].options[1]);
