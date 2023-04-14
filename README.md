# Challenge-3-Password-Generator
Challenge 3 - Use JS to create a password generator.

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

Character Bank:
I elected to create a variable for each character type. Each variable represented an array of characters grouped by type. I limited the number of characters in each group to visually reduce the code. This can be changed later on. Given a minimum requirement of using 8 characters and 3 character type minimum, as well as the ability for characters to repeat, the minimum number of combinations possible is 12,870. Therefore, I do not believe that this choice deducts from the functionality of the challenge.

User Prompts: 
I used a parseInt prompt to ask for desired number of characters. I foudn parseInt doing research outside of classtime. This ensured that user input could only be integers. For the remaining prompts I only used the confirm method. 

Requirement Check:
I put the first requirement check after the initial parseInt prompt. If the user did satisfy the requirements specified in the prompt, they were given an alert reiterating the instructions and providing direction on how to re-start. In order to check that the user selected appropriate number of characters, I used an if statement dependent on two inqualities seperated by the or symbol. The second check was done after user confirmed which type of characters. If they did not satisfy the requirement, they were given an alert indicating so, and were required to re-start. In order to restart, I recalled myFunction, automatically restarting the code. This is more inconvenient than repeating the character confirm methods. This is something to change in the future. In order to perform this check I created a variable num = 0, and for each criteria selected the variable changed using num += 1 to increase the sum.

Validation:
To ensure all criteria selected was validated, I created an empty array named allElements, and left it empty. For every criteria selected, the variable was changed to include that variable set, concacting it with all others selected.

Password Generation:
To generate the password I created an array with an empty string. In the string I put a string of variables named randomElement. The randomelement was defined under a for loop. The for loop ran the functions Math.floor and Math.random together over the the allElements array the number of times that was equal to the user's cho
Using the allElements variable, I created a new variable randomElement that that generated a random value from the array by selecting a random index and pulling that value. It did this 


Deployed Link: https://haileyraehughes89.github.io/Challenge-3-Password-Generator/
 
