// Add event listener to navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const target = event.target.getAttribute('href');
        document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
    });
});

// Add event listener to form submit button
document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    alert('Form submitted!');
});