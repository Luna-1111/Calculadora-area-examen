document.getElementById('figura').addEventListener('change', function() {
    const figuraSeleccionada = this.value;
    const imagenFigura = document.getElementById('imagen-figura');
    const inputsFigura = document.getElementById('inputs-figura');
    const calcularBtn = document.getElementById('calcular');
    
    imagenFigura.innerHTML = '';
    inputsFigura.innerHTML = '';
    calcularBtn.style.display = 'none';

    if (figuraSeleccionada === 'cuadrado') {
        imagenFigura.innerHTML = '<img src="img/Cuadrado.png" alt="Cuadrado">';
        inputsFigura.innerHTML = '<input type="number" id="lado" placeholder="Lado">';
        calcularBtn.style.display = 'block';
    } else if (figuraSeleccionada === 'triangulo') {
        imagenFigura.innerHTML = '<img src="img/Triangulo.png" alt="Triángulo">';
        inputsFigura.innerHTML = `
            <input type="number" id="base" placeholder="Base">
            <input type="number" id="altura" placeholder="Altura">
        `;
        calcularBtn.style.display = 'block';
    } else if (figuraSeleccionada === 'circulo') {
        imagenFigura.innerHTML = '<img src="img/Circulo.png" alt="Círculo">';
        inputsFigura.innerHTML = '<input type="number" id="radio" placeholder="Radio">';
        calcularBtn.style.display = 'block';
    }
});

document.getElementById('calcular').addEventListener('click', function() {
    const figuraSeleccionada = document.getElementById('figura').value;
    let resultado = 0;

    if (figuraSeleccionada === 'cuadrado') {
        const lado = parseFloat(document.getElementById('lado').value);
        if (!isNaN(lado)) {
            resultado = lado * lado;
        }
    } else if (figuraSeleccionada === 'triangulo') {
        const base = parseFloat(document.getElementById('base').value);
        const altura = parseFloat(document.getElementById('altura').value);
        if (!isNaN(base) && !isNaN(altura)) {
            resultado = 0.5 * base * altura;
        }
    } else if (figuraSeleccionada === 'circulo') {
        const radio = parseFloat(document.getElementById('radio').value);
        if (!isNaN(radio)) {
            resultado = Math.PI * radio * radio;
        }
    }

    document.getElementById('resultado').textContent = `El área es: ${resultado.toFixed(2)}`;
});

