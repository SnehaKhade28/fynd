<html>
<head>
<h1>Closure</h1>
<p></p>
</head>
</html>


var alert = require('alert')
function init()
{
    var name = 'chrome';
    function displayName(){
        alert(name);
    }
    displayName();
}
init();