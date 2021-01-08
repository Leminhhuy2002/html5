let a;
document.write("<table>")
document.write("<tr>")
    for(a=1;a<=100;a++){
        document.write("<td>")
        document.write(a);
        document.write("</td>")
        if(a%10==0){
            document.write("</tr>");
        }
    }
document.write("</table>")