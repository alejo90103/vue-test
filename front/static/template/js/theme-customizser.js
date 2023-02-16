(function($){
	"use strict";
	
	jQuery(document).ready(function($) {
		
		/* Storage Handling */
		var $pgs_styler_supports_html5_storage;
		
		try {
			$pgs_styler_supports_html5_storage = ( 'sessionStorage' in window && window.sessionStorage !== null );
			window.sessionStorage.setItem( 'pgs_styler', 'test' );
			window.sessionStorage.removeItem( 'pgs_styler' );
			window.localStorage.setItem( 'pgs_styler', 'test' );
			window.localStorage.removeItem( 'pgs_styler' );
		} catch( err ) {
			$pgs_styler_supports_html5_storage = false;
		}
		
		var primary_color     = pgs_customizer_l10n.primary_color,
			secondary_color   = pgs_customizer_l10n.secondary_color,
			tertiary_color    = pgs_customizer_l10n.tertiary_color,
			primary_color_el  = $('.style-customizer-color-scheme-primary'),
			secondary_color_el= $('.style-customizer-color-scheme-secondary'),
			tertiary_color_el = $('.style-customizer-color-scheme-tertiary'),
			custom_color      = false,
			overlay           = $('.style-customizer .style-customizer-overlay'),
			pgs_styler_css;
		
		if( $pgs_styler_supports_html5_storage ){
			
			// Apply Site Layout
			if(
				( typeof localStorage.pgs_styler_site_layout_custom !== 'undefined' && localStorage.pgs_styler_site_layout_custom == 1 )
				&& ( typeof localStorage.pgs_styler_site_layout !== 'undefined' && localStorage.pgs_styler_site_layout !== '' )
				&& ( typeof localStorage.pgs_styler_site_layout_class !== 'undefined' && localStorage.pgs_styler_site_layout_class !== '' )
			){
				pgs_style_site_layout( localStorage.pgs_styler_site_layout_class );
				$('.style-customizer .style-customizer-layout').val(localStorage.pgs_styler_site_layout);
			}
			
			// Check if custom style is applied
			if ( ( typeof localStorage.pgs_styler_css !== 'undefined' && localStorage.pgs_styler_css !== '' ) && ( typeof localStorage.pgs_styler_custom_color !== 'undefined' && localStorage.pgs_styler_custom_color == 1 ) ) {
				
				pgs_styler_css = localStorage.pgs_styler_css;
				
				// Check and Set primary_color
				if( typeof localStorage.pgs_styler_primary_color !== 'undefined' && localStorage.pgs_styler_primary_color !== '' ){
					primary_color = localStorage.pgs_styler_primary_color;
				}
				
				// Check and Set secondary_color
				if( typeof localStorage.pgs_styler_secondary_color !== 'undefined' && localStorage.pgs_styler_secondary_color !== '' ){
					secondary_color = localStorage.pgs_styler_secondary_color;
				}
				
				// Check and Set tertiary_color
				if( typeof localStorage.pgs_styler_tertiary_color !== 'undefined' && localStorage.pgs_styler_tertiary_color !== '' ){
					tertiary_color = localStorage.pgs_styler_tertiary_color;
				}
				
				// Apply local stored CSS
				get_css( localStorage.pgs_styler_css );
			}
		}
		
		// Update color picker input values
		$(primary_color_el).val(primary_color);
		$(secondary_color_el).val(secondary_color);
		$(tertiary_color_el).val(tertiary_color);
		
		$(primary_color_el).wpColorPicker({
			// palettes: ['#125', '#459', '#78b', '#ab0', '#de3', '#f0f'],
			defaultColor: primary_color,
			change: function(event, ui) {
				// event = standard jQuery event, produced by whichever control was changed.
				// ui = standard jQuery UI object, with a color member containing a Color.js object
				
				// do something
				// console.log(ui.color.toString());
				primary_color = ui.color.toString();
				custom_color = true;
				if( $pgs_styler_supports_html5_storage ){
					localStorage.setItem('pgs_styler_custom_color', 1);
					localStorage.setItem('pgs_styler_primary_color', primary_color);
				}
			}
		});
		$(secondary_color_el).wpColorPicker({
			// palettes: ['#125', '#459', '#78b', '#ab0', '#de3', '#f0f'],
			defaultColor: secondary_color,
			change: function(event, ui) {
				// event = standard jQuery event, produced by whichever control was changed.
				// ui = standard jQuery UI object, with a color member containing a Color.js object
				
				// do something
				// console.log(ui.color.toString());
				secondary_color = ui.color.toString();
				custom_color = true;
				if( $pgs_styler_supports_html5_storage ){
					localStorage.setItem('pgs_styler_custom_color', 1);
					localStorage.setItem('pgs_styler_secondary_color', secondary_color);
				}
			}
		});
		$(tertiary_color_el).wpColorPicker({
			// palettes: ['#125', '#459', '#78b', '#ab0', '#de3', '#f0f'],
			defaultColor: tertiary_color,
			change: function(event, ui) {
				// event = standard jQuery event, produced by whichever control was changed.
				// ui = standard jQuery UI object, with a color member containing a Color.js object
				
				// do something
				// console.log(ui.color.toString());
				tertiary_color = ui.color.toString();
				custom_color = true;
				if( $pgs_styler_supports_html5_storage ){
					localStorage.setItem('pgs_styler_custom_color', 1);
					localStorage.setItem('pgs_styler_tertiary_color', tertiary_color);
				}
			}
		});
		
		$('.style-customizer .style-customizer-layout').on('change',function(e) {
			e.preventDefault();
			
			var site_layout = $(this).find(':selected').val(),
				site_layout_class = $(this).find(':selected').data('class');
			
			pgs_style_site_layout(site_layout_class);
				
			if( $pgs_styler_supports_html5_storage ){
				localStorage.setItem('pgs_styler_site_layout_custom', 1);
				localStorage.setItem('pgs_styler_site_layout', site_layout);
				localStorage.setItem('pgs_styler_site_layout_class', site_layout_class);
			}
		});
		
		/*************************
       		Right sidebar
		*************************/
		var style_switcher = $('.style-customizer'),
			panelWidth = style_switcher.outerWidth(true);
			
		$('.style-customizer .opener').on("click", function(){
			var $this = $(this);
			if ($(".style-customizer.closed").length>0) {
				style_switcher.animate({"right" : "0px"});
				$(".style-customizer.closed").removeClass("closed");
				$(".style-customizer").addClass("opened");
			} else {
				$(".style-customizer.opened").removeClass("opened");
				$(".style-customizer").addClass("closed");
				style_switcher.animate({"right" : '-' + panelWidth});
			}
			return false;
		});
		
		/**************************************
			Customizer Actions
		**************************************/
		$('.style-customizer .style-customizer-actions .button-apply').on('click',function(e) {
			e.preventDefault();
			
			/*
			var $color_scheme_primary = $('.style-customizer-color-scheme-primary').val();
			var $color_scheme_secondary = $('.style-customizer-color-scheme-secondary').val();
			var $color_scheme_tertiary = $('.style-customizer-color-scheme-tertiary').val();
			
			Cookies.set('cardealer_style_customizer_color_scheme_primary', $color_scheme_primary);
			Cookies.set('cardealer_style_customizer_color_scheme_secondary', $color_scheme_secondary);
			Cookies.set('cardealer_style_customizer_color_scheme_tertiary', $color_scheme_tertiary);
			// location.reload(true); // hard reset
			location.reload(); // soft reset
			*/
			
			// Display Overlay
			$(overlay).addClass('style-customizer-overlay-active');
			
			get_css();
 		});
		$('.style-customizer .style-customizer-actions .button-reset').on('click',function(e) {
			e.preventDefault();
			
			/*
			Cookies.remove('cardealer_style_customizer_color_scheme_primary');
			Cookies.remove('cardealer_style_customizer_color_scheme_secondary');
			Cookies.remove('cardealer_style_customizer_color_scheme_tertiary');
			Cookies.remove('cardealer_demo_customizer_site_layout');
			Cookies.remove('cardealer_demo_customizer_site_layout_class');
			
			// location.reload(true); // hard reset
			location.reload(); // soft reset
			*/
			
			if( $pgs_styler_supports_html5_storage ){
				localStorage.removeItem( 'pgs_styler_css' );
				localStorage.removeItem( 'pgs_styler_site_layout_custom' );
				localStorage.removeItem( 'pgs_styler_site_layout' );
				localStorage.removeItem( 'pgs_styler_site_layout_class' );
				localStorage.removeItem( 'pgs_styler_custom_color' );
				localStorage.removeItem( 'pgs_styler_primary_color' );
				localStorage.removeItem( 'pgs_styler_secondary_color' );
				localStorage.removeItem( 'pgs_styler_tertiary_color' );

				pgs_styler_css = '';
			}
			
			location.reload(true); // hard reset
 		});
		
		
		// Heights
		var customizer_header              = $('.style-customizer-header'),
		customizer_header_height       = customizer_header.outerHeight(),
		customizer_content             = $('.style-customizer-content'),
		customizer_content_height      = customizer_content.outerHeight(),
		customizer_content_inner       = $('.style-customizer-content-inner'),
		customizer_content_inner_height= customizer_content_inner.outerHeight(),
		customizer_footer              = $('.style-customizer-footer'),
		customizer_footer_height       = customizer_footer.outerHeight();
		
		$(window).on("load resize", function(e){
			var viewport_height = $(window).height(),
				customizer_header_height = customizer_header.outerHeight();
				customizer_footer_height = customizer_footer.outerHeight();
				customizer_content_inner_height = customizer_content_inner.outerHeight();
				customizer_content_height = viewport_height - ( customizer_header_height + customizer_footer_height );
			
			$('.style-customizer-content').css('height', customizer_content_height);
			
			if( customizer_content_height < (customizer_content_inner_height+44) ){
				$('.style-customizer-content').css('overflow-y', 'scroll');
			}else{
				$('.style-customizer-content').css('overflow-y', '');
			}
		});
		
		function pgs_style_site_layout( site_layout_class ){
			$('body')
				.removeClass('site-layout-boxed')
				.removeClass('site-layout-framed')
				.removeClass('site-layout-standard')
				.addClass(site_layout_class);
		}
		
		function get_css( pgs_styler_css ){
				
			if( typeof pgs_styler_css === 'undefined' ){
				$.ajax({
					type: 'POST',
					url: pgs_customizer_l10n.ajaxurl,
					// dataType: 'json',
					data: {
						'action': 'pgs_styles_color_scheme_css', //calls wp_ajax_nopriv_ajaxlogin
						'primary_color': primary_color,
						'secondary_color': secondary_color,
						'tertiary_color': tertiary_color,
					},
					success: function(data) {
						
						$(overlay).removeClass('style-customizer-overlay-active');
						
						// var style = $(data).filter("style").get(0);
						if(data != '' ){
							if( $pgs_styler_supports_html5_storage ){
								localStorage.setItem('pgs_styler_css',data);
							}
							
							apply_css(data);
						}
						
						// $("#header").html($(data).filter('#header').html());
						// $("#footer").html($(data).filter('#footer').html());
					}
				});
			}else{
				apply_css(pgs_styler_css);
			}
		}
		
		function apply_css( $css ){
			if( typeof $css === 'undefined' ){
				return;
			}
			
			if( $('#pgs_styler_css').length != 0 ){
				var pgs_styler_css_el = $('#pgs_styler_css');
				pgs_styler_css_el.html( $css );
			}else{
				var pgs_styler_css_el = $('<style id="pgs_styler_css"></style>');
				pgs_styler_css_el.appendTo("head").html( $css );
			}
			
		}
	
	});
	
})(jQuery);