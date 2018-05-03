import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-loader',
	templateUrl: './loader.component.html',
	styleUrls: ['./loader.component.less']
})
export class LoaderComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	loaderArray = [
		{
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
			gallery: [
				'assets/img/loader/case/gallery/1.jpg',
				'assets/img/loader/case/gallery/2.jpg',
				'assets/img/loader/case/gallery/3.jpg',
				// 'assets/img/loader/case/gallery/4.jpg',
			]

		},
	];

}
