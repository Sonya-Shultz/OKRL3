const body=document.getElementById("body");
let myUrl=window.location;
let urlList = ["https://youtu.be/vj-x3FSUmVc",
"https://music.youtube.com/watch?v=AzGqz21BNkM&feature=share",
"https://music.youtube.com/watch?v=91im_l_SlFg&feature=share",
"https://music.youtube.com/watch?v=USu7XRmx7SU&feature=share",
"https://music.youtube.com/watch?v=y3Wi8bOh6j4&feature=share",
"https://music.youtube.com/watch?v=g-KMcNSuCp4&feature=share",
"https://music.youtube.com/playlist?list=OLAK5uy_magtKMXDKarul3t2JqWDj911SXVipXTxo",
"https://music.youtube.com/watch?v=cYAxKTaLyKM&feature=share",
"https://youtu.be/JIwseBmpBpo"
];
let myScrolValue=body.scrollTop;
const hoverMenu = document.getElementsByClassName('hoverMenuContainer');

function removeBaner(someNew, ){
    someNew.animate([
        {
        'color':'rgba(255, 5, 0, 0)',
        'backgroundColor': '#0f5e3e00',
        'borderColor':'rgba(0, 128, 128, 0)'},
        {
        'color':'rgb(204, 129, 102)',
        'backgroundColor': '#0f5e3ea9',
        'borderColor':'rgba(0, 128, 128, 1)'},
        {
        'color':'rgba(255, 5, 0, 0)',
        'backgroundColor': '#0f5e3e00',
        'borderColor':'rgba(0, 128, 128, 0)'}],{ 
        duration: 1500}
    );
    setTimeout( () => {
        const someNewbackground=document.getElementById('banerBack');
        body.removeChild(someNewbackground);
    }, 1499)
};

function removeMark(someNew ){
    someNew.firstChild.animate([
        {
        'backgroundColor': 'rgba(3, 128, 128, 1)',
        'width:':'3vmin',
        'height': '3vmin',
        'top':'0.4vmin'},
        {
        'backgroundColor': 'rgb(204, 129, 102)'
        },
        {
        'backgroundColor': 'rgba(3, 128, 128, 0)',
        'width:':'0vmin',
        'height': '0vmin',
        'top':'1.9vmin',
        'display':'none'}],{ 
        duration: 500}
    );
    setTimeout( () => {
        someNew.removeChild(someNew.firstChild);
    }, 490)
};

function addMark(someNew, newChild ){
    someNew.appendChild(newChild);
    someNew.firstChild.animate([
        {
        'backgroundColor': 'rgba(3, 128, 128, 1)',
        'width:':'0vmin',
        'height': '0vmin',
        'top':'1.9vmin',
        'display':'none'},
        {
        'backgroundColor': 'rgb(204, 129, 102)'
        },
        {
        'backgroundColor': 'rgba(3, 128, 128, 1)',
        'width:':'3vmin',
        'height': '3vmin',
        'top':'0.4vmin'}],{ 
        duration: 500}
    );
};

hoverMenu[0].onmouseover = function () {
    hoverMenu[0].children[1].setAttribute('firstLoad',true);
};

window.onclick= function (event) {
    let a=0;
    if (event.target.className === 'bayBtn'){
        if (event.target.getAttribute('hasbay'))
        {resultBanner('Вже було придбано!'); }
        else{
            event.target.setAttribute('hasbay', true);
            resultBanner('Додано до корзини!')
        }
    }
    else if (event.target.className == 'playBtn'){
        if(event.target.id=='psng1'){a=0;}
        else if (event.target.id=='psng2'){a=1;}
        else if (event.target.id=='psng3'){a=2;}
        else if (event.target.id=='psng4'){a=3;}
        else if (event.target.id=='psng5'){a=4;}
        else if (event.target.id=='psng6'){a=5;}
        else if (event.target.id=='psng7'){a=6;}
        else if (event.target.id=='psng8'){a=7;}
        else if (event.target.id=='psng9'){a=8;}
        else {window.location.href="https://music.youtube.com/watch?v=pXSBiGoVr7g&feature=share";}
        window.location.href=urlList[a];
    }
    else if (event.target.className === 'searchOptBtn'){
        let a=event.target.parentElement;
        let b=a.parentElement;
        for (i=2; i<b.children.length; i++){
            if ( b.children[i]!=a){
                b.children[i].children[1].style.display='none';
                b.children[i].children[0].setAttribute('hold', false);
            }
        }
        if (a.children[0].getAttribute('hold')=='false'){
            a.children[1].style.display='block' ;
            a.children[1].style.top=event.target.offsetTop +'px';
            a.children[1].style.left='100%';
            a.children[0].setAttribute('hold', true);
        }
        else {
            a.children[1].style.display='none';
            a.children[0].setAttribute('hold', false);
        }
    }
    else if (event.target.className === 'menuUp'){
        body.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    else if (event.target.className === 'logIn'){
        resultBanner('Зараз ця функція недоступна')
    }
    else if (event.target.className === 'searchBtn')
    {
        resultBanner('Нічого не знайдено')
    }
    else if (event.target.className === 'pageNumber')
    {
        const someNew=document.createElement('div');
        someNew.className='pageMarker';
        const numberList=document.getElementsByClassName('pageNumber');
        for(i=0; i<numberList.length; i++)
        {
            if (numberList[i].firstChild && event.target!=numberList[i])
            {
                removeMark(numberList[i] )
            }
        }
        addMark(event.target, someNew );
    }
}

function resultBanner(massageText){
    const someNew=document.createElement('div');
    const someNewbackground=document.createElement('div');
    someNew.className='addBaner';
    someNewbackground.className='banerBack';
    someNew.id='addBaner';
    someNewbackground.id='banerBack';
    someNew.textContent=massageText;
    someNewbackground.style.marginTop = body.scrollTop + 'px';
    someNewbackground.appendChild(someNew);
    body.appendChild(someNewbackground);
    removeBaner(someNew);
}

function deleteBack() {
    const someNewbackground=document.getElementById('banerBack');
    body.removeChild(someNewbackground);
}

window.onload = function(){
    const par=document.getElementsByClassName('paralax');
    for (i=0; i<par.length; i++)
    {
        par[i].style.backgroundImage='url(/picture/par' + (i+1) +'.jpg)';
        par[i].style.backgroundPositionY='10px'
    }
    par[1].style.backgroundPositionY='0px';
    const number=document.getElementsByClassName('pageNumber');
    const someNew=document.createElement('div');
    someNew.className='pageMarker';
    addMark(number[0], someNew );
    let b=document.getElementsByClassName('searchOptBtn');
        for (i=0; i<b.length; i++){
            b[i].setAttribute('hold', false);
        }
}

body.addEventListener('scroll', ()=>{
    let startTime = new Date().getTime();
    const currentScroll = body.scrollTop;
    (function moveBg(){
        let duration = 1000/90;
        let time=undefined;
        startTime = render(time,duration,startTime, currentScroll);
        if (((new Date().getTime()-startTime)<duration))
        { let idAnim = requestAnimationFrame(moveBg);}
    }) ();
    myScrolValue=currentScroll;
})

function render(time, duration, startTime, currentScroll) {
    if (time === undefined) {
      time = new Date().getTime();
    }
    if (startTime === null) {
      startTime = time;
    }
    const par=document.getElementsByClassName('paralax');
    for (i=0; i<par.length; i++)
    {
        let curentPosition = parseInt(par[i].style.backgroundPositionY);
        curentPosition+=(currentScroll-myScrolValue)*(-0.25)*(time-startTime)/duration;
        par[i].style.backgroundPositionY= curentPosition + 'px';
    }
    return startTime;
}