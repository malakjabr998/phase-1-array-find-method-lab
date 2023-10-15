// code your solution here
const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    //...
  ]
function superbowlWin(array){
   const winningGame = array.find(game => game.result === "W")
   if (winningGame){
    return winningGame.year
   } else {
    return undefined
   }
   
}
superbowlWin(record)