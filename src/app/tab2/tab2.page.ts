import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  searchCandidates: string;
  candidates = [
    {
      "name": "Adrielly",
      "number": "7",
      "image": "https://i.pinimg.com/originals/d8/20/f4/d820f4272d67633dbe8f12e8ed275baf.jpg"
    },
    {
      "name": "Marina",
      "number": "10",
      "image": "https://i.pinimg.com/736x/ff/72/7d/ff727d935a7ef71686751051592b3a1d.jpg"
    },
    {
      "name": "Nahy",
      "number": "25",
      "image": "https://i.pinimg.com/736x/ac/78/93/ac7893283aae4c88f245be0cd92faf80.jpg"
    },
  ];

  nomeVariavel: string;
  count: number = 0;
  candidate1: number = 0;
  candidate2: number = 0;
  candidate3: number = 0;

  constructor() {
  }

  ngOnInit() { }

  clearSearch() {
    this.searchCandidates = '';
  }

  funcao() {

  if(this.searchCandidates == "7"){
    this.candidate1++;
    console.log("candidato 1: ", this.candidate1 )
  }

  if(this.searchCandidates == "10"){
    this.candidate2++;
    console.log("candidato 2: ",this.candidate2)
  }

  if(this.searchCandidates == "25"){
    this.candidate3++;
    console.log("candidato 3: ",this.candidate1)
  }

  this.count =  this.candidate1 + this.candidate2 + this.candidate3 ;

  console.log("Votos apurados: ", this.count)

  this.clearSearch();
  }



}
