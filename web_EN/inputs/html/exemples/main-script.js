/*!
* This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
* Copyright (C) 2016  Orange SA
* See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file).**/
$(document).ready(function() {
	$(function () {
        $('<a>',{
            'id': 'back-button',            
            'text': 'Back',
            'aria-label': 'Get back to the example list',            
            'href': '../../exemples.html',
            'class': "btn btn-info"
        }).prependTo('body');
    });
});
