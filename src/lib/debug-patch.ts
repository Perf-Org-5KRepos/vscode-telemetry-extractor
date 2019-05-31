import { Events, Event } from "./events";
import { Property } from "./common-properties";

export function patchDebugEvents(currentEvents: Events, eventPrefix: string) {
    const debugProtocolErrorResponse = new Event(eventPrefix + 'debugProtocolErrorResponse');
    debugProtocolErrorResponse.properties.push(new Property('error', 'CallStackOrException', 'PerformanceAndHealth'));
    const optin = new Event(eventPrefix + 'optinstatus');
    optin.properties.push(new Property('optin', 'SystemMetaData', 'BusinessInsight', undefined, true));
    currentEvents.dataPoints.push(debugProtocolErrorResponse);
    currentEvents.dataPoints.push(optin);
}