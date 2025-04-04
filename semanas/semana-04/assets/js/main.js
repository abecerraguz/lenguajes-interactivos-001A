window.addEventListener('DOMContentLoaded', function () {

    const main = document.getElementById('innerCard');

    const cards = Array.from({ length: 16 }, (_, i) => ({
        picture: `https://picsum.photos/300/200?random=${i + 1}`,
        title: 'Lorem ipsum dolor sit amet',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore accusantium voluptate deserunt repellendus quibusdam dolor.'
    }));

    cards.forEach(card => {
        main.innerHTML += `
          <div class="col-md-3 mb-3">
            <div class="card">
                <img src="${card.picture}" class="card-img-top" alt="Imagen aleatoria" loading="lazy"/>
                <div class="card-body">
                    <h5 class="card-title">${card.title}</h5>
                    <p class="card-text">${card.content}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
          </div>
        `;
    });

   
    let isColorChanged = false;
    let isTextChanged = false;
    let isImageChanged = false;
    let originalSrc = '';

    function toggleTitleColor() {
        const titles = document.querySelectorAll('.card-title');
        titles.forEach(title => {
            title.style.color = isColorChanged ? '' : 'tomato';
        });
        isColorChanged = !isColorChanged;
    }

    function toggleThirdTitleText(e) {
        e.preventDefault();
        const titles = document.querySelectorAll('.card-title');
        if (titles[2]) {
            titles[2].innerText = isTextChanged
                ? 'Lorem ipsum dolor sit amet'
                : 'Título actualizado con JS';
            isTextChanged = !isTextChanged;
        }
    }

    function toggleAttr(e) {
        e.preventDefault();
        const images = document.querySelectorAll('img');

        if (images[2]) {
            if (!isImageChanged) {
                originalSrc = images[2].getAttribute('src');
                images[2].setAttribute('src', 'https://placehold.jp/300x200.png');
            } else {
                images[2].setAttribute('src', originalSrc);
            }

            isImageChanged = !isImageChanged;
        }
    }

    function createNewElement(e) {
        e.preventDefault();
        const hr = document.querySelector('hr');
        const newParagraph = document.createElement('p');
        newParagraph.innerText = '🎉 ¡Etiqueta creada dinámicamente!';
        newParagraph.classList.add('mt-3', 'text-success', 'fw-bold');
        hr.after(newParagraph);
    }


    const buttonChangeColor = document.getElementById('buttonChangeColor');
    const buttonInnerText = document.getElementById('buttonInnerText');
    const buttonSetAttr = document.getElementById('buttonSetAttr')
    const buttonCreateElement = document.getElementById('buttonCreateElement');
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    buttonChangeColor.addEventListener('click', toggleTitleColor);
    buttonInnerText.addEventListener('click', toggleThirdTitleText);
    buttonSetAttr.addEventListener('click', toggleAttr);
    buttonCreateElement.addEventListener('click', createNewElement);


    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
});