let surname = "калинин"

const len = surname.length
const middle = Math.floor(len/2)

let flag = 0
for (let i = 0; i < middle; i++){
    if (surname[i] != surname[len-i-1]){
        flag = 1
    }
}

if (flag == 0){
    console.log("Да, это палиндром")
}

else {
    console.log("Нет, это не палиндром")
}