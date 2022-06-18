
jQuery(document).ready(function($){
    //fixando a barra de cabeçalho
    window.onscroll=function(){
        if(window.pageYOffset>140){
            $('#header').addClass("active");
        }else{
            $('#header').removeClass("active");
        }
    }
})

/*
//<!--ANIMACAO-->
<script>
    function displayAbout(){
        let arrow = document.getElementById('animation');
        arrow.classList.toggle('rotate');
        var display = document.getElementById('about');
        display.classList.toggle('ative');
    }
</script>
 //<!--//ANIMACAO-->
 */