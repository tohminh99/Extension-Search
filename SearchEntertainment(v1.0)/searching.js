document.getElementById("btn_confirm").onclick = function()
{
var input = document.getElementById('input_search').value;
var e = document.getElementById('type').value;


function onError(error) {
    console.log(`Error: ${error}`);
  }

if (e==1)
{
var createnewtab = browser.tabs.create
({url: 'https://www.themoviedb.org/search?query='+input});
createnewtab.then(onError);
}
else
{
    var createnewtab = browser.tabs.create
    ({url: 'https://www.google.com'});
    createnewtab.then(onError);
}
}