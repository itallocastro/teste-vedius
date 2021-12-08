import { Injectable } from '@angular/core';
import {ItemModel} from '../models/Item.model';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ItemService {

  private items: ItemModel[] = [
    {
      id: 1,
      title: 'Shiba Inu',
      subtitle: 'Japão',
      urlImage: '../../assets/shiba2.jpg',
      text: 'Shiba inu é uma raça de cães oriunda do Japão. Apesar da raça ser rara ela é muito popular em seu país de origem. Além de bastante semelhante ao Akita inu, hoje sabe-se que o Shiba Inu é um dos ancestrais do Akita.'
    },
    {
      id: 2,
      title: 'Labrador',
      subtitle: 'Canadá',
      urlImage: '../../assets/labrador.jpg',
      text: 'Labrador retriever é uma raça de cães do tipo retriever originária da província de Terra Nova e Labrador no Canadá, mas desenvolvida na Inglaterra.'
    },
    {
      id: 3,
      title: 'Buldogue',
      subtitle: 'Inglaterra',
      urlImage: '../../assets/buldogue.jpg',
      text: 'O buldogue-inglês é uma raça de cães do tipo buldogue oriunda da Inglaterra. Descende de cães utilizados para combater touros em um desporto sangrento chamado bull-baiting.'
    },
    {
      id: 4,
      title: 'Golden Retriever',
      subtitle: 'Grã-bretanha',
      urlImage: '../../assets/golden.jpg',
      text: 'O golden retriever é uma raça canina do tipo retriever originária da Grã-bretanha, e foi desenvolvida para a caça de aves aquáticas.'
    },
    {
      id: 5,
      title: 'Pastor Alemão',
      subtitle: 'Alemanha',
      urlImage: '../../assets/pastor.jpg',
      text: 'Pastor-alemão ou lobo-da-alsácia é uma raça canina proveniente da Alemanha. Em sua origem era utilizado como cão de pastoreio de rebanhos. Atualmente é mais utilizado como cão de guarda e cão policial.'
    },
    {
      id: 6,
      title: 'Husky Siberiano',
      subtitle: 'Rússia',
      urlImage: '../../assets/husky.jpg',
      text: 'O husky siberiano é uma raça de cães de trabalho e companhia, do tipo Spitz, oriunda da Sibéria na Rússia. Sua função específica é tracionar trenós.'
    }
  ];

  constructor() { }

  getItems(): Observable<ItemModel[]> {
    return of(this.items).pipe(delay(2000));
  }
}
