/*declaro las ID y class del form*/
let nombreInput = document.querySelector('#nombre'),
apellidoInput = document.querySelector('#apellido'),
emailInput = document.querySelector('#email');

let cantInput = document.querySelector('#cantidad'),
    catInput = document.querySelector('#categoria'),
    total = document.querySelector('.precio');

//Calculando el precio total
let cantSelec = 0, catSelec = "sinDesc"; /*declaro el value del select */

cantInput.addEventListener('blur', calcPrecio); /*añade un evento para la func. calcPrecio */
catInput.addEventListener('blur', calcPrecio);

function calcPrecio(e){
    e.preventDefault;

    e.target.id === 'cantidad' ? 
        cantSelec = e.target.value : 
        catSelec = e.target.value;
    
    precio = (cantSelec * 1000);

    switch(catSelec){
        case 'ciclista':
            precio *= 0.39;
            break;
            case 'ciclista1m':
                precio *= 1.785;
            break;   
            case 'ciclista1a':
            precio *= 15.245;
        break;
        case 'turistaU':
            precio *= 0.7;
            break;
            case 'turista1d':
            precio *= 4.900;
            break;
            case 'turista3d':
            precio *= 4.900;
            break;
            case 'turista7d':
            precio *= 5.900;
            break;
            case 'free':
                precio *= .0;
                break;
        default:
            break;
    }
    total.innerHTML = `$${precio}`;

}

//Validando el formulario

nombreInput.addEventListener('blur', validateInput);
apellidoInput.addEventListener('blur', validateInput);
emailInput.addEventListener('blur', validateInput);

function validateInput(e){
    e.preventDefault();
    let errorDiv = e.target.nextElementSibling;
    
    if(e.target.value === ''){
        e.target.classList.remove('is-valid');
        e.target.classList.add('is-invalid');
        errorDiv.classList.add('invalid-feedback');
        errorDiv.innerHTML = `Debes completar este campo`;

    } else{
        e.target.classList.remove('is-invalid');
        e.target.classList.add('is-valid');
        errorDiv.innerHTML = '';
    }

}

//Botones

let resumenBtn = document.querySelector('#resumen');
let borrarBtn = document.querySelector('#borrar');

// resumenBtn.setAttribute("disabled", "");
resumenBtn.addEventListener('click', handleSubmit);
borrarBtn.addEventListener('click', borrarForm);

function borrarForm(){
    nombreInput.value = "";
    apellidoInput.value = "";
    emailInput.value = "";
    cantInput.value = "";
    catInput.value = "sinDesc";

    nombreInput.classList.remove('is-valid');
    apellidoInput.classList.remove('is-valid');
    emailInput.classList.remove('is-valid');
    total.innerHTML = "";
}

/*cartel de alert */
function handleSubmit(e){
e.preventDefault
    Swal.fire({
        title: '<span style="color: #26625f; font-size: 24px;">¡Pase reservado!</span>',
        html: '<p style="font-size: 16px;">Su pase ha sido reservado con éxito</p>',
        icon: 'success',
        confirmButtonText: 'Gracias'
    })
}