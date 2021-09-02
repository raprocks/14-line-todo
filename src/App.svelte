<script>
  let todos = [];
  let inp;
  const add = () => (todos = [...todos, inp]);
  const remove = (ind) => (todos = todos.filter((v, i) => i !== ind));
</script>

<input bind:value={inp} type="text" />
<button on:click={add}>Add</button>
{#each todos as todo, index (index)}
  <li>{todo} <button on:click={remove(index)}>🚮</button></li>
{/each}
