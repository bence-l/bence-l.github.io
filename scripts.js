
$(document).ready(btnPush)


function addItem() {
        var listItem = $('#inputMezo:text').val()
        $('#toDoList').append(`<li class="item">` + listItem + 
        `<input class="doneBtn" type="image" src="tick.svg"></input>` + 
        `<input class="remBtn" type="image" src="bin.svg"></input>` + `</li>`)
}

function removeItem() {
    $(this).parent().fadeOut('slow')
}

function doneItem() {
    $(this).parent().css('text-decoration', 'line-through')
}

function clearAll() {
    $('#toDoList > li').remove();
}

function btnPush() {
    $('#addGomb').on('click', addItem)
    $('#clearAll').on('click', clearAll)
    $('#toDoList').on('click','.doneBtn',doneItem)
    $('#toDoList').on('click','.remBtn',removeItem)
    $("#inputMezo").on('keyup', function (event) {
        if (event.keyCode === 13) {
           addItem();
        }
     }) 
}






/* $("#inputMezo").on('keyup', function (event) {
    if (event.keyCode === 13) {
       addItem();
       
    }
 } */


/* $(document).on("keypress", "#inputMezo", function(e){
    if(e.which == 13){
        addItem;
    } */




    
// Probalkozasok....

    /* function() {
        $('#addGomb').click(() => {
            a = $('#inputMezo:text').val()
            $('#toDoList').append(`<li id="${a}item"> ${a} <button class="remBtn" id="${a}Btn"> Kesz </button></li>`)
        
            $('#toDoList').on('click',`#${a}Btn`, function(){
                $(`li#${a}item, button#${a}`).toggleClass('strike').fadeOut('slow') 
                  })
        
        })
    } */
          

/* $(`#listButton`).click(() => {
    $(`#listItem`).addClass("athuzva") */


    /* $('#listButton').click(() => {
    $('h1').css('color', 'red')
}) */


/* $('#gomb').click(() => {
    let a = $('#szamlalo').text()
    b = parseInt(a)
    $('#szamlalo').text(b+1) */