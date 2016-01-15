$('#target').click(function() {
    $('#output').html(function(i, val) { return val*1+1 });
});

$('#cursorbutton').click(function() {
    $('#cursors').html(function(i, val) { return val*1+1 });
    $('#output').html(function(i,val) {return val*1-10 });
})




//Functions above