const counter = {
    value: 0,
    increment (){
        this.value +=1;
    }, 
    decrement (){
        this.value -=1;
    },
};
console.log(value);
const incrementBtn = document.querySelector('button[data-action="increment"]');
console.log(incrementBtn);
const decrementBtn = document.querySelector('button[data-action="decrement"]');
console.log(decrementBtn);
decrementBtn.addEventListener('click', function(){
    counter.decrement();
    console.log(counter);
value.textContent = counter.value;
});
incrementBtn.addEventListener('click', function(){
    counter.increment();
    console.log(counter);
    value.textContent = counter.value;
    });