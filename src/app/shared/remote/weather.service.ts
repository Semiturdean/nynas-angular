import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UpdatableTable, weatherData } from '../data';

const KEY = '9795e1602a571852a281a4c93db2aeeb';
const API_URL = 'https://api.openweathermap.org'
+ '/data/2.5/forecast?q=nynashamn&appid=' + KEY;

@Injectable()
export class WeatherService {

  
  constructor(private http: HttpClient) { }


  refresh(table: UpdatableTable)  {
    this.http.get(API_URL).subscribe( data=> {
      var weatherResponse = this.parseWeather(data);
      table.updateWeather(weatherResponse);
    });
  }

  parseWeather(data: any): Array<weatherData> {
    var weatherData = new Array<weatherData>();
    var weatherList = data.list;

    for(let index =0; index <7; index++){
      var time = weatherList[index].dt_txt;
      time = new Date(time).getHours() + ":00";
      if(time.length < 5){
        time = 0 + time;
      }
      var wind = weatherList[index].wind.speed.toFixed(1);
      var temp = weatherList[index].main.temp;
      temp = Number(temp - 273.15).toFixed(1);

      var desc = weatherList[index].weather[0];
      desc = desc[0].toUpperCase() + desc.substr(1);

      weatherData.push({
        clock: time,
        wind: wind,
        temperature: temp,
        description: desc
      });
    }
    return weatherData;
  }
}
