# Validate US Phone Number Function

The function validateUSPhoneNumber(userInput), written in Javascript, accepts a user input phone number string type and returns a normalized United States phone number string type in E.164 format. The parameter, ‘userInput,’ is the user’s input string. This parameter is tested against a master regular expression that stipulates the following:

1) The string MAY begin with the US country code of 1, articulated as ‘001,’ ‘+1,’ or ‘1’. The country code MAY then be succeeded by either ‘-‘ or exactly one whitespace character.

2) The token defined by stipulation #1 MUST be immediately followed by, or the string MUST begin with, a valid 3-digit area  code in adherence to the Numbering Plan Area code standards. The first digit MUST be 2-9, and the following two can be 0-9. This area code MUST be expressed either on its own or between parentheses (ex. ‘(214)’ or ‘214’). The area code MAY be followed by either ‘-‘ or exactly one whitespace character.

3) Immediately following the token defined by stipulation #2, the string MUST have a 3-digit Central Office code in which the first digit is 2-9 and the following two digits can be 0-9 provided they are not both 1. The Central Office code MAY be followed by either ‘-‘ or exactly one whitespace character.

4) Immediately following the token defined by stipulation #3, the string MUST have, and end with, a 4-digit Subscriber number. Each digit can be 0-9.

If the string does not meet these stipulations, the function returns null. If the string does meet the guidelines, the function initializes a value to be returned of ‘+1’ and proceeds to search for and concatenate the area code, the central office code, and the subscriber number, in that order, each time searching through a substring of the user input beginning immediately after the last extracted substring and utilizing the excerpt of the master regular expression representing that portion of the phone number. The function then returns a value expressing the user’s input as a US phone number in E.164 format.
