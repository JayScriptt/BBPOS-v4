// Function to append output to the order list
function appendOutput(text) {
    const outputContainer = document.getElementById('outputContainer');
    
    // Create a div for the output text
    const newItem = document.createElement('div');
    newItem.textContent = text;
    newItem.classList.add('output-item');

    // Add click event to each output item to allow selection
    newItem.addEventListener('click', function () {
        // Remove previous delete button if any
        if (selectedItem && selectedItem !== newItem) {
            const previousDeleteBtn = selectedItem.querySelector('.delete-btn');
            if (previousDeleteBtn) previousDeleteBtn.remove();
        }

        // Highlight the selected item
        if (selectedItem) {
            selectedItem.classList.remove('highlighted'); // Unhighlight previous selection
        }
        selectedItem = newItem;
        selectedItem.classList.add('highlighted'); // Highlight the current selection

        // Add delete button when an item is clicked
        if (!newItem.querySelector('.delete-btn')) {
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'X';
            deleteBtn.classList.add('delete-btn');
            newItem.appendChild(deleteBtn);

            // Event to remove the item and its dependent color when delete button is clicked
            deleteBtn.addEventListener('click', function (e) {
                e.stopPropagation(); // Prevent triggering the click on the item itself
                removeItemAndColors(newItem);
            });
        }
    });

    outputContainer.appendChild(newItem);
}

// Function to remove the item and any dependent color lines
function removeItemAndColors(item) {
    let currentItem = item;

    // Remove the item and its dependent color lines
    do {
        const nextSibling = currentItem.nextElementSibling;
        currentItem.remove(); // Remove the current item (either the output item or color line)

        // If the next sibling is a color line (starts with *), continue removing
        currentItem = nextSibling && nextSibling.textContent.startsWith('*') ? nextSibling : null;
    } while (currentItem);
}

// Function to apply color to the selected item (if needed for future)
function applyColor(color) {
    if (selectedItem) {
        // Create a new div for the color below the selected item
        const colorItem = document.createElement('div');
        colorItem.textContent = `*${color}`;
        colorItem.style.color = color;
        colorItem.style.marginLeft = '20px'; // Indent the color to make it look distinct
        colorItem.classList.add('color-item');

        // Append the new color line below the selected item
        selectedItem.insertAdjacentElement('afterend', colorItem);
    }
}


//PRICE SHOW FUNCTION
document.addEventListener('DOMContentLoaded', function() {
    // Toggle prices on button click
    document.getElementById('toggle-btn-price').addEventListener('click', function() {
        var menuItems = document.querySelectorAll('.menu-choices p');
        var button = document.getElementById('toggle-btn-price').querySelector('p');
        
        if (button.textContent === "PRICE : OFF") {
            // Show all prices and change button text to "PRICE : ON"
            menuItems.forEach(function(item) {
                item.style.display = "block";
            });
            button.textContent = "PRICE : ON";
        } else {
            // Hide all prices and change button text to "PRICE : OFF"
            menuItems.forEach(function(item) {
                item.style.display = "none";
            });
            button.textContent = "PRICE : OFF";
        }
    });
});

let selectedItem = null; // To track the currently selected item
let isMedium = true; // Track if the current selection is M (Medium) or G (Grande)

// Event listener for the size toggle button
document.getElementById('toggle-btn').addEventListener('click', function () {
    this.classList.toggle('active');
  
    // Toggle the text between "M" and "G"
    const textElement = this.querySelector('p');
    if (textElement.textContent === 'M') {
        textElement.textContent = 'G';
        isMedium = false; // Now in G mode
    } else {
        textElement.textContent = 'M';
        isMedium = true; // Now in M mode
    }
});

// Event listeners for milk tea buttons
for (let i = 1; i <= 12; i++) {
    document.getElementById(`mt${i}`).addEventListener('click', function () {
        let price = isMedium ? 29 : 35; // Set price based on size

        if (i === 1) {
            appendOutput(`${isMedium ? 'M' : 'G'} - MT WNTR MLN ${price}`);
        } else if (i === 2) {
            appendOutput(`${isMedium ? 'M' : 'G'} - MT Taro ${price}`);
        } else if (i === 3) {
            appendOutput(`${isMedium ? 'M' : 'G'} - MT STRWBRRY ${price}`);
        } else if (i === 4) {
            appendOutput(`${isMedium ? 'M' : 'G'} - MT SLTD CRML ${price}`);
        } else if (i === 5) {
            appendOutput(`${isMedium ? 'M' : 'G'} - MT RD VLVT ${price}`);
        } else if (i === 6) {
            appendOutput(`${isMedium ? 'M' : 'G'} - MT MATCHA ${price}`);
        } else if (i === 7) {
            appendOutput(`${isMedium ? 'M' : 'G'} - MT DBL DTCH ${price}`);
        } else if (i === 8) {
            appendOutput(`${isMedium ? 'M' : 'G'} - MT DRK CHC ${price}`);
        } else if (i === 9) {
            appendOutput(`${isMedium ? 'M' : 'G'} - MT COC HZLNT ${price}`);
        } else if (i === 10) {
            appendOutput(`${isMedium ? 'M' : 'G'} - MT C&C ${price}`);
        } else if (i === 11) {
            appendOutput(`${isMedium ? 'M' : 'G'} - MT CHC KISSES ${price}`);
        } else if (i === 12) {
            appendOutput(`${isMedium ? 'M' : 'G'} - MT BRWN SGR ${price}`);
        }
    });
}

