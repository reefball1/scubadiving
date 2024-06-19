document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("form");
    var result = document.getElementById("result");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission
        if (!form.checkValidity()) {
            event.stopPropagation();
            result.style.color = 'red'
            result.innerHTML = "Please fill out all required fields.";
            result.style.display = "block";
            form.classList.add("was-validated");
            return;
        }

        result.innerHTML = "Please wait...";
        result.style.color = 'gray'
        form.classList.add("was-validated");

        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
                result.style.color = 'green'
            } else {
                console.log(response);
                result.innerHTML = json.message;
                result.style.color = 'red'
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
            result.style.color = 'red'
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
    }, false);

    var inputs = form.querySelectorAll("input, textarea");
    inputs.forEach(function (input) {
        input.addEventListener("input", function () {
            if (input.name === "phone") {
                formatPhoneNumber(input);
            }
            validateInput(input);
        });

        input.addEventListener("blur", function () {
            validateInput(input);
        });
    });

    function validateInput(input) {
        const emptyFeedback = input.nextElementSibling;
        const invalidFeedback = emptyFeedback ? emptyFeedback.nextElementSibling : null;
    
        if (!input.value) {
            input.setCustomValidity("This field is required.");
            input.classList.add("is-invalid");
            if (emptyFeedback) emptyFeedback.style.display = "block";
            if (invalidFeedback) invalidFeedback.style.display = "none";
        } else if (input.type === "email") {
            if (input.validity.typeMismatch || !input.value.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
                input.setCustomValidity("Please provide a valid email address.");
                input.classList.add("is-invalid");
                if (emptyFeedback) emptyFeedback.style.display = "none";
                if (invalidFeedback) invalidFeedback.style.display = "block";
            } else {
                input.setCustomValidity("");
                input.classList.remove("is-invalid");
                if (emptyFeedback) emptyFeedback.style.display = "none";
                if (invalidFeedback) invalidFeedback.style.display = "none";
            }
        } else if (input.name === "phone") {
            if (!input.value.match(/^\(\d{3}\) \d{3}-\d{4}$/)) {
                input.setCustomValidity("Please provide a valid phone number.");
                input.classList.add("is-invalid");
                if (emptyFeedback) emptyFeedback.style.display = "none";
                if (invalidFeedback) invalidFeedback.style.display = "block";
            } else {
                input.setCustomValidity("");
                input.classList.remove("is-invalid");
                if (emptyFeedback) emptyFeedback.style.display = "none";
                if (invalidFeedback) invalidFeedback.style.display = "none";
            }
        } else if (!input.checkValidity()) {
            input.classList.add("is-invalid");
            if (emptyFeedback) emptyFeedback.style.display = "none";
            if (invalidFeedback) invalidFeedback.style.display = "none";
        } else {
            input.classList.remove("is-invalid");
            if (emptyFeedback) emptyFeedback.style.display = "none";
            if (invalidFeedback) invalidFeedback.style.display = "none";
        }
    }
    
    function formatPhoneNumber(input) {
        var numbers = input.value.replace(/\D/g, '');
        if (numbers.length > 10) {
            numbers = numbers.slice(0, 10);
        }
        var char = {0:'(',3:') ',6:'-'};
        input.value = '';
        for (var i = 0; i < numbers.length; i++) {
            input.value += (char[i]||'') + numbers[i];
        }
    }
});
