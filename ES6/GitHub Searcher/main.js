$('input').keydown(function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();

        const searchedUser = $('input').val();
        
        var request = $.get({
            url: `https://api.github.com/search/users?q=${searchedUser}`
        })
        
        request.done(function(response) {
            const users = response.items;
            console.log(users)

            for (let i = 0; i < 6; i++) {
                const img = $(`<img src="${users[i].avatar_url}"/>`);
                img.attr('style', 'width: 33%');

                const p = $(`<p>${users[i].login}</p>`);
                p.attr('style', 'width: 33%');
                $('div').append(img);
                $('div').append(p);
            }
            
        })
    }
})

