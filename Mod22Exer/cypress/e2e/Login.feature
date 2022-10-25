Feature: Checkout 
    Scenario Outline: Access Admin Panel
    Given i chose a produtc in ebac webstore
    When i select the type, measure and color and click on the button buy and see your car
    Then the checkout dashboard page should be visible and i must fill the forms

    Examples:
        | Name   | Surname   | Country | Adress 1  | Adress 2  | City      | State     | ZIP      | Phone         | e-mail              |
        | Jhon   | Myer      | Brazil  | St. Brown | 123       | São Paulo | São Paulo | 12345-132| 11-99999-9999 | jhon@test.com       |