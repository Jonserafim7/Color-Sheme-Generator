const colorPicker = document.getElementById("color-inpt")
const colorSchemeSelector = document.getElementById("color-scheme-selector")
const palleteSize = document.getElementById("pallete-size")
const getColorSchemeBtn = document.getElementById("get-color-scheme-btn")
const colorSchemeContainer = document.getElementById("color-scheme-container")


getColorSchemeBtn.addEventListener("click", function(){
    const colorPickerValue = colorPicker.value.replace("#","")
    const colorSchemeSelectorValue = colorSchemeSelector.value
    const palleteSizeValue = palleteSize.value

    fetch(`https://www.thecolorapi.com/scheme?hex=${colorPickerValue}&mode=${colorSchemeSelectorValue}&count=${palleteSizeValue}`)
        .then(request => request.json())
        .then(data => {
            const colorsArray = data.colors
            createColorSchemeHTML(colorsArray)
            setColor(colorsArray)
        })  
})

function createColorSchemeHTML(arr) {

    let colorSchemeHTML = ""

    arr.map(function(color, index){
        
        colorSchemeHTML += `
            <div class="color-container flex-container">
                <div id="color-${index}" class="color-display"></div>
                <p id="color-hex-${index}">${color.hex.value}</p>
            </div>
        `
    })

    colorSchemeContainer.innerHTML = colorSchemeHTML

}

function setColor(arr){
    arr.map(function(color,index){
        document.getElementById(`color-${index}`).style.background = `${color.hex.value}`
    })
}


// function copyToClipboard(hexcolor){

//     navigator.clipboard.writeText(hexcolor)
//         .then(function () {
//             console.log('Texto copiado com sucesso!');
//         })
//         .catch(function (err) {
//             console.error('Erro ao copiar texto: ', err);
//         });

// }







































