        let cart = [];
        let totalPrice = 0;

        function showPage(page) {  
            document.querySelectorAll("section").forEach(sec => sec.style.display = "none");  
            document.getElementById(page).style.display = "block";  
        }  

        function addToCart(itemName, itemPrice) {  
            cart.push({ name: itemName, price: itemPrice });  
            totalPrice += itemPrice;  
            updateCart();  
        }  

        function updateCart() {  
            document.getElementById("cart-items").innerHTML = cart.map(item => `<li>${item.name} - Rs. ${item.price}</li>`).join("");  
            document.getElementById("total-price").textContent = totalPrice.toFixed(2);  
        }  

        function placeOrder() {  
            if (cart.length > 0) {  
                alert("Thank you for your order!");  
                cart = []; totalPrice = 0; updateCart();  
            } else { alert("Your cart is empty!"); }  
        }  
	    function sendMessage(event) {
            event.preventDefault(); // Prevent default form submission

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been sent. We will contact you soon.`);
            
            document.querySelector(".contact-form").reset();
        } else {
            alert("Please fill in all fields.");
        }
    }

    function sendChat() {
        const input = document.getElementById("chatbot-input");
        const message = input.value.trim();
        if (!message) return;

        const messagesContainer = document.getElementById("chatbot-messages");

        const userMsg = document.createElement("div");
        userMsg.style.textAlign = "right";
        userMsg.textContent = "You: " + message;
        messagesContainer.appendChild(userMsg);

        const botMsg = document.createElement("div");
        botMsg.style.textAlign = "left";
        let reply = getBotReply(message);
        botMsg.innerHTML = "Bot: " + reply;
        messagesContainer.appendChild(botMsg);

        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        input.value = "";
    }

    function getBotReply(message) {
        message = message.toLowerCase();
        if (message.includes("hello") || message.includes("hi") || message.includes("hey")){
             return "Hi there! How can I help?";
        }
        if (message.includes("order")) return "You can place your order in the 'Order Food' section!";
        if (message.includes("contact")) return "You can contact us in the 'Contact' section!";
        if (message.includes("door delivery")) return "Yes, we are providing door delivery for your satisfaction.";
    
        return "I'm sorry, I didn't understand that.<br>" +
               "For further queries, you can contact this number:<br>" +
               "6379867075 (or)<br>" +
               "Contact us via the contact section.<br>" +
               "Thank you.";
    }
    

    document.getElementById("chatbot-container").addEventListener("click",function(e) {
    if(!this.classList.contains("expanded") ) {
        this.classList.add("expanded");
        e.stopPropagation();
    }
    });

    document.addEventListener("click",function(e) {
    const chat = document.getElementById("chatbot-container");
    if(chat.classList.contains("expanded")  && !chat.contains(e.target)) {
        chat.classList.remove("expanded");
    }
    });
    document.getElementById("chatbot-input").addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            sendChat();
        }
    });
    const faqs = [
        { question: "What is your delivery time?", answer: "We typically deliver within 30-45 minutes." },
        { question: "Do you provide door delivery?", answer: "Yes, we offer door delivery across the city." },
        { question: "How can I contact support?", answer: "You can use the Contact section or call 6379867075." },
        { question: "What payment methods are accepted?", answer: "We accept cash, UPI, and card payments." }
    ];
    document.getElementById("faq-btn").addEventListener("click", function() {
        const messagesContainer = document.getElementById("chatbot-messages");
        
        const faqIntro = document.createElement("div");
        faqIntro.style.textAlign = "left";
        faqIntro.innerHTML = "<strong>Here are some common questions. Click to see the answer:</strong>";
        messagesContainer.appendChild(faqIntro);
    
        faqs.forEach((faq, index) => {
            const faqItem = document.createElement("div");
            faqItem.style.textAlign = "left";
            faqItem.style.marginTop = "5px";
            faqItem.style.cursor = "pointer";
            faqItem.style.color = "#3CAEA3";  // match your theme
            faqItem.textContent = `${index + 1}. ${faq.question}`;
            
            faqItem.addEventListener("click", function() {
                const answerMsg = document.createElement("div");
                answerMsg.style.textAlign = "left";
                answerMsg.innerHTML = `<strong>Q:</strong> ${faq.question}<br><strong>A:</strong> ${faq.answer}`;
                messagesContainer.appendChild(answerMsg);
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            });
    
            messagesContainer.appendChild(faqItem);
        });
    
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    });
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

 