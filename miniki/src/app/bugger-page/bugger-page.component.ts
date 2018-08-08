import { Component, OnInit } from '@angular/core';
import { GalleryItem, ImageItem } from '@ngx-gallery/core';
import { NgxGalleryOptions, NgxGalleryImage } from 'ngx-gallery';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-bugger-page',
  templateUrl: './bugger-page.component.html',
  styleUrls: ['./bugger-page.component.less']
})
export class BuggerPageComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() {
    this.buggerArray.sort((a, b) => {
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

  buggerArray = [
    {
      id: this.getRandomInt(),
      category: 'Мини-экскаватор',
      teaser: 'assets/img/bugger/caterpillar/teaser-caterpillar-301-8C.jpg',
      model: 'Caterpillar 301.8C',
      desc: 'Аренда мини-экскаватора CAT 301.8C на резиновом гус. ходу. Ковши 20, 25, 30, 40, 50, 60см Рытьё траншей (под ленточные фундаменты, бассейны,газ, воду, канализацию и т.п) Планировка и расчистка территории. Форма оплаты любая!',
      video: '123123',
      price: '45-40',
      minTime: '4',
      phones: [
        {
          operator: 'velcom', number: '+375 (29) 601-22-11'
        }
      ],
      gallery: [
        'assets/img/bugger/caterpillar/gallery/5.jpg',
        'assets/img/bugger/caterpillar/gallery/6.jpg',
      ]
    },
    {
      id: this.getRandomInt(),
      category: 'Мини-экскаватор',
      teaser: 'assets/img/bugger/volvo/teaser-volvo-ec20.jpg',
      model: 'Volvo EC20B XTV',
      desc: 'Аренда мини-экскаватора Volvo EC20B XTV на резиновом гус. ходу. Рытьё траншей (под ленточные фундаменты, бассейны,газ, воду, канализацию и т.п) Планировка и расчистка территории. Форма оплаты любая!',
      video: '123123',
      price: '45-40',
      minTime: '4',
      phones: [
        {
          operator: 'velcom', number: '+375 (29) 601-22-11'
        }
      ],
      gallery: [
        'assets/img/bugger/volvo/gallery/1.jpg',
        // 'assets/img/bugger/volvo/gallery/2.jpg',
        'assets/img/bugger/volvo/gallery/3.jpg',
      ]

    },
    {
      id: this.getRandomInt(),
      category: 'Мини-экскаватор',
      teaser: 'assets/img/bugger/jcb/teaser-jcb-8020.jpg',
      model: 'JCB 8020',
      desc: 'Миниэкскаватор JCB с квалифицированным оператором окажет весь спектр земляных работ: Ковши 20, 30, 40, 60, 100(планировочный)',
      video: '',
      price: '45-40',
      minTime: '4',
      phones: [
        {
          operator: 'velcom', number: '+375 (29) 683-25-03'
        }
      ],
      gallery: [
        'assets/img/bugger/jcb/gallery/1.jpg',
        // 'assets/img/bugger/jcb/gallery/2.jpg',
        'assets/img/bugger/jcb/gallery/3.jpg',
      ]

    },
    {
      id: this.getRandomInt(),
      category: 'Мини-экскаватор',
      teaser: 'assets/img/bugger/kobelco/teaser-kobelco-sk35-sr.jpg',
      model: 'Kobelco SK30SR',
      desc: 'Осуществляем все виды работ мини-экскаватором KOBELCO SK30SR. Выравнивание и выемка грунта, планирование, корчевание, рытьё котлованов и траншей, установка колодезных колец. Ответственно подходим к каждому объекту. Работаем без выходных. Индивидуальный подход к каждому клиенту.',
      video: '',
      price: '45-40',
      minTime: '4',
      phones: [
        {
          operator: 'velcom', number: '+375 (29) 640-43-17'
        }
      ],
      gallery: [
        'assets/img/bugger/kobelco/gallery/1.jpg',
      ]

    },
    {
      id: this.getRandomInt(),
      category: 'Мини-экскаватор',
      teaser: 'assets/img/bugger/bobcat/teaser-bobcat-e16.jpg',
      model: 'Bobcat e16',
      desc: 'Аренда Мини-экскаватора. Все виды земляных работ. Копка траншей под фундаменты, воду и канализацию, электричество, газ, для установки забора, планировочные работы. Своя доставка.',
      video: '',
      price: '45-40',
      minTime: '4',
      phones: [
        {
          operator: 'velcom', number: '+375 (29) 902-21-92'
        },
        {
          operator: 'mts', number: '+375 (29) 577-27-73'
        },
      ],
      gallery: [
        'assets/img/bugger/bobcat/gallery/1.jpg',
        'assets/img/bugger/bobcat/gallery/2.jpg',
      ]

    },
    {
      id: this.getRandomInt(),
      category: 'Мини-экскаватор',
      teaser: 'assets/img/bugger/kubota/teaser-kubota-kx36-3.jpg',
      model: 'Kubota KX36-3',
      desc: 'Аренда Мини-экскаватора. Все виды земляных работ. Копка траншей под фундаменты, воду и канализацию, электричество, газ, для установки забора, планировочные работы. Своя доставка.',
      video: '',
      price: '45-40',
      minTime: '4',
      phones: [
        {
          operator: 'velcom', number: '+375 (29) 902-21-92'
        },
        {
          operator: 'mts', number: '+375 (29) 577-27-73'
        },
      ],
      gallery: [
        'assets/img/bugger/kubota/gallery/1.jpg',
      ]
    },
    {
      id: this.getRandomInt(),
      category: 'Мини-экскаватор',
      teaser: 'assets/img/bugger/komatsu/teaser-komatsu.jpg',
      model: 'Komatsu PC14R-2',
      desc: 'Аренда Мини-экскаватора. Ковши  от 20 - до 70. Бур от 20 - до 60..',
      video: '',
      price: '45-40',
      minTime: '4',
      phones: [
        {
          operator: 'velcom', number: '+375 (29) 651-25-01'
        }
      ],
      gallery: [
        'assets/img/bugger/komatsu/gallery/1.jpg',
        'assets/img/bugger/komatsu/gallery/2.jpg',
      ]
    },
    {
      id: this.getRandomInt(),
      category: 'Мини-экскаватор',
      teaser: 'assets/img/bugger/new-holland/teaser-new-holland.jpg',
      model: 'NEW HOLLAND E27.2SR',
      desc: 'Аренда Мини-экскаватора. Ковши  от 20 - до 70. Бур от 20 - до 60..',
      video: '',
      price: '45-40',
      minTime: '4',
      phones: [
        {
          operator: 'velcom', number: '+375 (29) 651-25-01'
        }
      ],
      gallery: [
        'assets/img/bugger/new-holland/gallery/1.jpg',
        'assets/img/bugger/new-holland/gallery/2.jpg',
      ]
    },
  ];

}
