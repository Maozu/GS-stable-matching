const NUMBER = 10;

let data = "";
data += "<table>";
for(let i = 0; i < NUMBER; i++){
    data += '<tr>';
    for(let j = 0; j < NUMBER; j++){
        data += '<td>hhh</td>';
    }
    data += '</tr>'
}
data += "</table>";
document.getElementById('engage').innerHTML = data;