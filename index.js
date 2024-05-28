document.addEventListener('click', function(e){
/*
Challenge:
1. Remove the "unread" class from the 
   parentElement of the clicked element.
*/
    document.getElementById(e.target.id).parentElement.classList.add('read')
    document.getElementById(e.target.id).parentElement.classList.remove("unread")
})