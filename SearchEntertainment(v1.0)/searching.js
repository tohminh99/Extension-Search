document.getElementById("btn_confirm").onclick = function()
{
var input = document.getElementById('input_search').value;
function onError(error) {
    console.log(`Error: ${error}`);
  }
  
var createnewtab = browser.tabs.create
({url: 'https://www.themoviedb.org/search?query='+input});
createnewtab.then(onError);
}