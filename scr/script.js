var pirmassk = '';
var antrassk = '';
var veiksmas = '';
var rezultatas= '';

var istorija = [];

var Action = function (number1, number2, action, answer) {
    this.number1 = number1;
    this.number2 = number2;
    this.action = action;
    this.answer = answer;

};

function PridekSkaiciu(n) {
    if (veiksmas.length == 0){
        pirmassk += n;
        document.getElementById('displejus').innerText = pirmassk;
    } else {
        antrassk += n;
        document.getElementById('displejus').innerHTML = antrassk;
    }
}

function action(word) {
    veiksmas += word;
}

function Suskaiciuok() {
    var rezultatas = 0;
    if (veiksmas == '+'){
        rezultatas = Number(pirmassk) + Number(antrassk);
    }else if (veiksmas == '-'){
        rezultatas = Number(pirmassk) - Number(antrassk);
    }else if (veiksmas == '*'){
        rezultatas = Number(pirmassk) * Number(antrassk);
    }else if (veiksmas == '/'){
        rezultatas = Number(pirmassk) / Number(antrassk);
    }
    document.getElementById('displejus').innerHTML = rezultatas;

    var veiksmai = new Action(pirmassk, antrassk, veiksmas, rezultatas);
    debugger;
    istorija.push(veiksmai);
    pirmassk = '';
    antrassk = '';
    veiksmas='';
    rezultatas=0;

    action = 0;

    kurtiLentele();

}


function kurtiLentele() {
    var template = "<tr><td>{number1}</td><td>{action}</td><td>{number2}</td><td>{answer}</td></tr>";
    var table = document.getElementById('history');
    table.innerHTML = "<tr class='header'><td>A</td><td>Veiksmas</td><td>B</td><td>=<button  onclick='handleSortUp()'>up</button><button  onclick='handleSortDown()'>down</button></td></tr>";

    istorija.forEach(item => {
        var eilute = template.replace('{number1}', item.number1).replace('{number2}', item.number2).replace('{action}', item.action).replace('{answer}', item.answer);
        table.innerHTML += eilute;
    })
}



function handleSortUp() {
    istorija = istorija.sort((a, b) => {

        return a.answer - b.answer;
    });
    kurtiLentele();
}

function handleSortDown() {
    istorija = istorija.sort((a, b) => {
        return b.answer - a.answer;
    });
    kurtiLentele();
}