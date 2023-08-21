
class player {
constructor (name , coins, status, hasStar){
    this.name = name
    this.coins = coins
    this.status = status
    this.hasStar = hasStar 
}
setName (nameSelected){
    if(nameSelected === "Mario"){
        this.name = "Mario"
    } else if (nameSelected === "Luigi" ){
        this.name= "Luigi"
    }
}
hit(){
    if (this.hasStar === true){
        console.log("star has protected you")
        this.hasStar = false
    } else if ( this.status === "poweredUp" ){ 
        this.status = "big"

    } else if ( this.status === "big" ){ 
        this.status = "small"

    }else if ( this.status === "small" ){ 
        this.status = "dead"

    }
    Player.print()
    stopGame()
}
mushroom(){
     if ( this.status === "small" ){ 
        this.status = "big"

    } else if ( this.status === "big" ){ 
        this.status = "poweredUp"

    } else if (this.status === "poweredUp"){
        this.status = "StarPower"
        this.hasStar = true
    }
    Player.print()
    stopGame()
}
coinGain(){
    this.coins++
    Player.print()
    stopGame()
}
print(){
    console.log(`
    Name: ${this.name}
    Status: ${this.status}
    Coins: ${this.coins}`)
    if ( this.hasStar === true){
        console.log(`     you have a star.`)
    }
}



}
let nameSelector = () => {
const randomValue = Math.random();
  if (randomValue < 0.5) {
    Player.setName("Mario") ;
  } else {
    Player.setName("Luigi");
  }
}
const Player = new player("name", 0, "big" ,false)

nameSelector()
Player.print()

function eventSelect() { 
    const randomValue = Math.random();
    if (randomValue < 0.3333) {

         Player.hit();
      } else if (randomValue > 0.3333 && randomValue < 0.6666 ){

         Player.mushroom();
      } else { 

         Player.coinGain()
      }

}
const intervalID = setInterval(eventSelect, 3000)

function stopGame(){
    if (Player.status === "dead"){
        console.log("you have died")
        clearInterval(intervalID)
    }
}