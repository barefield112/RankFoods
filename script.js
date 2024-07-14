const currentItem = document.getElementById("current-item");
const rank1Btn = document.getElementById("btn1");
const rank2Btn = document.getElementById("btn2");
const rank3Btn = document.getElementById("btn3");
const rank4Btn = document.getElementById("btn4");
const rank5Btn = document.getElementById("btn5");
const restartBtn = document.getElementById("reset");
const rank1Slot = document.getElementById("rank1");
const rank2Slot = document.getElementById("rank2");
const rank3Slot = document.getElementById("rank3");
const rank4Slot = document.getElementById("rank4");
const rank5Slot = document.getElementById("rank5");

rank1Btn.addEventListener('click', moveItemToRank1);
rank2Btn.addEventListener('click', moveItemToRank2);
rank3Btn.addEventListener('click', moveItemToRank3);
rank4Btn.addEventListener('click', moveItemToRank4);
rank5Btn.addEventListener('click', moveItemToRank5);
restartBtn.addEventListener('click', startOver);

const foods = [
    "Pizza",
    "Burger",
    "Sushi",
    "Pasta",
    "Tacos",
    "Salad",
    "Steak",
    "Ice Cream",
    "Fried Chicken",
    "Pancakes",
    "Sandwich",
    "Soup",
    "French Fries",
    "Hot Dog",
    "Nachos",
    "Doughnuts",
    "Cheesecake",
    "Burrito",
    "Curry",
    "Ramen",
    "Lasagna",
    "Muffins",
    "BBQ Ribs",
    "Waffles",
    "Omelette",
    "Quesadilla",
    "Chili",
    "Chocolate Cake",
    "Meatballs",
    "Grilled Cheese",
    "Fajitas",
    "Salmon",
    "Chicken and Rice",
    "Brownies",
    "Apples",
    "Spaghetti",
    "Lobster",
    "Caesar Salad",
    "French Toast",
    "Sushi Roll",
    "Fried Eggs",
    "Bagel with Cream Cheese",
    "Shepherd's Pie",
    "Crab Cakes",
    "Bacon",
    "Mashed Potatos",
    "Kiwi",
    "Shrimp Cocktail",
    "Stuffed Peppers",
    "Macaroni and Cheese",
    "Chicken Parmesan",
    "Greek Salad",
    "Jalapeno Poppers",
    "Philly Cheese Steak",
    "Dinner Roles",
    "Croissant",
    "Chicken Wings",
    "Fish and Chips",
    "Spring Rolls",
    "Guacamole",
    "Beef Stroganoff",
    "Apple Pie",
    "Asparagus",
    "Hummus",
    "Ratatouille",
    "Prime Rib",
    "Lamb Chops",
    "Beef Tacos",
    "Scrambled Eggs",
    "Crab Legs",
    "Baked Ziti",
    "Cobb Salad",
    "Cannoli",
    "Eggs Benedict",
    "Chicken Alfredo",
    "Dim Sum",
    "Tuna Salad",
    "Gyro",
    "Pierogi",
    "Miso Soup",
    "Pulled Pork Sandwich",
    "Banana Bread",
    "Risotto",
    "Chicken Cordon Bleu",
    "Roasted Brussels Sprouts",
    "Lobster Bisque",
    "Tofu Stir-fry",
    "Cheeseburger",
    "Shrimp Scampi",
    "Gnocchi",
    "Onion Rings",
    "Cornbread",
    "Jambalaya",
    "Baklava",
    "Shrimp Fried Rice",
    "Beef Wellington",
    "Pork Chops",
    "Eggs Florentine",
    "Pumpkin Pie",
    "Caesar Wrap"
];

let numberOfTurns = 0;
let rank1Filled = false;
let rank2Filled = false;
let rank3Filled = false;
let rank4Filled= false;
let rank5Filled = false;
let foodsNamed = [];

currentItem.textContent = getRandomFood(foods);

function getRandomFood(foods) {
    let validRandomItem = false;
    let randomIndex; 
    while(!validRandomItem){
      randomIndex = getRandomInt(0,  foods.length -1);
      if(!foodsNamed.includes(foods[randomIndex])){
        validRandomItem = true;
      }
    }
    foodsNamed.push(foods[randomIndex]);
    return foods[randomIndex];
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeCurrentItem(){
    numberOfTurns++;
    currentItem.textContent = getRandomFood(foods);
    checkForEnd();
}

function moveItemToRank1(){
  rank1Slot.textContent = currentItem.textContent;
  rank1Filled = true;
  rank1Btn.setAttribute("disabled", true);
  changeCurrentItem();
}

function moveItemToRank2(){
    rank2Slot.textContent = currentItem.textContent;
    rank2Filled = true;
    rank2Btn.setAttribute("disabled", true);
    changeCurrentItem();
  }

  function moveItemToRank3(){
    rank3Slot.textContent = currentItem.textContent;
    rank3Filled = true;
    rank3Btn.setAttribute("disabled", true);
    changeCurrentItem();
  }

  function moveItemToRank4(){
    rank4Slot.textContent = currentItem.textContent;
    rank4Filled = true;
    rank4Btn.setAttribute("disabled", true);
    changeCurrentItem();
  }
  function moveItemToRank5(){
    rank5Slot.textContent = currentItem.textContent;
    rank5Filled = true;
    rank5Btn.setAttribute("disabled", true);
    changeCurrentItem();
  }
  
  function checkForEnd(){
    if(numberOfTurns === 4){
      if(!rank1Filled){
        rank1Slot.textContent = currentItem.textContent;
        rank1Btn.setAttribute("disabled", true);
      }
      else if(!rank2Filled){
        rank2Slot.textContent = currentItem.textContent;
        rank2Btn.setAttribute("disabled", true);
      }
      else if(!rank3Filled){
        rank3Slot.textContent = currentItem.textContent;
        rank3Btn.setAttribute("disabled", true);
      }
      else if(!rank4Filled){
        rank4Slot.textContent = currentItem.textContent;
        rank4Btn.setAttribute("disabled", true);
      }
      else if(!rank5Filled){
        rank5Slot.textContent = currentItem.textContent;
        rank5Btn.setAttribute("disabled", true);
      }
      currentItem.textContent = "Game Over";
    }
  }

  function startOver(){
    window.location.reload();
  }