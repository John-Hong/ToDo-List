var todos = ["Buy New Turtle"];

var input = prompt("What would you like to do?");

while (input !== "quit") {
if (input  === "list") {
	listTodos();
} else if(input === "new") {
	addTodo();
	} else if (input === "delete") {
		deleteTodo();
	}
	// Ask again for the new Todo
	input = prompt("What would you like to do?");
}

console.log("Bye Now");

function listTodos() { 
console.log("********");
// Print out to do and the number index.
	todos.forEach(function(todo, i) {
		console.log(i + ": " + todo);
	});
	console.log("********");
	}

function addTodo() {
	//ask for new todo
	var newTodo = prompt("Enter new todo");
	//add to todos at the end of the list
	todos.push(newTodo);
	console.log("Added ToDo");

}
function deleteTodo() {
	//ask for index of todo to be deleted
		var index = prompt("Enter index of todo to delete");
		//delete that that todo
		//splice();
		//delete index of any selection and delete 1 item.
		todos.splice(index,1);
		console.log("Deleted Todo");
}