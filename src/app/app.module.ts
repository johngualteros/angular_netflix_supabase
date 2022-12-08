import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MoviesComponent } from './pages/movies/movies.component';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { TargetComponent } from './components/utils/target/target.component';
import { ContentPageComponent } from './components/content-page/content-page.component';
import {HttpClientModule} from '@angular/common/http';
import { CardMovieComponent } from './components/card-movie/card-movie.component';
import { SeriesComponent } from './pages/series/series.component';
import { CookieService } from 'ngx-cookie-service';
import { CardSerieComponent } from './components/card-serie/card-serie.component';
import { TrendsComponent } from './pages/trends/trends.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { SerieDetailsComponent } from './pages/serie-details/serie-details.component';
import { CardMovieSmallComponent } from './components/card-movie-small/card-movie-small.component';
const customNotifierOptions: NotifierOptions = {
  position: {
		horizontal: {
			position: 'right',
			distance: 12
		},
		vertical: {
			position: 'top',
			distance: 12,
			gap: 10
		}
	},
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MoviesComponent,
    SidebarComponent,
    HeaderComponent,
    SearchComponent,
    TargetComponent,
    ContentPageComponent,
    CardMovieComponent,
    SeriesComponent,
    CardSerieComponent,
    TrendsComponent,
    HomeComponent,
    MovieDetailsComponent,
    SerieDetailsComponent,
    CardMovieSmallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NotifierModule.withConfig(customNotifierOptions),
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
