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
  const listWrapper = cell.querySelector('.bookmark-wrapper');
  const listHeader = document.createElement('span'); 
  const list = document.createElement('ul');
  const listItems = obj.urls;

  listHeader.textContent = obj.id;

  for (const item of listItems) {
    const bookmarkUrl = item.url;
    const bookmarkName = item.name;
    const listItem = document.createElement('li');
    const link = document.createElement('a');

    link.target = "_blank";
    link.rel = "noopener";
    link.href = bookmarkUrl;
    link.textContent = bookmarkName;
    listItem.append(link);
    list.append(listItem);
  };

  listWrapper.append(listHeader,list);
};
