
var dol;
var poch;
var kmes;
var stav;
var chasined;
var okl;
var disoa;
var disob;
var pplan;
var fplan;
var procplan;
var prem=(0);
var rprem=(0);

var magaz;
var ugreat;
var zgreat;
var pgreat;
var reyt;
var zp;
var zap;

function rasch(){
    checkMagaz()
    checkDolzh();
    checkMes();
    checkStavka();
    checkOkl();
    checkDisoA();
    checkPPlan();
    checkFPlan();
    procVip();
    checkDisoB();
    checkGreat();
    checkPrem();
    raschet()

}

function checkDolzh(){
    var m = document.getElementsByName('dolzh');
    for (var i = 0; i<m.length; i++){
        if (m[i].checked) {

        dol =(m[i].value);

        
        }
    }
    if (dol == "upr"){
        poch = (180);
        console.log("Почасовка равна = "+poch)
    }
    else if (dol == "zam"){
        poch = (175);
        console.log("Почасовка равна = "+poch)
    }
    else if (dol == "spk"){
        poch = (155);
        console.log("Почасовка равна = "+poch)
    }
    else if (dol == "pk"){
        poch = (150);
        console.log("Почасовка равна = "+poch)
    }
}

function checkMes(){
    var m = document.getElementsByName('mes');
    for (var i=0; i<m.length; i++){
        if (m[i].checked){
            kmes=(m[i].value);
            console.log("Количество недель = "+kmes)
        }
    }
}

function checkMagaz(){
    var m = document.getElementsByName('mag');
    for (var i=0; i<m.length; i++){
        if (m[i].checked){
            magaz=(m[i].value);
            console.log(magaz)
        }
    }
}

function checkStavka(){
    var m = document.getElementsByName('stav');
    for (var i=0; i<m.length; i++){
        if (m[i].checked){
            stav=(m[i].value);
            console.log("Твоя ставка = "+stav)
            chasined = (stav*40)
            console.log("Ты работаешь "+chasined+" часов в неделю")
        }
    }
}

function checkOkl() {
okl = (chasined*kmes*poch)
console.log("Твой оклад составляет "+okl)
}

function checkDisoA(){
    var k;
    var m = document.getElementsByName('ddisoa');
    for (var i=0; i<m.length; i++){
        if (m[i].checked){
            k=(m[i].value);


        }
    }
    if (k==1){
        disoa= (okl*0.15)
    }
    else{
        disoa=(0)
    }
    console.log("Дисо А = "+disoa)
}

function checkPPlan(){
    pplan = document.getElementById('plan').value;
    console.log("Ваш план был "+pplan+" руб");
}

function checkFPlan(){
    fplan = document.getElementById('mes').value;
    console.log("Вы выполнили "+fplan+" руб")
}

function procVip(){
    procplan = (fplan/pplan)
    console.log("План выполнен на "+procplan)
}

function checkDisoB(){
    if (procplan<0.95){
        disob=(0)
    }
    else{ 
        disob=(okl*0.35)
    }
    console.log("Дисо Б равно "+disob)
}




function checkGreat(){
    if (dol=='upr'){
        checkGreatUpr();
    }
    else if (dol=='zam'){
        checkGreatZam();
    }
    else if ((dol=='spk' || dol =='pk')&(magaz=='232')){
        checkGreatProd232();
        checkReyt();
    }
    else if ((dol=='spk' || dol =='pk')&(magaz=='dr')){
        dcheckGreatProd()
        checkReyt();
    }
}

function checkGreatUpr(){
    if (procplan<0.85){
        ugreat=prompt('Введи грейд для управляющего при выполнении плана от 0% до 84% (Пример: 0.323)');
    }
    else if (procplan<0.90){
        ugreat=prompt('Введи грейд для управляющего при выполнении плана от 85% до 89% (Пример: 0.323)');
    }
    else if (procplan<0.95){
        ugreat=prompt('Введи грейд для управляющего при выполнении плана от 90% до 94% (Пример: 0.323)');
    } 
    else if (procplan<1){
        ugreat=prompt('Введи грейд для управляющего при выполнении плана от 95% до 99% (Пример: 0.323)');
    }
    else if (procplan<1.05){
        ugreat=prompt('Введи грейд для управляющего при выполнении плана от 100% до 104% (Пример: 0.323)');
    }          
    else if (procplan<1.1){
        ugreat=prompt('Введи грейд для управляющего при выполнении плана от 105% до 109% (Пример: 0.323)');
    }  
    else if (procplan>=1.1){
        ugreat=prompt('Введи грейд для управляющего при выполнении плана от 110% и выше (Пример: 0.323)');
    } 
    console.log("Грейд для управляющего = "+ugreat)
}


function checkGreatZam(){
    if (procplan<0.85){
        zgreat=prompt('Введи грейд для заместителя при выполнении плана от 0% до 84% (Пример: 0.323)');
    }
    else if (procplan<0.90){
        zgreat=prompt('Введи грейд для заместителя при выполнении плана от 85% до 89% (Пример: 0.323)');
    }
    else if (procplan<0.95){
        zgreat=prompt('Введи грейд для заместителя при выполнении плана от 90% до 94% (Пример: 0.323)');
    } 
    else if (procplan<1){
        zgreat=prompt('Введи грейд для заместителя при выполнении плана от 95% до 99% (Пример: 0.323)');
    }
    else if (procplan<1.05){
        zgreat=prompt('Введи грейд для заместителя при выполнении плана от 100% до 104% (Пример: 0.323)');
    }          
    else if (procplan<1.1){
        zgreat=prompt('Введи грейд для заместителя при выполнении плана от 105% до 109% (Пример: 0.323)');
    }  
    else if (procplan>=1.1){
        zgreat=prompt('Введи грейд для заместителя при выполнении плана от 110% и выше (Пример: 0.323)');
    } 
    console.log("Грейд для заместителя = "+zgreat)
}

function checkGreatProd232(){
    if (procplan<0.85){
        pgreat=(0.874)
    }
    else if (procplan<0.9){
        pgreat=(1.075)
    }
    else if (procplan<0.95){
        pgreat=(1.277)
    }
    else if (procplan<1){
        pgreat=(1.478)
    }
    else if (procplan<1.05){
        pgreat=(1.680)
    }
    else if (procplan<1.1){
        pgreat=(1.882)
    }
    else if (procplan>=1.1){
        pgreat=(2.083)
    }
    console.log('Грейд для продавцов = '+pgreat)
}
function dcheckGreatProd(){
    if (procplan<0.85){
        pgreat=prompt('Введи грейд для продавца при выполнении плана от 0% до 84% (Пример: 0.323)');
    }
    else if (procplan<0.9){
        pgreat=prompt('Введи грейд для продавца при выполнении плана от 85% до 89% (Пример: 0.323)');
    }
    else if (procplan<0.95){
        pgreat=prompt('Введи грейд для продавца при выполнении плана от 90% до 94% (Пример: 0.323)');
    }
    else if (procplan<1){
        pgreat=prompt('Введи грейд для продавца при выполнении плана от 95% до 99% (Пример: 0.323)');
    }
    else if (procplan<1.05){
        pgreat=prompt('Введи грейд для продавца при выполнении плана от 100% до 104% (Пример: 0.323)');
    }
    else if (procplan<1.1){
        pgreat=prompt('Введи грейд для продавца при выполнении плана от 105% до 109% (Пример: 0.323)');
    }
    else if (procplan>=1.1){
        pgreat=prompt('Введи грейд для продавца при выполнении плана от 110% и выше (Пример: 0.323)');
    }
    console.log('Грейд для продавцов = '+pgreat)
}

function checkReyt(){
    if (dol=='spk' || dol=='pk')
    reyt = document.getElementById('reyt').value;
    console.log('Твой рейтинг '+reyt);
    reyt = reyt/100;
    console.log(reyt)
}

function checkPrem(){
    if (dol=='upr'){
        prem = (fplan/1.2/100*ugreat)
    }
    else if (dol=='zam'){
        prem = (fplan/1.2/100*zgreat)
    }
    else if (dol=='spk' ) {
        prem= (fplan/1.2/100*pgreat);
        rprem= (prem*reyt)
    }
    else if (dol=='pk' ) {
        prem= (fplan/1.2/100*pgreat);
        rprem= (prem*reyt)
    }
    console.log('Твоя премия составляет '+prem)
}







function raschet(){
    if (dol=='upr'|| dol=="zam"){
        raschetupri()
    }
    else if (dol=='spk' || dol=='pk'){
        raschetprod()
    }
}


function raschetprod(){
    zp=((okl*0.87)+disoa+disob+rprem)
    zap=parseFloat(zp.toFixed(0));
    alert('Твоя зарплата с авансом составляет '+ zap)
    console.log("Пробел")
    console.log(okl)
    console.log(disoa)
    console.log(disob)
    console.log(prem)
    console.log(rprem)
    console.log('zp = '+zp)
}

function raschetupri(){
    zp=((okl*0.87)+disoa+disob+prem)
    zap=parseFloat(zp.toFixed(0));
    alert('Твоя зарплата с авансом составляет '+ zap)
    console.log("Пробел")
    console.log(okl)
    console.log(disoa)
    console.log(disob)
    console.log(prem)
    console.log(rprem)
    console.log('zp = '+zp)
}














/*Переменные

dol = должность
poch = почасовой оклад
kmes = количество недель в ком. месяце
stav = ставка
chasined = кол-во часов в неделю
disoa = Дисо А
pplan = планируемый план
fplan = фактически выполненнный план
disob = Дисо Б
prem = премия
reyt = рейтинг продавца
rprem = рейтинговая премия


Функции
checkDolzh - присвоение переменной dol значение должности
checkMes - количество нед. в ком. месяце
checkStavka - ставка и вывод часов в неделю
checkDisoA - проверка дисо А

procVip - вычисление процента выполнения плана
rasch - общий расчет



*/



















/* Вывод значения из Radio
document.getElementById('one').onclick = twofunc;
function twofunc(){
    checkRadio()
    ali()
}

function checkRadio(){
    var m = document.getElementsByName('prim');
    for (var i = 0; i<m.length; i++){
        if (m[i].checked) {

        alert(m[i].value);

        
        }
    }
}
function ali(){
    alert('hi');
}




Вывод значения из формы

function poo(){
    po()
    po2()
}
var x;
function po() {

    x = document.getElementById('plan').value;
    console.log(x)
    
}
function po2(){
    console.log(x)
}
*/
