const card = document.querySelector('.item');


  card.addEventListener('mouseenter', handleMouseEnter);
  card.addEventListener('mouseleave', handleMouseLeave);


  function handleMouseEnter (){
    document.body.style.backgroundColor = '#707b7c '; 

  }

  function handleMouseLeave (){
    document.body.style.backgroundColor = 'black'; 

  }