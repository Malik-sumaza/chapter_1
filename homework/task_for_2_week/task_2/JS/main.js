// Exesize_1

// const time = function(min) {
//   if (min >= 0 && min <= 14) return "time 1";
//   else if (min >= 14 && min <= 29) return "time 2";
//   else if (min >= 29 && min <= 44) return "time 3";
//   else if (min >= 44 && min <= 59) return "time 4";
// };
// console.log(time(13));

// Exesize_2

// let time = function(number) {
//   if (isNaN(number)) return "Error";
//   return i * 3600;
// };
// console.log(time(5));

// Exesize_3
// const bol = function(first, second) {
//   if (first % second === 0) return true;
//   else return false;
// };
// console.log(bol(30, 2));

// Exesize_4

let lift = {
  floor: 1,
  minFloor: 1,
  maxFloor: 16,

  printFloor: function() {
    console.log("лифт на " + this.floor + " этаже");
  },
  upOneFloor: function() {
    if (this.floor < this.maxFloor) {
      this.floor++;
      this.printFloor();
    }
  },
  downOneFloor: function() {
    if (this.floor > this.minFloor) {
      this.floor--;
      this.printFloor();
    }
  },
  toFloor: function(goToFloor) {
    while (true) {
      if (
        goToFloor <= this.maxFloor &&
        goToFloor >= this.minFloor &&
        goToFloor !== this.floor
      ) {
        if (goToFloor > this.floor) {
          this.upOneFloor();
        } else if (goToFloor < this.floor) {
          this.downOneFloor();
        }
      } else {
        return;
      }
    }
  }
};
