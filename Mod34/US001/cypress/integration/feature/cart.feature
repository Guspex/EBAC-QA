Feature: Cart
    Scenario: Add a product to the cart
        Given I am at the product page
        When  I add the product to the cart
        And   I go to the cart
        Then  I should see the product in the cart
       