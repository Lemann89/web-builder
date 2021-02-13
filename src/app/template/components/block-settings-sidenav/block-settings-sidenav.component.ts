import { Component, OnDestroy, OnInit } from '@angular/core';
import { TemplateService } from '../../services/template.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-block-settings-sidenav',
  templateUrl: './block-settings-sidenav.component.html',
  styleUrls: ['./block-settings-sidenav.component.scss']
})
export class BlockSettingsSidenavComponent implements OnInit, OnDestroy {

  settingsSub: Subscription;

  constructor(private templateService: TemplateService) {
  }

  ngOnInit(): void {
    this.settingsSub = this.templateService.blockSettingsSubject.subscribe(structure => {
      console.log(structure.id);
    });
  }

  ngOnDestroy(): void {
    if (this.settingsSub) {
      this.settingsSub.unsubscribe();
    }
  }
}
