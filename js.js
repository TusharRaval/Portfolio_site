document.querySelector('.white-section').onmousemove = (e) =>{

    let x = (window.innerWidth - e.pageX * 2) / 90;
    let y = (window.innerHeight - e.pageY * 2) / 90;

    document.querySelector('.white-section .press ').style.transform = `translateX(${y}px) translateY(${x}px)`;

}

document.querySelector('.white-section').onmouseleave = () =>{

    document.querySelector('.white-section .press').style.transform = `translateX(0px) translateY(0px)`;
    
}

$(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var w = $(".white-section");
    var c = $(".colored-section");
    var s = $(".skill");
    var a = $(".h");
    var b = $(".white");
    
  
    for (var i = 0; i < w.length; i++) {
      var w = w[i];
  
      if ($(w).position().top < pageBottom) {
        $(w).addClass("visible");
      } else {
        $(w).removeClass("visible");
      }
    }

    for (var i = 0; i < c.length; i++) {
        var c = c[i];
    
        if ($(c).position().top < pageBottom) {
          $(c).addClass("visible");
        } else {
          $(c).removeClass("visible");
        }
      }

      for (var i = 0; i < s.length; i++) {
        var s = s[i];
    
        if ($(s).position().top < pageBottom) {
          $(s).addClass("visible");
        } else {
          $(s).removeClass("visible");
        }
      }

      for (var i = 0; i < a.length; i++) {
        var a = a[i];
    
        if ($(a).position().top < pageBottom) {
          $(a).addClass("visible");
        } else {
          $(a).removeClass("visible");
        }
      }

      for (var i = 0; i < b.length; i++) {
        var b = b[i];
    
        if ($(b).position().top < pageBottom) {
          $(b).addClass("visible");
        } else {
          $(b).removeClass("visible");
        }
      }
  });
  
