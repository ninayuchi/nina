$(document).ready(function() {
    $(".image").draggable();
    $(".textbox").draggable();
 });
 $(function() {
    $(".ui-widget-content" ).resizable({
      aspectRatio: 1/1
    });
  });