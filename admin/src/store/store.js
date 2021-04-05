import { writable } from 'svelte/store';

const user = writable(null);
const error = writable(null);
const paginas = writable([]);

export {
  user,
  error,
  paginas
}