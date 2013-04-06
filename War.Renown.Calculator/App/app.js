require([
    '../Lib/jquery-1.9.1.js', 
    '../Model/Category.js', 
    '../Model/IHaveValue.js', 
    '../Model/ILevel.js', 
    '../Model/Level.js', 
    '../Model/Trait.js', 
    '../Model/ValueLevel.js', 
    '../Model/SourceRetriever.js', 
    '../Common/IHandleGetJson.js', 
    '../Common/SimpleJsonRetrieve.js'
], function () {
    var vl = new Wrc.Model.ValueLevel();
    vl.Cost = 5;
    var el = document.getElementById('content');
    el.innerText = vl.Cost.toString();
});
//@ sourceMappingURL=app.js.map
