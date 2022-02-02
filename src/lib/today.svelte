<script>
  export let data
  console.log('This is data as seen in the today.svalte file:')
  console.dir(data)
  const yesterday = JSON.stringify(data)
</script>
<div>
  <form action="/today.json" method="post" name="dailyInfo">
    <input type="text" hidden name="yesterday" value="{yesterday}">
    <fieldset>
    <legend>Today</legend>
    <label for="report_number">Report Number</label>
    <input type="number" name="report_number" value="{data.report_number + 1}">
    <label for="tests">Total Cases</label>
    <input type="number" name="tests" placeholder="{data.tests}">
    <label for="positives">Positives</label>
    <input type="number" name="positives" placeholder="{data.positives}">
    <label for="positivity">Positivity %</label>
    <input type="number" min="0.00" max="100.00" step=".01" name="positivity" placeholder="{data.positivity}">
    <label for="recoveries">Recoveries</label>
    <input type="number" name="recoveries" placeholder="{data.recoveries}">
    <label for="deaths">Deaths</label>
    <input type="number" name="deaths" placeholder="{data.deaths}">
    <button type="submit">Submit</button>
  </fieldset>
  </form>
</div>