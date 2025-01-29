type OrderStatus = "ordered" | "completed"
type Identifier = string | number
//type UpdatedPizza = Partial<Pizza>
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

let nextOrderId = 1;
let nextPizzaId = 1;
let cashInRegister = 100;

const menu: Pizza[] = [
    {id: nextPizzaId++, name: "Margharita", price: 8},
    {id: nextPizzaId++,name: "Pepperoni", price: 10},
    {id: nextPizzaId++,name: "Hawajska", price: 10},
    {id: nextPizzaId++,name: "Veggie", price: 9}
];

const orderHistory: Order[] = [];

function addNewPizza(pizzaObj: Omit<Pizza, "id">): Pizza {
    const newPizza: Pizza = {
        id: nextPizzaId++,
        ... pizzaObj
    }
    menu.push(newPizza)  
    return newPizza
}

function placeOrder(pizzaName: string): Order | undefined{
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

function completeOrder (orderId: number): Order | undefined {
const order = orderHistory.find(order => order.id === orderId)
if (!order){
    console.error(`${orderId} can't be found`)
    return
}
order.status = "completed"
return order
}

function getPizzaDetail(identifier: Identifier): Pizza | undefined { 
    if (typeof identifier === 'number'){
       return menu.find(pizza => pizza.id === identifier)
    } else if (typeof identifier === 'string'){
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
    } else {
        console.error(`${identifier} is not assigned to any pizza in the menu.`)
        return
    }
} 

addNewPizza({name: "Kurczakowa", price: 12})
addNewPizza({name: "BBQ", price: 11})
addNewPizza({name: "Ortolana", price: 10})

placeOrder("Kurczakowa")
completeOrder(1)
console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderHistory)