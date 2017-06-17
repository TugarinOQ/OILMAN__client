import { Component, NgModule } from "@angular/core";
import $ from "jquery";

@Component({
  selector: "slider",
  templateUrl: "../../views/views__child/slider__view.html",
  styleUrls: [ "../../styles/styles__child/slider__style.scss" ]
})

export class slider__controller{

  oilobject = [
    {
      title: 'Станок-качалка',
      imgClass: 'OILRockingMachine',
      price: 199
    },
    {
      title: 'Танкер',
      imgClass: 'OILTanker',
      price: 2000
    },
    {
      title: 'НЕФТЕДОБЫВАЮЩАЯ ПЛАТФОРМА',
      imgClass: 'OILPlatform',
      price: 9999
    },
    {
      title: 'Станок-качалка',
      imgClass: 'OILRockingMachine',
      price: 1999
    },
    {
      title: 'Станок-качалка',
      imgClass: 'OILRockingMachine',
      price: 1999
    },
    {
      title: 'Станок-качалка',
      imgClass: 'OILRockingMachine',
      price: 1999
    },
    {
      title: 'Станок-качалка',
      imgClass: 'OILRockingMachine',
      price: 1999
    },
    {
      title: 'Станок-качалка',
      imgClass: 'OILRockingMachine',
      price: 1999
    }
  ];

  constructor() {

    $(document).ready(function () {
      $('slider').OILBlock();
    });
    $.fn.OILBlock = function () {
      return this.each(function () {
        let component = $(this);
        let OILArea = component.find('.OILArea');
        let left = component.find('.left');
        let right = component.find('.right');
        let plane = component.find('.OILPlane');
        let OILMargin = 50;
        let OILWidth = OILMargin + 165;
        let planeLeft = 0;
        let visibleOIL = 5;
        right.click(function () {
          plane.find('.OILObject').finish();
          plane.finish();
          for (let n = 1; n <= visibleOIL; n++) {
            if (n == visibleOIL) {
              plane.find('.OILObject:eq(' + n + ')').css('opacity', 0).animate({
                opacity: 1
              }, 100);
            } else {
              plane.find('.OILObject:eq(' + n + ')').css('opacity', 1);
            }
          }
          plane.find('.OILObject:first').animate({
            opacity: 0
          }, 100);
          plane.animate({
            left: planeLeft - OILWidth
          }, 100, '', function () {
            let firstOIL = plane.find('.OILObject:first');
            firstOIL.remove().appendTo(plane);
            $(window).resize();
          });
        });
        left.click(function () {
          plane.find('.OILObject').finish();
          plane.finish();
          let lastOIL = plane.find('.OILObject:last');
          plane.find('.OILObject:eq(' + (visibleOIL - 1) + ')').animate({
            opacity: 0
          }, 100);
          lastOIL.remove().prependTo(plane).css('opacity', 0).animate({
            opacity: 1
          }, 100);
          plane.css('left', planeLeft - OILWidth).animate({
            left: planeLeft
          }, 100, '', function () {
            $(window).resize();
          });
        });
        $(window).resize(function () {
          if (OILArea.width() < OILWidth * 2 - OILMargin) {
            planeLeft = OILArea.width() / 2 - OILWidth / 2 + OILMargin / 2;
            visibleOIL = 1;
          } else if (OILArea.width() < OILWidth * 3 - OILMargin) {
            planeLeft = OILArea.width() / 2 - OILWidth * 2 / 2;
            visibleOIL = 2;
          } else if (OILArea.width() < OILWidth * 4 - OILMargin) {
            planeLeft = OILArea.width() / 2 - OILWidth * 3 / 2;
            visibleOIL = 3;
          } else if (OILArea.width() < OILWidth * 5 - OILMargin) {
            planeLeft = OILArea.width() / 2 - OILWidth * 4 / 2;
            visibleOIL = 4;
          } else {
            planeLeft = 0;
            visibleOIL = 5;
          }
          if (planeLeft < 0) {
            planeLeft = 0;
          }
          plane.find('.OILObject').css('opacity', 0);
          for (let n = 0; n < visibleOIL; n++) {
            plane.find('.OILObject:eq(' + n + ')').css('opacity', 1);
          }
          plane.css('left', planeLeft);
        }).resize();
      });
    };
  }

}
