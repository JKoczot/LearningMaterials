type OrderStatus = "ordered" | "completed"
type Identifier = string | number

type Pizza = {
    id: number,
    name: string,
    price: number
}

type Order = {
    id: number, 
    pizza: Pizza,
    status: OrderStatus
}


const menu: Pizza[] = [
    {id: 1, name: "Margharita", price: 8},
    {id: 2,name: "Pepperoni", price: 10},
    {id: 3,name: "Hawajska", price: 10},
    {id: 4,name: "Veggie", price: 9}
];

let nextOrderId = 1;
let cashInRegister = 100;
const orderHistory: Order[] = [];

function addNewPizza(pizzaObj: Pizza){
menu.push(pizzaObj)
}

function placeOrder(pizzaName: string){
const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
if (!selectedPizza){
    console.error(`${pizzaName} does not exist in the menu`)
    return
}
cashInRegister += selectedPizza.price
const newOrder: Order = {id: nextOrderId++, pizza: selectedPizza, status: "ordered"}
orderHistory.push(newOrder)
return newOrder
}

function completeOrder (orderId: number) {
const order = orderHistory.find(order => order.id === orderId)
if (!order){
    console.error(`${orderId} can't be found`)
    return
}
order.status = "completed"
return order
}

function getPizzaDetail(identifier: Identifier){ 
    if (typeof identifier === 'number'){
       return menu.find(pizza => pizza.id === identifier)
    } else if (typeof identifier === 'string'){
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
    } else {
        console.error(`${identifier} is not assigned to any pizza in the menu.`)
        return
    }
}

addNewPizza({id: 5, name: "Kurczakowa", price: 12})
addNewPizza({id: 6, name: "BBQ", price: 11})
addNewPizza({id: 7, name: "Ortolana", price: 10})

placeOrder("Kurczakowa")
completeOrder(1)
console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderHistory)