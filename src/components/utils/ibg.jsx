import React from "react";

export default function ibg() {
    $.each($('.ibg'), function(index, val){
        if($(this).find('img').lenght>0){
            $(this).css('background-image', 'url("'+$(this).find('img').attr('src')+'")');
        }
    })
}
ibg();