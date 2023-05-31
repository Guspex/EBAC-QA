Feature: Login
    Scenario: Successfull Login with Active User
        Given I access the my account page
        When  I input active user "<user>" and pass "<pass>"  
        Then  I should see a message of success on login

    Scenario: Validation Message in Login with Invalid User
        Given I access the my account page
        When  I input invalid user "<user>" and pass "<pass>"
        Then  I should see a validation message

     Scenario: Warning Message in Login with Wrong Password
        Given I access the my account page
        When  I input active user "<user>" and wrong pass "<pass>"
        Then  I should see a warning message

        
