async function getData(){
    const result = await fetch('https://fakestoreapi.com/products/');
    const products = await result.json();
    jsonArr = products.map(elemento => Object.entries(elemento));
    const sliced = jsonArr.slice(0, 4);
    products.forEach(element => {
        const randInt = randData(1, jsonArr.length);
        const randIndex = randInt;
        for(i = 0; i <= sliced.length; i++ ){
            if(element.id == i){
                const card = document.createRange().createContextualFragment(`
                    
                    <div class="features-card-1">
                        <h3>${jsonArr[randIndex][1][1]}</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusantium molestias quos delectus repellat. Rem voluptate nesciunt dolorum eaque, magnam odit accusamus corporis nemo expedita itaque, eligendi saepe provident harum!</p>
                        <button class="btn button-2">learn more</button>
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

getData();