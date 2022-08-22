let result = "<table border='1' width='1000' cellspacing='0' cellpadding='3'>"
for ( i = 1 ; i <= 9; i++  ){
    result = result + "<tr>";
    for ( j = 2 ; j <= 9 ; j++ ){
        result = result + "<td>" +i +"*" +j +"=" +i*j + "</td>";
    }
    result = result + "</tr>";
}
result = result + "</table>";
document.write(result);