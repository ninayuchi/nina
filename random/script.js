var path = document.querySelector(".st0");
var pathLength = path.getTotalLength();
console.log(pathLength);

path.style.strokeDasharray = pathLength + ' ' + pathLength;
path.style.strokeDashoffset = pathLength;

path.getBoundingClientRect();

window.addEventListener("scroll", function(e) {
 
var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    
   if (scrollPercentage <= .28){
    var drawLength = pathLength * scrollPercentage * 2 ;
  } else {
    var drawLength = (pathLength * .56) + (.35 * pathLength * scrollPercentage);
  } 
  
console.log(scrollPercentage);

  // Draw in reverse
  path.style.strokeDashoffset = pathLength - drawLength;
    
  // When complete, remove the dash array, otherwise shape isn't quite sharp
 // Accounts for fuzzy math
  if (scrollPercentage >= 0.99) {
    path.style.strokeDasharray = "none";
    
  } else {
    path.style.strokeDasharray = pathLength + ' ' + pathLength;
  }
  
});