import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { FontSize } from 'src/app/constants/font-size.constants';
import { IconSize } from 'src/app/constants/icon-size.constants';
import { ChipsColors } from 'src/app/shared/chips/chips-colors.model';
import { CustomButtonColors } from 'src/app/shared/custom-button/custom-button-color.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements AfterContentInit{

  @Input() project: any;

  colorPink = ChipsColors.PINK300;
  colorGreen = ChipsColors.GREEN300;
  colorBlue = ChipsColors.midnightBlue;
  iconSize = IconSize.LG;
  fontSize = FontSize.BASE;
  colorINDIGO600 = CustomButtonColors.INDIGO600;
  colorGRAY900 = CustomButtonColors.GRAY900;

  constructor() { }


  ngAfterContentInit(): void {
    this.colorChipsProjects();
  }

  colorChipsProjects(){
    console.log('ENtre');
    console.log(this.project);
    
    // this.project.map((resp: any) => {
    //   console.log(resp);
    // });

  }


  getRandomColor(): ChipsColors {
    const colors = [ 
      ChipsColors.midnightBlue, 
      ChipsColors.royalPurple, 
      ChipsColors.wineRed, 
      ChipsColors.darkChocolate, 
      ChipsColors.mossGreen, 
      ChipsColors.seaGreen
    ];
    const color: ChipsColors = colors[Math.floor(Math.random() * colors.length)];
    return color;
  }

  viewProject(event: any) {
    window.open(this.project.projectLiveLink, "_blank");
  }


  viewGithubProject(event: any) {
    window.open(this.project.projectGithubLink, "_blank");

  }

}
