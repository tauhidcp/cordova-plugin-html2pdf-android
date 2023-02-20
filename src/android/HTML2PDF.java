package id.my.tauhidslab.html2pdf;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.itextpdf.html2pdf.*;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import android.os.Environment;

/**
 *
 * This Class Implemented From Itext HTML2PDF Library. It allow you to create PDF File From HTML String or File through your cordova android app
 * Itext HTML2PDF : https://download.jar-download.com/cache_jars/com.itextpdf/html2pdf/4.0.5/jar_files.zip
 * Ahmad Tauhid (http://www.tauhidslab.my.id/)
 * https://github.com/tauhidcp/cordova-plugin-html2pdf-android.git
 *
 */
 
public class HTML2PDF extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        
		if (action.equals("fromHTMLString")) {
            String htmlstring = args.getString(0);
            String destination = Environment.getExternalStorageDirectory().getAbsolutePath()+args.getString(1);
            this.fromHTMLString(htmlstring, destination, callbackContext);
            return true;
        }
		
		if (action.equals("fromHTMLFile")) {
            String htmlfile = args.getString(0);
            String destination = Environment.getExternalStorageDirectory().getAbsolutePath()+args.getString(1);
            this.fromHTMLFile(htmlfile, destination, callbackContext);
            return true;
        }
		
        return false;
    }

    private void fromHTMLString(String htmlstring, String destination, CallbackContext callbackContext) {
        if (htmlstring != null && htmlstring.length() > 0 && destination != null && destination.length() > 0) {
			
            try{

				String htmls = htmlstring.replace("\"","'"); 
				OutputStream fileOutputStream = new FileOutputStream(destination);
				HtmlConverter.convertToPdf(htmls, fileOutputStream);
				callbackContext.success("Done!");
		
			} catch (Exception e){

				callbackContext.error(e.toString());
			}
				
			
        
		} else {
            callbackContext.error("don't pass empty string!");
        }
    }
	
	private void fromHTMLFile(String htmlfile, String destination, CallbackContext callbackContext) {
        if (htmlfile != null && htmlfile.length() > 0 && destination != null && destination.length() > 0) {
			
            try{
				
				HtmlConverter.convertToPdf(new File(htmlfile), new File(destination));
				callbackContext.success("Done!");
		
			} catch (Exception e){

				callbackContext.error(e.toString());
			}
				
			
        
		} else {
            callbackContext.error("don't pass empty string!");
        }
    }
}
