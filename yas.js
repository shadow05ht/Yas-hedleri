let ad = prompt("Adınızı qeyd edin: ");
let yas = prompt("Yaşınızı qeyd edin: ");


if (yas < 6) {
    netice = 'körpə';
} else if (yas < 11) {
    netice = 'uşaq';
}
else if (yas <= 17) {
    netice = 'yeniyetmə';
}
else if (yas <= 35) {
    netice = 'gənc';
}
else if (yas <= 45) {
    netice = 'cavan';
}
else if (yas <= 65) {
    netice = 'qoca';
}
else {
    netice = 'şaxta baba';
}

document.getElementById('sexsiyyet').innerHTML = ad + ', sən ' + netice + ' sayılırsan.';