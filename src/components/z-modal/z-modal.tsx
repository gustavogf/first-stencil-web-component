import { Component, Event, EventEmitter, Prop } from "@stencil/core";

@Component({
  tag: "z-modal",
  styleUrl: "z-modal.css",
  shadow: true
})
export class ZModal {
  @Prop() public title: string;
  @Prop({
    mutable: true,
    reflectToAttr: true,
  })
  public visible: boolean;

  @Event() private ok: EventEmitter;
  @Event() private cancel: EventEmitter;

  public render(): JSX.Element {
    return (
      <div class={this.visible ? "wrapper visible" : "wrapper"}>
        <div class="modal">
          <span class="title">{ this.title }</span>
          <div class="content">
            <slot />
          </div>
          <div class="button-container">
            <button class="cancel" onClick={this.handleCancelClick}>Cancel</button>
            <button class="ok" onClick={this.handleOkClick}>Ok</button>
          </div>
        </div>
      </div>
    );
  }

  private handleCancelClick = () => {
    this.visible = false;
    this.cancel.emit();
  }

  private handleOkClick = () => {
    this.visible = false;
    this.ok.emit();
  }
}
