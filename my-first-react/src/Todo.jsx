// export default function Todo({task, isDone}){
//     return (
//         <li>Task: {task}</li>

//     )
// }

//conditional rendaring option-1
// export default function Todo({task, isDone}){
//     if(isDone){
//         return <li>FInished: {task}</li>
//     } else {
//         return <li>Work on: {task}</li>
//     }
// }

//conditional rendaring option-2
export default function Todo({task, isDone}){
    if(isDone){
        return <li>FInished: {task}</li>
    } return <li>Work on: {task}</li>
}