import { Photo } from './../photo/photo';
import { Component, OnInit } from '@angular/core';

import { PhotosService } from './../photos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = []

  constructor(
    private photosService: PhotosService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {

    const userName = this.activatedRoute.snapshot.params.userName

    this.photosService.listPhotosFromUser(userName)
      .subscribe(photos => this.photos = photos)
  }

}
