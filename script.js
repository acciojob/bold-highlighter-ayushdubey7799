const strng = document.getElementsByTagName('strong');
function highlight() {
    //Write your code here
	
  for(x of strng){
	  x.style.color ='green';
  }

}


function return_normal() {
    //Write your code here
  for(x of strng){
	  x.style.color = '';
  }
    
}