jQuery(document).ready(function($) {
 
       $(".video-btn").magnificPopup({
       	     type: 'video'
       });

		       $('#map')
      .gmap3({
        center:[24.4831598,91.7358822],
        zoom:12,
        mapTypeId: "shadeOfGrey", // to select it directly
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
        },
        scrollwheel: false,
      })
      .styledmaptype(
        "shadeOfGrey",
        [
          {"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#696048"},{"lightness":40}]},
          //{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#696048"},{"lightness":16}]},
          {"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
          {"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":20}]},
          {"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":17},{"weight":1.2}]},
          {"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":20}]},
          {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":21}]},
          {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ececec"},{"lightness":17}]},
          {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ececec"},{"lightness":29},{"weight":0.2}]},
          {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ececec"},{"lightness":18}]},
          {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ececec"},{"lightness":16}]},
          {"featureType":"transit","elementType":"geometry","stylers":[{"color":"#ececec"},{"lightness":19}]},
          {"featureType":"water","elementType":"geometry","stylers":[{"color":"#c8d7d4"},{"lightness":17}]}
        ],
        {name: "Shades of Grey"}
      );
});