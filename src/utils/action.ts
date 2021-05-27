import { Action } from 'redux'

export interface ActionType<T extends string, P extends unknown> extends Action<T> {
  type: T
  payload: P
}

export function typedAction<T extends string>(type: T): Action<T>
export function typedAction<T extends string, P extends unknown>(type: T, payload: P): ActionType<T, P>
export function typedAction(type: string, payload?: unknown): ActionType<string, unknown> {
  return { type, payload }
}
