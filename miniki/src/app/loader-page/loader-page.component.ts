import { Component, OnInit } from '@angular/core';
import { GalleryItem, ImageItem } from '@ngx-gallery/core';
import { NgxGalleryOptions, NgxGalleryImage } from 'ngx-gallery';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-loader-page',
  templateUrl: './loader-page.component.html',
  styleUrls: ['./loader-page.component.less']
})
export class LoaderPageComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() {
    this.loaderArray.sort((a, b) => {
      if (a.id < b.id) return -1;
      else if (a.id > b.id) return 1;
      else return 0;
    });
  }

  ngOnInit(): void {

    this.galleryOptions = [
      {
        // width: '600px',
        // height: '400px',
        width: '100%',
        height: '600px',
        fullWidth: false,
        thumbnailsColumns: 10,
        imagePercent: 100,
        imageAutoPlay: true,
        imageInfinityMove: true,
        thumbnailsPercent: 20,
        previewCloseOnEsc: true,
        previewCloseOnClick: true,

      }
    ];

    this.galleryImages = [
      {
        small: 'assets/img/bugger/caterpillar/gallery/5.jpg',
        medium: 'assets/img/bugger/caterpillar/gallery/5.jpg',
        big: 'assets/img/bugger/caterpillar/gallery/5.jpg'
      },
      {
        small: 'assets/img/bugger/caterpillar/gallery/6.jpg',
        medium: 'assets/img/bugger/caterpillar/gallery/6.jpg',
        big: 'assets/img/bugger/caterpillar/gallery/6.jpg'
      },
    ];
  }

  getRandomInt() {
    return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  }

  loaderArray = [
    {
      id: this.getRandomInt(),
      category: 'Мини-погрузчик',
      teaser: 'assets/img/loader/bobcat/teaser-bobcat-750.jpg',
      model: 'Bobcat T750',
      desc: 'Грузоподъемность номинал 1500кг, / мах до 2000кг. Ширина режущей кромки ковша 2032 мм Высота выгрузки, 3, 35 м',
      video: '',
      price: '55',
      minTime: '4',
      phones: [
        {
          operator: 'velcom', number: '+375 (29) 683-25-03'
        }
      ],
      gallery: [
        'assets/img/loader/bobcat/gallery/1.jpg',
        'assets/img/loader/bobcat/gallery/2.jpg',
      ]

    },
    {
      id: this.getRandomInt(),
      category: 'Мини-погрузчик',
      teaser: 'assets/img/loader/case/teaser-case-410.jpg',
      model: 'CASE 410 3 series',
      desc: '',
      video: '',
      price: '55',
      minTime: '4',
      phones: [
        {
          operator: 'velcom', number: '+375 (29) 640-43-17'
        }
      ],
      // gallery: [
      //   'assets/img/loader/case/gallery/1.jpg',
      //   'assets/img/loader/case/gallery/2.jpg',
      //   'assets/img/loader/case/gallery/3.jpg',
      // ]

    },
  ];

}
