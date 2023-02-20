/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);
document.getElementById('fromString').addEventListener('click', fromString);
document.getElementById('fromFile').addEventListener('click', fromFile);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

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

// Permission Denied Issue 
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
