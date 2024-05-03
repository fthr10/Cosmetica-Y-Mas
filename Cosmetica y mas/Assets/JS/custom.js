document.querySelectorAll('.product-text').forEach(item => {
    item.addEventListener('input', function () {
        console.log('Content changed:', this.innerText);
    });
});
$(document).ready(function () {
    $(".tab-list").on("click", ".tab", function () {
        $(".tab").removeClass("active");
        $(".tab-content").removeClass("show");
        $(this).addClass("active");
        $($(this).attr("href")).addClass("show");
    });

    $(".fa-heart").on("click", function () {
        if ($(this).hasClass("-activate")) {
            $(this).removeClass("-activate");
        } else {
            $(this).addClass("-activate");
        }
    });
});
