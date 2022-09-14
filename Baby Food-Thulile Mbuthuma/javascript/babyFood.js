function purity() {
    var babyfood = document.getElementById('purity').value
    if (babyfood == "purity") {
        result('<h3>Purity: Guava & Yoghurt 125ml<br><br>Price: R 15.99 </h3>')
    }
}
function cerelac() {
    var babyfood = document.getElementById('cerelac').value
    if (babyfood == "cerelac") {
        result('<h3>Nestle: Cerelac Baby Cereal With Milk Banana 250g<br><br>Price: R 36.99 </h3>')
    }
}
function nan() {
    var babyfood = document.getElementById('nan').value
    if (babyfood == "nan") {
        result('<h3>Nestle: Nan Stage 3 Optipro Follow-Up Infant Formula 18kg<br><br>Price: R 389.00 </h3>')
    }
}
function infacare() {
    var babyfood = document.getElementById('infacare').value
    if (babyfood == "infacare") {
        result('<h3>Infacare: Stage 2 Follow-On Formula 400g<br><br>Price: R 58.99 </h3>')
    }
}

function nestum() {
    var babyfood = document.getElementById('nestum').value
    if (babyfood == "nestum") {
        result('<h3>Nestle: Nestum Baby Cereal Regular 250g<br><br>Price: R 24.99</h3>')
    }
}
function purityFruitSalad() {
    var babyfood = document.getElementById('purityFruitSalad').value
    if (babyfood == "purityFruitSalad") {
        result ('<h3>Purity: Fruit Salad 200ml<br><br>Price: R 16.99</h3>')   
    }
}

function result(action) {
    document.getElementById('details').innerHTML = action
}