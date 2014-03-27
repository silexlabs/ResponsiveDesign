// CSS properties which can be got
var availableCssProperties = [
    "-moz-border-radius-bottomleft",
    "-moz-border-radius-bottomright",
    "-moz-border-radius-topleft",
    "-moz-border-radius-topright",
    "animation",
    "animation-delay",
    "animation-direction",
    "animation-duration",
    "animation-fill-mode",
    "animation-iteration-count",
    "animation-name",
    "animation-play-state",
    "animation-timing-function",
    "azimuth",
    "backface-visibility",
    "background",
    "background-attachment",
    "background-color",
    "background-image",
    "background-position",
    "background-repeat",
    "border",
    "border-bottom",
    "border-bottom-color",
    "border-bottom-left-radius",
    "border-bottom-right-radius",
    "border-bottom-style",
    "border-bottom-width",
    "border-collapse",
    "border-color",
    "border-left",
    "border-left-color",
    "border-left-style",
    "border-left-width",
    "border-radius",
    "border-right",
    "border-right-color",
    "border-right-style",
    "border-right-width",
    "border-spacing",
    "border-style",
    "border-top",
    "border-top-color",
    "border-top-left-radius",
    "border-top-right-radius",
    "border-top-style",
    "border-top-width",
    "border-width",
    "bottom",
    "box",
    "box-shadow",
    "box-sizing",
    "caption-side",
    "clear",
    "clip",
    "color",
    "content",
    "cue",
    "cue-after",
    "cue-before",
    "cursor",
    "direction",
    "display",
    "display-extras",
    "display-inside",
    "display-outside",
    "elevation",
    "empty-cells",
    "filter",
    "float",
    "font",
    "font-family",
    "font-size",
    "font-stretch",
    "font-style",
    "font-variant",
    "font-weight",
    "height",
    "left",
    "letter-spacing",
    "line-height",
    "list-style",
    "list-style-image",
    "list-style-position",
    "list-style-type",
    "margin",
    "margin-bottom",
    "margin-left",
    "margin-right",
    "margin-top",
    "max-height",
    "max-width",
    "min-height",
    "min-width",
    "opacity",
    "outline",
    "outline-color",
    "outline-style",
    "outline-width",
    "overflow",
    "overflow-wrap",
    "overflow-x",
    "overflow-y",
    "padding",
    "padding-bottom",
    "padding-left",
    "padding-right",
    "padding-top",
    "page-break-after",
    "page-break-before",
    "page-break-inside",
    "pause",
    "pause-after",
    "pause-before",
    "perspective",
    "perspective-origin",
    "pitch",
    "pitch-range",
    "play-during",
    "position",
    "quotes",
    "richness",
    "right",
    "speak",
    "speak-header",
    "speak-numeral",
    "speak-punctuation",
    "speech-rate",
    "stress",
    "table-layout",
    "text-align",
    "text-decoration",
    "text-indent",
    "text-overflow",
    "text-shadow",
    "text-transform",
    "text-wrap",
    "top",
    "transform",
    "transform-origin",
    "transform-style",
    "transition",
    "transition-delay",
    "transition-duration",
    "transition-property",
    "transition-timing-function",
    "unicode-bidi",
    "vertical-align",
    "visibility",
    "voice-family",
    "volume",
    "white-space",
    "widows",
    "width",
    "word-break",
    "word-spacing",
    "word-wrap",
    "z-index",
    "zoom"
];
var tabSize = [{
    width: 0,
    height: 0
}, {
    width: 320,
    height: 480
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
    var select = $("#minbeds");
    var slider = $("<div id='slider'></div>").insertAfter(select).slider({
        min: 1,
        max: 5,
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
});

function getStyle(oElm, strCssRule) {
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
var editor = CodeMirror.fromTextArea(document.getElementById("content-css"), {
    lineNumbers: true,
    matchBrackets: true,
    theme: "responsize"
});