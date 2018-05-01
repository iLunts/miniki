import { Component, OnInit } from '@angular/core';
// import { GalleryItem, ImageItem } from '@ngx-gallery/core';
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
				width: '600px',
				height: '400px',
				thumbnailsColumns: 4
			}
		];

		this.galleryImages = [
			{
				small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-small.jpeg',
				medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-medium.jpeg',
				big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-big.jpeg'
			},
			{
				small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-small.jpeg',
				medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-medium.jpeg',
				big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-big.jpeg'
			},
			{
				small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-small.jpeg',
				medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-medium.jpeg',
				big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-big.jpeg'
			},
			{
				small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-small.jpeg',
				medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-medium.jpeg',
				big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-big.jpeg'
			},
			{
				small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-small.jpeg',
				medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-medium.jpeg',
				big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-big.jpeg'
			}
		];
	}

	buggerArray = [
		{
			model: 'Caterpillar 301.8C',
			desc: '',
		}
	];

}