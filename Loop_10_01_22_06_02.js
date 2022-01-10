let a = 1;
let b = 1;
let c = "<table border = '1' width = '300' cellspacing = '0' cellpadding = '3'>";

while(a<=10){
    c+= "<tr>";
    while(b<=10){
        c+= "<td>" + a*b + "</td>";
        b++;
    }
    c+= "</tr>";
    b=1;
    a++;
}
c+= "</table>";
document.write(c)