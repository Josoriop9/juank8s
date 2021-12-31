$("body").prepend(`<div 
style= "display:flex;"
id="div1">
<h3>Lorem ipsum dolor sit ametNon quod</h3>
</div>`);


$("#btn4").click(() => {
    $("#div1").toggle("slow", function(){
    });
  });


    




