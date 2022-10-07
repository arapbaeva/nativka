const todoListID_1 = "12hf-45jf"
const todoListID_2 = "93cf-14kw"


const todoLists = [
    {
        id: todoListID_1,
        title: "What to learn?",
        filter: "all",
        tasks: [
            {id: 12, title: "JS", isDone: false},
            {id: 13, title: "TS", isDone: false},
            {id: 14, title: "HTML", isDone: false},
        ]
    },
    {
        id: todoListID_2,
        title: "What to buy?",
        filter: "all",
        tasks: [
            {id: 22, title: "Beer", isDone: false},
            {id: 23, title: "Meat", isDone: false},
            {id: 24, title: "Fish", isDone: false},
        ]
    },
]

const tasks = {
    [todoListID_1]: [
        {id: 12, title: "JS", isDone: false},
        {id: 13, title: "TS", isDone: false},
        {id: 14, title: "HTML", isDone: false},
    ],
    [todoListID_2]: [
        {id: 22, title: "Beer", isDone: false},
        {id: 23, title: "Meat", isDone: false},
        {id: 24, title: "Fish", isDone: false},
    ]
}

console.log(tasks[todoListID_1].find(t => t.id === 12).title)


//reduce
const nums = [10, 20, 30]
console.log(nums.reduce((acc, el) => acc + el, 0))  //60

              
