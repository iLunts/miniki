import { Component, OnInit, TemplateRef } from "@angular/core";
import { BsModalRef, BsModalService } from "ngx-bootstrap";

@Component({
  selector: "app-bugger-page",
  templateUrl: "./bugger-page.component.html",
  styleUrls: ["./bugger-page.component.less"],
})
export class BuggerPageComponent implements OnInit {
  buggerArray = [
    {
      id: this.getRandomInt(),
      category: "Малый мини-экскаватор",
      teaser: "assets/img/bugger/caterpillar/teaser-caterpillar-301-8C.jpg",
      model: "Caterpillar 301.8C",
      desc: "Аренда мини-экскаватора CAT 301.8C на резиновом гус. ходу. Рытьё траншей (под ленточные фундаменты, бассейны,газ, воду, канализацию и т.п). Планировка и расчистка территории. Бур (200, 300, 500, 600). Гидромолот. Форма оплаты любая!",
      video: "123123",
      price: "65-70",
      weight: "1.8",
      diameter: [200, 300, 500, 600],
      buckets: [20, 25, 30, 40, 60, "100(планировочный) "],
      isHammer: true,
      minTime: "4",
      phones: [
        {
          operator: "velcom",
          number: "+375 (29) 601-22-11",
        },
      ],
      gallery: [
        "assets/img/bugger/caterpillar/gallery/5.jpg",
        "assets/img/bugger/caterpillar/gallery/6.jpg",
      ],
    },
    {
      id: this.getRandomInt(),
      category: "Малый мини-экскаватор",
      teaser: "assets/img/bugger/volvo/teaser-volvo-ec20.jpg",
      model: "Volvo EC20B XTV",
      desc: "Аренда мини-экскаватора Volvo EC20B XTV на резиновом гус. ходу. Рытьё траншей (под ленточные фундаменты, бассейны,газ, воду, канализацию и т.п) Планировка и расчистка территории. Бур (200, 300, 500, 600). Гидромолот. Форма оплаты любая!",
      video: "123123",
      price: "65-70",
      minTime: "4",
      weight: "2.2",
      buckets: [20, 25, 30, 40, 60, "100(планировочный) "],
      isHammer: true,
      phones: [
        {
          operator: "velcom",
          number: "+375 (29) 601-22-11",
        },
      ],
      gallery: [
        "assets/img/bugger/volvo/gallery/1.jpg",
        // 'assets/img/bugger/volvo/gallery/2.jpg',
        "assets/img/bugger/volvo/gallery/3.jpg",
      ],
    },
    {
      id: this.getRandomInt(),
      category: "Большой мини-экскаватор",
      teaser:
        "assets/img/bugger/wacker-neuson-50z3/teaser-wacker-neuson-50z3.jpg",
      model: "Wacker Neuson 50Z3",
      desc: "Миниэкскаватор Wacker Neuson 50Z3 с квалифицированным оператором окажет весь спектр земляных работ: Гидромолот.",
      video: "",
      price: "75-80",
      minTime: "4",
      weight: "6",
      buckets: [20, 30, 40, 60, "100(планировочный) "],
      isHammer: true,
      phones: [
        {
          operator: "velcom",
          number: "+375 (29) 683-25-03",
        },
      ],
      gallery: [
        "assets/img/bugger/wacker-neuson-50z3/gallery/1.jpg",
        "assets/img/bugger/wacker-neuson-50z3/gallery/2.jpg",
        // 'assets/img/bugger/wacker-neuson-50z3/gallery/2.jpg',
      ],
    },
    {
      id: this.getRandomInt(),
      category: "Средний мини-экскаватор",
      teaser: "assets/img/bugger/kobelco/teaser-kobelco-sk35-sr.jpg",
      model: "Kobelco SK30SR",
      desc: "Осуществляем все виды работ мини-экскаватором KOBELCO SK30SR. Выравнивание и выемка грунта, планирование, корчевание, рытьё котлованов и траншей, установка колодезных колец. Ответственно подходим к каждому объекту. Работаем без выходных. Индивидуальный подход к каждому клиенту.",
      video: "",
      price: "70-75",
      minTime: "4",
      weight: "3",
      buckets: [30, 40, 50, 60, "120(планировочный) "],
      isHammer: true,
      phones: [
        {
          operator: "velcom",
          number: "+375 (29) 640-43-17",
        },
      ],
      gallery: [
        "assets/img/bugger/kobelco/gallery/1.jpg",
        "assets/img/bugger/kobelco/gallery/2.jpg",
      ],
    },
    {
      id: this.getRandomInt(),
      category: "Малый мини-экскаватор",
      teaser: "assets/img/bugger/bobcat/teaser-bobcat-e16.jpg",
      model: "Bobcat e16",
      desc: "Аренда Мини-экскаватора. Все виды земляных работ. Копка траншей под фундаменты, воду и канализацию, электричество, газ, для установки забора, планировочные работы. Монтаж канализации. Своя доставка.",
      video: "",
      price: "65-70",
      minTime: "4",
      weight: "1.6",
      buckets: [20, 30, 45, 60, "100(планировочный) "],
      isHammer: true,
      phones: [
        {
          operator: "velcom",
          number: "+375 (29) 902-21-92",
        },
        {
          operator: "mts",
          number: "+375 (29) 577-27-73",
        },
      ],
      gallery: [
        "assets/img/bugger/bobcat/gallery/1.jpg",
        "assets/img/bugger/bobcat/gallery/2.jpg",
      ],
    },
    // {
    //   id: this.getRandomInt(),
    //   category: 'Мини-экскаватор',
    //   teaser: 'assets/img/bugger/kubota/teaser-kubota-kx36-3.jpg',
    //   model: 'Kubota KX36-3',
    //   desc: 'Аренда Мини-экскаватора. Все виды земляных работ. Копка траншей под фундаменты, воду и канализацию, электричество, газ, для установки забора, планировочные работы. Своя доставка.',
    //   video: '',
    //   price: '50-45',
    //   minTime: '4',
    //   phones: [
    //     {
    //       operator: 'velcom', number: '+375 (29) 902-21-92'
    //     },
    //     {
    //       operator: 'mts', number: '+375 (29) 577-27-73'
    //     },
    //   ],
    //   gallery: [
    //     'assets/img/bugger/kubota/gallery/1.jpg',
    //   ]
    // },
    //
    // {
    //   id: this.getRandomInt(),
    //   category: 'Средний мини-экскаватор',
    //   teaser: 'assets/img/bugger/komatsu/teaser-komatsu.jpg',
    //   model: 'Komatsu PC14R-2',
    //   desc: 'Аренда Мини-экскаватора. Бур от 20 - до 60..',
    //   video: '',
    //   price: '45-50',
    //   minTime: '4',
    //   weight: '1.6',
    //   buckets: [20, 30, 40, 50, 60, 70],
    //   isHammer: true,
    //   phones: [
    //     {
    //       operator: 'velcom', number: '+375 (29) 651-25-01'
    //     }
    //   ],
    //   gallery: [
    //     'assets/img/bugger/komatsu/gallery/1.jpg',
    //     'assets/img/bugger/komatsu/gallery/2.jpg',
    //   ]
    // },
    {
      id: this.getRandomInt(),
      category: "Средний мини-экскаватор",
      teaser: "assets/img/bugger/new-holland/teaser-new-holland.jpg",
      model: "NEW HOLLAND E27.2SR",
      desc: "Аренда Мини-экскаватора. Бур от 20 - до 60..",
      video: "",
      price: "70-75",
      minTime: "4",
      weight: "2.8",
      buckets: [20, 30, 40, 50, 60, 70],
      isHammer: true,
      phones: [
        {
          operator: "velcom",
          number: "+375 (29) 651-25-01",
        },
      ],
      gallery: [
        "assets/img/bugger/new-holland/gallery/1.jpg",
        "assets/img/bugger/new-holland/gallery/2.jpg",
      ],
    },
    {
      id: this.getRandomInt(),
      category: "Малый мини-экскаватор",
      // teaser: 'assets/img/bugger/wacker-holmogor/teaser-wacker.png',
      model: "Wacker Neuson 1503",
      desc: "Полный спектр земляных работ: рытье траншей под коммуникации, котлованы (ленточные фундаменты, газ, воду, канализацию, бассейны , и т.п). Глубина копания до 2,5 метров. Бур со шнеками 200, 250, 300 мм. До 2м глубина. С опытным экипажем. Доставка до места работ осуществляется своим транспортом.",
      video: "",
      price: "65-70",
      minTime: "4",
      weight: "1.8",
      buckets: [20, 30, 40, 50, "100(планировочный) "],
      isHammer: true,
      phones: [
        {
          operator: "velcom",
          number: "+375 (29) 828-09-20",
        },
      ],
      gallery: ["assets/img/bugger/wacker-holmogor/gallery/1.jpg"],
    },

    // Миша
    {
      id: this.getRandomInt(),
      category: "Малый мини-экскаватор",
      teaser: "assets/img/bugger/kubota-kx41-3v/teaser-kubota-kx41-3v.jpg",
      model: "Kubota KX41-3V",
      desc: "Полный спектр земляных работ. Бур со шнеками 200, 250, 300, 350, 400 мм.",
      video: "",
      price: "65-70",
      minTime: "4",
      weight: "1.8",
      buckets: [20, 30, 40, "100(планировочный) "],
      isHammer: true,
      phones: [
        {
          operator: "velcom",
          number: "+375 (29) 623-40-34",
        },
      ],
      gallery: [
        "assets/img/bugger/kubota-kx41-3v/gallery/1.jpg",
        "assets/img/bugger/kubota-kx41-3v/gallery/2.jpg",
      ],
    },
  ];
  modalRef: BsModalRef;
  config = {
    backdrop: true,
    ignoreBackdropClick: false,
  };
  activeGallery: any;

  constructor(private modalService: BsModalService) {
    this.buggerArray.sort((a, b) => {
      if (a.id < b.id) return -1;
      else if (a.id > b.id) return 1;
      else return 0;
    });
  }

  ngOnInit(): void {}

  getRandomInt() {
    return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  }

  openModal(template: TemplateRef<any>, gallery?) {
    this.modalRef = this.modalService.show(template, this.config);
    this.activeGallery = gallery;
  }
}
