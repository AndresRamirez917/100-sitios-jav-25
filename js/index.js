async function getData(){
    const result = await fetch('https://fakestoreapi.com/products/');
    const products = await result.json();
    jsonArr = products.map(elemento => Object.entries(elemento));
    const sliced = jsonArr.slice(0, 5);
    products.forEach(element => {
        const randInt = randData(1, jsonArr.length);
        const randIndex = randInt;
        for(i = 0; i < sliced.length; i++ ){ 
            if(element.id == i){
                const card = document.createRange().createContextualFragment(`
                    
                    <div class="features-card-1">
                        <h3>${jsonArr[randIndex][1][1]}</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusantium molestias quos delectus repellat. Rem voluptate nesciunt dolorum eaque, magnam odit accusamus corporis nemo expedita itaque, eligendi saepe provident harum!</p>
                        <button class="btn button-2">Precio $${jsonArr[randIndex][2][1]}</button>
                    </div>
                    
                    `)
                    const features_row = document.querySelector('.features-row');
                    features_row.append(card)
            }
        }
        function randData(min, max){
            return Math.floor(Math.random()*(max - min + 1) + min);
        }
    }); 
}

const btn_validar = document.getElementById('btn-validar');
const validar = (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');
    const arr = [];
    const arrMessages = ["Nombre", "Email", "Mensaje"];
    console.log(arr.length)
    if(arr.length == 0){
        arr.push(nombre, email, mensaje);
        console.log(arr.length)
            for(i = 0; i < arr.length; i++){
                if(arr[i].value == ""){
                    swal({
                        title: `El campo ${arrMessages[i]} no puede estar vacío`,
                        icon: "error",
                        })
                        return false;
            }
        }
        }
        
    if(!emailValido(email.value)){
        swal({
            title: `El campo ${arrMessages[1]} no tiene el formato permitido`,
            icon: "error",
             })
             return false;
    }
    swal({
        title: `Los datos fueron enviados satisfactoriamente`,
        icon: "success",
         })
         nombre.value = "";
         email.value = "";
         mensaje.value = "";
    return true;
}

const emailValido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

btn_validar.addEventListener("click", validar)
getData();