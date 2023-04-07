1. Goal: Create a password

#Note to self: use only a few characters in group of options


# Phase 1:
    -Click a button
    -Ask a question
        -How many characters?
            -At least 8
            -No more thatn 128
            !!Check this before asking other questions!!
        -You want Uppercase? (Character Type)
        -You want Lowercase? (Character Type)
        -You want special characters? (Character Type)
        -You want numbers? (Character Type)
    !!Make sure that user selected at least one of the 4 character types above

# Phase 2:
    -what needs to be in place to get here?
    -Password Criteria. At last one character type from the previous phase. How many characters
    -What acaracters are we using???
    -If I was upperase characters... what characters? A, B, C, D...
    If I want lowercase letters... what characters? a, b, c, d...
    If I want special characters: !, @, #, $, %, ^, &, *, ?
    If I want numbers what characters? 1, 2, 3, 4...



# Phase 3:
    GENERATE THE PASSWORD
    - Get a random character from the appropriate character type, based on what the user wants
    - We also need to guarantee that the finished password meets all the criteria that the user selected.



    Scenario: user wants 9 character password with all of the toppings.
        -grab 1 uppercase, 1 lowercase, 1 number, 1 symbol/special. Any other character can be any character out of the available pool after that?
        -Build a master pool of Character out of all available character types after you guarantee the character type list.


