Feature: Admin Panel
    Scenario Outline: Access Admin Panel
    Given i visit the ebac webstore
    When i log in with user "<user>" and password "<password>"
    Then the admin dashboard page should be visible

    Examples:
        | user      | password                 |
        | gerente   | GD*peToHNJ1#c$sgk08EaYJQ |