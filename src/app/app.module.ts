import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { HighlightVoteDirective } from './highlight-vote.directive';
import { DayCountPipe } from './day-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    HighlightVoteDirective,
    DayCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
