/*
*****************************************
Author: Vivekanand
Website: http://www.developersnippets.com
*****************************************
*/

$(document).ready(function(){
	$(".toggleBtn").click(function(){
		
			if($("#slideMenu").hasClass('closed')){
				$("#slideMenu").animate({right:0}, 200, function(){
					$(this).removeClass('closed').addClass('opened');
					$("a#toggleLink").removeClass('toggleBtn').addClass('toggleBtnHighlight');
				});
		return false;
			}//if close
			if($("#slideMenu").hasClass('opened')){
				$("#slideMenu").animate({right:-400}, 200, function(){
					$(this).removeClass('opened').addClass('closed');
					$("a#toggleLink").removeClass('toggleBtnHighlight').addClass('toggleBtn');
				});
		return false;
			}//if close
			
			$('#slideMenu').bind("mouseleave",function(){
				$("#slideMenu").animate({left:-200}, 500, function(){
					$(this).removeClass('opened').addClass('closed');
					$("a#toggleLink").removeClass('toggleBtnHighlight').addClass('toggleBtn');
				});
				return false;
			});//bind close
	});//toggleBtn click close

	$("a.anchorLink").click(function () {	
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, 1000 );
		return false;
	})

	/* Mouse Enter Event (that is mouseover event)
	$(".toggleBtn").bind("mouseenter",function(){
			if($("#slideMenu").hasClass('closed')){
				$("#slideMenu").animate({left:0}, 500, function(){
					$(this).removeClass('closed').addClass('opened');
					$("a#toggleLink").removeClass('toggleBtn').addClass('toggleBtnHighlight');
				});
			}//if close
			
			$('#slideMenu').bind("mouseleave",function(){
				$("#slideMenu").animate({left:-300}, 500, function(){
					$(this).removeClass('opened').addClass('closed');
					$("a#toggleLink").removeClass('toggleBtnHighlight').addClass('toggleBtn');
				});
			});//bind close
	});//toggleBtn click close*/

});//ready close