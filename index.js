$('#js-shopping-list-form').submit(function(e){
    e.preventDefault();
    const entry = $('#shopping-list-entry').val();
    $('.shopping-list').append('<li><span class="shopping-item">' + entry + 
    '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>')
});

function itemChecked() {
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        const targetItem = $(this).closest('li').find('.shopping-item');
        targetItem.toggleClass('shopping-item__checked')
    });
}

$(itemChecked);

function itemDeleted() {
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        this.closest('li').remove();
    });
}

$(itemDeleted);