console.log("Everything is Doable");



 let divArray = document.getElementById('question-detail-app');
 
 //old version

if(divArray!=undefined)
{
      let content=[]
      let observer = new MutationObserver(function(){
      content=document.getElementsByClassName('difficulty-label');

         classesFound();
      });

      observer.observe(divArray, { attributes: false, childList: true, subtree: true });

      // When you've got what you need, you should call this function to trigger a disconnect 
      function classesFound(){
         content[0].innerText="doable";
         content[0].style['background-color']="#00FF00";
         observer.disconnect();
         observer.observe(divArray, { attributes: false, childList: true, subtree: true });

      };
}

//new version
else
{
    divArray = document.getElementById('app');

   let content=[];
    let observer = new MutationObserver(function(){
    content=document.getElementsByTagName('div');
   
    for(let i=0;i<content.length;i++)
    {
       if(content[i].hasAttribute('diff') &&( content[i].innerText=='Easy' ||content[i].innerText=='Medium' ||content[i].innerText=='Hard'  ))
       {
          content[i].innerText="Doable";
          content[i].style['color']="#00FF00";
          classesFound();
          break;
       }
    }
    
    });
   
    observer.observe(divArray, { attributes: false, childList: true, subtree: true });
   
   // When you've got what you need, you should call this function to trigger a disconnect 
   function classesFound(){
     observer.disconnect();
     observer.observe(divArray, { attributes: false, childList: true, subtree: true });

   };
}


