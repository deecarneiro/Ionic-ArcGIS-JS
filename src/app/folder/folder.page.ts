import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { appPages } from 'src/assets/content';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public content: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.folder = this.activatedRoute.snapshot.paramMap.get('id');

    appPages.forEach((page) => {
      if (page.title == this.folder) {
        this.content = page.content;
      }
    });

    const map = new Map({
      basemap: "topo-vector" //Reference to the base of the map
    });

    const view = new MapView({
      container: "mapContainer", // Reference to the view div created 
      map: map, // Reference to the map object created before the view
      zoom: 4, // Sets zoom level based on level of detail (LOD)
      center: [15, 65] // Sets center point of view using longitude,latitude
    });

  }

}
