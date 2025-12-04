function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp, SlidesApp or FormApp.
  ui.createMenu('<Custom>')
      .addSubMenu
      (
          ui.createMenu('Checkbox')
          .addItem('check all', 'toggleAllCheckbox_check')
          .addItem('clear all', 'toggleAllCheckbox_uncheck')
      )
      .addToUi();
}

function toggleAllCheckbox_check() {  
  var spreadsheet = SpreadsheetApp.getActive();  
  var ui = SpreadsheetApp.getUi();  
  var btn = ui.alert("Select All Checkboxes?", ui.ButtonSet.YES_NO);
    if (btn == ui.Button.YES ){    
    var range = SpreadsheetApp.getActiveSheet().getDataRange();
    range.check();
    ui.alert("Success");
   } else {
     ui.alert("Cancelled");
   }  
};

function toggleAllCheckbox_uncheck() {  
  var spreadsheet = SpreadsheetApp.getActive();  
  var ui = SpreadsheetApp.getUi();  
  var btn = ui.alert("Deselect All Checkboxes?", ui.ButtonSet.YES_NO);
    if (btn == ui.Button.YES ){    
    var range = SpreadsheetApp.getActiveSheet().getDataRange();
    range.uncheck();
    ui.alert("Success");
   } else {
     ui.alert("Cancelled");
   }  
};