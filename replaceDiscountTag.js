
    const priceOriginal = parseFloat(document.querySelector('[data-testid="price-original"]').textContent.replace('.', '').replace(',', '.').slice(3));
    const pixPrice = parseFloat(document.querySelector('[data-testid="price-value"]').textContent.replace('.', '').replace(',', '.').slice(3));
    const discountTag = (document.querySelector('[data-testid="price-default"] > span'));
    const floatTag = document.querySelector('[data-testid="showcase-price"] small');
    const discountPrice = priceOriginal - pixPrice;
    discountTag.innerHTML = `(${discountPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} de <strong>desconto</strong>)`;
    floatTag.classList = discountTag.className
    floatTag.innerHTML = discountTag.innerHTML;
