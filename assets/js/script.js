btn = document.getElementById("result");
btn.addEventListener("click", function(){
    inputRoom = document.getElementById('input-1').value;
    inputMin = document.getElementById('input-2').value;
    inputMax = document.getElementById('input-3').value;
    mensaje = 'Faltan campos por llenar';
    if (inputRoom === '' ){
        alert(mensaje)
    }
    else if(inputMin === ''){
        alert(mensaje)
    }
    else if(inputMax === ''){
        alert(mensaje)
    }
})

// Primera Carta

const casaCampo = {
    nombre:"Casa de campo",
    descripcion: "Un lugar ideal para descansar de la ciudad",
    src:"assets/img/casa-de-campo.jpg",
    cuartos: "2",
    metros: "170",
};

const cardOne =document.querySelector(".card-one")
cardOne.innerHTML = `
    <div class="card-one">
        <img src=${casaCampo.src}>
        <h3>${casaCampo.nombre}</h3>
        <p>Cuartos:${casaCampo.cuartos}</p>
        <p>Metros:${casaCampo.metros}</p>
        <p>${casaCampo.descripcion}</p>
        <button class="button-card">Ver más</button>
`;

// Segunda Carta

const casaPlaya = {

    nombre:"Casa de playa",
    descripcion: "Despierta tus dias oyendo el océano",
    src:"assets/img/casa-de-playa.jpg",
    cuartos: "2",
    metros: "130",

};

const cardTwo =document.querySelector(".card-two")

cardTwo.innerHTML = `
    <div class="card-two">
        <img src=${casaPlaya.src}>
        <h3>${casaPlaya.nombre}</h3>
        <p>Cuartos:${casaPlaya.cuartos}</p>
        <p>Metros:${casaPlaya.metros}</p>
        <p>${casaPlaya.descripcion}</p>
        <button class="button-card">Ver más</button>
`;

// Tercera Carta

const casaCentro = {

    nombre:"Casa en el centro",
    descripcion: "Ten cerca de ti todo lo que necesitas",
    src:"assets/img/casa-en-el-centro.jpg",
    cuartos: "1",
    metros: "80",

};

const cardThree =document.querySelector(".card-three")

cardThree.innerHTML = `
    <div class="card-three">
        <img src=${casaCentro.src}>
        <h3>${casaCentro.nombre}</h3>
        <p>Cuartos:${casaCentro.cuartos}</p>
        <p>Metros:${casaCentro.metros}</p>
        <p>${casaCentro.descripcion}</p>
        <button class="button-card">Ver más</button>
`;

// Cuarta carta

const casaRodante = {

    nombre:"Casa Rodante",
    descripcion: "Conviertete en un nomade del mundo sin salir de tu casa",
    src:"assets/img/casa-rodante.jpeg",
    cuartos: "1",
    metros: "6",

};

const cardFour =document.querySelector(".card-four")

cardFour.innerHTML = `
    <div class="card-four">
        <img src=${casaRodante.src}>
        <h3>${casaRodante.nombre}</h3>
        <p>Cuartos:${casaRodante.cuartos}</p>
        <p>Metros:${casaRodante.metros}</p>
        <p>${casaRodante.descripcion}</p>
        <button class="button-card">Ver más</button>
`;

// Quinta carta

const departamento = {

    nombre:"Departamento",
    descripcion: "Desde las alturas todo se ve mejor",
    src:"assets/img/departamento.jpg",
    cuartos: "3",
    metros: "200",

};

const cardFive =document.querySelector(".card-five")

cardFive.innerHTML = `
    <div class="card-five">
        <img src=${departamento.src}>
        <h3>${departamento.nombre}</h3>
        <p>Cuartos:${departamento.cuartos}</p>
        <p>Metros:${departamento.metros}</p>
        <p>${departamento.descripcion}</p>
        <button class="button-card">Ver más</button>
`;

// Sexta carta

const mansion = {

    nombre:"Mansión",
    descripcion: "Vive una vida lujosa en la mansión de tus sueños",
    src:"assets/img/mansion.jpg",
    cuartos: "5",
    metros: "500",

};

const cardSix =document.querySelector(".card-six")

cardSix.innerHTML = `
    <div class="card-six">
        <img src=${mansion.src}>
        <h3>${mansion.nombre}</h3>
        <p>Cuartos:${mansion.cuartos}</p>
        <p>Metros:${mansion.metros}</p>
        <p>${mansion.descripcion}</p>
        <button class="button-card">Ver más</button>
`;



