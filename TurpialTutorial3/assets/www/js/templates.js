

window.templates = function() {
    var templates = {};
    
    function checkTemplate(filename, callback){
        if(templates[filename])
            return true;
        else
            return false;
    };
    
    function getTemplate(filename, callback){
        if(templates[filename])
            callback(templates[filename]);
        else
            $.get(filename, function(response) {
                templates[filename] = response;
                callback(response);
            });
    };
    
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
