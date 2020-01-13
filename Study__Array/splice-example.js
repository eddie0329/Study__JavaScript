const month = ['Jan', 'March', 'April', 'May'];
month.splice(1, 0, 'Feb');
console.log(month); // [ 'Jan', 'Feb', 'March', 'April', 'May' ]

month.splice(4, 1); // [ 'Jan', 'Feb', 'March', 'April' ]
console.log(month);

month.splice(2, 1);
console.log(month); // [ 'Jan', 'Feb', 'April' ]
