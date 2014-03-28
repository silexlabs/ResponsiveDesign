var tabSize = [{
    width: 0,
    height: 0
}, {
    width: 480,
    height: 320
}, {
    width: 768,
    height: 1024
}, {
    width: 1024,
    height: 768
}, {
    width: 1280,
    height: 800
}];

$(document).ready(function() {
    // Select an element with jQuery UI
    $('.test-select').selectable({
        selected: function(event, ui) {
            var html = ui.selected.outerHTML;
            $('.selected-html').text(html);

            var css = getComputedStyle(ui.selected, null);
            var allCss = '';

            for (var i = 0; i < css.length; i++) {
                console.log(css[i] + ':' + getStyle(ui.selected, css[i]));
                for (var j = 0; j < availableCssProperties.length; j++) {
                    if (css[i] == availableCssProperties[j]) {
                        allCss += '<li>' + css[i] + ':' + getStyle(ui.selected, css[i]) + ';</li>';
                    }
                }
            }

            $('.selected-css').html('<ul class="css-list">' + allCss + '</ul>');
        }
    });
    if ($('#minbeds').length > 0) {
        var select = $("#minbeds");
        var slider = $("<div id='slider'></div>").insertAfter(select).slider({
            min: 1,
            max: 4,
            range: "min",
            value: select[0].selectedIndex + 1,
            slide: function(event, ui) {
                select[0].selectedIndex = ui.value - 1;
                $('#size').val(tabSize[ui.value].width + 'x' + tabSize[ui.value].height + 'px');
            }
        });
        $("#minbeds").change(function() {
            slider.slider("value", this.selectedIndex + 1);
            $('#size').val(tabSize[slider.slider("value")].width + 'x' + tabSize[slider.slider("value")].height + 'px');
        });
    }
});

//Fonctions qui recupère le css pour l'afficher
function getCSS(oElm, strCssRule) {
    var strValue = "";
    if (document.defaultView && document.defaultView.getComputedStyle) {
        strValue = document.defaultView.getComputedStyle(oElm, "").getPropertyValue(strCssRule);
    } else if (oElm.currentStyle) {
        strCssRule = strCssRule.replace(/\-(\w)/g, function(strMatch, p1) {
            return p1.toUpperCase();
        });
        strValue = oElm.currentStyle[strCssRule];
    }
    return strValue;
}

if($('#content-css').length > 0){
    var editor = CodeMirror.fromTextArea(document.getElementById("content-css"), {
        lineNumbers: true,
        matchBrackets: true,
        theme: "responsize"
    });
}

$('#copy').click(function(e){
    editor.setSelection({line: 0, ch: 0}, {line: editor.lineCount() - 1});
    editor.focus();
});