

class Animal {
  constructor(name, species, color, weight, gender, img){
    this.name = name;
    this.species = species;
    this.color = color;
    this.weight = weight;
    this.gender = gender;
    this.attraction = Math.floor(Math.random() * 10);
    this.img = img;
  }
  
}

let Gerome = new Animal('Gerome','Aligator', 'Pink', "500lbs", "Gender Fluid")
let Phillis = new Animal('Phillis', 'Baboon', 'Teal', '175lbs', 'Female')
let Jimminy = new Animal('Jimminy', 'Cricket', 'Green', '.1lbs', 'Male')
let animals = [Gerome, Phillis, Jimminy]

let matches = {
  match1 : 'Choose A Lover',
  match2 : 'Choose A Lover',
  matchObj : Gerome, 
  match2Obj: Phillis,
  result: 'Will they work out?'
}


function drawLove(){
let template = ''
template +=`
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle mb-3 p-3 text-warning" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   <h2> Lover #1 </h2>
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
  <a class="dropdown-item" onclick="choiceOne('${animals[0].name}')">${animals[0].name}</a>
  <a class="dropdown-item" onclick="choiceOne('${animals[1].name}')">${animals[1].name}</a>
  <a class="dropdown-item" onclick="choiceOne('${animals[2].name}')">${animals[2].name}</a>
  </div>
</div>
<div class = "card bg-info text-warning pt-3" > <h2>${matches.match1} </h2>
<div class="m-2">
<h3 class="text-center"> ${matches.matchObj.img}</h3>
<h3 class="text-center">Name : ${matches.matchObj.name}</h3>
<h3 class="text-center">Species : ${matches.matchObj.species}</h3>
<h3 class="text-center">Gender : ${matches.matchObj.gender}</h3>
<h3 class="text-center">Color : ${matches.matchObj.color}</h3>
<h3 class="text-center">Weight : ${matches.matchObj.weight}</h3>
</div>

</div>
`

document.getElementById('match').innerHTML= template
}

function choiceOne(animal){
  switch(animal){
    case 'Jimminy': matches.match1 = 'Jimminy', matches.matchObj = Jimminy
    break;
    case 'Gerome': matches.match1 = 'Gerome', matches.matchObj = Gerome
    break;
    case 'Phillis': matches.match1 = 'Phillis', matches.matchObj = Phillis
    break;
  }
  drawLove()
}

function drawLoveTwo(){
  let template = ''
  template +=`
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle mb-3 p-3 text-warning" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
     <h2> Lover #2 </h2>
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" onclick="choiceTwo('${animals[0].name}')">${animals[0].name}</a>
    <a class="dropdown-item" onclick="choiceTwo('${animals[1].name}')">${animals[1].name}</a>
    <a class="dropdown-item" onclick="choiceTwo('${animals[2].name}')">${animals[2].name}</a>
    </div>
  </div>
  <div class = "card bg-info text-warning p-2" > <h2> ${matches.match2} </h2>
  <div class=" m-2 ">
<h3 class="text-center">Name : ${matches.match2Obj.name}</h3>
<h3 class="text-center">Species : ${matches.match2Obj.species}</h3>
<h3 class="text-center">Gender : ${matches.match2Obj.gender}</h3>
<h3 class="text-center">Color : ${matches.match2Obj.color}</h3>
<h3 class="text-center">Weight : ${matches.match2Obj.weight}</h3>
</div>
  </div>
  `

document.getElementById('match2').innerHTML= template
}

function choiceTwo(animal){
  switch(animal){
    case 'Jimminy': matches.match2 = 'Jimminy', matches.match2Obj = Jimminy
    break;
    case 'Gerome': matches.match2 = 'Gerome', matches.match2Obj = Gerome
    break;
    case 'Phillis': matches.match2 = 'Phillis', matches.match2Obj = Phillis
    break;
  }
  drawLoveTwo()
 
}




function drawAnimals(){
  let template = ''
  for(let i = 0; i < animals.length; i++){
  template += `
  <div class="card m-2 bg-info text-warning">
     <h2 class="text-center">Name : ${animals[i].name}</h2>
     <h4 class="text-center">Species : ${animals[i].species}</h4>
     <h4 class="text-center">Gender : ${animals[i].gender}</h4>
     <h4 class="text-center">Color : ${animals[i].color}</h4>
     <h4 class="text-center">Weight : ${animals[i].weight}</h4>
   </div>

   
  `

  document.getElementById('animals').innerHTML= template
 }
}

function drawResult(){
  let template = '';
  template +=`
  <h2>${matches.result}</h2>
  `

  document.getElementById('result').innerHTML= template
}


function findLove(){
  if(matches.match1 == matches.match2) {
    alert("You cant love yourself")
  }
  if(matches.matchObj.attraction >= 6){
    matches.result = 'Theyre in love!'
  }
  else if(matches.matchObj.attraction > 4){
    matches.result = 'Unclear'
  }
   else {
   matches.result = 'They wont work'
  }
  drawResult()
}






let boiseAnimals = [Gerome, Phillis, Jimminy]

class Zoo {
  constructor(name, zoo, ethics){
    this.name = name;
    this.zoo = zoo;
    this.ethics = ethics;
  }

}

let Boisezoo = new Zoo('Boise Zoo', boiseAnimals, "Low")


drawLove();
drawLoveTwo();
drawAnimals();
drawResult();


