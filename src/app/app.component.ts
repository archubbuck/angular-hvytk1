import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <kendo-chart
      [valueAxis]="{ reverse: true }"
      >
        <kendo-chart-title text="Units sold"></kendo-chart-title>
        <kendo-chart-category-axis>
            <kendo-chart-category-axis-item
                [categories]="['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']"
                [title]="{ text: 'Months' }">
                <kendo-chart-category-axis-item-labels position="end">
                </kendo-chart-category-axis-item-labels>
            </kendo-chart-category-axis-item>
        </kendo-chart-category-axis>
        <kendo-chart-series>
          <kendo-chart-series-item type="line" [data]="[123, 276, 310, 212, 240, 156, 98]">
          </kendo-chart-series-item>
          <kendo-chart-series-item type="line" [data]="[165, 210, 287, 144, 190, 167, 212]">
          </kendo-chart-series-item>
          <kendo-chart-series-item type="line" [data]="[56, 140, 195, 46, 123, 78, 95]">
          </kendo-chart-series-item>
        </kendo-chart-series>
      </kendo-chart>
    `,
})
export class AppComponent {}
