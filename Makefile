make: install

install: brandName createFolder transferBacknode

brandName:
	#    ____             _    _   _           _
	#   |  _ \           | |  | \ | |         | |
	#   | |_) | __ _  ___| | _|  \| | ___   __| | ___
	#   |  _ < / _` |/ __| |/ / . ` |/ _ \ / _` |/ _ \ JS
	#   | |_) | (_| | (__|   <| |\  | (_) | (_| |  __/
	#   |____/ \__,_|\___|_|\_\_| \_|\___/ \__,_|\___|

createFolder:
	mkdir ../template
	mkdir ../admin
	mkdir ../www

transferBacknode:
	cp -rf ../BackNode ../admin/BackNode
	cd ../admin/BackNode && rm -rf ../../BackNode && npm install
	# done with success !

deployAndRun:
    npm install
    node src/app.js
