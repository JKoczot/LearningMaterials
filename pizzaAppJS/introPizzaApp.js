// const menu = [
//     {name: "Margharita", price: 8},
//     {name: "Pepperoni", price: 10},
//     {name: "Hawajska", price: 10},
//     {name: "Veggie", price: 9}
// ]

// const nextOrderId = 1
// const cashInRegister = 100
// const orderQueue = []

// function addNewPizza(pizzaObj){
// menu.push(pizzaObj)
// }

// function placeOrder(pizzaName){
// const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
// cashInRegister += selectedPizza.price
// const newOrder = {id: nextOrderId++, pizza: selectedPizza, status: "ordered"}
// orderQueue.push(newOrder)
// return newOrder
// }

// function completeOrder (orderId) {
// const order = orderQueue.find(order => order.id === orderId)
// order.status = "completed"
// return order
// }

// addNewPizza({name: "Kurczakowa", cost: 12})
// addNewPizza({name: "BBQ", cost: 11})
// addNewPizza({name: "Ortolana", cost: 10})

// placeOrder("Kurczakowa")
// completeOrder("1")

// console.log("Menu:", menu)
// console.log("Cash in register:", cashInRegister)
// console.log("Order queue:", orderQueue)