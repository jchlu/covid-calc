<script>
  export let data
</script>
<div>
  <h1>Yesterday's figures report #{data.report_number}</h1>
  <p>Total Cases</p>
  <p>{data.tests}</p>
  <p>Yesterday's Cases</p>
  <p>{data.positives}</p>
  <p>Yesterday's Recoveries</p>
  <p>{data.recoveries}</p>
  <p>Yesterday's Deaths</p>
  <p>{data.deaths}</p>
</div>
