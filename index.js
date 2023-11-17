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





































// const colorPicker = document.getElementById("color-inpt");
// const colorSchemeSelector = document.getElementById("color-scheme-selector");
// const palleteSize = document.getElementById("pallete-size");
// const getColorSchemeBtn = document.getElementById("get-color-scheme-btn");
// const colorSchemeContainer = document.getElementById("color-scheme-container");

// getColorSchemeBtn.addEventListener("click", function () {
//     const colorPickerValue = colorPicker.value.replace("#", "");
//     const colorSchemeSelectorValue = colorSchemeSelector.value;
//     const palleteSizeValue = palleteSize.value;

//     fetch(`https://www.thecolorapi.com/scheme?hex=${colorPickerValue}&mode=${colorSchemeSelectorValue}&count=${palleteSizeValue}`)
//         .then(request => request.json())
//         .then(data => {
//             const colorsArray = data.colors;
//             createColorSchemeHTML(colorsArray);
//             setColor(colorsArray);
//         });
// });


// function createColorSchemeHTML(arr) {
//     let colorSchemeHTML = "";

//     arr.forEach(function (color, index) {
//         const colorContainer = document.createElement("div");
//         colorContainer.classList.add("color-container", "flex-container");
//         colorContainer.addEventListener("click", function () {
//             copyToClipboard(color.hex.value);
//         });

//         colorContainer.innerHTML = `
//             <div id="color-${index}" class="color-display"></div>
//             <p id="color-hex-${index}">${color.hex.value}</p>
//         `;

//         colorSchemeHTML += colorContainer.outerHTML;
//     });

//     colorSchemeContainer.innerHTML = colorSchemeHTML;
// }


// function setColor(arr) {
//     arr.map(function (color, index) {
//         document.getElementById(`color-${index}`).style.background = `${color.hex.value}`;
//     });
// }

// // Define the copyToClipboard function in the global scope
// function copyToClipboard(hexValue) {
//     // Create a temporary textarea element
//     var textarea = document.createElement("textarea");
//     textarea.value = hexValue;

//     // Append the textarea to the document
//     document.body.appendChild(textarea);

//     // Select the text in the textarea
//     textarea.select();

//     try {
//         // Use the Clipboard API to copy the selected text to the clipboard
//         navigator.clipboard.writeText(hexValue)
//             .then(() => {
//                 alert("Hex value copied to clipboard: " + hexValue);
//             })
//             .catch((err) => {
//                 console.error("Unable to copy to clipboard", err);
//             });
//     } finally {
//         // Remove the temporary textarea
//         document.body.removeChild(textarea);
//     }
// }




