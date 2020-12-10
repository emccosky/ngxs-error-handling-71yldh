import { State, Action } from '@ngxs/store';

export class HandledError {
  static readonly type = 'HandledError';
}

export class UnhandledError {
  static readonly type = 'UnhandledError';
}

@State<number>({
  name: 'count',
  defaults: 0
})
export class CountState {

  @Action(HandledError)
  handledError({ getState, setState }) {
    try {
      const state = getState();
      setState(state + 1);
      throw 'err'
    } catch (err) {
      console.log("error catched inside @Action")
    }
  }

  @Action(UnhandledError)
  unhandledError({ getState, setState }) {
    const state = getState();
    setState(state + 1);
    throw 'err'
  }
}
