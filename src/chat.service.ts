import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor() {}

  public connect(): void {}

  public disconnect(): void {}

  public sendMessage(message: string): void {
    console.log(message);
  }

  // public receiveMessages(): Observable<string> {
  //   return new Observable<string>((observer) => {
  //     this.socket.('message', (message: string) => {
  //       observer.next(message);
  //     });
  //   });
  // }
}
