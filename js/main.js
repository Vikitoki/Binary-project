$(function () {
  $("[data-filter]").on("click", function (t) {
    t.preventDefault();
    let a = $(this).data("filter");
    $("[data-cat]").animate({ opacity: "0" }, 200),
      "all" === a
        ? setTimeout(function () {
            $("[data-cat]").css({ display: "block", opacity: "1" });
          }, 300)
        : $("[data-cat]").each(function () {
            let t = $(this).data("cat");
            t != a
              ? ($(this).animate({ opacity: "0" }, 200),
                setTimeout(function () {
                  $(`[data-cat = '${t}']`).css("display", "none");
                }, 300))
              : (setTimeout(function () {
                  $(`[data-cat = '${t}']`).css("display", "block");
                }, 300),
                $(this).animate({ opacity: "1" }, 200));
          }),
      $("[data-filter]").removeClass("active"),
      $(this).addClass("active");
  });
  const t = $(".intro__btn");
  $(t).on("click", function (t) {
    t.preventDefault();
    let a = $(this).data("menu"),
      i = $(a).offset().top;
    $("html,body").animate({ scrollTop: i }, 700);
  }),
    $(window).on("scroll", function () {
      let t = $(this).scrollTop() / 3;
      console.log(t), $("#intro").css("background-position", `0 -${t}px`);
    });
});
