import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-hydraulic-drill-page",
  templateUrl: "./hydraulic-drill-page.component.html",
  styleUrls: ["./hydraulic-drill-page.component.less"],
})
export class HydraulicDrillPageComponent implements OnInit {
  listData = [
    {
      id: this.getRandomInt(),
      category: "Бурение отверстий",
      teaser: "assets/img/drill/volvo-deltaRD3/teaser-delta-rd-3.png",
      model: "Delta RD3",
      desc: "Предлагаем на выгодных условиях в аренду гидравлический бур на базе мини-экскаватора Volvo EB20 XTV, с экипажем.",
      video: "",
      price: "120",
      minTime: "4",
      diameter: [200, 250, 300, 500, 600],
      distance: "2 метра",
      phones: [
        {
          operator: "velcom",
          number: "+375 (29) 601-22-11",
        },
      ],
      gallery: ["assets/img/drill/volvo-deltaRD3/gallery/1.jpg"],
    },
    // Женя Морячок
    {
      id: this.getRandomInt(),
      category: "Бурение отверстий",
      teaser: "assets/img/drill/case-sr-200/teaser-case-sr-200-drill.jpg",
      model: "",
      diameter: [200, 260, 300, 400],
      distance: "2.3 метра",
      desc: "Услуги по бурению отверстий на базе мини-погрузчика CASE, глубиной 2.3 метра. На длительный срок скидки. С опытным водителем.",
      video: "",
      price: "120",
      minTime: "4",
      phones: [
        {
          operator: "velcom",
          number: "+375 (29) 687-32-11",
        },
      ],
      gallery: [
        "assets/img/drill/case-sr-200/gallery/1.jpg",
        "assets/img/drill/case-sr-200/gallery/2.jpg",
      ],
    },
    // Женя Холмогор
    {
      id: this.getRandomInt(),
      category: "Бурение отверстий",
      teaser: "assets/img/drill/wacker-holmogor/wacker-holmogor.jpg",
      model: "Delta RD2",
      diameter: [200, 250, 300],
      distance: "2 метра",
      desc: "Услуги по бурению отверстий на базе мини-экскаватора Wacker Neuson 1503. С опытным оператором.",
      video: "",
      price: "120",
      minTime: "4",
      phones: [
        {
          operator: "velcom",
          number: "+375 (29) 828-09-20",
        },
      ],
      gallery: ["assets/img/drill/wacker-holmogor/wacker-holmogor.jpg"],
    },
    // Миша
    {
      id: this.getRandomInt(),
      category: "Бурение отверстий",
      teaser: "assets/img/drill/kubota-kx41-3v/teaser-kubota-kx41-3v.jpg",
      model: "Auger Torque",
      diameter: [200, 250, 300, 350, 400],
      distance: "2 метра",
      desc: "Услуги по бурению отверстий на базе мини-экскаватора Kubota KX41-3V. С опытным оператором.",
      video: "",
      price: "120",
      minTime: "4",
      phones: [
        {
          operator: "velcom",
          number: "+375 (29) 623-40-34",
        },
      ],
      gallery: ["assets/img/drill/kubota-kx41-3v/teaser-kubota-kx41-3v.jpg"],
    },
    // Слава MS
    {
      id: this.getRandomInt(),
      category: "Бурение отверстий",
      teaser: "assets/img/drill/case-sr-175/teaser-case-sr-175.jpg",
      model: "Delta",
      diameter: [150, 200, 250, 300, 350, 400, 500, 600],
      distance: "2.3 метра",
      desc: "Услуги по бурению отверстий на базе мини-погрузчика CASE SR 175, глубиной 2.3 метра. С опытным водителем.",
      video: "",
      price: "120",
      minTime: "4",
      phones: [
        {
          operator: "velcom",
          number: "+375 (29) 651-25-01",
        },
      ],
      gallery: [
        "assets/img/drill/case-sr-175/gallery/1.jpg",
        // 'assets/img/drill/case-sr-200/gallery/2.jpg',
      ],
    },
    // Леша
    {
      id: this.getRandomInt(),
      category: "Бурение отверстий",
      teaser:
        "assets/img/drill/wacker-neuson-50z3/teaser-wacker-neuson-50z3-drill.jpg",
      model: "Delta",
      diameter: [200, 250, 300, 400],
      distance: "5 метров",
      desc: "Услуги по бурению отверстий на базе мини-погрузчика Wacker Neuson 50Z3, глубиной 4 метра. С опытным водителем.",
      video: "",
      price: "120",
      minTime: "4",
      phones: [
        {
          operator: "velcom",
          number: "+375 (29) 683-25-03",
        },
      ],
      gallery: ["assets/img/drill/wacker-neuson-50z3/gallery/1.jpg"],
    },
  ];

  constructor() {
    this.listData.sort((a, b) => {
      if (a.id < b.id) {
        return -1;
      } else if (a.id > b.id) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  ngOnInit() {}

  getRandomInt() {
    return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  }
}
