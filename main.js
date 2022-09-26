//Nullish Coalescing Operator
// const idade = null;

// document.body.innerText = `Sua idade é: ${idade ?? "Não informado"}`

// Objetos
// const user = {
//     name: "Patrícia",
//     age: 28,
//     address: {
//         street: "Rua Teste",
//         number: 855,
//         neighborhood: "Rocinha"
//     },
// };

//Métodos de Objetos
// document.body.innerText = JSON.stringify(Object.keys(user))
// document.body.innerText = JSON.stringify(Object.values(user))
// document.body.innerText = JSON.stringify(Object.entries(user))

//Desestruturação
//Conseguir remover parte de um objeto para uma variável a parte

// function showAgeAndName({ age }) {
//     return age
// }
// const { address, age, nickname = "Pat" }  = user
// document.body.innerText = JSON.stringify({address, age, nickname})
//document.body.innerText = showAgeAndName(user)

// Rest Operator

//const { name, age, ...rest } = user
//document.body.innerText = JSON.stringify(rest)

//Também pode ser usado em números
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const [first, second, ...rest] = array

// document.body.innerText = JSON.stringify([first, second, rest ])

// Short Syntax
// const name = "Paty"
// const age = 28

// const user = {
//     name,
//     age
// }

// document.body.innerText = JSON.stringify(user)

//Optional Chaining

// const user = {
//     name: "Patrícia",
//     age: 28,
//     address: {
//         street: "Rua Teste",
//         number: 855,
//         neighborhood: {
//             zip: {
//                 code:22451272
//             }
//         },
//     },
//     // showFullAddress() {
//     //     return "Ok!"
//     // }
// };

// document.body.innerText = user.address?.neighborhood?.zip?.code ?? "Não Informado"
// document.body.innerText = user?.showFullAddress
// const key = "name"
// document.body.innerText = user[key]

//MÉTODOS DE ARRAYS