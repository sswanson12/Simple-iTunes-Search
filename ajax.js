// run when page loads
$(document).ready(function(){
    $('#searchBar').submit(doSearch);
});

function doSearch(e){
    e.preventDefault();

    let searchTerm = $("#searchText").val() // this could come from a form

    let endpoint = 'https://itunes.apple.com/search?term='+searchTerm+'&limit=20';

    $.get(
        endpoint,
        function(data){
            // this called in the future, when a response is retrieved
            console.log('response', data);

            $('#results').html('');

            data.results.forEach(result => {
                $('#searchResults').append(
                    `
                    <li class="list-group-item list-group-item-dark d-flex flex-row">
                       <img src="${result.artworkUrl60}"/>
                       <div class="d-flex flex-column mx-3">
                          <h4>${result.trackName}</h4>
                          <h5>${result.artistName}</h5>
                       </div>        
                    </li>
                    `
                )
            })
        },
        'json' // could also be html, xml, text
    );

    console.log('done loading');
}