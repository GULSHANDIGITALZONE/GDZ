// main LOgin aaur Logout ke liye .............................................
// Login aur Logout ka Fix kiya gaya script

// Login Function
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    const validUsers = {
        "user": "password",
        "user1": "password",
        "user2": "password",
        "user3": "password",
        "GDZ": "Free",
        "user4": "password4"
    };

    if (validUsers[username] && validUsers[username] === password) {
        showMessage("Successfully Login ✔️", "green");
        document.getElementById("login-container").style.display = "none";
        document.getElementById("logout-container").style.display = "block";
        
        // Login time store karo for auto logout
        localStorage.setItem("loginTime", Date.now());
        localStorage.setItem("isLoggedIn", "true");
    } else {
        showMessage("Invalid username or password! ❌", "red");
    }
}

// Auto Logout after 24 hours
function checkAutoLogout() {
    let loginTime = localStorage.getItem("loginTime");
    if (loginTime) {
        let currentTime = Date.now();
        let hoursPassed = (currentTime - loginTime) / (1000 * 60 * 60);

        if (hoursPassed >= 24) {
            logout();
        }
    }
}

// Logout Function
function logout() {
    localStorage.removeItem("loginTime");
    localStorage.removeItem("isLoggedIn");
    alert("आपका सेशन समाप्त हो गया है, कृपया फिर से लॉगिन करें।");
    document.getElementById("login-container").style.display = "block";
    document.getElementById("logout-container").style.display = "none";
}
function logout1() {
    const confirmation = confirm("Are you sure you want to logout?");
    if (confirmation) {
        showMessage("Successfully LogOut,Thanku.", "gold");
        document.getElementById("login-container").style.display = "block";
        document.getElementById("logout-container").style.display = "none";
    } else {
        showMessage("Logout cancelled!✔️", "green");
    }
}

// Page Load par Auto Logout Check
window.onload = function () {
    checkAutoLogout();
    if (localStorage.getItem("isLoggedIn") === "true") {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("logout-container").style.display = "block";
    }
};

// Show Message Function
function showMessage(message, color) {
    const messageDiv = document.createElement("div");
    messageDiv.textContent = message;
    messageDiv.style.color = "white";
    messageDiv.style.backgroundColor = color;
    messageDiv.style.textAlign = "center";
    messageDiv.style.position = "fixed";
    messageDiv.style.top = "0";
    messageDiv.style.left = "50%";
    messageDiv.style.transform = "translateX(-50%)";
    messageDiv.style.width = "100%";
    messageDiv.style.height = "100px";
    messageDiv.style.lineHeight = "100px";
    messageDiv.style.fontSize = "50px";
    messageDiv.style.zIndex = "1000";
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 2000);
}

//खुद से लाॅगआउट से बचाने के लिए .....................................
// यूज़र के लॉगिन टाइम को सेट करें
// function login() {
//     localStorage.setItem("loginTime", Date.now()); // करंट टाइम स्टोर करो
//     localStorage.setItem("isLoggedIn", "true"); // लॉगिन स्टेट सेट करो
//     window.location.reload(); // पेज रीलोड करो
// }

// // 24 घंटे बाद ऑटो-लॉगआउट सेट करें
// function checkAutoLogout() {
//     let loginTime = localStorage.getItem("loginTime");
//     if (loginTime) {
//         let currentTime = Date.now();
//         let hoursPassed = (currentTime - loginTime) / (1000 * 60 * 60); // मिलिसेकंड से घंटे में कन्वर्ट

//         if (hoursPassed >= 24) {
//             logout();
//         }
//     }
// }

// // लॉगआउट फंक्शन
// function logout() {
//     localStorage.removeItem("loginTime"); // टाइम डिलीट करो
//     localStorage.removeItem("isLoggedIn"); // स्टेट डिलीट करो
//     alert("आपका सेशन समाप्त हो गया है, कृपया फिर से लॉगिन करें।");
//     window.location.reload();
// }

// // पेज लोड होने पर ऑटो-लॉगआउट चेक करें
// window.onload = function () {
//     checkAutoLogout();
// };

//payment ke liye........................................................................................
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}
//..........
function payment() {
    document.getElementById("payment-container").style.display = "none";
    document.getElementById("back-container").style.display = "block";
}

function back_payment() {
alert("It is necessary to send the bill.");
document.getElementById("payment-container").style.display = "block";
document.getElementById("back-container").style.display = "none";
}
// <!-- check box sctipt ................................................................-->
function toggleButton() {
const checkbox = document.getElementById("toggleCheckbox");
const button = document.getElementById("actionButton");
button.disabled = !checkbox.checked;
}
//...........
function payments() {
    document.getElementById('paymentModal').style.display = "block";
}
function Cancelpayment() {
    document.getElementById('paymentModal').style.display = "none";
}

//chatbot ke liye.....................................................................
function loginbot() {
    document.getElementById("on-container").style.display = "none";
    document.getElementById("off-container").style.display = "block";
}

function logoutbot() {
alert("closed Chatbot");
document.getElementById("on-container").style.display = "block";
document.getElementById("off-container").style.display = "none";
}

//chatbot renspo ke liye.....................................................................
function sendMessage() {
    const userInput = document.getElementById('user-input');
    const messages = document.getElementById('chat-messages');

    // Display user's message
    const userMessage = document.createElement('div');
    userMessage.className = 'message user-message';
    userMessage.textContent = userInput.value;
    messages.appendChild(userMessage);

    // Generate bot's response
    const botMessage = document.createElement('div');
    botMessage.className = 'message bot-message';
    botMessage.textContent = getBotResponse(userInput.value);
    messages.appendChild(botMessage);

    // Clear input and scroll to the bottom
    userInput.value = '';
    messages.scrollTop = messages.scrollHeight;
  }

  function getBotResponse(input) {
    // Simple response logic
    if (input.toLowerCase().includes('hello')) {
      return 'Hello! How can I help you?';
    }
    else if (input.toLowerCase().includes('good morning')) {
        return 'Good morning';
    }
    else if (input.toLowerCase().includes('good evening')) {
        return 'Good evening';
    }
    else if (input.toLowerCase().includes('good afternoon')) {
        return 'Good afternoon';
    }
     else if (input.toLowerCase().includes('hi')) {
        return 'Hi! How can I help you?';
    } else if (input.toLowerCase().includes('how are you')) {
      return 'I am virtual assistant of GDZ';
    }else if (input.toLowerCase().includes('e-shram')) {
        return 'video>>>> No.1 par jaye';
    }
    else if (input.toLowerCase().includes('register')) {
        return 'Get ID & Password, par click kre';
    }
    else if (input.toLowerCase().includes('help')) {
        return 'How can we halp you? Please type or Call:-6299050695 ,Email:-gulshandigitalzone@gmail.com ';
    }
    else if (input.toLowerCase().includes('e-shram')) {
        return 'video>>>> No.1 par jaye';
    }
    else if (input.toLowerCase().includes('college')) {
        return 'video>>>> No.2 par jaye';
    }
    else if (input.toLowerCase().includes('beej')) {
        return 'video>>>> No.3 par jaye';
    }
  
    else if (input.toLowerCase().includes('motivation')) {
        return 'video>>>> No.4 par jaye';
    }
    else if (input.toLowerCase().includes('satsang')) {
        return 'video>>>> No.5 par jaye';
    }
    else if (input.toLowerCase().includes(' ')) {
        return 'Please Type';
    }
    

    else {
      return 'Sorry, it is not available or I do not understand, Please give me feedback by email,';
    }
  }





// <!-- //About ko click karne par modal open ho jayega. script........................................... -->

function showAbout() {
    document.getElementById('aboutModal').style.display = "block";
}
function closeAbout() {
    document.getElementById('aboutModal').style.display = "none";
}
// <!-- Search bar ke liye ................................................ -->
function searchText() {
    // Clear previous highlights...................
    const elements = document.querySelectorAll('.content *');
    elements.forEach(element => {
        element.innerHTML = element.innerHTML.replace(/<span class="highlight">(.*?)<\/span>/g, '$1');
    });

    // Get search input value.........................
    const input = document.getElementById('searchInput').value.trim().toLowerCase();
    if (input === "") return;

    // Highlight matching text.......................
    elements.forEach(element => {
        if (element.nodeType === Node.ELEMENT_NODE && element.children.length === 0) {
            const regex = new RegExp(input, 'gi');
            element.innerHTML = element.innerHTML.replace(regex, (match) => `<span class="highlight">${match}</span>`);
        }
    });
}

// <!-- //suscriber input............................................................................... -->
  document.getElementById('customForm').addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent default form submission

      // Get input value
      const inputValue = document.getElementById('Subscribe.Id').value;

      // Google Form action URL and field name (entry ID)
      const googleFormURL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdqVwXLPzFj1Tl2ZQVxpJN8TLWTtkX0XMFOtZBZgeCxfGJDug/formResponse"; // Replace with your form's action URL
      const formFieldName = "entry.1325797992"; // Replace with your form's input field name (entry ID)

      // Create a form submission URL
      const submissionURL = `${googleFormURL}?${formFieldName}=${encodeURIComponent(inputValue)}`;

      // Submit data to Google Form
      fetch(submissionURL, { method: "POST", mode: "no-cors" })
          .then(() => {
              alert("Thank you for subscribing.");
          })
          .catch(() => {
              alert("please enter valid email.");
          });
          
  });


//   <!-- //Any suggestion or comment or feedback............................................................................... -->
  
   document.getElementById('feedbackForm').addEventListener('submit', function (e) {
       e.preventDefault(); // Prevent default form submission

       // Get input value
       const inputValue = document.getElementById('inputField').value;

       // Google Form action URL and field name (entry ID)
       const googleFormURL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLScZtNsBkcLQHIQ5u8yz6qsL82kRJ0RXhlaozfyReXz3xs8Uog/formResponse"; // Replace with your form's action URL
       const formFieldName = "entry.1489761833"; // Replace with your form's input field name (entry ID)

       // Create a form submission URL
       const submissionURL = `${googleFormURL}?${formFieldName}=${encodeURIComponent(inputValue)}`;

       // Submit data to Google Form
       fetch(submissionURL, { method: "POST", mode: "no-cors" })
           .then(() => {
               alert("Thank you for feedback.");
           })
           .catch(() => {
               alert("error submiting");
           });
           
   });
