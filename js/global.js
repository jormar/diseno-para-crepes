jQuery(document).ready(function(){

    // Funcionamiento del menu superior
    var height = jQuery(window).height();
    var heightNoHeader = height-45;
    jQuery(".main_content").height(heightNoHeader);
    jQuery(".menu_btn").click(function(){
        jQuery(".menu").slideToggle();
    });

    jQuery(".li_hover").click(function(){
        jQuery(".detailed_ingredient_container").show();
    });
});
