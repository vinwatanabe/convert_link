$(document).ready(function(){
    $(".btn_converter").click(play);
    
    function play(){
        var codigo_link = $(".input_box").val();
        var codigo_inicio = codigo_link.replace("I:\\", "smb://172.16.32.36/ClientesID/");
        var pesquisar_codigo = codigo_inicio.search("\\\\");
        
        while(pesquisar_codigo > 0){
            var codigo_final = codigo_inicio.replace("\\", "/");
            var codigo_inicio = codigo_final;
            var pesquisar_codigo = codigo_inicio.search("\\\\");
        }
        
        $(".resultado").text(codigo_inicio);
    }
});
