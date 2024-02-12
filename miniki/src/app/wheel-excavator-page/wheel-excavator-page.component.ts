import { Component, OnInit } from "@angular/core";
// import { GalleryItem, ImageItem } from '@ngx-gallery/core';
// import { NgxGalleryOptions, NgxGalleryImage } from 'ngx-gallery';
import { FormArray } from "@angular/forms";

@Component({
  selector: "app-wheel-excavator-page",
  templateUrl: "./wheel-excavator-page.component.html",
  styleUrls: ["./wheel-excavator-page.component.less"],
})
export class WheelExcavatorPageComponent implements OnInit {
  // galleryOptions: NgxGalleryOptions[];
  // galleryImages: NgxGalleryImage[];

  constructor() {}

  ngOnInit(): void {
    // this.galleryOptions = [
    //   {
    //     // width: '600px',
    //     // height: '400px',
    //     width: '100%',
    //     height: '600px',
    //     fullWidth: false,
    //     thumbnailsColumns: 10,
    //     imagePercent: 100,
    //     imageAutoPlay: true,
    //     imageInfinityMove: true,
    //     thumbnailsPercent: 20,
    //     previewCloseOnEsc: true,
    //     previewCloseOnClick: true,
    //   }
    // ];
    //   this.galleryImages = [
    //     {
    //       small: 'assets/img/bugger/caterpillar/gallery/5.jpg',
    //       medium: 'assets/img/bugger/caterpillar/gallery/5.jpg',
    //       big: 'assets/img/bugger/caterpillar/gallery/5.jpg'
    //     },
    //     {
    //       small: 'assets/img/bugger/caterpillar/gallery/6.jpg',
    //       medium: 'assets/img/bugger/caterpillar/gallery/6.jpg',
    //       big: 'assets/img/bugger/caterpillar/gallery/6.jpg'
    //     },
    //   ];
  }

  wheelArray = [
    {
      category: "Колёсный экскаватор",
      teaser: "assets/img/wheel/volvo/teaser-volvo-ew140.jpg",
      model: "Volvo EW140",
      desc: "Предлагаем на выгодных условиях в аренду экскаватор колесный Volvo EW 140, 0.8 м3 с экипажем.",
      video: "",
      price: "100-110",
      minTime: "8",
      phones: [
        {
          operator: "velcom",
          number: "+375 (29) 601-22-11",
        },
      ],
      gallery: [
        "assets/img/wheel/volvo/gallery/1.jpg",
        "assets/img/wheel/volvo/gallery/2.jpg",
      ],
    },
  ];
}
