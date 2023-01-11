import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemoryGameComponent } from './projects/memory-game/memory-game.component';
import { ToDoListComponent } from './projects/to-do-list/to-do-list.component';
import { WeatherForecastComponent } from './projects/weather-forecast/weather-forecast.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'memory-game', component: MemoryGameComponent },
  { path: 'to-do-list', component: ToDoListComponent },
  { path: 'weather-forecast', component: WeatherForecastComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
