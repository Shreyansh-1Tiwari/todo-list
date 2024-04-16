// let button = document.querySelector('#btn');
// let input = document.querySelector('#form').value;
// let add = document.querySelector('.task');
// button.addEventListener('click' , function(){
//     if( input == ""){
//         alert("Please enter task");
//     }
//     else{
//         add.innerHTML += `
//         <div class = "tasks">
//             <span id = "taskname">
//                 ${input}
//             </span>
//             <button class = "delete">
//                 <i class="fa-solid fa-trash"></i>
//             </button>
//         </div>`
//     }
// })


let button = document.querySelector('#btn');
let input = document.querySelector('#form');
// console.log();
let add = document.querySelector('.task');
button.addEventListener('click', function(){
    // console.log(input);
    if(input.value === ""){
        // console.log();
        alert("Please enter task");
    }
    else{
        add.innerHTML += `
        <div class = "tasks">
            <span id = "taskname">
                ${document.querySelector('#form').value}
            </span>
            <button class="delete">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
        `;

        var curr_task = document.querySelectorAll('.delete');
        console.log(curr_task.length);
        for(var i = 0; i<curr_task.length; i++){
            curr_task[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        var take = document.querySelectorAll('.tasks');
        for(var i = 0; i<take.length; i++){
            take[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }
        document.querySelector('#form').value= "";
    }
})