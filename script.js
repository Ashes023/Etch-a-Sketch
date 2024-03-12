let grid=document.getElementById('grid');
for(let x=0;x<16;x++){
    let colums=document.createElement('div');
    colums.setAttribute('class','hori');
    grid.appendChild(colums);
    for(let y=0;y<16;y++){
        let rows=document.createElement('div');
        rows.setAttribute('class','vert');
        colums.appendChild(rows);
    }
}