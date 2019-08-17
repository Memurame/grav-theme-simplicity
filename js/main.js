import Vue from 'vue'


$(".detail-gallerie").lightGallery();

$(document).ready(function() {
    let $projectlist = $('.project-list');
    let $boxes = $('.project-item');
    $boxes.hide();

    $boxes.fadeIn();
    $projectlist.isotope({
        // options
        sortBy : 'original-order',
        layoutMode: 'fitRows',
        itemSelector: '.project-item',
        stagger: 30
    });

    let tags = [];
    $('.project-tag').each(function(){
        let tagname = $(this).text();
        if(tags.indexOf(tagname) == -1){
            tags.push(tagname);
            $('.project-filters').append('<button data-filter=".' + tagname + '" class="filter-button">' + tagname + '</button>')
        }

    })

    $('.filter-button').on( 'click', function() {
        let filterValue = $(this).attr('data-filter');
        $projectlist.isotope({ filter: filterValue });
        $('.filter-button').removeClass('active');
        $(this).addClass('active');
    });



});
