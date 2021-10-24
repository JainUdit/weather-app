import { Action } from "redux";
/**
 * This interface is generic action type to be used for each interface for action.
 */
export interface BaseAction<T> extends Action<string> {
    type: string;
    payload: T;
}