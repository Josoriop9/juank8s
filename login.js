$("body").prepend(`<div 
style= "display:flex;"
id="div1">
<h3>Lorem ipsum dolor sit ametNon quod</h3>
</div>`);


$("#btn4").click(() => {
    $("#div1").toggle("slow", function(){
    });
    apiAjax();
  });

function apiAjax () { 
    const $fetch = document.getElementById("fetch");
    $fragment = document.createDocumentFragment();
    
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
        console.log(res);
        return res.json();
    })
    .then((json) => {
        console.log(json);
        json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name}--${el.email}--${el.phone}`
        $fragment.appendChild($li);
    });
        $fetch.appendChild($fragment)        
    });
    }




