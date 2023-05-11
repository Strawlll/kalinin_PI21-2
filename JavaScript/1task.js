let solution = 0
let solved = 0
alert("Riddle 1: ...")
const answer1 = prompt("Write the right answer: ")
let answer = prompt("Write the intended answer: ")

if (answer1 == answer){
    alert("Верно:)")
    solved += 1
}
else {
    alert("Неверно :(")
}

alert("Riddle 2: ...")
const answer2 = prompt("Write the right answer: ");
answer = prompt("Write the intended answer: ")

if (answer2 == answer){
    alert("Верно :)")
    solved += 1
}
else {
    alert("Неверно :(")
}

alert("You solved: " + solved)
