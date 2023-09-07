import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input()
  photoCover:string = "https://legadodamarvel.com.br/wp-content/uploads/2023/09/As-Marvels-Marvel-Brasil-libera-conteudo-inedito-dublado-do-filme-legadodamarvel.webp"
  @Input()
  contentTitle:string = "As Marvels: Marvel Brasil libera conteúdo inédito dublado do filme"
  @Input()
  contentDescription:string = "Apesar da greve de atores e roteiristas rolando atualmente em Hollywood, a Disney e Marvel Studios estão tomando a decisão de lançar As Marvels nos cinemas mesmo assim. O que será bem triste, já que não teremos as atrizes juntas para promover o filme. Com o lançamento cada vez mais perto, o canal do YouTube da Marvel Brasil publicou hoje (04) dois novos vídeos promocionais do filme, em sua versão dublada. Onde podemos ouvir as vozes de Fernanda Bullara como Capitã Marvel/Carol Danvers, Veridiana Benassi como Monica Rambeau, e Duda Chantre como Ms. Marvel/Kamala Khan."
  private id:string | null = ""

  constructor(
    private route:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover
  }
}
