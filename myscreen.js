// window.onload = function() {
//   document.getElementById('results').style.display = 'none';
// };

var answerList = [];

var longButton = document.getElementById("longButton");
longButton.onclick = function(){
  // event.target.longButton;
  answerList.push("long");
  longButton.disabled = 'true';
  document.getElementById("shortButton").disabled = 'true';
  console.log(answerList);
};

var shortButton = document.getElementById("shortButton");
shortButton.onclick = function(){
  // event.target.shortButton;
  answerList.push("short");
  shortButton.disabled = 'true';
  document.getElementById("longButton").disabled = 'true';
  console.log(answerList);
};

var enterButton = document.getElementById("enterButton");
enterButton.addEventListener("click", function(){
  event.preventDefault();

  console.log(answerList);

  // var radioInput = document.getElementsByClassName("radioInput");
  // radioAnswer.addEventListener("change", function(){
    var radioName = document.querySelectorAll(".radioInput");
    var selected = "";
    var radioNum = 0;
    for (var i = 0; i < radioName.length; i++) {
    var currentButton = radioName[i];
      if (currentButton.checked){
        radioNum = currentButton.value;
        }
        // return selected;
        // answerList.push(selected);
    };
    radioNum = Number(radioNum);
    // var radioNum = currentButton.value;
    // radioNum = Number(getRadioValue(radioName))
    if (radioNum === 1 || radioNum === 2){
      selected = "little";
      answerList.push(selected);
    }
    else if (radioNum === 3){
      selected = "medium";
      answerList.push(selected);
    }
    else if (radioNum === 4 || radioNum === 5){
      selected = "alot";
      answerList.push(selected);
    }
    console.log(answerList);

var dropdown = document.getElementById('dropdown');
var selectedDD = dropdown.options[dropdown.selectedIndex].value;
console.log(answerList);
var ddSelect = "";
  if (selectedDD === "big"){
    ddSelect = selectedDD;
  }
  else if (selectedDD === "small"){
    ddSelect = selectedDD;
  } else {
    ddSelect = selectedDD;
  }
  // return ddSelect;
  answerList.push(ddSelect);
  console.log(answerList);

// document.getElementById("displayTheResults").innerHTML = displayTheResults();

function displayTheResults(results) {
  switch(results){
    case 'long,little,big':
      return "Mountain Goat <img src='" + "http://i.imgur.com/TRWRYmb.jpg" + "'/>";
      break;

    case 'long,medium,big':
      return  "Valais Sheep <img src='" + "http://i.imgur.com/UD6rBnM.jpg" + "'/>";
      break;

    case 'long,alot,big':
      return "Samoyed <img src='" + "http://i.imgur.com/6c4bgS5.jpg" + "'/>";
      break;

    case 'long,little,small':
      return "Duster Budgie <img src='" + "http://i.imgur.com/7ERpdMF.jpg" + "'/>";
      break;

    case 'long,medium,small':
      return "Angora Rabbit <img src='" + "http://i.imgur.com/y4C4d0l.jpg" + "'/>";
      break;

    case 'long,alot,small':
      return "Maine Coon Cat <img src='" + "http://i.imgur.com/g4KzY8O.jpg" + "'/>";
      break;

    case 'short,little,big':
      return "Corn Snake <img src='" + "http://i.imgur.com/N3IMjmV.jpg" + "'/>";
      break;

    case 'short,medium,big':
      return "Green Iguana <img src='" + "http://i.imgur.com/651NHeH.jpg" + "'/>";
      break;

    case 'short,alot,big':
      return "Dalmation Dog <img src='" + "http://i.imgur.com/1UJvD24.jpg" + "'/>";
      break;

    case 'short,little,small':
      return "Siamese Fighting Fish <img src='" +  "http://i.imgur.com/nw8VIK4.jpg" + "'/>";
      break;

    case 'short,medium,small':
      return "Dwarf Hamster <img src='" +  "http://i.imgur.com/NbRh9kg.jpg" + "'/>";
      break;

    case 'short,alot,small':
      return "Sphynx Cat <img src='" +  "http://i.imgur.com/dp3fTMS.jpg" + "'/>";
      break;
      }
 }
// var test = displayTheResults();
// console.log(test);

document.getElementById('results').style.display = 'block';
var textInput = document.getElementById("textInput");
var nameInput = textInput.value;
document.getElementById("displayResults").innerHTML = nameInput + "<br>" + displayTheResults(answerList.toString());
})


// var modal = document.getElementsByClassName("modal");
// var currentModal = 0;
// modal[currentModal].classList.toggle('hidden');
