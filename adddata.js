
const collectedData = [];
let btncolor = '#52914d'

// function newDivFunc(){
//     let newDataDiv = document.createElement('div');
//     newDataDiv.id = 'idnewDataDiv'
//     newDataDiv.style.display = 'flex'
//     newDataDiv.style.flexDirection = 'column'
//     newDataDiv.style.justifyContent = 'space-evenly'
//     newDataDiv.style.alignItems = 'center'
//     newDataDiv.style.height = '280px'
//     newDataDiv.style.width = '100%'
//     newDataDiv.style.outline = '1px gray solid'
//     newDataDiv.style.borderRadius = '10px'
//     newDataDiv.style.padding = '10px'
//     newDataDiv.style.gap = '5px'
// }
// window.newDivfunc = newDivfunc
// newDivFunc

export function collectData(){


    if(document.contains(document.getElementById('idnewDataDiv'))){ ///// prevent doublicate when add unit button is clicked
    document.getElementById('idnewDataDiv').remove()
    }

    if(document.contains(document.getElementById('idnewDiv'))){ 
    document.getElementById('idnewDiv').remove()
    }


    console.log('collectData is woring ')
    let bedsss = ['1 bhk', '2 bhk', '3 bhk', '4 bhk', '5 bhk' ]

    let newDataDiv = document.createElement('div');
    newDataDiv.id = 'idnewDataDiv'
    newDataDiv.style.display = 'flex'
    newDataDiv.style.flexDirection = 'column'
    newDataDiv.style.alignItems = 'center'
    newDataDiv.style.height = '280px'
    newDataDiv.style.width = '100%'
    newDataDiv.style.outline = '1px gray solid'
    newDataDiv.style.borderRadius = '10px'
    newDataDiv.style.padding = '10px'
    newDataDiv.style.gap = '5px'



    let newDataDiv111 = document.createElement('div');
    let newDataDiv222 = document.createElement('div');

    newDataDiv111.id = 'idinnewDataDiv111'
    newDataDiv222.id = 'idinnewDataDiv222'

    bedsss.forEach((name, index) => {
        const buttons = document.createElement('button');
        buttons.textContent = name
        buttons.className = 'addDataClase1'
        buttons.style.backgroundColor = btncolor
        buttons.style.height = '90%'
        buttons.style.borderRadius = '10px'
        buttons.style.fontSize = '13px'

        buttons.addEventListener('click', () => {
        collectedData.push(name) 
        document.getElementById('idnewDataDiv').innerHTML = ''    
        addArea()
        showBtn()
        })
        newDataDiv111.append(buttons)
    })

    const xx = [newDataDiv222, newDataDiv111]
    for (let i = 0; i < xx.length; i++) {newDataDiv.append(xx[i])}

    document.getElementById('idsearchblock').before(newDataDiv)
}

//////////////////////////////////////////////////////////////////////////

export function addArea(){
    console.log('addArea is woring ')

    let newDataDiv111 = document.createElement('div');
    let newDataDiv222 = document.createElement('div');

    newDataDiv111.id = 'idinnewDataDiv111'
    newDataDiv222.id = 'idinnewDataDiv222'

    let newDataDiv = document.getElementById('idnewDataDiv')

    let areass = ['Sadd', 'Lusail', 'Pearl', 'Westbay', 'Waab' ]

    areass.forEach((name, index) => {
        const buttons = document.createElement('button');
        buttons.textContent = name
        buttons.style.backgroundColor = btncolor
        buttons.style.height = '35px'
        buttons.style.borderRadius = '10px'
        buttons.style.fontSize = '13px'

        buttons.addEventListener('click', () => {
            collectedData.push(name) 
            document.getElementById('idnewDataDiv').innerHTML = ''      
            addPrices()
            showBtn()
        });
        newDataDiv111.append(buttons)
    })

    const xx = [newDataDiv222, newDataDiv111]

    for (let i = 0; i < xx.length; i++) {newDataDiv.append(xx[i])}
}

//////////////////////////////////////////////////////////////////////////

export function addPrices(){
    console.log('addPrices is woring ')
    let prices = ['5000', '6000', '7000', '8000', '9000 +' ]
    let newDataDiv111 = document.createElement('div');
    let newDataDiv222 = document.createElement('div');

    newDataDiv111.id = 'idinnewDataDiv111'
    newDataDiv222.id = 'idinnewDataDiv222'

    let newDataDiv = document.getElementById('idnewDataDiv')

    prices.forEach((name, index) => {
        const buttons = document.createElement('button');
        buttons.textContent = name
        buttons.style.backgroundColor = btncolor
        buttons.style.height = '35px'
        buttons.style.borderRadius = '10px'
        buttons.style.fontSize = '13px'

        buttons.addEventListener('click', () => {
        collectedData.push(name) 
        document.getElementById('idnewDataDiv').innerHTML = ''
        showCollectedData()
        showBtn()
        });
        newDataDiv111.append(buttons)
    })

    const xx = [newDataDiv222, newDataDiv111]
    for (let i = 0; i < xx.length; i++) {newDataDiv.append(xx[i])}
}

//////////////////////////////////////////////////////////////////////////
export function showCollectedData(){
    console.log('showCollectedData is woring ') 

    let newDataDiv111 = document.createElement('div');
    let newDataDiv222 = document.createElement('div');

    newDataDiv111.id = 'idinnewDataDiv111'
    newDataDiv222.id = 'idinnewDataDiv222'

    let newDataDiv = document.getElementById('idnewDataDiv')

    collectedData.forEach((name, index) => {
        const buttons = document.createElement('button');
        buttons.textContent = name
        buttons.style.backgroundColor = btncolor
        buttons.style.height = '35px'
        buttons.style.width = '50%'
        buttons.style.borderRadius = '10px'
        buttons.style.fontSize = '13px'
        newDataDiv222.append(buttons)     
    })

    const button = document.createElement('button');
    button.textContent = 'Send Data'
    button.style.backgroundColor = 'brown'
    button.style.height = '35px'
    button.style.width = '50%'
    button.style.margin = 'auto'
    button.style.borderRadius = '10px'
    button.style.fontSize = '13px'
    newDataDiv111.append(button)

    button.addEventListener('click', () => {
        newDataDiv.innerHTML = `<p id='p'>Data has been sent sucsessfuly</p>`
        // newDataDiv.style.alignItems = 'center'
        newDataDiv.style.justifyContent = 'center'
        // newDataDiv.alignItems = 'center '
        document.getElementById('p').style.color = 'green'
        document.getElementById('p').style.fontSize = '20px'


        setTimeout(function() {
            if (newDataDiv) {
            newDataDiv.remove();
            }}, 1000); // 3000 milliseconds = 3 seconds
    });

    const xx = [newDataDiv222, newDataDiv111]
    for (let i = 0; i < xx.length; i++) {newDataDiv.append(xx[i])}  

    collectedData.length = 0
}
//////////////////////////////////////////////////////////////////////////
function showBtn(){
    collectedData.forEach((i, index) => {
        const button = document.createElement('button');
        button.textContent = i
        button.style.backgroundColor = btncolor
        button.style.height = '90%'
        button.style.width = '20%'
        button.style.borderRadius = '10px'
        button.style.fontSize = '13px'
    document.getElementById('idinnewDataDiv222').append(button)})
}