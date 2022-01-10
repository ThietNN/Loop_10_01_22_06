var a;
var b;
var c;
    c = "<table border = '1' width = '300' cellspacing = '0' cellpadding = '3'>";
for(a = 1; a <= 10; a++){
    c += "<tr>";
    for(b=1;b<=10;b++){
        c += "<td>" + a*b + "</td>";
    }
    c += "</tr>";
}
c += "</table>";
document.write(c)