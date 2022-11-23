import { LitElement } from 'lit';
export declare type PluginProps = {
    plugin?: any;
};
export declare class Plugin extends LitElement {
    static get styles(): import("lit").CSSResult;
    static get properties(): {
        metadata: {
            type: ObjectConstructor;
            reflect: boolean;
        };
    };
    module: any;
    metadata: any;
    constructor(props?: {});
    set: (imported: any, metadata: any) => void;
    render(): import("lit-html").TemplateResult<1>;
}
