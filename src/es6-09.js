var sender = '<script>alert("abc")</script>'; // 恶意代码
var message =
    SaferHTML `<p>${sender} has sent you a message.</p>`;

let { a, b } = { a: 1, b: 2 };
var tagmess =
    SaferHTML `Hello ${ a + b } world ${ a * b }`;

function SaferHTML(templateData) {
    console.log('templateData', templateData)
    var s = templateData[0];
    for (var i = 1; i < arguments.length; i++) {
        var arg = String(arguments[i]);
        // Escape special characters in the substitution.
        s += arg.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;").replace(/>/g, "&gt;");
        // Don't escape special characters in the template.
        s += templateData[i];
    }
    return s;
}
let arraylike = {
    '0': '12',
    '1': '13',
    '2': 'zero',
    length: 3
};
let array = Array.from(arraylike);
console.log(array)
