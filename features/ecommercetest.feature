# Feature: Ecommerce validation
# Scenario: placing order
# Given login to application with "shrestisingh456@gmail.com" and "Letmein1!"
# When  "ADIDAS ORIGINAL" Add to cart
# Then "ADIDAS ORIGINAL" should be display in the cart
# When I enter details and placed the order 
# Then it should ordered successfully .


# Scenario: Validation
# Given I logged into the application
# Then I should see "Hide/Show Example" textbox
#  When I click on Hide button
# Then "Hide/Show Example" textbox should be hidden


# Scenario: Dialog popup Validation
# Given I login to the application with "shresti.singh@bbsihq.com" and "Neelamdeepak@456"
# Then I should navigate to dashboard page with heading 'Welcome Shresti'
# When I click on  'Applicant List' from the menu
# Then I  should able to click on applicant from the list 

// multiple parametrization - it will execute time with below usersname

# Scenario Outline: Scenario Outline name: placing order
# Given login to application with "<Username>" and "<Password>"
# When  "ADIDAS ORIGINAL" Add to cart
# Then "ADIDAS ORIGINAL" should be display in the cart
# When I enter details and placed the order 
# Then it should ordered successfully .

# Examples:
#     | Username                   | Password| 
#     | shrestisingh456@gmail.com  | Letmein1!
#     | soumyasingh456@gmail.com    | abc@123
    


