import Vue from 'vue'


$(".gallery").lightGallery();

$(document).ready(function() {
    let $projectlist = $('.entrylist');
    let $boxes = $('.entry-item');
    $boxes.hide();

    $boxes.fadeIn();
    $projectlist.isotope({
        // options
        sortBy : 'original-order',
        layoutMode: 'fitRows',
        itemSelector: '.entry-item',
        stagger: 30
    });

    let tags = [];
    $('.entry-tag').each(function(){
        let tagname = $(this).text();
        if(tags.indexOf(tagname) == -1){
            tags.push(tagname);
            $('.entry-filters').append('<button data-filter=".' + tagname + '" class="filter-button">' + tagname + '</button>')
        }

    })

    $('.filter-button').on( 'click', function() {
        let filterValue = $(this).attr('data-filter');
        $projectlist.isotope({ filter: filterValue });
        $('.filter-button').removeClass('active');
        $(this).addClass('active');
    });

    $(window).on('resize',function() {
        let youtube = $('.youtube-iframe');
        let youtubeheight = youtube.width() * 10/16;
        $('.youtube-iframe').css('height', youtubeheight);

        $('.gallery').find('article').each(function(i, v){
            let imageheight = $(this).width() * 3/4;
            $(this).css('height', imageheight);
        });
    }).trigger('resize');

});

