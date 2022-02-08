export default function counter(state = 0, action) {
    console.log('reducer Action catched : ',action.type)
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state -1;
        default: 
            return state;
    }
}