changeInputSearch();
function changeInputSearch(){
    $('.input-group-search').css("border-radius", "8px 0px 0px 8px")
    $('.input-group-search').css("border-right", "0px")
    $('.btn-group-search').css("border-radius", "0 8px 8px 0px")
    $('.btn-group-search').css("border", "1px solid #bdbdbd")
    $('.btn-group-search').css("border-left", "none")
    $('.select-filter-chat').hide();
    $('.input-group-search').show();
    $('.btn-filter-chat').show();
}

function changeNormalInputSearch(){
    $('.btn-group-search').css("border-radius", "8px")
    $('.btn-group-search').css("border", "1px solid transparent")
    $('.btn-group-search').css("border-left", "1px")
}

$('.btn-group-search').click(function(){
    changeInputSearch();
});
$('.btn-filter-chat').click(function(){
    changeNormalInputSearch()
    $('.input-group-search').hide();
    $('.select-filter-chat').show();
    $('.btn-filter-chat').hide();
});s