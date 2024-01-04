describe('Тестирование формы логина', function () {
    
    it('Авторизация с правильным логином и правильным паролем', function () {
        cy.visit('https://login.qa.studio/'); // зайти на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // найти инпут и ввести в него значение
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click(); // кликнуть на кнопку
        cy.contains('Авторизация прошла успешно').should('be.visible') // страница содержит надпись, надпись видима
         })  
    it('Забыли пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('example@email.ru');
        cy.get('#forgotEmailButton').click();
        cy.contains('Восстановите пароль').should('be.visible');
        cy.get('#exitRestoreButton > .exitIcon').should('be.visible'); // страница содержит элемент, элемент видим
        cy.get('#mailForgot').type('example@email.ru');
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail')
         })   
    it('Авторизация с правильным логином и НЕ правильным паролем', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio2');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
         })     
    it('Авторизация с НЕ валидным логином и правильным паролем', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('exampleemail.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
         }) 
    it('Авторизация с НЕ валидным логином и правильным паролем', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('exampleemail.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
         }) 
    it('Буквы в логине переводятся в нижний регистр', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // найти инпут и ввести в него значение
        cy.get('#mail').should('have.value','german@dolnikov.ru'); // значение в инпуте принимает другой вид (меняется)
         }) 
    it('Блокировка и разблокировка кнопки Войти', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled'); // найти кнопку, проверить что она заблокирована
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled'); // снова найти кнопку, проверить что она заблокирована
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled'); // снова найти кнопку, проверить что она разблокирована
        })      
})
