import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-wheel',
	templateUrl: './wheel.component.html',
	styleUrls: ['./wheel.component.less']
})
export class WheelComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	wheelArray = [
		{
			category: 'Колёсный экскаватор',
			teaser: 'assets/img/wheel/volvo/teaser-volvo-ew140.jpg',
			model: 'Volvo EW140',
			desc: 'Предлагаем на выгодных условиях в аренду экскаватор колесный Volvo EW 140, 0.8 м3 с экипажем.',
			video: '',
			price: '50',
			minTime: '8',
			phones: [
				{
					operator: 'velcom', number: '+375 (29) 601-22-11'
				}
			],
			gallery: [
				'assets/img/wheel/volvo/gallery/1.jpg',
				'assets/img/wheel/volvo/gallery/2.jpg',
			]
		},
	];

}
