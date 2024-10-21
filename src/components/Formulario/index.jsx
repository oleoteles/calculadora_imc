import { useState } from "react";

const Formulario = () => {
    let [altura, setAltura] = useState(0);
    let [peso, setPeso] = useState(0);
    let [imc, setImc] = useState(null); 
    let [categoria, setCategoria] = useState('');
    let [mensagem, setMensagem] = useState('');

    const calculaIMC = () => {
        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert('Por favor, insira valores válidos para peso e altura.');
        return;
        }

    const imcCalculado = peso / (altura * altura); 
    setImc(imcCalculado.toFixed(2)); 
    definirCategoria(imcCalculado);  
    };

    const definirCategoria = (imc) => {
    if (imc < 18.5) {
        setCategoria('Baixo Peso');
        setMensagem('Ao contrário do que algumas pessoas possam pensar, ter um peso abaixo do recomendável é tão ou mais prejudicial do que ter excesso de peso.');
    } else if (imc < 25) {
        setCategoria('Peso Normal');
        setMensagem('O peso normal é o peso ideal que cada pessoa deve ter, de acordo com a sua idade, gênero e outras variáveis.');
    } else if (imc < 30) {
        setCategoria('Excesso de Peso');
        setMensagem('De um modo geral, o excesso de peso pode corresponder a um IMC entre 25 e 30. Esta é também considerada uma situação de pré-obesidade.');
    } else if (imc < 35) {
        setCategoria('Obesidade Grau I');
        setMensagem('Afigura-se como um quadro de obesidade ou de obesidade grave, quando genericamente existe um IMC de 30 ou mais.');
    } else if (imc < 40) {
        setCategoria('Obesidade Grau II');
        setMensagem('A obesidade pode ser classificada como moderada, grave, mórbida ou superobesidade.');
    } else {
        setCategoria('Obesidade Mórbida');
        setMensagem('A obesidade pode ser classificada como moderada, grave, mórbida ou superobesidade.');
    }
    };

    return (
    <div>
        <form>
        <input type="number" placeholder="altura (m)" onChange={(evento) => setAltura(parseFloat(evento.target.value))} />
        <input type="number" placeholder="peso (kg)" onChange={(evento) => setPeso(parseFloat(evento.target.value))} />
        <button type="button" onClick={calculaIMC}>
        Calcular IMC
        </button>
        </form>

        {imc && (
        <div>
            <p>Seu IMC é: {imc}</p>
            <p>Categoria: {categoria}</p>
            <p>{mensagem}</p>
        </div>
        )}
    </div>
    );
};

export default Formulario;
