<script>
  import Yesterday from '$lib/yesterday.svelte'
  const title = 'COVID Calc'
</script>
<style>
.main {
  width: 100%;
  max-width: 42rem;
  margin: 4rem auto 0 auto;
}
</style>
<svelte:head>
  <title>{title}</title>
</svelte:head>
<div class="main">
<h1>COVID Figures</h1>
<Yesterday />
</div>
