var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);

    console.log('she work');
  };
  
  var button = document.getElementById("button");
  
  button.addEventListener('mouseover', animateButton, false);

  console.log('is she alive');