document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');

    async function handleSubmit(event) {
        event.preventDefault();
        const status = document.getElementById('form-status');
        const data = new FormData(event.target);

        try {
            const response = await fetch(event.target.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                status.textContent = "Thanks for your message!";
                status.style.color = '#25D366'; // Green for success
                form.reset();
            } else {
                const responseData = await response.json();
                if (Object.hasOwn(responseData, 'errors')) {
                    status.textContent = responseData["errors"].map(error => error["message"]).join(", ");
                } else {
                    status.textContent = "Oops! There was a problem submitting your form";
                }
                status.style.color = '#ff6e7f'; // Red for error
            }
        } catch (error) {
            status.textContent = "Oops! There was a problem submitting your form";
            status.style.color = '#ff6e7f'; // Red for error
        }
    }

    if (form) {
        form.addEventListener("submit", handleSubmit);
    }
});