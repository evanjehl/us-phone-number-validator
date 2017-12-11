function validateUSPhoneNumber(userInput) {

    //Tests user input against master regular expression. See readme for further details.
    if (userInput.search(/^((0{2}|\+)?1(-|\s)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})(\s|-)?[2-9](1[023456789]|[023456789]1|[023456789]{2})(\s|-)?[0-9]{4}$/) === 0) {

        //Value to be returned initialized as '+1'
        var output = '+1';

        //Locates index of 3-digit area code
        var npaStart = userInput.search(/[2-9][0-9]{2}/);

        //Adds 3-digit area code portion of user input to value to be returned
        output += userInput.substring(npaStart, npaStart + 3);

        //Keeps portion of user input beginning immediately after last extracted portion
        var remainder = userInput.substring(npaStart + 3);

        //Locates index of 3-digit Central Office code from remainder of user input
        var nxxStart = remainder.search(/[2-9](1[023456789]|[023456789]1|[023456789]{2})/);

        //Adds 3-digit Central Office code of user input to value to be returned
        output += remainder.substring(nxxStart, nxxStart + 3);

        //Keeps portion of user input beginning immediately after last extracted portion
        remainder = remainder.substring(nxxStart + 3);

        //Locates index of Subscriber number from remainder of user input
        var xxxxStart = remainder.search(/[0-9]{4}/);

        //Adds Subscriber number portion of user input to value to be returned
        output += remainder.substring(xxxxStart);

        //Complete E.164-formatted number returned
        return output;
    }

    //Value to be returned if user input fails against regular expression
    return null;
}
