//User is now reusable with the use of Type Aliases
type User = {
    readonly id:number,
     name: string,
     play: (date: Date) => void
}

let user: User {
} = {
    id: 1,
    name: 'Brent',
    play: (date: Date) => {
        console.log(date)
    }
}

