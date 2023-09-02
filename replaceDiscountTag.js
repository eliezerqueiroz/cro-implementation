(() => {
    // rgba(0,134,255,255)
    const priceOriginal = parseFloat(document.querySelector('[data-testid="price-original"]').textContent.replace('.', '').replace(',', '.').slice(3));
    const pixPrice = parseFloat(document.querySelector('[data-testid="price-value"]').textContent.replace('.', '').replace(',', '.').slice(3));
    const discountTag = document.querySelector('[data-testid="price-default"] > span');
    const bagButton = document.querySelector('[data-testid="bagButton"]');
    const buyButton = document.querySelector('[data-testid="buyButton"]');
    const floatTag = document.querySelector('[data-testid="showcase-price"] small');
    const discountPrice = priceOriginal - pixPrice;
    
    bagButton.style.display = "none";
    buyButton.style.backgroundColor = "rgba(0,134,255,255)";
    // bagButton.style.visibility = "hidden";
    discountTag.innerHTML = `(${discountPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} de <strong>desconto</strong>)`;
    if(floatTag !== null){
        floatTag.classList = discountTag.className;
        floatTag.innerHTML = discountTag.innerHTML;
    } else {
        const floatPrice = document.querySelector('[data-testid="showcase-price"] > div');
        floatPrice.appendChild(discountTag);
    }

}) ();
