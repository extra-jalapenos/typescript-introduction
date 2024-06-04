// shorthand
let age: number = 29;
let firstName: string = "Ally";
let isCatFriendly: boolean = true;
let games: string[] = [];


console.log(age)
console.log(firstName)
console.log(isCatFriendly)
console.log(games)

games.push("APEX")
games.push("AoA")

console.log(games)

enum StatusDescription {
	"active",
	"inactive"
}

let test = StatusDescription.active

console.log(test)
