$(document).ready(function() {
	
        
	$("#divAlert").hide();
	$("#sourceCurrency").val('USD');
	$("#targetCurrency").val('INR');
	var x1=1;
        var x4;
        var x3;
        var x2 = $("#sourceCurrency").val();
        
        
	$(document).on("click", '#btnConvert', function(event) { 
                
		$("#conversionForm").submit();
	});	
	
	$(document).on("submit", '#conversionForm', function(event) {
		event.preventDefault(); 
		
		var $form = $(this);
                
		var x4 = $("#targetCurrency").val();
	    $.ajax({
		      url: $('#urlConverter').val(),
		      data: $form.serializeArray(), 
		      error: function(xhr, textStatus, error) {
		    	  console.log(xhr.statusText);
		          console.log(textStatus);
		          console.log(error);
		      },
		      success: function(data) {
		    	  if(data.error === null) {
		    		  $("#divAlert").hide();
		    		  $('#tgtAmount').val(data.convertedValue);
                                  $('#tgtAmount2').val(x1);
                                  $('#tgtAmount3').val(x2);
                                  $('#tgtAmount4').val(x3);
                                  $('#tgtAmount5').val(x4);
		    	  } else {
		    		  $('#tgtAmount').val("0.00");
		    		  $('#divAlert').html(data.error.info);
		    		  $("#divAlert").show();
		    	  }
		      },
		      type: 'POST'
		});
	    
	});	

});
