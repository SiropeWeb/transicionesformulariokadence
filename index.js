	
jQuery(document).ready(function() {

    jQuery('input').each(function() {
  
      jQuery(this).on('focus', function() {
        jQuery(this).parent('.kb-input-size-standard').addClass('active');
          //jQuery(this).attr("placeholder", "Escribe aqui");
      });
  
      jQuery(this).on('blur', function() {
        if (jQuery(this).val().length == 0) {
          jQuery(this).parent('.kb-input-size-standard').removeClass('active');
           // jQuery(this).removeAttr('placeholder');
        }
      });
    });
  });