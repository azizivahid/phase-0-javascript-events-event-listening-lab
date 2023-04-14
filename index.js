const input = document.getElementById('button');

function addingEventListener() {
    input.addEventListener ('click' , function clickAlert (){
        alert('I was clicked!')
    }
    );
};

addingEventListener();

