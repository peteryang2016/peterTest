export let ADD_TODO = 'ADD_TODO';
export let TOGGLE_TODO = 'TOGGLE_TODO';
export let SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export let visibiletyFilter = {
  SHOW_ALL:'SHOW_ALL',
  SHOW_COMPLETED:'SHOW_COMPLETED',
  SHOW_ACTIVE : 'SHOW_ACTIVE'

}

export function addTodo(text) {
  return {
    type:ADD_TODO,
    text
  }
}

export function toggleTodo(index){
  return {
    type:TOGGLE_TODO,
    index
  }

}

export function setVisibilityFilter(filter) {
  return{
    type:SET_VISIBILITY_FILTER,
    filter
  }
}
