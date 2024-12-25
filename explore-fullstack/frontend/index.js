const span=document.querySelector('#span');
const container=document.querySelector('.container');
// span.innerText=":4";
async function getdata(){
    try{
        let response=await fetch("http://localhost:3000/jokes")
        const data=await response.json();
        const val=Array.from(data);
        console.log(val);
        console.log(data);
        let ele= document.createElement('div');
        for (const joke of val) {
           let id=joke.id;
           let title=joke.title;
           let content=joke.content;
          ele.innerHTML=`<h1>${id}</h1><br><h2>${title}</h2><br><h3>${content}</h3>`;
        //   console.log(ele);
        // container.appendChild(ele);

        }
        span.innerText=`${data.length}`;
    }
    catch(err){
        console.log(err);
    }
}
getdata();
