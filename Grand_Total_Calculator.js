let button = document.querySelector('button');
let billValue = document.querySelector('.bill-value');
let people = document.querySelector('.people');
let diffPeople = document.querySelector('.diff-people');
let outcome = document.querySelector('.answer');

let ten = document.querySelector('.ten')
let fifthteen = document.querySelector('.fithteen');
let twenty = document.querySelector('.twenty');
let twentyfive = document.querySelector('.twentyfive');
let answer2 = document.querySelector('.answer2');

button.addEventListener('click', () => {
  let sum = billValue.value/diffPeople.value;
  if (isNaN(billValue.value)) {
    alert('Please enter a number!')
  }
  
  outcome.innerHTML = `<h4>The split amount is:</h4> <h3>$${sum}</h3>`;
});

ten.addEventListener('click', () => {
  let sum = billValue.value * 0.10;
  answer2.innerHTML = `<h3>$${sum}</h3>`;
});

fifthteen.addEventListener('click', () => {
  let sum = billValue.value * 0.15;
  answer2.innerHTML = `<h3>$${sum}</h3>`;
});

twenty.addEventListener('click', () => {
  let sum = billValue.value * 0.20;
  answer2.innerHTML = `<h3>$${sum}</h3>`;
});

twentyfive.addEventListener('click', () => {
  let sum = billValue.value * 0.25;
  answer2.innerHTML = `<h3>$${sum}</h3>`;
});
