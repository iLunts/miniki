import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-loader-page',
  templateUrl: './loader-page.component.html',
  styleUrls: ['./loader-page.component.less']
})
export class LoaderPageComponent implements OnInit {
  modalRef: BsModalRef;
  config = {
    backdrop: true,
    ignoreBackdropClick: false
  };
  activeGallery: any;

  constructor(
    private modalService: BsModalService,
  ) {
    this.loaderArray.sort((a, b) => {
      if (a.id < b.id) {
        return -1;
      } else if (a.id > b.id) {
        return 1;
      } else {
        return 0;
      }
    });
  }

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

    // this.galleryImages = [
    //   {
    //     small: 'assets/img/bugger/caterpillar/gallery/5.jpg',
    //     medium: 'assets/img/bugger/caterpillar/gallery/5.jpg',
    //     big: 'assets/img/bugger/caterpillar/gallery/5.jpg'
    //   },
    //   {
    //     small: 'assets/img/bugger/caterpillar/gallery/6.jpg',
    //     medium: 'assets/img/bugger/caterpillar/gallery/6.jpg',
    //     big: 'assets/img/bugger/caterpillar/gallery/6.jpg'
    //   },
    // ];
  }

  getRandomInt() {
    return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  }

  // tslint:disable-next-line: member-ordering
  loaderArray = [
    // Леша Админ
    {
      id: this.getRandomInt(),
      category: 'Мини-погрузчик',
      teaser: 'assets/img/loader/bobcat/teaser-bobcat-750.jpg',
      model: 'Bobcat T750',
      desc: 'Грузоподъемность номинал 1500кг, / мах до 2000кг. Ширина режущей кромки ковша 2032 мм Высота выгрузки, 3, 35 м',
      video: '',
      price: '70-80',
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

    // Женя Морячок
    {
      id: this.getRandomInt(),
      category: 'Мини-погрузчик',
      teaser: 'assets/img/loader/case-sr-200/teaser-case-sr-200.jpeg',
      model: 'CASE SR 200',
      desc: 'Услуги мини-погрузчика, планировка, уборка снега, вывоз грунта, погрузочно-разгрузочные работы и т.д. На длительный срок скидки. С опытным водителем.',
      video: '',
      price: '50',
      minTime: '4',
      phones: [
        {
          operator: 'velcom', number: '+375 (29) 640-43-17'
        }
      ],
      gallery: [
        'assets/img/loader/case-sr-200/gallery/1.jpg',
        'assets/img/loader/case-sr-200/gallery/2.jpg',
      ]
    },

    // Женя Морячок
    // {
    //   id: this.getRandomInt(),
    //   category: 'Мини-погрузчик',
    //   teaser: 'assets/img/loader/case/teaser-case-410.jpg',
    //   model: 'CASE 410 3 series',
    //   desc: 'Услуги мини-погрузчика, планировка, уборка снега, вывоз грунта, погрузочно-разгрузочные работы и т.д. На длительный срок скидки. С опытным водителем.',
    //   video: '',
    //   price: '45 - 50',
    //   minTime: '4',
    //   phones: [
    //     {
    //       operator: 'velcom', number: '+375 (29) 640-43-17'
    //     }
    //   ],
    //   gallery: [
    //     'assets/img/loader/case/gallery/1.jpg',
    //     'assets/img/loader/case/gallery/2.jpg',
    //   ]
    // },

    // Женя Холмогор
    {
      id: this.getRandomInt(),
      category: 'Мини-погрузчик',
      teaser: 'assets/img/loader/cat/teaser-caterpillar-216b.jpg',
      model: 'Caterpiller 216B',
      desc: 'Минимальная ширина проезда 160см, высота 225см. Ландшафтные работы, Планировка участка, Уборочные работы, Погрузочно-разгрузочные работы, Подготовка основания под застройку, под укладку тротуарной плитки, камня, брусчатки; отсыпка фундаментов и планировка растительного грунта при устройстве газонов; Работа в стесненных условиях. Погрузка сыпучих материалов в 6-10 кубовые грузовики, Доставка до места работ осуществляется своим транспортом.',
      video: '',
      price: '50',
      minTime: '4',
      phones: [
        {
          operator: 'velcom', number: '+375 (29) 828-09-20'
        }
      ],
      gallery: [
        'assets/img/loader/cat/gallery/1.jpg',
      ]
    },

    // Николай
    {
      id: this.getRandomInt(),
      category: 'Мини-погрузчик',
      teaser: 'assets/img/loader/cat-226/teaser-caterpillar-226.jpg',
      model: 'Caterpiller 226B',
      desc: 'Планировка участка, уборочные работы, погрузочно-разгрузочные работы, подготовка основания под укладку тротуарной плитки, отсыпка и планировка растительного грунта при устройстве газонов, работы по строительству и ремонту дорог, Работа в зданиях, складских помещениях и на строительных площадках, подвоз бетона, тротуарной плитки, борта, кирпича и строительных материалов, Погрузка сыпучих материалов, своя доставка. Наличная и безналичная форма оплаты.',
      video: '',
      price: '50',
      minTime: '4',
      phones: [
        {
          operator: 'velcom', number: '+375 (29) 902-21-92'
        },
        {
          operator: 'mts', number: '+375 (29) 577-27-73'
        }
      ],
      gallery: [
        'assets/img/loader/cat-226/gallery/1.jpg',
      ]
    },

    // Миша
    {
      id: this.getRandomInt(),
      category: 'Мини-погрузчик',
      teaser: 'assets/img/loader/bobcat-753m/teaser-bobcat-753m.jpg',
      model: 'Bobcat 753M',
      desc: 'Планировка участка, погрузочно-разгрузочные работы, Ширина: 175 см, Вес: 2400 кг., Грузоподъемность: 650 кг.',
      video: '',
      price: '50',
      minTime: '4',
      phones: [
        {
          operator: 'velcom', number: '+375 (29) 623-40-34'
        },
      ],
      gallery: [
        'assets/img/loader/bobcat-753m/gallery/1.jpg',
        'assets/img/loader/bobcat-753m/gallery/2.jpg',
      ]
    },

    // Слава MS
    {
      id: this.getRandomInt(),
      category: 'Мини-погрузчик',
      teaser: 'assets/img/loader/case-sr-175/teaser-case-sr-175.jpg',
      model: 'CASE SR 175',
      desc: 'Case SR 175. ширина 160см, ковш.вилы.бур.молот Delta F4',
      video: '',
      price: '50',
      minTime: '4',
      phones: [
        {
          operator: 'velcom', number: '+375 (29) 651-25-01'
        },
      ],
      gallery: [
        'assets/img/loader/case-sr-175/gallery/1.jpg',
        'assets/img/loader/case-sr-175/gallery/2.jpg',
      ]
    },
  ];

  openModal(template: TemplateRef<any>, gallery?) {
    this.modalRef = this.modalService.show(template, this.config);
    this.activeGallery = gallery;
  }

}
