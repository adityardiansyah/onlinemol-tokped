$('#tab-toko a').on('click', function (e) {
    // console.log(this);
    let el = $(this).attr('data-target');
    $('.tab-pane-custom').removeClass('active');
    console.log(el);
    $('.tab-content-custom').find('#'+el).addClass('active');
    e.preventDefault()
})

$('a[data-mdb-toggle="tab"]').on('show.bs.tab', function(e) {
    localStorage.setItem('activeTab', $(e.target).attr('href'));
});
var activeTab = localStorage.getItem('activeTab');
if(activeTab){
    $('#tab-scroll li a[href="' + activeTab + '"]').tab('show');
}