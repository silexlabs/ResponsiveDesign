var model = [];

var datas = {
	"item": [
		{ "w": 400,
		  "h": 300,
		 "content":
		 [
		 	{
		 		"style": "position: relative; width: 100%",
		 		"node": "body"
		 	}

		 ]
		}
	]
}


function updateModel(dimensions, node, css){
	var sizeExist = false;

	// loop in all sizes in the model
	for (var i = 0; i < model.length; i++) {
		var size = model[i];
		// for each sizes : check if dimensions exists
			// if exist : 
		if (size.w === dimensions.w && size.h === dimensions.h) {
			sizeExist = true;
			var nodeExist = false;
			for (var j = 0; j < size.content.length; j++) {
				if (size.content.node === node) {
					size.content.style = css;
					nodeExist = true;
					break;
				}
			}
			// if node doesn't exist, add values
			if (!nodeExist) {
				size.content.push({node: node, style: css});
			}

			break;
		}
	}

	// First case (sizes doesn't exist)
	if (!sizeExist) {
		model.push({w: dimensions.w, h: dimensions.h, content: [{node: node , style: css}] });
	}

}

function generateCSS(){
	// Let CSS be the return string
	var css = "";

	// for each size in sizes :
	for (var i = 0; i < model.length; i++) {
		var size = model[i];
		// - write media queries (begin) with width
		css += "@media (max-width: "+ size.w +"px){";
		// - for each item in size.content,
		for (var j = 0; j < size.content.length; j++) {
			// - write node selector (begin)
			css += getSelector(size.content.node) +"{";
			// - write styles
			css += size.content.style;
			// - write node selector (end)
			css += "}";
		}
		// - write media queries (end)
		css += "}";
	}

	// return css
	return css;
}

function getSelector(node){
	// dom id (getElementById())

	// dom class (getElementByClassName())

	// dom without id or class

	return 'div.toto';
}

function getStyles(dimensions, node){
	for (var i = 0; i < model.length; i++) {
		var size = model[i];

		if (size.w === dimensions.w && size.h === dimensions.h) {
			for (var j = 0; j < size.content.length; j++) {
				if (size.content.node === node) {
					return size.content.style;
				}
			}
		}

	}

	return '';
}

updateModel({w:480, h:200}, document.body, "margin-left:5px;");
console.log(generateCSS());