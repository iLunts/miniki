import { Component, OnInit } from '@angular/core';
import { GalleryItem, ImageItem } from '@ngx-gallery/core';
import { NgxGalleryOptions, NgxGalleryImage } from 'ngx-gallery';

@Component({
	selector: 'app-bugger',
	templateUrl: './bugger.component.html',
	styleUrls: ['./bugger.component.less']
})

export class BuggerComponent implements OnInit {
	
	galleryOptions: NgxGalleryOptions[];
	galleryImages: NgxGalleryImage[];

	constructor() {}

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
				small: 'assets/img/bugger/caterpillar/work/5.jpg',
				medium: 'assets/img/bugger/caterpillar/work/5.jpg',
				big: 'assets/img/bugger/caterpillar/work/5.jpg'
			},
			{
				small: 'assets/img/bugger/caterpillar/work/6.jpg',
				medium: 'assets/img/bugger/caterpillar/work/6.jpg',
				big: 'assets/img/bugger/caterpillar/work/6.jpg'
			},
		];
	}

	buggerArray = [
		{
			category: 'Мини-экскаватор',
			teaser: 'assets/img/bugger/caterpillar/teaser-caterpillar-301-8C.jpg',
			model: 'Caterpillar 301.8C',
			desc: 'Гидравлический экскаватор Caterpillar 301.8C оснащается двигателем C9 с технологией ACERT, что обеспечивает более высокую топливную экономичность и повышенный ресурс.',
			video: '123123',
			price: '40',
			minTime: '4',
			phones: [
				{
					operator: 'velcom', number: '+375 (29) 601-22-11'
				}
			],
			work: [
				'assets/img/bugger/caterpillar/work/5.jpg',
				'assets/img/bugger/caterpillar/work/6.jpg',
			]
		},
		{
			category: 'Мини-экскаватор',
			teaser: 'assets/img/bugger/volvo/teaser-volvo-ec20.jpg',
			model: 'Volvo EC20B XTV',
			desc: 'Гидравлический экскаватор Caterpillar 301.8C оснащается двигателем C9 с технологией ACERT, что обеспечивает более высокую топливную экономичность и повышенный ресурс.',
			video: '123123',
			price: '40',
			minTime: '4',
			phones: [
				{
					operator: 'velcom', number: '+375 (29) 601-22-11'
				}
			],
			work: [
				'assets/img/bugger/volvo/work/1.jpg',
				'assets/img/bugger/volvo/work/2.jpg',
				'assets/img/bugger/volvo/work/3.jpg',
			]

		},
		{
			category: 'Мини-экскаватор',
			teaser: 'assets/img/bugger/jcb/teaser-jcb-8020.jpg',
			model: 'JCB 8020',
			desc: 'Гидравлический экскаватор Caterpillar 301.8C оснащается двигателем C9 с технологией ACERT, что обеспечивает более высокую топливную экономичность и повышенный ресурс.',
			video: '',
			price: '40',
			minTime: '4',
			phones: [
				{
					operator: 'velcom', number: '+375 (29) 683-25-03'
				}
			],
			work: [
				'assets/img/bugger/jcb/work/1.jpg',
				'assets/img/bugger/jcb/work/2.jpg',
			]

		},
		{
			category: 'Мини-экскаватор',
			teaser: 'assets/img/bugger/kobelco/teaser-kobelco-sk35-sr.jpg',
			model: 'Kobelco SX30SR',
			desc: 'Гидравлический экскаватор Caterpillar 301.8C оснащается двигателем C9 с технологией ACERT, что обеспечивает более высокую топливную экономичность и повышенный ресурс.',
			video: '',
			price: '40',
			minTime: '4',
			phones: [
				{
					operator: 'velcom', number: '+375 (29) 640-43-17'
				}
			],
			work: [
				'assets/img/bugger/kobelco/work/1.jpg',
			]

		},
		{
			category: 'Мини-экскаватор',
			teaser: 'assets/img/bugger/bobcat/teaser-bobcat-e16.jpg',
			model: 'Bobcat e16',
			desc: 'Гидравлический экскаватор Bobcat e16 оснащается двигателем C9 с технологией ACERT, что обеспечивает более высокую топливную экономичность и повышенный ресурс.',
			video: '',
			price: '40',
			minTime: '4',
			phones: [
				{
					operator: 'velcom', number: '+375 (29) 902-21-92'
				},
				{
					operator: 'mts', number: '+375 (29) 577-27-73'
				},
			],
			work: [
				'assets/img/bugger/bobcat/work/1.jpg',
				'assets/img/bugger/bobcat/work/2.jpg',
			]

		},
		{
			category: 'Мини-экскаватор',
			teaser: 'assets/img/bugger/kubota/teaser-kubota-kx36-3.jpg',
			model: 'Kubota KX36-3',
			desc: 'Гидравлический экскаватор Kubota KX36-3 оснащается двигателем C9 с технологией ACERT, что обеспечивает более высокую топливную экономичность и повышенный ресурс.',
			video: '',
			price: '40',
			minTime: '4',
			phones: [
				{
					operator: 'velcom', number: '+375 (29) 902-21-92'
				},
				{
					operator: 'mts', number: '+375 (29) 577-27-73'
				},
			],
			work: [
				'assets/img/bugger/kubota/work/1.jpg',
			]
		},
	];

}
