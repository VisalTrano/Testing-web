import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatBadgeModule,
    MatButtonModule, MatCardModule, MatCheckboxModule,
    MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule, MatMenuModule,
    MatNativeDateModule, MatSelectModule, MatSidenavModule, MatSnackBarModule, MatTableModule, MatTabsModule, MatToolbar, MatToolbarModule,
    MatTreeModule
} from '@angular/material';
import {EditorModule} from 'primeng/editor';
import {FileUploadModule} from 'primeng/primeng';

@NgModule({
    declarations: [],
    imports: [
        BrowserAnimationsModule,
        MatMenuModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatSelectModule,
        MatCardModule,
        EditorModule,
        MatExpansionModule,
        MatTreeModule,
        FileUploadModule,
        MatSnackBarModule,
        MatDialogModule,
        MatTabsModule,
        MatTableModule,
        MatBadgeModule,
        MatDividerModule

    ],
    exports: [
        BrowserAnimationsModule,
        MatMenuModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatSelectModule,
        MatCardModule,
        EditorModule,
        MatExpansionModule,
        MatTreeModule,
        FileUploadModule,
        MatSnackBarModule,
        MatDialogModule,
        MatTabsModule,
        MatTableModule,
        MatBadgeModule,
        MatDividerModule
    ]
})
export class MaterailModule {
}
