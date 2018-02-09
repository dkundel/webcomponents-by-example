import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'my-progress-bar',
  styleUrl: 'my-progress-bar.scss',
  shadow: true
})
export class MyProgressBar {
  @Prop() value: number;
  @Prop() max: number = 100;
  @Prop() showValue: boolean = false;

  @Element() el: HTMLElement;

  render() {
    this.el.style.setProperty('--current-value', this.value.toString());
    this.el.style.setProperty('--max-value', this.max.toString());

    return (
      <div class="progress-container">
        <div class="progress-bar">{this.showValue ? this.value : ' '}</div>
        <div class="progress-bar-remainder" />
      </div>
    );
  }
}
