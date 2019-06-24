const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false
    },
];

//FOR array
for(let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}
for(let todo of todos) {
    console.log(todo.text);
}

// forEach, map, filter
todos.forEach(function(todo) {
    console.log(todo.text);
});

const todoText = todos.map(function(todo) {
    return todo.text;    
});//return array of todo.text and assign in the todoText

console.log(todoText); // todos[i].text

//filter the true values and assign array in the todoCompleted
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted == true;
});

console.log(todoCompleted);

const todoCompleted1 = todos.filter(function(todo) {
    return todo.isCompleted == true;
}).map(function(todo) {
    return todo.text;
});

console.log(todoCompleted1);





