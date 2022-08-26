import { Component, OnInit } from '@angular/core';
import { HttprequestService } from '../commonservices/httprequest.service';
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css'],
})
export class MapsComponent implements OnInit {


  data: any; imageSource: any = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15085.54437018795!2d72.8486317777998!3d19.046754993673634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8d72abf2d35%3A0x5ba0b162df2aa82e!2sDharavi%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1661184133102!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';
  i: any = 0; population: any = '1,000,000'
  occupiedarea: any = '2.1 square kilometers'; located: any = 'Mumbai'
  constructor(private httprequest: HttprequestService) {

    this.httprequest.postrequest('/getMaps', {}).subscribe(
      (res: any) => {
        this.data = res.data.reverse()
        console.log(this.data, "hleooojhvdvu hvadvchoooooooooooooooo")
        setInterval(() => {
          this.population = this.data[this.i].population
          this.located = this.data[this.i].located
          this.occupiedarea = this.data[this.i].occupiedarea
          this.imageSource = this.data[this.i]['iframe'];

          if (this.i == this.data.length - 1) {
            this.i = 0;
          } else {
            this.i++;
          }
        }, 8000);
      }
    )

  }

  ngOnInit(): void {
    document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' });
  }

  searchtext: any = ''

  search() {
    if (this.searchtext == '') {
      return this.data;
    } else {
      let temp = this.data.filter((j: any) => {
        return (j.located.includes(this.searchtext))

      });
      // let x=temp
      // temp = temp.push(...x)
      // console.log(temp,"temp")
      return temp;
    }
  }





}
