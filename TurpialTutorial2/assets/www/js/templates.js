window.templates = function() {
    var templates = {};
	
    //Check if a template is just in RAM
    function checkTemplate(filename, callback){
        if(templates[filename])
            return true;
        else
            return false;
    };
	
    //Get a template from RAM if present, from local otherwise
    function getTemplate(filename, callback){
        if(templates[filename])
            callback(templates[filename]);
        else
            $.get(filename, function(response) {
                templates[filename] = response;
                callback(response);
            });
    };
	
    //Fill a template with specified values
    function fillTemplate(template, values){
        for (var key in values)
            template = template.replace("<% @" + key + " %>", values[key]);
        return template;
    };

    return {
        getTemplate: getTemplate,
        checkTemplate: checkTemplate,
        fillTemplate: fillTemplate
    };
}();
