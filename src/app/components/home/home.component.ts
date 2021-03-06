import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public city: string = '';
  public weather = {
  };
  public weatherDesc: string = '';
  public mycity: string = '';
  public temperature: number = 0;
  public maxTemperature: number = 0;
  public minTemperature: number = 0;
  public hideTable = true;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  public getWeather(city){

      this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=API_KEY')
      .subscribe((res: any) => {
        if (!res.error) {
          this.weather = res;
          this.weatherDesc = res.weather[0].description;
          this.temperature = Math.trunc(res.main.temp - 273.15);
          this.maxTemperature = Math.trunc(res.main.temp_max - 273.15);
          this.minTemperature = Math.trunc(res.main.temp_min - 273.15);
          this.hideTable = false;
          this.mycity = city[0].toUpperCase() + city.slice(1);
          console.log(res);
        }
      });
  }

  // sthn html mporoume na typwsoume tis metavlhtes ws ekshs: res?.main?.temp gia na apofugoume to provlhma

}
