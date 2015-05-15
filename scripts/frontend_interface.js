window.__in_info = false;

$(function()
{
	var is_projects_overview;
	var $page = $(".page");
	is_projects_overview = $page.hasClass("projects") && !$page.hasClass("single");
	$(".pxetalage").pxEtalage({
		effect: "fade",
		effect_duration: 1000,
		slide_duration: 3500,
		slide_wrap: true,
		calback_start: function()
		{
			var html = $(".content", this).html();
			$(".sidebar.right", $page).html(html);
		}
	});
	
	/* submenu */
	var $sort_toggle;
	var $submenu_items = $(".navlinks > .with-submenu");
	$submenu_items.each(function(n, el)
	{
		var $el = $(el);
		var $sub = $("#projects_submenu");
		var $sub_inner = $(".submenu-inner", $sub);
		$sub_inner.fadeTo(0, 0).hide(1);
		
		var swidth = $sub.outerWidth();
		var sheight = $sub.outerHeight();
		//$sub.css("width", swidth+"px");
		$post_cnt = $(".wrapper.content");
		var $submenu_overlay = $("> .submenu-overlay", $post_cnt);
		$submenu_overlay.fadeTo(0, 0).hide(1);
		if ($sub.hasClass("simple")) {
			$sort_toggle = $("#sort_toggle");
			$sub_inner = $(".submenu-inner", $sub);
			var sub_inner_full = $sub_inner.height();
			$sub_inner.fadeTo(0, 0);
			var sort_state = false;
			$sort_toggle.click(function()
			{
				if (sort_state) {
					$sub_inner.fadeTo(500, 0).hide(1);
					//$post_cnt.stop().fadeTo(500, 1);
					$post_cnt.removeClass("submenu-active");
					$submenu_overlay.fadeTo(500, 0).hide(1);
				}
				else {
					//$post_cnt.stop().fadeTo(500, 0.2);
					$post_cnt.addClass("submenu-active");
					$sub_inner.show().fadeTo(500, 1);
					$submenu_overlay.show().fadeTo(500, 0.8);
					
				}
				sort_state = !sort_state;
				return false;
			});
		}
	});
	// turn off sort on other pages
	if (!$page.hasClass("projects")) {
		$("#projects_submenu").hide();
	}
	
	// turn images off
	var $project_thumb_c = $(".subwrapper.posts.thumbnails");
	if ($project_thumb_c.hasClass("home-slideshow")) {
	
	}
	var $project_thumb_cs = $("span.image", $project_thumb_c);
	var $project_thumb_posts = $(".post", $project_thumb_c);
	var title_fade_time = 250;
	$project_thumb_posts.each(function()
	{
		var $post = $(this);
		$post.removeClass("regular-hover");
		var $thumb_bg = $("span.thumb-bg", $post);
		$thumb_bg.fadeTo(0, 0);
		$post.mouseenter(function()
		{
			$thumb_bg.stop().fadeTo(title_fade_time, 1);
		});
		$post.mouseleave(function()
		{
			$thumb_bg.stop().fadeTo(title_fade_time, 0);
		});
	});
	var $project_thumb_imgs = $(".subwrapper.posts.thumbnails span.image img");
	$project_thumb_imgs.fadeTo(0, 0);
	$project_thumb_imgs.css({visibility: "visible"});
	/*$project_thumb_imgs.css({visibility: "hidden"});
	$project_thumb_cs.css({top: "-159px"});*/
	$project_thumb_imgs.one("load",function()
	{
		var $this = $(this);
		$this.fadeTo(300, 1);
	}).each(function()
	{
		if (this.complete || (jQuery.browser.msie && parseInt(jQuery.browser.version) == 6)) {
			$(this).trigger("load");
		}
	});
	
	//$(".wrapper.content .subwrapper.posts.thumbnails .post a span.title").fadeTo(0, 0);
	/*$(".wrapper.content .subwrapper.posts.thumbnails .post a .dark_overlay").fadeTo(0, 0);
	$(".wrapper.content .subwrapper.posts.thumbnails .post a .dark_overlay").css({visibility: "visible"});*/
	/*$(".wrapper.content .subwrapper.posts.thumbnails .post a").mouseenter(function()
	{
		$("span.title", this).stop().animate({top: 0}, {duration: 150, queue: false, easing: "easeInOutSine"});
		//$("span.title", this).fadeTo(80, 1);
		//$("span.image .dark_overlay", this).fadeTo(80, 0.12);
		//$("span.image img.gray", this).fadeTo(80, 0);
	});
	$(".wrapper.content .subwrapper.posts.thumbnails .post a").mouseleave(function()
	{
		$("span.title", this).stop().animate({top: -56+"px"}, {duration: 150, queue: false, easing: "easeInOutSine"});
		//$("span.title", this).fadeTo(80, 0);
		//$("span.image .dark_overlay", this).fadeTo(80, 0);
		//$("span.image img.gray", this).fadeTo(80, 1);
	});*/
	
	var $single_wrap = $(".single_pxetalage .image_wrap");
	if ($single_wrap[0]) {
		var $content = $(".content .desc");
		var $projnav = $(".projnav");
		$content.fadeOut(0);
		$content.css({visibility: "visible"});
		$("#info_link").click(function()
		{
			if ($single_wrap.hasClass("hiding")) {
				$mouse_follow && $mouse_follow.removeClass("hidden");
				window.__in_info = false;
				$("#info_link").removeClass("exp");
				$single_wrap.fadeTo(550, 1);
				$content.fadeOut(550);
				$single_wrap.removeClass("hiding");
			} else {
				$mouse_follow && $mouse_follow.addClass("hidden");
				window.__in_info = true;
				$("#info_link").addClass("exp");
				$single_wrap.fadeTo(550, 0.15);
				$content.fadeIn(550);
				$single_wrap.addClass("hiding");
			}
			return false;
		});
	}
	
	if ($(".single_pxetalage").length > 0) {
		var z = $(".single_pxetalage .image_wrap .slide").length;
		var px = $(".single_pxetalage").pxEtalage({
			effect: "fade",
			effect_duration: 600,
			slide_infinite: false,
			slide_duration: 5000,
			slide_automation: false,
			slide_wrap: true,
			callback_start: function(info)
			{
				$(".counter .a").text(info.curr + 1);
			}
		});
		$(".counter").show();
		$(".counter .a").text(1);
		$(".counter .z").text(z);
		$(".prev_next .prev").click(function()
		{
			$(".single_pxetalage a.prev").click();
			return false;
		});
		$(".prev_next .next").click(function()
		{
			$(".single_pxetalage a.next").click();
			return false;
		});
		var $sl = $(".single_pxetalage .image_wrap .slide");
		$sl.each(function()
		{
			this.tagName.toLowerCase() == "img" && $(this).css({cursor: "pointer"}).click(function()
			{
				$(".single_pxetalage a.next").click();
				return false;
			});
		});
	}
	
	/* Resize Vimeo objects */
	var $slide_wrappers = $(".slide-wrapper");
	var $vimeos = $(".slide-wrapper iframe");
	var iphone_range = 600;
	$(window).resize(function()
	{
	    var a, z;
	    var $vimeo;
	    var width, height, w_val, h_val;
	    /*
	    if ($(window).width() < 600) {
            for (a = 0, z = $slide_wrappers.length; a < z; ++a) {
                $slide = $($slide_wrappers[a]);
                $vimeo.css("width", "100%");
                w_val = $vimeo.attr("width");
                h_val = $vimeo.attr("height");
                width = $vimeo.width();
                height = Math.round(width / (w_val / h_val));
                $vimeo.height(height);
            }
	    }*/
        for (a = 0, z = $vimeos.length; a < z; ++a) {
            $vimeo = $($vimeos[a]);
            w_val = $vimeo.attr("width");
            h_val = $vimeo.attr("height");
            width = $vimeo.width();
            height = Math.round(width / (w_val / h_val));
            $vimeo.height(height);
        }
	});
	
	/* Used for resizing objects proportionally. */
	function resizeWithinArea(itemW, itemH, areaW, areaH, position)
	{
		if (position == null) {
			position = "inside";
		}
		if (itemW == 0 || itemH == 0 || areaW == 0 || areaH == 0) {
			// FIXME: 0 should mean "any size" in context of area.
			return;
		}
		var ratio = (areaW / areaH) > (itemW / itemH);
		var c = (position == "outside" && ratio) || (position == "inside" && !ratio) ? itemW / areaW : itemH / areaH;
		var w = itemW / c;
		var h = itemH / c;
		return {width: Math.round(w), height: Math.round(h), x: Math.round((areaW - w) / 2), y: Math.round((areaH - h) / 2), position: position};
	}
	
	var $mouse_follow;
	var offsetX = 5;
	var offsetY = 5;
	// this is turned off:
	if ($(".single_pxetalage")[0] && $(".single_pxetalage").hasClass("alt_arrows") && false) {
		var $mouse_item = $("<div></div>").appendTo($page);
		$mouse_follow = $mouse_item;
		$mouse_item.attr({id: "mouse_follow"});
		$mouse_item.css({position: "fixed", zIndex: "400", top: 0, left: 0});
		$mouse_item.hide();
		function mouse_move(e)
		{
			$mouse_item.show();
			$mouse_item.css({top: (e.pageY + offsetY)+"px", left: (e.pageX + offsetX)+"px"});
		}
		$(document).mousemove(mouse_move);
		$(".single_pxetalage .arrow.prev").mouseenter(function()
		{
			$mouse_item.addClass("previous");
		});
		$(".single_pxetalage .arrow.next").mouseenter(function()
		{
			$mouse_item.addClass("next");
		});
		$(".single_pxetalage .arrow.prev").mouseleave(function()
		{
			$mouse_item.removeClass("previous");
		});
		$(".single_pxetalage .arrow.next").mouseleave(function()
		{
			$mouse_item.removeClass("next");
		});
	}
	
	var $post_thumbnails = $(".subwrapper.posts.thumbnails", $page);
	var $post_thumbnail_items = $("> .post", $post_thumbnails);
	var start_type = window.location.hash.match(/type_(\S+)/);
	var has_defined_start = false;
	if (start_type != null) {
		has_defined_start = true;
		start_type = start_type[1];
	} else {
		start_type = "post";
	}
	var $type_nav = $("#projects_nav");
	
	/* Start on "latest". */
	/*if (start_type == "post" && !has_defined_start) {
		start_type = "latest";
	}*/
	
	var $wrapper_header = $(".wrapper.header");
	var $wrapper_content = $(".wrapper.content");
	if ($post_thumbnails[0]) {
		$("a[rel="+start_type+"]", $wrapper_header).addClass("active");
	}
	var no_isotope = $page.hasClass("no_isotope");
	no_isotope = true;
	setTimeout(function()
	{
		var usable_n = 0;
		/*$project_thumb_cs.each(function(n, el)
		{
			var $el = $(el);
			var $item = $el.parents(".post");
			if (!$item.hasClass("isotope-hidden")) {
				usable_n += 1;
				$el.delay(usable_n * 50).animate({top: "0"}, {duration: 600, queue: true, easing: "easeInOutQuint"});
			}
			else {
				$el.css({top: "0"});
			}
		});*/
	}, 300);
	var $home_slide = $(".home_slide");
	if ($home_slide[0]) {
		var $hs_images = $("img", $home_slide);
		
		function updateSize($imgs)
		{
			var viewport_width = $(document).width();
			var viewport_height = $(document).height();
			var $img, w, h, nw, nh, sizes;
			for (var a = 0, z = $imgs.length; a < z; ++a) {
				$img = $($imgs[a]);
				w = parseInt($img.attr("width"), 10);
				h = parseInt($img.attr("height"), 10);
				
				sizes = resizeWithinArea(w, h, viewport_width, viewport_height, "outside");
				
				nw = sizes.width;
				nh = sizes.height;
				
				$img.css({width: nw+"px", height: nh+"px"});
			}
		}
		//updateSize($hs_images);
		
		$hs_images.css({zIndex: 1});
		$hs_images.css({visibility: "hidden"});
		
		var $first = $($hs_images[0]);
		$first.attr({src: $first.attr("rel")});
		$first.css({zIndex: 2});
		$(window).bind("resize", function()
		{
			//updateSize($hs_images);
		});
		var slides_a = 0;
		var slides_z = $hs_images.length;
		var slides_zIndex = 2;
		$hs_images.each(function()
		{
			var $this = $(this);
			$this.attr({src: $this.attr("rel")});
			$this.css({visibility: "hidden"});
		});
		var slide_time = 4500;
		$first.one("load", function()
		{
			$first.fadeTo(0, 0);
			$first.css({visibility: "visible"});
			$first.fadeTo(1000, 1, function()
			{
				$hs_images.css({visibility: "visible"});
			});
			var $hs_img;
			/*for (var a = 0, z = $hs_images.length; a < z; ++a) {
				$hs_img = $($hs_images[a]);
				if ($hs_images[a] == $first[0]) {
					continue;
				}
				$hs_img.attr({src: $hs_img.attr("rel")});
			}*/
			if (slides_a + 1 < slides_z) {
				setInterval(function()
				{
					window.console && console.log("next slide (slide time: %d)", slide_time);
					if (++slides_a >= slides_z) {
						slides_a = 0;
					}
					var $next_slide = $($hs_images[slides_a]);
					$next_slide.stop();
					$next_slide.fadeTo(0, 0);
					$next_slide.css({zIndex: ++slides_zIndex, visibility: "visible"});
					$next_slide.fadeTo(0, 0).fadeTo(1000, 1);
				}, slide_time);
			}
		}).each(function()
		{
			if (this.complete || (jQuery.browser.msie && parseInt(jQuery.browser.version) == 6)) {
				$(this).trigger("load");
			}
		}); 
	}
	
	
	var page_mason;
	if ($page.hasClass("projects") || $page.hasClass("home-slideshow")) {
		
		
		
		var $cnt = $(".subwrapper.posts.thumbnails");
		var $posts = $("> .post", $cnt);
		$(".title", $posts).hide();
		
		$posts.mouseenter(function()
		{
			var $this = $(this);
			var $tl = $(".title", $this);
			$tl.stop().fadeTo(80, 1);
		});
		$posts.mouseleave(function()
		{
			var $this = $(this);
			var $tl = $(".title", $this);
			$tl.stop().fadeTo(150, 0).hide(1);
		});
		$posts.click(function()
		{
			if ($(this).hasClass("active")) {
				return true;
			}
			return false;
		});
		$posts.mouseleave();
		if ($page.hasClass("home-slideshow")) {
			$(".subwrapper.posts").css({visibility: "visible"});
			
		} else {
		
			$posts.addClass("active");
			$cnt.masonry({
			  columnWidth: ".masonry-grid-sizer",
			  itemSelector: ".post.active",
			  isFitWidth: true,
			  isInitLayout: true,
			  gutter: 40
			});
			page_mason = Masonry.data($cnt[0]);
			
			$(window).resize(function()
			{
				var w = $(window).width();
				if (w < 845) {
					//page_mason.
				}
				//page_mason
			});
			
			var a, z;
			var $type;
			var $type_links = $("a.type_link", $wrapper_content);
			$type_links.click(function()
			{
				var $this = $(this);
				var to_type = $this.attr("rel");
				if ($this.attr("id") == "work_link" && is_projects_overview) {
					return false;
				}
				if ($this.hasClass("active")) {
					return false;
				}
				$type_links.removeClass("active");
				$("a[rel="+to_type+"]", $wrapper_header).addClass("active");
				if (to_type == "all") {
					$("> .post", $cnt).addClass("active");
				}
				else {
					$("> .post", $cnt).removeClass("active");
					$("> .post."+to_type, $cnt).addClass("active");
				}
				$sort_toggle.click();
				page_mason.layout();
				return false;
			});
			$(".subwrapper.posts").css({visibility: "visible"});
		
			var $pstcnt = $(".single_container .post_content");
			var $metatop = $(".meta.top");
			var $desc_disp = $(".desc_display, h2", $metatop);
			var $image_wrap = $(".image_wrap");
			var $projnav = $(".projnav");
			if ($desc_disp[0]) {
				$pstcnt.fadeTo(0, 0).hide();
				$desc_disp.click(function()
				{
					var $this = $(this);
					if ($metatop.hasClass("expanded")) {
						$metatop.removeClass("expanded");
						//$image_wrap.stop().fadeTo(500, 1);
						$projnav.fadeTo(280, 1);
						$pstcnt.fadeTo(270, 0).hide(1);
					}
					else {
						$pstcnt.show();
                        var $sc = $(".single_container");
                        var $sc_inner = $(".post_content .inner", $sc);
                        var sc_h = $sc.height();
                        var sc_inner_h = $sc_inner.height();
                        if (sc_h < sc_inner_h + 50) {
                            $sc.height(sc_inner_h + 50);
                        }
						//$image_wrap.stop().fadeTo(500, 0.2);
						$pstcnt.fadeTo(270, 1);
						$projnav.fadeTo(280, 0.15);
						$metatop.addClass("expanded");
					}
					return false;
				});
			}
		}
	}
	else if ($(".subwrapper.posts")[0]) {
		$(".subwrapper.posts").fadeTo(0, 0).css({visibility: "visible"}).fadeTo(550, 1);
	}
	
	var slide_a;
	var slide_z;
	var $all_slides;
	var slide_time = 700;
	var slide_duration = 5000;
	
	var $home_slideshow_title;
	var $next_slide = $();
	
	function next_slide()
	{
		slide_a += 1;
		if (slide_a >= slide_z) {
			slide_a = 0;
		}
		$all_slides.css("z-index", 4);
		if ($next_slide[0]) {
			$next_slide.css("z-index", 5);
		}
		$next_slide = $($all_slides[slide_a]);
		$next_slide.css("z-index", 6);
		$next_slide.hide();
		$next_slide.fadeTo(0, 0, function()
		{
			$next_slide.fadeTo(slide_time, 1, "easeInOutSine");
		});
		/*
		var $slide_title = $(".title", $next_slide);
		slide_title_html = $slide_title.html();
		$home_slideshow_title.fadeTo(title_fade_time, 0, function()
		{
			$home_slideshow_title.html(slide_title_html).fadeTo(title_fade_time, 1);
		});
		var $slide_link = $("> a", $next_slide);
		slide_href = $slide_link.attr("href");
		$overlay.attr("href", slide_href);
		*/
	}
	
	var $home_slideshow = $(".home-slideshow");
	var $home_slideshow_wrapper = $(".home-slideshow-wrapper", $home_slideshow);
	var $overlay = $("> .overlay", $home_slideshow_wrapper);
	$home_slideshow_title = $(".overlay .title", $home_slideshow_wrapper);
	var $post_slides = $(".post-slides", $home_slideshow);
	var $post_slides_imgs = $(".post img", $post_slides);
	var post_slides_imgs_db = [];
	$post_slides_imgs.each(function(n, el)
	{
		var $el = $(el);
		var img_info = {$el: $el};
		var img_w = parseInt($el.attr("width"), 10);
		var img_h = parseInt($el.attr("height"), 10);
		img_info.w = img_w;
		img_info.h = img_h;
		img_info.r = img_w / img_h;
		img_info.mode = "";
		post_slides_imgs_db.push(img_info);
	});
	var largest_w = 0;
	var largest_h = 0;
	
	var mode = "landscape";
	$home_slideshow_wrapper.addClass("landscape");
	$(window).resize(function()
	{
		var w = $(window).width();
		var h = $(window).height();
		var r = w / h;
		var $el;
		var info, real_w, real_h, offset_w, offset_h;
		for (var a = 0, z = post_slides_imgs_db.length; a < z; ++a) {
			info = post_slides_imgs_db[a];
			$el = info.$el;
			if (info.r < r) {
				if (info.mode != "landscape") {
					info.mode = "landscape";
					$el.attr("class", "landscape");
				}
			}
			else {
				if (info.mode != "portrait") {
					info.mode = "portrait";
					$el.attr("class", "portrait");
				}
			}
			if (info.mode == "landscape") {
				real_w = w;
				real_h = info.h / (info.w / w);
			}
			if (info.mode == "portrait") {
				real_w = info.w / (info.h / h);
				real_h = h;
			}
			offset_w = Math.round((real_w - w) / 2);
			offset_h = Math.round((real_h - h) / 2);
			$el.css("position", "relative");
			$el.css({left: -offset_w+"px", top: -offset_h+"px"});
		}
	});
	$(window).resize();
	
	if ($home_slideshow[0]) {
		slide_a = -1;
		$all_slides = $("> .post", $post_slides);
		$all_slides.each(function(n, el)
		{
			var $img = $("img.gray", el);
			var img_w = parseInt($img.attr("width"), 10);
			var img_h = parseInt($img.attr("height"), 10);
			if (img_w > largest_w) {
				largest_w = img_w;
			}
			if (img_h > largest_h) {
				largest_h = img_h;
			}
		});
		$(".title", $all_slides).hide();
		slide_z = $all_slides.length;
		$all_slides.fadeTo(0, 0).hide();
		setInterval(next_slide, slide_duration);
		next_slide();
	}
	if (largest_w < 1200) {
		largest_h = Math.round(largest_h * (1200 / largest_w));
		largest_w = 1200;
	}
	//$home_slideshow_wrapper.css({width: largest_w+"px", height: largest_h+"px"});
	$overlay.fadeTo(0, 0).show();
	$overlay.css({width: "100%", height: "100%"});
	$overlay.mouseenter(function()
	{
		$(this).stop().fadeTo(title_fade_time, 1);
	});
	$overlay.mouseleave(function()
	{
		$(this).stop().fadeTo(title_fade_time, 0);
	});
	
	
	/* spectrum */
	/*
	function change_color(quick)
	{
		var $thumb_bgs = $("span.thumb-bg, a.change-color");
		quick = !quick ? false : true;
		var rgb = hslToRgb(Math.random(), 1, 0.5);
		var hue = 'rgba('+rgb[0]+', '+rgb[1]+', '+rgb[2]+', 0.9)';
		if (quick) {
			$thumb_bgs.css({backgroundColor: hue});
		}
		else {
			$thumb_bgs.animate({backgroundColor: hue}, 6000);
		}
	}
	change_color(true);
	change_color();
	setInterval(change_color, 7000);
	*/
});


function hslToRgb(h, s, l){
    var r, g, b;

    if(s == 0){
        r = g = b = l; // achromatic
    }else{
        function hue2rgb(p, q, t){
            if(t < 0) t += 1;
            if(t > 1) t -= 1;
            if(t < 1/6) return p + (q - p) * 6 * t;
            if(t < 1/2) return q;
            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        }

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

$(function()
{
	// admin stuff
	var arrangement_types = [
		[["f", 1], ["two5050", 2]],
		[["two6633", 2], ["two3366", 2]],
		[["r75", 1], ["l75", 1]],
		[["c75", 1], ["c50", 1]],
		[["r50", 1], ["l50", 1]]
	];
	var active_classes = [];
	for (var a = 0, z = arrangement_types.length; a < z; ++a) {
		for (var b = 0, y = arrangement_types[a].length; b < y; ++b) {
			active_classes.push(arrangement_types[a][b][0]);
		}
	}
	var json_url = window.site_url+"/";
	var $admin_post = $(".post.project.admin");
	var post_id = 0;
	$admin_post.each(function(n, el)
	{
		/*
		These types are implemented:
		
			* 1x, 100%
			* 2x, 50% 50%
			* 2x, 66% 33% (and vice versa)
			* 1x, 75% (left and right)
			* 1x, 75% (center)
			* 1x, 50% (left and right)
			
		*/

		var $el = $(el);
		var post_id = parseInt($el.attr("id").match(/post_(\S+)/)[1], 10);
		var $wrap = $(".image_wrap", $el);
		var $imgs = $("> .slide-wrapper", $wrap);
		var types = arrangement_types;
		var opts_str = '<div class="admin-btns">';
		var type_row, type;
		for (var a = 0, z = types.length; a < z; ++a) {
			type_row = types[a];
			for (var b = 0, y = type_row.length; b < y; ++b) {
				type = type_row[b];
				opts_str += '<a href="#" class="'+type[0]+' type__'+type[0]+'">';
				for (var c = 0; c < type[1]; ++c) {
					opts_str += '<span class="obj'+(c + 1)+'"></span>';
				}
				opts_str += '</a>';
			}
			opts_str += '<br />';
		}
		opts_str += '<a href="#" class="ctrl save">Save</a></div>';
		//'<div class="admin-btns"><a href="#" class="r type__r"><span class="obj1"></span></a><a href="#" class="l type__l"><span class="obj1"></span></a><br /><a href="#" class="r2 type__r2"><span class="obj1"></span></a><a href="#" class="l2 type__l2"><span class="obj1"></span></a><br /><a href="#" class="c type__c"><span class="obj1"></span></a><a href="#" class="c2 type__c2"><span class="obj1"></span></a><br /><a href="#" class="ctrl save">Save</a></div>'
		var $opts = $(opts_str).appendTo($imgs);
		var $admin_btns = $(".admin-btns", $wrap);
		$admin_btns.each(function(btn_n, btn_el)
		{
			var $btn_el = $(btn_el);
			var $parent = $btn_el.parent();
			var img_id = parseInt($parent.attr("id").match(/imgid_(\S+)/)[1], 10);
			var $links = $("> a", $btn_el);
			var curr_type = $parent.attr("class").match(/type__(\S+)/)[1];
			$links.click(function()
			{
				var $this = $(this);
				var $prev = $parent.prev();
				var $next = $parent.next();
				var prev_str = $prev.attr("class");
				// if previous item has a class with "two" in it
				if ($btn_el.hasClass("unusable") || (prev_str && prev_str.indexOf("two") > -1)) {
					return false;
				}
				// if the next item has any class other than 'f'
				/*
				if (!$next.hasClass("type__f")) {
					// set the class to f
					window.console && console.warn($(".admin-btns .type__f", $next)[0]);
					$(".admin-btns .type__f", $next).click();
				}
				*/
				if ($this.hasClass("save")) {
					var data = {imgidpos: "yes", post_id: post_id, img_id: img_id, curr_type: curr_type};
					$this.removeClass("active");
					$.getJSON(json_url, data, function(data, textStatus, jqXHR)
					{
						$this.text("Saved!");
						$this.addClass("active");
					});
					return false;
				}
				curr_type = $this.attr("class").match(/type__(\S+)/)[1];
				if ($parent.hasClass(curr_type)) {
					return false;
				}
				for (var a = 0, z = active_classes.length; a < z; ++a) {
					$parent.removeClass("type__"+active_classes[a]);
				}
				$parent.addClass("type__"+curr_type);
				$links.removeClass("active");
				$this.addClass("active");
				return false;
			});
			var active_type = $parent.attr("class").match(/type__(\S+)/);
			if (active_type != null) {
				active_type = active_type[1];
				var $active_admin_btn = $(".admin-btns a."+active_type, $parent);
				if ($active_admin_btn.length) {
					$active_admin_btn.addClass("active");
				}
			}
		});
		
	});
});