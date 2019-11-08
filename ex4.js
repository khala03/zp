var poch=(0);
var ned=(0);
var chasi=(0);
var disoA=(0);
var disA=(0);
var disob=(0);
var nightchas=(0);
var perer=(0);
var okl=(0);
var procplan=(0);
var pplan=(0);
var fplan=(0);
var dol=(0);
var magaz=(0);
var great=(0);
var prem=(0);
var preme=(0);
var reyt=(0);
var zp=(0);
var zap=(0);

function rasch(){
    checkMagaz()
checkOkl();
procVip();
if (magaz=='232'){
    checkGreat232();
}
else if (magaz=='102'){
    checkGreat102();   
}
else if( magaz=='dr'){
    checkGreatDr();
}
checkZp();
}



/*Проверяем почасовку из должности*/

function pochUpr(){
    dol=('upr')
    poch = (180)
    console.log('почасовка = '+poch)
    console.log('должность= '+dol)
}
function pochZam(){
    poch = (175)
    dol=('zam')
    console.log('почасовка = '+poch)
    console.log('должность= '+dol)
}
function pochSpk(){
    poch = (155)
    dol=('spk')
    console.log('почасовка = '+poch)
    console.log('должность= '+dol)
}
function pochPk(){
    poch = (150)
    dol=('pk')
    console.log('почасовка = '+poch)
    console.log('должность= '+dol)
}

/*Проверяем количество недель */
function ned4(){
    ned = (4)
    console.log('количество недель ' +ned)
}
function ned5(){
    ned = (5)
    console.log('количество недель ' +ned)
}

/*Проверяем количество часов в неделю через ставку*/
function stav1(){
    chasi = (40)
    console.log('Количсество часов ' +chasi)
}
function stav075(){
    chasi = (30)
    console.log('Количсество часов ' +chasi)
}
function stav05(){
    chasi = (20)
    console.log('Количсество часов ' +chasi)
}
function stav025(){
    chasi = (10)
    console.log('Количсество часов ' +chasi)
}

/* Проверка наличия дисо А*/
function noDisoA(){
    disoA = (0)
    console.log(disoA)
}
function yesDisoA(){
    disoA = (1)
    console.log(disoA)
}

/* Присваивание количества ночных часов переменной nightchas */
function kolvochas0(){
    nightchas = (0)
    console.log(nightchas)
}
function kolvochas(){
    nightchas = prompt('Сколько ночных часов?')
    console.log(nightchas)
}

/*переработки */

function checkPererab(){
    perer =prompt('Сколько часов переработки?')
    console.log ('переработка ' +perer+' часов')
}
function checkPererab0(){
    perer =(0)
    console.log ('переработка ' +perer+' часов')
}

/*-----Выполнение плана------*/


function checkPPlan(){
    pplan = document.getElementById('plan').value;
    console.log("Ваш план был "+pplan+" руб");
}

function checkFPlan(){
    fplan = document.getElementById('mes').value;
    console.log("Вы выполнили "+fplan+" руб")
}

function procVip(){
    checkPPlan();
    checkFPlan();
    procplan = (fplan/pplan)
    console.log("План выполнен на "+procplan)
    checkDisoB();
    checkDisoA();
}

/*-----Расчет оклада-----*/
function checkOkl(){
    okl=(ned*chasi*poch);
    console.log('Оклад равен = '+okl)
}




/*---------Проверка Дисо Б------*/
function checkDisoB(){
    if (procplan<0.95){
        disob=(0)
    }
    else{ 
        disob=(okl*0.35)
    }
    console.log("Дисо Б равно "+disob)
}

/*---------Проверка Дисо А-----*/
function checkDisoA(){
    if (disoA==1){
        disA = (okl*0.15);
        console.log('Дисо А = '+disA);
    }
    else {
        disA=(okl*0);
        console.log('Дисо А = '+disA);
    }
}


/*-----Проверка магазина----*/
function checkMagaz(){
    var m = document.getElementsByName('mag');
    for (var i=0; i<m.length; i++){
        if (m[i].checked){
            magaz=(m[i].value);
            console.log(magaz)
        }
    }
}


/*-----Расчет грейдов--H232---*/
function checkGreat232(){
    if (dol=='upr'){
        checkGreatUpr232();
        console.log('Проверен грейд для упра 232 = '+great)
    }
    else if (dol=='zam'){
        checkGreatZam232();
        console.log('Проверен грейд для зама 232 = '+great)
    }
    else if (dol=='spk'){
        checkGreatProd232();
        console.log('Проверен грейд для спк 232 = '+great)
    }
    else if (dol=='pk'){
        checkGreatProd232();
        console.log('Проверен грейд для пк 232 = '+great)
    }
    checkPrem();
}

function checkGreatUpr232(){
    if (procplan<0.85){
        great=(0.364);
    }
    else if (procplan<0.90){
        great=(0.448);
    }
    else if (procplan<0.95){
        great=(0.532);
    } 
    else if (procplan<1){
        great=(0.616);
    }
    else if (procplan<1.05){
        great=(0.700);
    }          
    else if (procplan<1.1){
        great=(0.784);
    }  
    else if (procplan>=1.1){
        great=(0.868);
    } 
    console.log("Грейд для управляющего = "+great)
}


function checkGreatZam232(){
    if (procplan<0.85){
        great=(0.218);
    }
    else if (procplan<0.90){
        great=(0.269);
    }
    else if (procplan<0.95){
        great=(0.319);
    } 
    else if (procplan<1){
        great=(0.370);
    }
    else if (procplan<1.05){
        great=(0.420);
    }          
    else if (procplan<1.1){
        great=(0.470);
    }  
    else if (procplan>=1.1){
        great=(0.521);
    } 
    console.log("Грейд для заместителя = "+great)
}

function checkGreatProd232(){
    if (procplan<0.85){
        great=(0.874)
    }
    else if (procplan<0.9){
        great=(1.075)
    }
    else if (procplan<0.95){
        great=(1.277)
    }
    else if (procplan<1){
        great=(1.478)
    }
    else if (procplan<1.05){
        great=(1.680)
    }
    else if (procplan<1.1){
        great=(1.882)
    }
    else if (procplan>=1.1){
        great=(2.083)
    }
    console.log('Грейд для продавцов = '+great)
}

function checkPrem(){
    prem = (fplan/1.2/100*great);
    if (dol=='upr'){
        console.log('премия упра = ' +prem);
    }
    else if (dol=='zam'){
        console.log('премия зама = '+prem)
    }
    else if (dol=='spk' || dol=='spk'){
        console.log('премия продавцов = '+prem)
        reyt = document.getElementById('reyti').value;
        console.log('Твой рейтинг '+reyt);
        reyt = reyt/100;
        console.log('В десятичной дроби = '+ reyt)
    }

}

/*--------Рейтинговая премия продавца------*/


/*function checkReyt(){
    if (dol=='spk' || dol=='pk')
    reyt = document.getElementById('reyti').value;
    console.log('Твой рейтинг '+reyt);
    reyt = reyt/100;
    console.log(reyt)
}
*/

/*----------Расчет премий для 102 Вива---*/

function checkGreat102(){
    if (dol=='upr'){
        checkGreatUpr102();
        console.log('Проверен грейд для упра 102 = '+great)
    }
    else if (dol=='zam'){
        checkGreatZam102();
        console.log('Проверен грейд для зама 102 = '+great)
    }
    else if (dol=='spk'){
        checkGreatProd102();
        console.log('Проверен грейд для спк 102= '+great)
    }
    else if (dol=='pk'){
        checkGreatProd102();
        console.log('Проверен грейд для пк 102 = '+great)
    }
    checkPrem();
}

function checkGreatUpr102(){
    if (procplan<0.85){
        great=(0.619);
    }
    else if (procplan<0.90){
        great=(0.762);
    }
    else if (procplan<0.95){
        great=(0.904);
    } 
    else if (procplan<1){
        great=(1.047);
    }
    else if (procplan<1.05){
        great=(1.190);
    }          
    else if (procplan<1.1){
        great=(1.333);
    }  
    else if (procplan>=1.1){
        great=(1.476);
    } 
    console.log("Грейд для управляющего = "+great)
}


function checkGreatZam102(){
    if (procplan<0.85){
        great=(0.473);
    }
    else if (procplan<0.90){
        great=(0.582);
    }
    else if (procplan<0.95){
        great=(0.692);
    } 
    else if (procplan<1){
        great=(0.801);
    }
    else if (procplan<1.05){
        great=(0.910);
    }          
    else if (procplan<1.1){
        great=(1.019);
    }  
    else if (procplan>=1.1){
        great=(1.128);
    } 
    console.log("Грейд для заместителя = "+great)
}

function checkGreatProd102(){
    if (procplan<0.85){
        great=(0.728)
    }
    else if (procplan<0.9){
        great=(0.896)
    }
    else if (procplan<0.95){
        great=(1.064)
    }
    else if (procplan<1){
        great=(1.232)
    }
    else if (procplan<1.05){
        great=(1.400)
    }
    else if (procplan<1.1){
        great=(1.568)
    }
    else if (procplan>=1.1){
        great=(1.736)
    }
    console.log('Грейд для продавцов = '+great)
}

function checkPrem(){
    prem = (fplan/1.2/100*great);
    if (dol=='upr'){
        console.log('премия упра = ' +prem);
    }
    else if (dol=='zam'){
        console.log('премия зама = '+prem)
    }
    else if (dol=='spk' || dol=='spk'){
        console.log('премия продавцов = '+prem)
        reyt = document.getElementById('reyti').value;
        console.log('Твой рейтинг '+reyt);
        reyt = reyt/100;
        console.log('В десятичной дроби = '+ reyt)
    }

}


/*---------Расчет премий для других магазинов----*/
function checkGreatDr(){
    if (dol=='upr'){
        checkGreatUprDr();
        console.log('Проверен грейд для упра 102 = '+great)
    }
    else if (dol=='zam'){
        checkGreatZamDr();
        console.log('Проверен грейд для зама 102 = '+great)
    }
    else if (dol=='spk'){
        checkGreatProdDr();
        console.log('Проверен грейд для спк 102= '+great)
    }
    else if (dol=='pk'){
        checkGreatProdDr();
        console.log('Проверен грейд для пк 102 = '+great)
    }
    checkPrem();
}

function checkGreatUprDr(){
    if (procplan<0.85){
        great=prompt('Введи грейд для управляющего при выполнении плана от 0% до 84% (Пример: 0.656)')
    }
    else if (procplan<0.90){
        great=prompt('Введи грейд для управляющего при выполнении плана от 85% до 89% (Пример: 0.656)')
    }
    else if (procplan<0.95){
        great=prompt('Введи грейд для управляющего при выполнении плана от 90% до 94% (Пример: 0.656)')
    } 
    else if (procplan<1){
        great=prompt('Введи грейд для управляющего при выполнении плана от 95% до 99% (Пример: 0.656)')
    }
    else if (procplan<1.05){
        great=prompt('Введи грейд для управляющего при выполнении плана от 100% до 104% (Пример: 0.656)')
    }          
    else if (procplan<1.1){
        great=prompt('Введи грейд для управляющего при выполнении плана от 105% до 109% (Пример: 0.656)')
    }  
    else if (procplan>=1.1){
        great=prompt('Введи грейд для управляющего при выполнении плана от 100% и выше (Пример: 0.656)')
    } 
    console.log("Грейд для управляющего = "+great)
}


function checkGreatZamDr(){
    if (procplan<0.85){
        great=prompt('Введи грейд для заместителя при выполнении плана от 0% до 84% (Пример: 0.656)')
    }
    else if (procplan<0.90){
        great=prompt('Введи грейд для заместителя при выполнении плана от 85% до 89% (Пример: 0.656)')
    }
    else if (procplan<0.95){
        great=prompt('Введи грейд для заместителя при выполнении плана от 90% до 94% (Пример: 0.656)')
    } 
    else if (procplan<1){
        great=prompt('Введи грейд для заместителя при выполнении плана от 95% до 99% (Пример: 0.656)')
    }
    else if (procplan<1.05){
        great=prompt('Введи грейд для заместителя при выполнении плана от 100% до 104% (Пример: 0.656)')
    }          
    else if (procplan<1.1){
        great=prompt('Введи грейд для заместителя при выполнении плана от 105% до 109% (Пример: 0.656)')
    }  
    else if (procplan>=1.1){
        great=prompt('Введи грейд для заместителя при выполнении плана от 110% и выше (Пример: 0.656)')
    } 
    console.log("Грейд для заместителя = "+great)
}

function checkGreatProdDr(){
    if (procplan<0.85){
        great=prompt('Введи грейд для продавца при выполнении плана от 0% до 84% (Пример: 0.656)')
    }
    else if (procplan<0.9){
        great=prompt('Введи грейд для продавца при выполнении плана от 85% до 89% (Пример: 0.656)')
    }
    else if (procplan<0.95){
        great=prompt('Введи грейд для продавца при выполнении плана от 90% до 94% (Пример: 0.656)')
    }
    else if (procplan<1){
        great=prompt('Введи грейд для продавца при выполнении плана от 95% до 99% (Пример: 0.656)')
    }
    else if (procplan<1.05){
        great=prompt('Введи грейд для продавца при выполнении плана от 100% до 104% (Пример: 0.656)')
    }
    else if (procplan<1.1){
        great=prompt('Введи грейд для продавца при выполнении плана от 105% до 109% (Пример: 0.656)')
    }
    else if (procplan>=1.1){
        great=prompt('Введи грейд для продавца при выполнении плана от 110% и выше (Пример: 0.656)')
    }
    console.log('Грейд для продавцов = '+great)
}

function checkPrem(){
    prem = (fplan/1.2/100*great);
    if (dol=='upr'){
        console.log('премия упра = ' +prem);
    }
    else if (dol=='zam'){
        console.log('премия зама = '+prem)
    }
    else if (dol=='spk' || dol=='spk'){
        console.log('премия продавцов = '+prem)
        reyt = document.getElementById('reyti').value;
        console.log('Твой рейтинг '+reyt);
        reyt = reyt/100;
        console.log('В десятичной дроби = '+ reyt)
    }

}





/*---------------------------------------*/


function checkZp(){
    if (dol=='upr' || dol=='zam'){
    zp=((okl+disA+disob)*0.87+prem+(nightchas*poch*0.87)+(perer*poch*0.87));
    console.log('peme = '+zp)
    zap=parseFloat(zp.toFixed(0));
    alert('Твоя зарплата с авансом составляет '+zap+' рублей')
}

    else if (dol=='spk' || dol=='pk'){
    zp=((okl+disA+disob)*0.87+(prem*reyt)+(nightchas*(poch*0.87))+(perer*(poch*0.87)));
    zap=parseFloat(zp.toFixed(0));
    preme=parseFloat(prem.toFixed(0));
    alert('Твоя зарплата с авансом составляет '+zap+' рублей')
    alert('Премия продавцов составляет '+preme+' рублей')
    }
}








/*   
Переменные:
poch -почасовой оклад
ned - количество недель
chasi - количество часов в неделю
disoA - проверка дисо А
nightchas -количество ночных часов
perer -часы переработки
okl - оклад



Функции:
pochUpr() -рассчет почасовки для упра




*/


