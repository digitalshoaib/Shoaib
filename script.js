const menuBtn = document.querySelector('.menu-btn');
const navCard = document.querySelector('.nav-card');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navCard.classList.toggle('open');
});
const services = document.querySelectorAll('.service');

services.forEach(service => {

    const trigger = service.querySelector('.service-trigger');

    trigger.addEventListener('click', () => {

        services.forEach(item => {

            if(item !== service){
                item.classList.remove('active');
                item.querySelector('.service-icon').textContent = '+';
            }

        });

        service.classList.toggle('active');

        service.querySelector('.service-icon').textContent =
            service.classList.contains('active')
            ? '−'
            : '+';

    });

});