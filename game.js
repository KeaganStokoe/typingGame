// define the time limit
let TIME_LIMIT = 60;

// define quotes to be used
let quotes_array = [
  "You'd get very rich if you thought of yourself as having a card with only twenty punches in a lifetime, and every financial decision used up one punch. You’d resist the temptation to dabble. You'd make more good decisions and you'd make more big decisions.",
  "Failure is the condiment that gives success its flavor.",
  "You are not nameless to me. Do not remain nameless to yourself – it is too sad a way to be.",
  "I want to read only what I’ll want to reread — the definition of a book worth reading once.",
  "If you only read the books that everyone else is reading, you can only think what everyone else is thinking.",
];

// selecting required elements
let timer_text = document.querySelector(".curr_time");
let accuracy_text = document.querySelector(".curr_accuracy");
let error_text = document.querySelector(".curr_errors");
let cpm_text = document.querySelector(".curr_cpm");
let wpm_text = document.querySelector(".curr_wpm");
let quote_text = document.querySelector(".quote");
let input_area = document.querySelector(".input_area");
let restart_btn = document.querySelector(".restart_btn");
let cpm_group = document.querySelector(".cpm");
let wpm_group = document.querySelector(".wpm");
let error_group = document.querySelector(".errors");
let accuracy_group = document.querySelector(".accuracy");

let timeLeft = TIME_LIMIT;
let timeElapsed = 0;
let total_errors = 0;
let errors = 0;
let accuracy = 0;
let characterTyped = 0;
let current_quote = "";
let quoteNo = 0;
let timer = null;

function startGame() {
}