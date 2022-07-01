   
   $(document).ready(function()
   {
      $('#wb_Text2').addClass('visibility-hidden');
      $('#wb_Heading6').addClass('visibility-hidden');
      $('#wb_Heading7').addClass('visibility-hidden');
      $('#wb_start').addClass('visibility-hidden');
      function onScrollText2()
      {
         var $obj = $("#wb_Text2");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_Text2', 'transform-lightspeed-in', 150, 1000);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_Text2', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_Text2').inViewPort(true))
      {
         $('#wb_Text2').addClass("in-viewport");
      }
      onScrollText2();
      $(window).scroll(function(event)
      {
         onScrollText2();
      });
      function skrollrInit()
      {
         skrollr.init({forceHeight: false, mobileCheck: function() { return false; }, smoothScrolling: false});
      }
      skrollrInit();
      function onScrollHeading6()
      {
         var $obj = $("#wb_Heading6");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_Heading6', 'transform-bounch-in', 150, 800);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_Heading6', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_Heading6').inViewPort(true))
      {
         $('#wb_Heading6').addClass("in-viewport");
      }
      onScrollHeading6();
      $(window).scroll(function(event)
      {
         onScrollHeading6();
      });
      function onScrollHeading7()
      {
         var $obj = $("#wb_Heading7");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_Heading7', 'transform-bounch-in', 1000, 800);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_Heading7', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_Heading7').inViewPort(true))
      {
         $('#wb_Heading7').addClass("in-viewport");
      }
      onScrollHeading7();
      $(window).scroll(function(event)
      {
         onScrollHeading7();
      });
      function onScrollstart()
      {
         var $obj = $("#wb_start");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_start', 'transform-bounch-in', 2000, 800);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_start', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_start').inViewPort(true))
      {
         $('#wb_start').addClass("in-viewport");
      }
      onScrollstart();
      $(window).scroll(function(event)
      {
         onScrollstart();
      });
      $("a[data-rel='PhotoGallery1']").attr('rel', 'PhotoGallery1');
      $("#PhotoGallery1").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $('#ThemeableMenu1 .dropdown-toggle').dropdown({popperConfig:{placement:'bottom-start',modifiers:{computeStyle:{gpuAcceleration:false}}}});
      $(document).on('click','.ThemeableMenu1-navbar-collapse.show',function(e)
      {
         if ($(e.target).is('a') && ($(e.target).attr('class') != 'dropdown-toggle')) 
         {
            $(this).collapse('hide');
         }
      });
   });
   