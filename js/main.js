window.addEventListener('load', function(){
    let valor = 200;
    let cantidad = document.getElementById('cantidad');
    let categoria = document.getElementById('categoria');
    let total = document.getElementById('total');
    let borrar =document.getElementById('borrar');
    let resumen = document.getElementById('resumen');
    
    resumen.addEventListener('click', function(){
        function calculo(descuento){
        
            let costo = (valor-(valor*descuento))*cantidad.value;
            return costo;
        };
        


        switch(categoria.value){
            case"estudiante":
                    total.value = 'Total a pagar : $ ' + calculo(0.8);
            break;

            case"trainee":
            total.value = 'Total a pagar: $ ' + calculo(0.5);
            break;
            
            case"junior":
            total.value = 'Total a pagar: $ ' + calculo(0.15);
            break;

            default:
                total.value = 'Seleccione una categoria';
            break;
        }
    }); 


    borrar.addEventListener('click', function(){
    document.getElementById('correo').value = "",
    document.getElementById('cantidad').value = "",
    document.getElementById('categoria').value = "",
    document.getElementById('name').value = "",
    document.getElementById('apellido').value = "",
    document.getElementById('total').value = "";
    });

    });

 