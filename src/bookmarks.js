fetch('./src/data.json')
  .then(response => {
    return response.json();
  })
  .then(data => { 
    const bookmarkCells = data.bookmarkContainer; 
    for (const cell of bookmarkCells) {
      buildBookmarkCell(cell.id.toLowerCase(), cell);
    }
  });

function buildBookmarkCell(cellId, obj) {
  const cell = document.getElementById(cellId);
  const span = document.createElement('span'); 
  const list = document.createElement('ul');
  const listItems = obj.urls;

  span.textContent = obj.id;

  for (const item of listItems) {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.target = "_blank";
    link.rel = "noopener";
    link.href = item.url;
    link.textContent = item.name;
    listItem.appendChild(link);
    list.appendChild(listItem);
  };

  cell.appendChild(span);
  cell.appendChild(list);
};
