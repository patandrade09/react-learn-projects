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

// MÉTODOS DE ARRAYS
// map, filter, every, some, find, findIndex, reduce

//MAP
const arr = [1,2,3,4,5,6,7,8,9]

// const newArr = arr.map(function(item){
//     return item*2
// })

//OOOOU

// const newArr = arr.map(
//     item => {
//         return item*2
// }
// )
// document.body.innerText = JSON.stringify(newArr)
//SÓ USO O MAP QUANDO QUERO TRANSFORMAR O ARRAY EM OUTRA INFORMAÇÃO, MUDANDO ALGUMA COISA DENTRO DESSES ITENS

// FILTER

// const novoArray = arr.filter(function(item) {
//     return item % 2 != 0
// })

// const novoArray = arr
//     .filter(item => item %2 != 0)
//     .map(item => item*5)

// filter filtra o array, mas nao pode mudar o conteúdo
// podemos mesclar o map para que ele altere o conteudo do array. 

// document.body.innerText = JSON.stringify(novoArray)

// EVERY

// retorna um booleano
// const todosItensSaoNumeros = arr.every(item => typeof item == 'number')

// document.body.innerText = JSON.stringify(todosItensSaoNumeros)

// SOME
// o some é bem parecido com o every, a diferença é que ele não verifica se todos os item satisfazem aquela condição. Pelo menos um item

// const peloMenosUmItemNaoEUmNumero = arr.some(item => {
//     return typeof item != 'number'
// })

// document.body.innerText = JSON.stringify(peloMenosUmItemNaoEUmNumero)

// FIND
// O find serve para encontrar algum elemento dentro de um array que atenda a uma condição
// O find index segue a mesma premissa, mas para encontrar o índice da lista

// const numPar = arr.find(item => item % 2 != 0)

// document.body.innerText = JSON.stringify(numPar)

// REDUCE
// usado para pegar uma array e criar uma nova estrutura de dados a partir dessa array.

// const soma = arr.reduce(
//     (acc, item) => {
//         return acc + item
//     }, 0
// )

// document.body.innerText = JSON.stringify(soma)

// Promises
const buscaNoGitHub = async () => {
    try {
    const response = await fetch('https://api.github.com/users/patandrade09')
    const body = await response.json()
    console.log(body)
    }
    catch {
        console.log("errado")
    }
}

buscaNoGitHub()

// ou com async function


