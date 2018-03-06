import { Component, OnInit } from '@angular/core';
import { weatherData, UpdatableTable } from '../shared/data';
import { WeatherService } from '../shared/remote/weather.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit, UpdatableTable {

  constructor(private weatherService: WeatherService) { }

  weatherData: Array<weatherData>;

  ngOnInit() {
    this.weatherService.refresh(this);
  }

  updateWeather(data: Array<weatherData>) {
    this.weatherData = data;
  }

}
