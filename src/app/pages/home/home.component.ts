import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    CdkDropList,
    CdkDrag
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  items = [
    { name: 'one', logo: '' },
    { name: 'two', logo: '' },
    { name: 'three', logo: '' },
    { name: 'four', logo: '' },
    { name: 'five', logo: '' },
    { name: 'six', logo: '' },
  ]

  templates = [
    'Subjective', 'Objective', 'Assessment & Plan', 'Findings',
    'Diagnoses', 'Treatment', 'Recovery',
  ];

  noteSections = [
    { title: 'Subjective', points: ['Toothache for few days'] },
    { title: 'History of Presenting Complaints', points: ['Toothache: present for few days'] },
    { title: 'Extra Oral Examination', points: ['Not performed'] },
    { title: 'Intra Oral Examination', points: ['Tenderness around molar', 'Swollen gum'] },
    { title: 'Radiographic Findings', points: ['X-ray planned to confirm extent of infection'] },
    { title: 'Diagnoses', points: ['Suspected tooth abscess'] },
    { title: 'Intra Oral Examination', points: ['Tenderness around molar', 'Swollen gum'] },
    { title: 'Radiographic Findings', points: ['X-ray planned to confirm extent of infection'] },
    { title: 'Diagnoses', points: ['Suspected tooth abscess'] },
    { title: 'Intra Oral Examination', points: ['Tenderness around molar', 'Swollen gum'] },
    { title: 'Radiographic Findings', points: ['X-ray planned to confirm extent of infection'] },
    { title: 'Diagnoses', points: ['Suspected tooth abscess'] },
    { title: 'Intra Oral Examination', points: ['Tenderness around molar', 'Swollen gum'] },
    { title: 'Radiographic Findings', points: ['X-ray planned to confirm extent of infection'] },
    { title: 'Diagnoses', points: ['Suspected tooth abscess'] },
  ];

  dockIcons = [
    { path: 'assets/icon-1.svg' },
    { path: 'assets/icon-2.svg' },
    { path: 'assets/icon-3.svg' },
    { path: 'assets/icon-4.svg' },
    { path: 'assets/icon-5.svg' },
    { path: 'assets/icon-6.svg' },
  ]


  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.noteSections, event.previousIndex, event.currentIndex);
  }
}
