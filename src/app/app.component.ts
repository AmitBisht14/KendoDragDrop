import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'app';
  public onTabSelect(e) {
    console.log(e);
  }

  ngAfterViewInit(): void {
    const x: NodeList = document.querySelectorAll('[id^=k-tabstrip-tab-]');
    Array.from(x).forEach(p => p.draggable = true);
    Array.from(x).forEach(col => col.addEventListener('dragstart', (e) => {
      console.log(e.srcElement.id);
    }, false));
    Array.from(x).forEach(col => col.addEventListener('dragenter', (e) => {
      console.log(e.srcElement.id + ' enter');
    }, false));
    Array.from(x).forEach(col => col.addEventListener('dragover', (e) => {
      // console.log(e.srcElement.id + ' leave');
    }, false));
    Array.from(x).forEach(col => col.addEventListener('dragleave', (e) => {
    }, false));
    Array.from(x).forEach(col => col.addEventListener('ondrop', (e) => {
      console.log(e.srcElement.id + ' drop');
    }, false));
    Array.from(x).forEach(col => col.addEventListener('dragend', (e) => {
      console.log(e.srcElement.id + '   end');
    }, false));
  }

  handleDragStart(e) {
    console.log('handleDragStart');
  }
  handleDragOver(e) {
    console.log('handleDragOver');
  }
  handleDragEnter(e) {
    console.log('handleDragEnter');
  }
  handleDragLeave(e) {
    console.log('handleDragLeave');
  }
  handleDrop(e) {
    console.log('handleDrop');
  }
  handleDragEnd(e) {
    console.log('handleDragEnd');
  }
}
