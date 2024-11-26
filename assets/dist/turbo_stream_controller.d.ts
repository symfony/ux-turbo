import { Controller } from '@hotwired/stimulus';
export default class extends Controller {
    static values: {
        topic: StringConstructor;
        topics: ArrayConstructor;
        hub: StringConstructor;
    };
    es: EventSource | undefined;
    url: string | undefined;
    readonly topicValue: string;
    readonly topicsValue: string[];
    readonly hubValue: string;
    readonly hasHubValue: boolean;
    readonly hasTopicValue: boolean;
    readonly hasTopicsValue: boolean;
    initialize(): void;
    connect(): void;
    disconnect(): void;
}
