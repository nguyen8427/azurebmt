// var script_url = "https://script.google.com/macros/s/AKfycbzzA74EERhS3TRKz165HRSlRAaAw5WnUufTJtVI6-FbiQIPyfA/exec";
// function insert_value() {
//     var firstName = $("#firstName").val();
//     var email = $("#email").val();
//     var description = $("#description").val();
//     var url = script_url + "?callback=contactAlert&name=" + firstName + "&email=" + email + "&description=" + description + "&action=insert";
//     var request = jQuery.ajax({
//         crossDomain: true,
//         url: url,
//         method: "GET",
//         dataType: "jsonp"
//     });
//     $("#resetForm")[0].reset();
// }
// function contactAlert(e) {
//     alert('We will get back to you soon')
// }


//register form
// var script_url1 = "https://script.google.com/macros/s/AKfycbzzA74EERhS3TRKz165HRSlRAaAw5WnUufTJtVI6-FbiQIPyfA/exec";
// function insert_value2() {
//     var firstname = $("#firstname").val();
//     var lastname = $("#lastName").val();
//     var email1 = $("#email1").val();
//     var dob = $("#dob").val();
//     var phoneNumber = $("#phoneNumber").val();
//     var sessions = $("#sessions option:selected").val();
//     var url1 = script_url1 + "?callback=registrationAlert&firstname=" + firstname + "&lastName=" + lastname + "&email1=" + email1 + "&dob=" + dob + "&phoneNumber=" + phoneNumber + "&sessions=" + sessions + "&action=insert";
//     var request1 = jQuery.ajax({
//         crossDomain: true,
//         url: url1,
//         method: "GET",
//         dataType: "jsonp"
//     });
    
//     $("#registerform")[0].reset();
// }
// function registrationAlert(e) {
//     alert('Congrats! Registered Successfully')
    
// }

// (jQuery,document,window);



// Variable to hold request
var request;

// Bind to the submit event of our form
$("#foo").submit(function(event){

    // Abort any pending request
    if (request) {
        request.abort();
    }
    // setup some local variables
    var $form = $(this);

    // Let's select and cache all the fields
    var $inputs = $form.find("input, select, button, textarea");

    // Serialize the data in the form
    var serializedData = $form.serialize();

    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
    $inputs.prop("disabled", true);

    // Fire off the request to /form.php
    request = $.ajax({
        url: "https://script.google.com/macros/s/AKfycbzMeKWryT_zLTS95nKDJMdq0N4rLI1cFOYiquSdaCTIUknDt8c/exec",
        type: "post",
        data: serializedData
    });

    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR){
        // Log a message to the console
        console.log("Hooray, it worked!");
        console.log(response);
        console.log(textStatus);
        console.log(jqXHR);
    });

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        // Reenable the inputs
        $inputs.prop("disabled", false);
    });
    $("#resetForm")[0].reset();
    // Prevent default posting of form
    event.preventDefault();
});