function liveUpdate() {
    setInterval(function () {
        fetch('../model/fetch.php').then((res)=>res.json()).then(response => {
            var post = '';
            for (let x in response) {

                var dt = new Date(response[x].time * 1000);

                post += '<a id="post_item" href="'+response[x].url+'">';
                post += '<h2 id="post_title" class="post-title">';
                post += response[x].title;
                post += '</h2>';
                post += '</a>';
                post += '<div>';
                post += '<span id="author" href="#!">By '+ response[x].by +' </span> <br>';
                post += '<span id="date_posted" href="#">Posted '+dt.toLocaleString()+'</i></span>';
                post += '</div>';
                post += '<hr class="my-4" />';
            }

            $("#post_preview_container").append(post);

        }).catch(error => console.log(error));
    }, 5000)
}


document.addEventListener('DOMContentLoaded', function () {
    liveUpdate();
})
/*
fetch('fetch.php').then((res)=>res.json()).then(response => {
    var post = '';
    console.log(response);
    for (let x in response) {

        var dt = new Date(response[x].time * 1000);

        post += '<a id="post_item" href="'+response[x].url+'">';
        post += '<h2 id="post_title" class="post-title">';
        post += response[x].title;
        post += '</h2>';
        post += '</a>';
        post += '<div>';
        post += '<span id="author" href="#!">By '+ response[x].by +' </span> <br>';
        post += '<span id="date_posted" href="#"><i className="fa fa-calendar">'+dt.toLocaleString()+'</i></span>';
        post += '</div>';
        post += '<hr class="my-4" />';
    }

    $("#post_preview_container").append(post);

}).catch(error => console.log(error));
 */