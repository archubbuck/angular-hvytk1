import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <kendo-chart
      [valueAxis]="{ reverse: true }"
      >
        <kendo-chart-title text="PD History"></kendo-chart-title>
        <kendo-chart-category-axis>
            <kendo-chart-category-axis-item
                [categories]="categories">
                <kendo-chart-category-axis-item-labels position="end">
                </kendo-chart-category-axis-item-labels>
            </kendo-chart-category-axis-item>
        </kendo-chart-category-axis>
        <kendo-chart-series>
          <kendo-chart-series-item type="line" [data]="data">
          </kendo-chart-series-item>
        </kendo-chart-series>
      </kendo-chart>
    `,
})
export class AppComponent {
  private NUM_OF_POINTS = 10;

  data = Array.from({ length: this.NUM_OF_POINTS }).map(
    (_, index) => this.NUM_OF_POINTS - index++
  );
  categories = Array.from({ length: this.NUM_OF_POINTS }).map(
    (_, index) => new Date(2023, 9, index++)
  );
}
