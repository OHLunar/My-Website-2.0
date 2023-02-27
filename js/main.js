//*? ♦ table of contents ♦
//*?
//*?   1. Gallery Page
//*?
//*?   2. Contact
//*?     2.1 Popup Screen
//



//* =============================
//*         Gallery Page
//* =============================*/ 

// Select all elements with the class "panel"
const panels = document.querySelectorAll('.panel')

// Attach a click event listener to each element
panels.forEach(panel =>{
    panel.addEventListener('click',()=>{

        // Remove the "active" class from all elements
        removeActionClasses()

        // Add the "active" class to the clicked element
        panel.classList.add('active')
    })
})

// Define a function for removing the "active" class from all elements
const removeActionClasses = () =>{
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}



//* =============================
//*           Contact
//* =============================*/

let username, passwd, email, phone, fd

// Collect data from form inputs
const collectDataFromForm = () =>{

    // Get values of form inputs by their id
    username = document.getElementById('username').value
    passwd = document.getElementById('passwd').value
    email = document.getElementById('email').value
    phone = document.getElementById('phone').value

    // Create an object to store the form data
    let formObj = {
        username: username,
        password: passwd,
        email: email,
        phone: phone
    }

    // Pass the form data object to be used for creating a FormData object
    createFromDataObject(formObj)

    // Call the submission function
    submission()
    console.log(formObj);
}

const createFromDataObject = (formObj) =>{

    // Append key-value pairs of form data to the FormData object
    fd = new FormData()
    fd.append('username', formObj.username)
    fd.append('password', formObj.password)
    fd.append('email', formObj.email)
    fd.append('phone', formObj.phone)
}

//?  =[Popup Screen]= ?//

// Function to handle form submission
const submission = () =>{

    // Get the "popup" element
    let popup = document.getElementById('popup')
    // Add the "popup" class to the element
    popup.classList.add ('popup')

    // Get the "h_submission" element
    let h_submission = document.getElementById('h_submission')
    // Update the element's text to include the username
    h_submission.innerText = `Hello ${username}`
}

// Function to close the popup
const closePopup = () => {

    // Get the "popup" element
    let popup = document.getElementById('popup')

    // Add a click event listener to the element
    popup.addEventListener('click',()=> {
        // Remove the "popup" class from the element
        popup.classList.remove('popup')
    })
}

//?  =[Popup Screen]=  ?//