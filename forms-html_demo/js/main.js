var dialogForm = $('.dialog form');
dialogForm.validate();


var rules = {

    name: {
        remote: {
            url: 'name.php',
            type: 'GET',
            data: {
                name: function () {
                    return $('#name').val()
                }
            }
        }
    },

    password: {
        minlength: 8
    },

    password_confirmation: {
        equalTo: '#password'
    }
};

$('.sign-up-now').on('click', function (event) {
    event.preventDefault();
    $('.dialog').dialog({
        buttons: {
            "Submit": function () {
                dialogForm.submit();
            }
        },
        modal: true
    });
});
