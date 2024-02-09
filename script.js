var $el, leftPos, newWidth;

$("#nav-links").append("<li id='magic-line'></li>");

var $magicLine = $("#magic-line");

$magicLine
  .width($(".active").width())
  .css("left", $(".active a").position().left)
  .data("origLeft", $magicLine.position().left)
  .data("origWidth", $magicLine.width());
  
$("#nav-links li")
  .find("a")
  .hover(
    function() {
      $el = $(this);
      leftPos = $el.position().left;
      newWidth = $el.parent().width();

      $magicLine.stop().animate({
        left: leftPos,
        width: newWidth
      });
    },
    function() {
      $magicLine.stop().animate({
        left: $magicLine.data("origLeft"),
        width: $magicLine.data("origWidth")
      });
    }
  );

const license_txt = `
joshansrai.pages.dev or pradheon.github.io are both a personal portfolio website under
a shared domain name of joshansrai.pages.dev hosted by Cloudflare Pages and/or
Github Pages to display works from and information about Joshan Singh Rai.
    Copyright (C) 2020-2024 Joshan Singh Rai

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published
    by the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see https://www.gnu.org/licenses/.   
`

console.log(license_txt)