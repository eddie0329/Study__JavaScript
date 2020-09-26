// function Count() {

//   return {
//     _number,
//     inc: Count.prototype.function () {
//       _number += 1;
//     },
//     dec: Count.prototype.function () {

//     }
//   }
// }

function Count() {
  let _number = 0;

  return {
    inc: function() {
      _number += 1;
      console.log(_number);
    },
    dec: function() {
      _number -= 1;
      console.log(_number);
    }
  };
}

const number = new Count();

number.inc();

number.dec();
