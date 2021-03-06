import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {TopNavComponent,SidebarComponent , NotFoundComponent ,Error500Component} from './'
/**
* Do not specify providers for modules that might be imported by a lazy loaded module.
*/

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [TopNavComponent,SidebarComponent , NotFoundComponent,Error500Component],
    exports: [CommonModule, FormsModule, RouterModule,SidebarComponent,TopNavComponent,
        NotFoundComponent,Error500Component]
})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule
        };
    }
}
