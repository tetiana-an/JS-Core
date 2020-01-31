const getId = id => document.getElementById(id);

getId('edit').onclick = function () {
    getId('f1').style.display = "block";
    getId('div2').style.display = "block";
    getId('textarea').value = getId('div1').innerHTML;
    getId('div3').style.display = "none";
}

getId('save').onclick = function () {
    getId('div1').innerHTML = getId('textarea').value;
    getId('f1').style.display = "none";
}

getId('add').onclick = function () {
    getId('container').style.display = "none";
    getId('div4').style.display = "block";
}

let f2 = document.forms['f2'];
for (let i = 0; i < f2.length; i++) {
    f2.elements[i].onclick = function () {
        getId('div1').style.fontSize = this.value;
    }
}

f3.fontFamily.onchange = function () {
    getId('div1').style.fontFamily = this.value;
}

getId('style').onclick = function () {
    getId('div2').style.display = "none";
    getId('div3').style.display = "block";
}

getId('color').onclick = function () {
    getId('wrapper').style.display = 'flex';
    let box = document.querySelectorAll('#box');
    for (let i = 0; i < box.length; i++) {
        box[i].onclick = function () {
            getId('div1').style.color = this.style.backgroundColor;
            getId('wrapper').style.display = 'none';
        }
    }
}

getId('bgColor').onclick = function () {
    getId('wrapper').style.display = 'flex';
    let box = document.querySelectorAll('#box');
    for (let i = 0; i < box.length; i++) {
        box[i].onclick = function () {
            getId('div1').style.backgroundColor = this.style.backgroundColor;
            getId('wrapper').style.display = 'none';
        }
    }
}

getId('ch').onclick = function () {
    if (this.checked) {
        getId('div1').style.fontWeight = this.value;
    } else {
        getId('div1').style.fontWeight = 'normal';
    }
}

getId('ch1').onclick = function () {
    if (this.checked) {
        getId('div1').style.fontStyle = this.value;
    } else {
        getId('div1').style.fontStyle = 'normal';
    }
}

getId('table').onclick = function () {
    getId('f6').style.display = 'block';
    getId('f7').style.display = 'none';
}

getId('createTable').onclick = function () {
    let tr = getId('tt1').value;
    let td = getId('tt2').value;
    let widthTd = getId('tt3').value + 'px';
    let heightTd = getId('tt4').value + 'px';
    let borderWidth = getId('tt5').value + 'px';
    let borderType = getId('borderType').value;
    let borderColor = getId('borderColor').value;
    let table = document.createElement('table');
    for (let i = 1; i <= tr; i++) {
        let tr = document.createElement('tr');
        for (let j = 1; j <= td; j++) {
            let td = document.createElement('td');
            td.textContent = 'TD';
            td.style.width = widthTd;
            td.style.height = heightTd;
            td.style.border = `${borderWidth} ${borderType} ${borderColor}`;
            table.style.borderCollapse = 'collapse';
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    let tableAll = document.createElement('tableAll');
    tableAll.appendChild(table);
    getId('textarea').value = getId('div1').innerHTML + tableAll.innerHTML;
    getId('container').style.display = "block";
    getId('div4').style.display = "none";
}

getId('list').onclick = function () {
    getId('f6').style.display = 'none';
    getId('f7').style.display = 'block';
}

getId('createList').onclick = function () {
    let count = getId('tt7').value;
    let type = getId('typeMarks').value;

    let ul = document.createElement('ul');
    for (let i = 1; i <= count; i++) {
        let li = document.createElement('li');
        li.textContent = `item ${i}`;
        ul.style.listStyleType = type;
        ul.appendChild(li);
    }

    let list = document.createElement('list');
    list.appendChild(ul);

    getId('textarea').value = getId('textarea').value + list.innerHTML;
    getId('container').style.display = "block";
    getId('div4').style.display = "none";
}