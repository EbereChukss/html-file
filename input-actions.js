function emailValidator() {
    let emailInput = document.getElementById("email-input");
    
    // DOMS to manipulate when there's an encountered error
    let inputBox = document.getElementById("input_box");
    let icon = document.getElementById("icon");
    let error_section = document.getElementById("error_section");
    let contact_btn = document.getElementById("contact_btn");

    function defaultStyling() {
        // for input box
        inputBox.style.border = "none";
        inputBox.style.borderBottomLeftRadius = "none";
        inputBox.style.borderBottomRightRadius = "none";
        // fot the icon
        icon.style.display = "none"
        // for error_section
        error_section.style.display = "none"
        // for contact_btn
        contact_btn.style.top = "-50px"
    }


    let emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailInput.value.trim().match(emailformat)) {
        console.log("Correct Person!!!")
        defaultStyling()
    }  else {
        console.log("Bad...");
        // for input box
        inputBox.style.border = "2px solid salmon";
        inputBox.style.borderBottomLeftRadius = "10px";
        inputBox.style.borderBottomRightRadius = "10px";
        // fot the icon
        icon.style.display = "flex"
        // for error_section
        error_section.style.display = "block"
        // for contact_btn
        contact_btn.style.top = "0px"
    }
}

// emailValidator()