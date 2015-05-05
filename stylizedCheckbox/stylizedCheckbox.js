
function stylizedCheckbox(id, onclick) {
    var actualCheckbox = $('#' + id), replacementCheckboxId = id + 'CheckboxReplacement';
    var replacementCheckboxHolder = $('<div>').addClass('replacementCheckboxHolder');
    var replacementCheckbox = $('<span>').addClass('checkboxReplacement emptyCheckbox').attr('id', replacementCheckboxId);
    replacementCheckboxHolder.append(replacementCheckbox);
    //actualCheckbox.hide().parent().prepend(replacementCheckboxHolder);
    replacementCheckboxHolder.append(actualCheckbox.replaceWith(replacementCheckboxHolder).hide());
    replacementCheckbox.click(function() {
        replacementCheckbox.toggleClass('filledCheckbox');
        actualCheckbox.prop('checked', !actualCheckbox.prop('checked'));
        if(typeof(onclick) === 'function') {
            onclick();
        }
    });
}