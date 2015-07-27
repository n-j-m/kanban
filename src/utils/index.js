
import { fromJS, Iterable } from "immutable";

function createResizer(fn, timeoutId){
  window.onresize = function(){
    clearTimeout(timeoutId);
    timeoutId = setTimeout(fn, 100);
  };
  return fn;
}

function isImmutable(obj) {
  return Iterable.isIterable(obj);
}

const NAVBAR_HEIGHT = 80;

export function startResizer(element) {
  createResizer(() => {
    let newHeight = window.innerHeight - NAVBAR_HEIGHT;
    element.style.height = `${newHeight}px`;
  })();
}

export function toImmutable(arg) {
  return (isImmutable(arg)) ?
    arg :
    fromJS(arg);
}
