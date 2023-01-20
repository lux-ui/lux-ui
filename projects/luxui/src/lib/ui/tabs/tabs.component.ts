import { TabComponent } from './tab/tab.component';
import {
  AfterContentInit,
  Component,
  ContentChildren,
  QueryList,
  ViewChild,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'lx-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements AfterContentInit {
  @ViewChild('viewport') viewport!: ElementRef;
  @ContentChildren(TabComponent) tabsRef!: QueryList<TabComponent>;

  public tabs: any[] = [];
  public activeTabId: number = 0;

  constructor() {}

  ngAfterContentInit(): void {
    for (const tab of this.tabsRef) {
      this.tabs.push({
        title: tab.title,
        content: tab.tabContent.el.nativeElement.innerHTML,
      });
    }
  }

  public changeTab(index: number) {
    this.activeTabId = index;
    this.viewport.nativeElement.style.setProperty(
      'transform',
      `translateX(-${this.activeTabId}00%)`
    );
  }
}
