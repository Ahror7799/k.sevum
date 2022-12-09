// Script used //
//http://www.kodhus.com/kodnest/codify/SPpeQp

$(function () {
  var alreadyFilled = false;
  var results = [
    {
      img:
        "https://cdns-images.dzcdn.net/images/artist/a6cdc6823479ffa088f6b188facc0420/264x264.jpg",
      name: "The Ghost Club",
      category: "Group Band"
    },
    {
      img: "",
      name: "Tbilisi",
      category: ""
    },
    {
      img: "",
      name: "Twitch",
      category: ""
    },
    {
      img: "",
      name: "Twitter",
      category: ""
    },
    {
      img:
        "https://upload.wikimedia.org/wikipedia/en/a/af/The_Division_2_art.jpg",
      name: "The Division 2",
      category: "Online Game"
    },
    {
      img: "",
      name: "Thanos",
      category: ""
    },
    {
      img: "https://i1.sndcdn.com/artworks-000242831735-6zarb1-t500x500.jpg",
      name: "Tokyo Ghoul",
      category: "Manga Séries"
    },
    {
      img: "",
      name: "Tik Tok",
      category: ""
    },
    {
      img:
        "https://gal.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fgal.2Fvar.2Fgal.2Fstorage.2Fimages.2Fmedia.2Fmultiupload_du_09_mars_2015.2Ftaylorswift.2F3245245-1-fre-FR.2Ftaylorswift.2Ejpg/480x480/quality/80/taylor-swift-les-jambes-qui-valaient-40-millions-de-dollars.jpg",
      name: "Taylor Swift",
      category: "American Singer"
    },
    {
      img:
        "https://lejournal.cnrs.fr/sites/default/files/styles/fiche-auteur-visuel-principal/public/auteurs/auteur_todorov.jpg?itok=LuN_ayUd",
      name: "Tzvetan Todorov",
      category: "Bulgarian-French Historian"
    },
    {
      img: "",
      name: "Tesla, Inc.",
      category: ""
    },
    {
      img: "",
      name: "Trivago",
      category: ""
    },
    {
      img:
        "https://pbs.twimg.com/profile_images/1184663275335835648/Q9AVMoD8_400x400.jpg",
      name: "Tyson Fury",
      category: "British professional boxer"
    },
    {
      img: "",
      name: "TMZ Sports",
      category: ""
    }
  ];

  function SortByName(a, b) {
    var aName = a.name.toLowerCase();
    var bName = b.name.toLowerCase();
    return aName < bName ? -1 : aName > bName ? 1 : 0;
  }

  results.sort(SortByName);

  function initDialog() {
    clearDialog();
    for (var i = 0; i < results.length; i++) {
      $(".search_results").append(
        `
			<li class="result">
			` +
        (results[i].img == ""
          ? `<div class="search_icon">
					<svg fill="#8395B3" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">    
						<path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 19.585938 21.585938 C 20.137937 22.137937 21.033938 22.137938 21.585938 21.585938 C 22.137938 21.033938 22.137938 20.137938 21.585938 19.585938 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"/>
					</svg>
				</div>`
          : `<div class="result_icon" style="background-image: url(` +
          results[i].img +
          `);"></div>`) +
        `
				<div class="result_text">
					<p class="name">` +
        results[i].name +
        `</p>
					<p>` +
        results[i].category +
        `</p>
				</div>
			</li>`
      );
    }
  }
  function clearDialog() {
    $(".search_results").empty();
    $(".search_results").removeClass("empty");
  }
  $("input").click(function () {
    if (!alreadyFilled) {
      $(".search_results").addClass("open");
      $("input").parent().addClass("focus");
      if ($(".search_results").is(":empty")) {
        $(".search_bar").addClass("empty");
      }
    }
  });
  $("body").on("click", ".search_results > li", function () {
    $("input").val($(this).find(".name").text()).focus();
    $(".close").addClass("visible");
    alreadyFilled = true;
  });

  console.log($("input").val());
  $(".close").click(function () {
    alreadyFilled = false;
    $(".search_results").addClass("open");
    $("input").val("").focus();
    $(this).removeClass("visible");
  });

  function match(str) {
    str = str.toLowerCase();
    clearDialog();
    for (var i = 0; i < results.length; i++) {
      if (results[i].name.toLowerCase().startsWith(str)) {
        $(".search_results").append(
          `
					<li class="result">
					` +
          (results[i].img == ""
            ? `<div class="search_icon">
							<svg fill="#8395B3" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">    
								<path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 19.585938 21.585938 C 20.137937 22.137937 21.033938 22.137938 21.585938 21.585938 C 22.137938 21.033938 22.137938 20.137938 21.585938 19.585938 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"/>
							</svg>
						</div>`
            : `<div class="result_icon" style="background-image: url(` +
            results[i].img +
            `);"></div>`) +
          `
						<div class="result_text">
							<p class="name">` +
          results[i].name +
          `</p>
							<p>` +
          results[i].category +
          `</p>
						</div>
					</li>`
        );
      }
    }
  }
  $("input").on("input", function () {
    $(".search_results").addClass("open");
    alreadyFilled = false;
    match($(this).val());
    $("input").parent().addClass("focus");
    $(".search_bar").removeClass("empty");
    if ($(".search_results").is(":empty")) {
      $(".search_bar").addClass("empty");
    }
  });
  $("body").click(function (e) {
    if (!$(e.target).is("input, .close")) {
      $(".search_results").removeClass("open");
      $("input").parent().removeClass("focus");
      $(".search_bar").removeClass("empty");
    }
  });
  initDialog();
});
