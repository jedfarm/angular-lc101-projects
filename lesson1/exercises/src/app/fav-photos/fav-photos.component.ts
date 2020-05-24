import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Some Cute Images';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://cdn.pixabay.com/photo/2020/05/20/11/49/coffee-cup-5196072_960_720.jpg';
  image3 = 'https://cdn.pixabay.com/photo/2020/05/22/13/31/stay-home-5205390_960_720.png';

  constructor() { }

  ngOnInit() {
  }

}