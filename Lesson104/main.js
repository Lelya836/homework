// Создайте объект с вашим описанием(имя, возраст и т.д.).
// Создайте метод объекта, который в качестве аргумента будет принимать имя и возвращать строку ‘Hello “переданный аргумент”’.

const myProfile = {
    lena: {
        age: 27,
        gender: 'female',
        isAdmin: true,
        sayHello(name) {
            console.log(`hello ${name}`)
        }
    }
}
console.log(myProfile.lena)
myProfile.lena.sayHello('Anna')

// ============================== //

// Создайте массив объектов с описанием пользователей(такой мы делали в уроке). Объявите отдельную переменную, в которой будет 
// храниться количество простых пользователей, начальное значение будет - 0. Обойдите массив пользователей и если пользователь не 
// является админом - прибавьте к ранее созданной переменной единицу. После окончания работы цикла выведите в консоль переменную 
// с количеством простых пользователей.


const users = [
    {
    name: 'Lena',
        age: 27,
            gender: 'female',
                isAdmin: true,
    },
{
    name: 'Dany',
        age: 25,
            gender: 'male',
                isAdmin: false,
    },
{
    name: 'Dima',
        age: 27,
            gender: 'male',
                isAdmin: false,
    },
]


function consumer(users) {
    let numberUsers = 0
    for (let i = 0; i < users.length; i++) {
        if (users[i].isAdmin === false) {
            numberUsers++
        }
    }
    console.log(`Количество пользователей: ${numberUsers}`)
    return numberUsers
}
consumer(users)
