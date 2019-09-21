console.log("Everything is Doable");

let easy_content=[]
let medium_content=[]
let hard_content=[]
let divArray = document.getElementsByClassName('question-list-base')[0];

let observer = new MutationObserver(function(){
    easy_content=document.getElementsByClassName('label label-success round');
    medium_content=document.getElementsByClassName('label label-warning round');
    hard_content=document.getElementsByClassName('label label-danger round');
    classesFound();
});

observer.observe(divArray, { attributes: false, childList: true, subtree: true });

// When you've got what you need, you should call this function to trigger a disconnect 
function classesFound()
{
    for(let i=1;i<easy_content.length;i++)
    {
        easy_content[i].innerText="doable";
        easy_content[i].style['background-color']="#00FF00";
    }
    for(let i=1;i<medium_content.length;i++)
    {
        medium_content[i].innerText="doable";
        medium_content[i].style['background-color']="#00FF00";
    }
    for(let i=1;i<hard_content.length;i++)
    {
        hard_content[i].innerText="doable";
        hard_content[i].style['background-color']="#00FF00";
    }
   observer.disconnect();
   observer.observe(divArray, { attributes: false, childList: true, subtree: true });

};
 