'use strict';

require('./styles/main.scss');

var Rx = require('rx');
var React = require('react');

React.render(
<h1>Hello, world!</h1>,
  document.querySelectorAll('[data-react-init]')[0]
);
/*
 (function main() {
 var dragTarget = document.querySelectorAll('[data-drag-target]')[0];

  // Get the three major events
  var mouseup = Rx.Observable.fromEvent(dragTarget, 'mouseup');
  var mousemove = Rx.Observable.fromEvent(document, 'mousemove');
  var mousedown = Rx.Observable.fromEvent(dragTarget, 'mousedown');

  var mousedrag = mousedown.flatMap(function (md) {

    // calculate offsets when mouse down
    var startX = md.offsetX, startY = md.offsetY;

    // Calculate delta with mousemove until mouseup
    return mousemove.map(function (mm) {
      mm.preventDefault();

      return {
        left: mm.clientX - startX,
        top: mm.clientY - startY
      };
    }).takeUntil(mouseup);
  });

  // Update position
  mousedrag.subscribe(function (pos) {
    dragTarget.style.top = pos.top + 'px';
    dragTarget.style.left = pos.left + 'px';
  });
}());
*/