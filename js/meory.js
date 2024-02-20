//creating an array of objects for our game elements


const elements = [
    {
        name : '1',
        img : './Assests/1.jpg'
    },
    {
        name : '2',
        img : './Assests/2.jpg'
    },
    {
        name : '3',
        img : './Assests/3.jpg'
    },
    {
        name : '4',
        img : './Assests/4.jpg'
    },
    {
        name : '5',
        img : './Assests/5.jpg'
    },
    {
        name : '6',
        img : './Assests/6.jpg'
    },
   
    {
        name : '1',
        img : './Assests/1.jpg'
    },
    {
        name : '2',
        img : './Assests/2.jpg'
    },
    {
        name : '3',
        img : './Assests/3.jpg'
    },
    {
        name : '4',
        img : './Assests/4.jpg'
    },
    {
        name : '5',
        img : './Assests/5.jpg'
    },
    {
        name : '6',
        img : './Assests/6.jpg'
    },
    
]

//console.log(elements);

elements.sort(()=> 0.5 - Math.random());


const display = document.querySelector('#game');
//console.log(display);


let cardsClicked = []  //To store the cards that we have clicked

let cardsIds = []   //it is used to store the id

const won = []



function createBoard(){
    for(let i = 0; i<elements.length; i++){
       const cards =document.createElement('img'); 
       cards.setAttribute('src', './Assests/bg.jpg')
       cards.setAttribute('id', i)
       //console.log(cards);
       //Here we are appending the elements in div element
       display.append(cards)
        cards.style.padding= '3px'
       //adding eventlistners to click the cards (to flip the card)

       cards.addEventListener('click',flipCard)
    }
}

createBoard()


//funtion to flip the card when click

function flipCard(){
      let cardId =this.getAttribute('id'); //this keyword pointsout the attribute or the particular id 
       //console.log('clicked', cardId);  //- It is used to check the which card is clicked

     cardsClicked.push(elements[cardId].name);//based on the id we're getting in CardId(indexvalue), we're passing it 
                                        //in elements(shuffled element)
     
    cardsIds.push(cardId)
 //  console.log(cardsClicked);
  // console.log(cardId);

    this.setAttribute('src', elements[cardId].img) //passing images from the object 
    if(cardsClicked.length===2){
        setTimeout(checkMatch, 500)
    }

}


//this function is used to check two cards weather it is match or not.


function checkMatch(){

   const final = document.querySelectorAll('img');

   // console.log('check match');
    if(cardsClicked[0]==cardsClicked[1]){    //checks the array
        document.getElementById('retry').innerHTML = 'Good keep Going...'
        final[cardsIds[0]].setAttribute('src','./Assests/white.jpg');   //makes background white on the cards that we click
        final[cardsIds[1]].setAttribute('src','./Assests/white.jpg');
        final[cardsIds[0]].removeEventListener('click', flipCard);
        final[cardsIds[0]].removeEventListener('click', flipCard);       //it removes the events in the cards

        won.push(cardsClicked)
    }else{
        final[cardsIds[0]].setAttribute('src','./Assests/bg.jpg');   //flipping it again(changing the background color)
        final[cardsIds[1]].setAttribute('src','./Assests/bg.jpg');   
        alert('Sorry Try Again')

    }

    cardsClicked= [];
    cardsIds=[]        //making empty after choosen

    document.getElementById('result').innerHTML= won.length;  //score displaying

    if(won.length== 6){
        alert('Congratulations You Found all the Matches')
    }

}