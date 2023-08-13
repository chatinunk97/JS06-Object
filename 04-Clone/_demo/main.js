const todo = {
    task: "Do HW",
    complete : false,
    due_date : "sunday"

}

const newTodo = Object.assign({},todo);
console.log(newTodo);