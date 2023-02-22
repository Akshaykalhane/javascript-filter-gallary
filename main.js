const displayUI=document.querySelector('.display-ui');
const buttonDiv=document.querySelector('.filter-buttons');

const types = ['all','animal','nature','tech','gaming'];

types.forEach((el,id)=>{
    let button = document.createElement('button')
    button.textContent=el;
    button.className='btn';
    button.classList.add(el)
    button.id=id;
    if(button.textContent=='all'){
        button.classList.add('active')
    }
    button.addEventListener('click',()=>{
        handleClick(el)
    })
    buttonDiv.appendChild(button)
})



function handleClick(data){

    let buttons = document.querySelectorAll('.btn');
    buttons.forEach((el)=>{
        // console.log(el.className)
        if(el.className==`btn ${data}`){
            el.classList.add('active')
            console.log('all')
        } else{
            el.classList.remove('active')
        }
    })
    console.log(buttons)

    const list = [...gallaryData];
    const filterList = list.filter((el)=>{
        if(data=='all') {
            return el
        } 
        return el.type==data;
    })
    showFilterData(filterList)
}

function showFilterData(data){
    displayUI.innerHTML=''
    console.log(data)
    data.forEach((el)=>{
        displayUI.innerHTML+=`
        <div class="img-box">
            <img src=${el.src} alt=${el.type} />
        </div>
        `
    })
}


showFilterData(gallaryData)