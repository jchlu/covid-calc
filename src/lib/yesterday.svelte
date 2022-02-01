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
</script>

{#await getData()}
  <p>Fetching data...</p>
{:then data}
<div>
  <h1>Yesterday's figures report #{data.report_number}</h1>
  <p>Total Cases</p>
  <p>{data.total_tests}</p>
  <p>Yesterday's Cases</p>
  <p>{data.total_positives}</p>
  <p>Yesterday's Recoveries</p>
  <p>{data.recoveries}</p>
  <p>Yesterday's Deaths</p>
  <p>{data.deaths}</p>
</div>
{:catch error}
  <p>Something went wrong while fetching the data:</p>
  <pre>{error}</pre>
{/await}
