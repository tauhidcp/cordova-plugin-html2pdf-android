# cordova-plugin-html2pdf-android

This Plugin Implemented From Itext HTML2PDF Library. It allow you to create PDF File From HTML String or File through your cordova android app

Itext HTML2PDF : https://download.jar-download.com/cache_jars/com.itextpdf/html2pdf/4.0.5/jar_files.zip

### Tested on:

- NodeJS  	      : 19.4.0
- Cordova 	      : 11.1.0
- cordova-android : 11.0 
- Java 11  



### Install/Uninstall Plugin

install from github repository using this command
```
cordova plugin add https://github.com/tauhidcp/cordova-plugin-html2pdf-android.git
```
or install from npmjs package using this command 
```
cordova plugin add id.my.tauhidslab.html2pdf
```

uninstall using this command
```
cordova plugin rm id.my.tauhidslab.html2pdf
```



## How to Use

### Create PDF from HTML String

example code to create a pdf file from HTML String as you can see below    
```
function fromString(){
	
	var htmlstring  = "<html>" +
					  "    <head>" +
					  "        <style>" +
					  "            .center_div {" +
					  "                border: 1px solid gray;" +
					  "                margin-left: auto;" +
					  "                margin-right: auto;" +
					  "                width: 90%;" +
					  "                background-color: #d0f0f6;" +
					  "                text-align: left;" +
					  "                padding: 8px;" +
					  "            }" +
					  "        </style>" +
					  "    </head>" +
					  "    <body>" +
					  "        <div class=\"center_div\">" +
					  "            <h1>Hello Tauhidslab!</h1>" +
					  "            <div class=\"myclass\">" +
					  "                <p>Visit My Web Blog at http://www.tauhidslab.my.id/</p>" +
					  "            </div>" +
					  "        </div>"+
					  "    </body>" +
					  "    </html>" ;
	
	var name = "myPDF_"+Math.floor(Math.random() * 8888888)+".pdf"; // output name
	var dest = "/Download/"; // destination
	var destination = dest+name;
	
	cordova.plugins.HTML2PDF.fromHTMLString(htmlstring, destination, onSuccess, onError);
	
	function onSuccess(s){ 
		alert(s); 
	}
	
	function onError(e){ 
		alert(e); 
	
	}
	
}
```


### Create PDF from HTML File  

create PDF from HTML file **still have an issue with file permission on android 12**, below example code to convert html file to pdf 
```
// Permission Denied Issue on Android 12
function fromFile(){

	var htmlfile = "/storage/emulated/0/Download/sample.html"; // html file in Download folder 
	var name = "myPDF_"+Math.floor(Math.random() * 8888888)+".pdf"; // output name
	var dest = "/Download/"; // destination
	var destination = dest+name;
			
	cordova.plugins.HTML2PDF.fromHTMLFile(htmlfile, destination, onSuccess, onError);
			
	function onSuccess(s){ 
		alert(s); 
	}
			
	function onError(e){ 
		alert(e); 
			
	} 
			
}
```
