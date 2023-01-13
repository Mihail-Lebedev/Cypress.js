describe('Тестирование на покупку товаров', function (){ 
    it('позитивный тест кейс на покупку товаров', function () {
        cy.visit('https://testqastudio.me/');
        cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.get('.woocommerce-mini-cart__buttons > [href="https://testqastudio.me/cart/"]').click();
        cy.get('.header-left-items > .site-branding > .logo > .logo-dark').click();
        cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.get('.checkout').click();
        cy.get('#billing_first_name').type('михаил');
        cy.get('#billing_last_name').type('Лебедев');
        cy.get('#billing_address_1').type('1 street');
        cy.get('#billing_city').type('samara');
        cy.get('#billing_state').type('samara');
        cy.get('#billing_postcode').type('1111');
        cy.get('#billing_phone').type('88005553535');
        cy.get('#billing_email').type('german@dolnikov.ru');
        cy.get('#place_order').click();
        cy.contains('Ваш заказ принят. Благодарим вас.')

})
})