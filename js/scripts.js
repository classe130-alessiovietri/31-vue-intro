/* Destructuring */
const { createApp } = Vue;

createApp(
    {
        /* 
            La funzione data() si occupa ESCLUSIVAMENTE di restituire un oggetto.
            TUTTE le chiavi dell'oggetto restituito da data() diventano variabili
            utilizzabili nel tag in cui è montato l'applicativo
        */
        data() {
            return {
                message: 'Hello Vue!',
                firstName: 'Alessio',
                lastName: 'Vietri',
                age: 32,
                wearsGlasses: true,
                textOne: '',
                textTwo: '',
                newUser: {
                    email: 'ciccio@boolean.careers',
                    password: '',
                },
                longText: '',
                favPkmn: '',
                pClasses: 'text-uppercase'
            };
        },
        methods: {
            sayHi() {
                alert('Ciao ' + this.textOne);
            }
        }
    }
).mount('#app');


/* 
    Selezionare gli input dall'html
    Sommare i value dei due input
    Stampare la somma dei due value nel tag giusto
*/

// const textOne = document.getElementById('text-1');
// const textTwo = document.getElementById('text-2');
// const fullTextContainer = document.getElementById('full-text');

// textOne.addEventListener('keyup', function () {
//     const fullValue = textOne.value + textTwo.value;
    
//     fullTextContainer.innerText = fullValue;
// });

// textTwo.addEventListener('keyup', function () {
//     const fullValue = textOne.value + textTwo.value;
    
//     fullTextContainer.innerText = fullValue;
// });