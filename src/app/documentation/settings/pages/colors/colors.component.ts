import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss'],
})
export class ColorsComponent implements OnInit {
  public readonly colors = [
    [
      {
        text: 'primary 100',
        color: '#5b5c66',
        textColor: '#fff',
      },
      {
        text: 'primary 200',
        color: '#494a57',
        textColor: '#fff',
      },
      {
        text: 'primary 300',
        color: '#414250',
        textColor: '#fff',
      },
      {
        text: 'primary 400',
        color: '#323446',
        textColor: '#fff',
      },
      {
        text: 'primary 500',
        color: '#2b2d42',
        textColor: '#fff',
      },
      {
        text: 'primary 600',
        color: '#292a39',
        textColor: '#fff',
      },
      {
        text: 'primary 700',
        color: '#262732',
        textColor: '#fff',
      },
      {
        text: 'primary 800',
        color: '#212127',
        textColor: '#fff',
      },
      {
        text: 'primary 900',
        color: '#1b1c1f',
        textColor: '#fff',
      },
    ],
    [
      {
        text: 'secondary 100',
        color: '#fefefe',
        textColor: '#000',
      },
      {
        text: 'secondary 200',
        color: '#e5e6e8',
        textColor: '#000',
      },
      {
        text: 'secondary 300',
        color: '#ced1d6',
        textColor: '#000',
      },
      {
        text: 'secondary 400',
        color: '#a2aab8',
        textColor: '#000',
      },
      {
        text: 'secondary 500',
        color: '#8d99ae',
        textColor: '#000',
      },
      {
        text: 'secondary 600',
        color: '#7e8a9d',
        textColor: '#fff',
      },
      {
        text: 'secondary 700',
        color: '#727c8d',
        textColor: '#fff',
      },
      {
        text: 'secondary 800',
        color: '#60656e',
        textColor: '#fff',
      },
      {
        text: 'secondary 900',
        color: '#505357',
        textColor: '#fff',
      },
    ],
    [
      {
        text: 'error 100',
        color: '#e6d3d5',
        textColor: '#fff',
      },
      {
        text: 'error 200',
        color: '#dcb5ba',
        textColor: '#fff',
      },
      {
        text: 'error 300',
        color: '#d7969e',
        textColor: '#fff',
      },
      {
        text: 'error 400',
        color: '#df4f60',
        textColor: '#fff',
      },
      {
        text: 'error 500',
        color: '#ef233c',
        textColor: '#fff',
      },
      {
        text: 'error 600',
        color: '#d1263b',
        textColor: '#fff',
      },
      {
        text: 'error 700',
        color: '#ac3241',
        textColor: '#fff',
      },
      {
        text: 'error 800',
        color: '#7a3a42',
        textColor: '#fff',
      },
      {
        text: 'error 900',
        color: '#59383c',
        textColor: '#fff',
      },
    ],
    [
      {
        text: 'success 100',
        color: '#c8e6c9',
        textColor: '#fff',
      },
      {
        text: 'success 200',
        color: '#a5d6a7',
        textColor: '#fff',
      },
      {
        text: 'success 300',
        color: '#81c784',
        textColor: '#fff',
      },
      {
        text: 'success 400',
        color: '#66bb6a',
        textColor: '#fff',
      },
      {
        text: 'success 500',
        color: '#4caf50',
        textColor: '#fff',
      },
      {
        text: 'success 600',
        color: '#43a047',
        textColor: '#fff',
      },
      {
        text: 'success 700',
        color: '#388e3c',
        textColor: '#fff',
      },
      {
        text: 'success 800',
        color: '#2e7d32',
        textColor: '#fff',
      },
      {
        text: 'success 900',
        color: '#1b5e20',
        textColor: '#fff',
      },
    ],
    [
      {
        text: 'warning 100',
        color: '#fff3e0',
        textColor: '#000',
      },
      {
        text: 'warning 200',
        color: '#ffcc80',
        textColor: '#000',
      },
      {
        text: 'warning 300',
        color: '#ffb74d',
        textColor: '#000',
      },
      {
        text: 'warning 400',
        color: '#ffa726',
        textColor: '#fff',
      },
      {
        text: 'warning 500',
        color: '#ff9800',
        textColor: '#fff',
      },
      {
        text: 'warning 600',
        color: '#fb8c00',
        textColor: '#fff',
      },
      {
        text: 'warning 700',
        color: '#f57c00',
        textColor: '#fff',
      },
      {
        text: 'warning 800',
        color: '#ef6c00',
        textColor: '#fff',
      },
      {
        text: 'warning 900',
        color: '#e65100',
        textColor: '#fff',
      },
    ],
    [
      {
        text: 'gray 100',
        color: '#ffffff',
        textColor: '#000',
      },
      {
        text: 'gray 300',
        color: '#e2e2e2',
        textColor: '#000',
      },
      {
        text: 'gray 500',
        color: '#b1b2b2',
        textColor: '#000',
      },
      {
        text: 'gray 600',
        color: '#767676',
        textColor: '#fff',
      },
      {
        text: 'gray 700',
        color: '#4d4d4d',
        textColor: '#fff',
      },
      {
        text: 'gray 800',
        color: '#1c1c1c',
        textColor: '#fff',
      },
      {
        text: 'gray 900',
        color: '#0d0d0d',
        textColor: '#fff',
      },
    ],
  ];

  constructor() {}

  ngOnInit(): void {}
}
