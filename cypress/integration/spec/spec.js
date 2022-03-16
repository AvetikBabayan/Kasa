describe('Kasa Test', () => {
    it('Visits the Kasa site, makes first test', O => {
        const date = new Date()
        //Intro - get to home page, accept cookies, close discount modal
        cy.visit('https://kasa.com/').wait(1000)
        cy.contains('Accept all').click().wait(3000)
        cy.get('body').trigger('keydown', { keyCode: 27 })

        //Test1 checking 1st location, to check 1 night standing impossibility and the Heating option
        cy.get('#full-screen-hero-search-input').click().wait(1000)     // get input for the first location, enter the text
            .type('Arlington, TX')
        cy.get('#full-screen-hero-search-select-item-0').click().wait(1000) 
        cy.get('[id^=full-screen-hero-check-in-input]').click()             // set check-in date
            .type('03/20/2022')
        cy.get('[id^=full-screen-hero-check-out-input]').click()            // set check-out date
            .type('03/21/2022')
        cy.get('body').trigger('keydown', { keyCode: 9 })                // Go to Search button
        cy.get('body').trigger('keydown', { keyCode: 9 })
        cy.get('.left-icon > svg:nth-child(1)').click()                 // Tap on Search button
        cy.get('#kasa-arlington-near-uta > a > p').click().wait(1000)        // Click to a Kasa to get details
        cy.get('.property-hero__header-btn > span:nth-child(1)').click()        // click on a property link to see the details
        cy.get('#room-type-card--5efead982dd7bf412fcee837 > span:nth-child(1)').click()     
        cy.get('#room-type-popup-card-5efead982dd7bf412fcee837 > div.room-type-popup__section-distance > div:nth-child(2) > ul').click()    // navigate on the modal to verify Heating
        cy.contains('Heating')
            .should('be.visible')

        cy.get('#room-type-header__close-button > span > svg > g > path').click().wait(1000)

        //Test2 checking 1st location, to check 1 night standing impossibility and the Heating option
        cy.visit('https://kasa.com/').wait(1000)    // Go to Home Page
        cy.get('#full-screen-hero-search-input').click().wait(1000) // get input for the next location, enter the text
            .type('Alexandria, VA')
        cy.get('[id^=full-screen-hero-check-in-input]').click() // set check-in date
            .type('03/20/2022')
        cy.get('[id^=full-screen-hero-check-out-input]').click() // set check-out date
            .type('03/21/2022')
        cy.get('body').trigger('keydown', { keyCode: 9 })       // Go to Search button
        cy.get('body').trigger('keydown', { keyCode: 9 })
        cy.get('.left-icon > svg:nth-child(1)').click()         // Tap on Search button
        cy.get('#kasa-alexandria-potomac > a > p').click().wait(1000)   // Click to a Kasa to get details
        cy.contains('This Kasa is not available on one or more of the dates you selected').should('be.visible') // verify 1 night stay unavailable message
        cy.get('.property-hero__header-btn > span:nth-child(1)').click()    // click on a property link to see the details
        cy.get('div.room-type-card:nth-child(2) > button:nth-child(1) > p:nth-child(2)').click()  
        cy.get('#room-type-popup-card-5efb2aa42dd7bf412f3faf73 > div.room-type-popup__section-distance > div:nth-child(2) > ul').click() // navigate on the modal to verify Heating
        cy.contains('Heating')
            .should('be.visible')
        cy.get('#room-type-header__close-button > span > svg > g > path').click().wait(1000)

        cy.visit('https://kasa.com/').wait(1000)         // Go to Home Page
        cy.get('#full-screen-hero-search-input').click().wait(1000)     // get input for the last location, enter the text
            .type('Austin, TX')
        cy.get('[id^=full-screen-hero-check-in-input]').click()         // set check-in date
            .type('03/20/2022')
        cy.get('[id^=full-screen-hero-check-out-input]').click()        // set check-out date
            .type('03/21/2022')
        cy.get('body').trigger('keydown', { keyCode: 9 })               // Go to Search button
        cy.get('body').trigger('keydown', { keyCode: 9 })
        cy.get('.left-icon > svg:nth-child(1)').click()
        cy.get('#kasa-austin-2nd-street > a > p').click().wait(1000)     // Tap on Search button
        cy.contains('This Kasa is not available on one or more of the dates you selected').should('be.visible') // verify 1 night stay unavailable message
        cy.get('.property-hero__header-btn > span:nth-child(1)').click()    // click on a property link to see the details
        cy.get('div.room-type-card:nth-child(2) > button:nth-child(1) > p:nth-child(2)').click() // click on a property link to see the details
        cy.get('#room-type-popup-card-605c9ce8de8c651b7f15f0d6 > div.room-type-popup__section-distance > div:nth-child(2) > ul').click()  // navigate on the modal to verify Heating
        cy.contains('Heating')
            .should('be.visible')
        cy.get('#room-type-header__close-button > span > svg > g > path').click().wait(1000)

        })
})