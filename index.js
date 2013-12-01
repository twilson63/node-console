document.title = 'FOOBAR'
var h1 = document.createElement('div');
var content = document.createTextNode('Hello World');
h1.appendChild(content);
document.write('<body></body>');
document.body.appendChild(h1);

