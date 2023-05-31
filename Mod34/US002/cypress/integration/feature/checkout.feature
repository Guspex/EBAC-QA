Feature: Checkout
    Scenario: Place a new order
        Given I have added a product in the cart
        When  I finish the order
        Then  I should see a message of success on placing the order
       
