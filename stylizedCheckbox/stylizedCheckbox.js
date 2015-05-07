function stylizedCheckbox(id, onclick) {
    var actualCheckbox = $('#' + id), replacementCheckboxId = id + 'CheckboxReplacement';
    var replacementCheckboxHolder = $('<div>').addClass('replacementCheckboxHolder');
    var replacementCheckbox = $('<span>').addClass('checkboxReplacement emptyCheckbox').attr('id', replacementCheckboxId);
    replacementCheckboxHolder.append(replacementCheckbox);
    replacementCheckboxHolder.append(actualCheckbox.replaceWith(replacementCheckboxHolder).hide());
    if(actualCheckbox.prop('checked')) {
        replacementCheckbox.addClass('filledCheckbox');
    }
    replacementCheckbox.click(function() {
        replacementCheckbox.toggleClass('filledCheckbox');
        actualCheckbox.prop('checked', !actualCheckbox.prop('checked'));
        if(typeof(onclick) === 'function') {
            onclick();
        }
    });
}

function stylizeAllCheckboxes() {
    $.each($(':input[type=checkbox]'), function(i,v) {
        var id = $(v).attr('id');
        var alreadyReplaced = $('#'+ id + 'CheckboxReplacement');
       if(alreadyReplaced.length != 1) {
           stylizedCheckbox(id);
       }
    });
}

function stylizedRadioButtons(name) {
    var radioButtonsString = 'input:radio[name=' + name + ']';
    var actualRadioButtons = $(radioButtonsString);
    $.each(actualRadioButtons, function(i,v) {
        var actualRadioButton = $(v);
        var replacementRadioButtonHolder = $('<div>').addClass('replacementRadioButtonHolder');
        var replacementRadioButton = $('<span>').addClass('radioButtonReplacement emptyRadioButton').attr('value', actualRadioButton.val());
        replacementRadioButton.attr('replacementButtonName', name);
        replacementRadioButtonHolder.append(replacementRadioButton);
        replacementRadioButtonHolder.append(actualRadioButton.replaceWith(replacementRadioButtonHolder).hide());

        if(actualRadioButton.prop('checked')) {
            replacementRadioButton.addClass('filledRadioButton');
        }

        replacementRadioButton.click(function() {
            var clickedButton = $(this);
            if(clickedButton.hasClass('filledRadioButton')) {
                return;
            }
            actualRadioButtons.prop('checked', false);
            var replacementButtonString = '.radioButtonReplacement[replacementButtonName=' + name + ']';
            $(replacementButtonString).removeClass('filledRadioButton');
            clickedButton.addClass('filledRadioButton');
            actualRadioButton.prop('checked', true);
        });

    });
}