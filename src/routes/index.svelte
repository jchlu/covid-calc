<script>
  // @ts-nocheck
    import supabase from '$lib/db'
    async function getData() {
    const { data, error } = await supabase
      .from('covid_figures')
      .select('*')
      .order('id', {ascending: false})
      .limit(1)
      .single()
      if (error) throw new Error(error.message)

    return data
  }

  import Yesterday from '$lib/yesterday.svelte'
  import Today from '$lib/today.svelte';

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
{#await getData()}
  <p>Fetching data...</p>
{:then data}
<Today data={data}/>
{:catch error}
<p>Something went wrong while fetching the data:</p>
<pre>{error}</pre>
{/await}
</div>
