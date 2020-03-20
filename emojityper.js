console.log("Loading EmojiTyper");
setInterval(checkForEditableContent, 500);

function checkForEditableContent(){
    var contEditables = document.querySelectorAll('[contenteditable]');

    for (var i = 0; i < contEditables.length; i++) {
        var v = contEditables[i];
        if (v.getAttribute('emojityper') !== 'true') {
            v.setAttribute('emojityper', 'true');
            v.addEventListener("input", function(e) {
                console.log("input event fired");
            }, false);
        }

    }
}
