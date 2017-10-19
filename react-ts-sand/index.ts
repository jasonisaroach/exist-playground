function greeter(person: string) {
  return "Hello, " + person;
}

var user = "John Doe";

document.body.innerHTML = greeter(user);
// console.log(greeter(user));