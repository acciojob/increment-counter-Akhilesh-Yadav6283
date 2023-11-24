//your JS code here. If required.
const counterElement = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');

let counterValue=0;
counterElement.textContent=counterValue;

function buttonFunction(){
 alert(counterValue) ;
	counterValue++;
counterElement.textContent=counterValue;	
}
  // incrementBtn.addEventListener('click', handleIncrement);
