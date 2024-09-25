// Your code here
class Dragon{
  constructor(name, color){
    this.name = name;
    this.color = color;
  }
  breathesFire(){
    return `${this.name} breathes fire everywhere! BURN!!!!`;
  }

  static getDragons(...dragons){
    let arr = [];
    for(let i = 0; i < dragons.length; i++){
      arr.push(dragons[i].name);
    }
    return arr;
  };
}


/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
