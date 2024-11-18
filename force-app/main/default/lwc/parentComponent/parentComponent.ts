import { LightningElement } from "lwc";

export default class ParentComponent extends LightningElement {
  parentValue = "Initial Value";

  handleClick() {
    this.parentValue = "Updated Value";
  }
}
