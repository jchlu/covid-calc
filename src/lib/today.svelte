<div>
  <form action="/today.json" method="post" name="dailyInfo">
    <fieldset>
    <legend>Placeholder for today's figures</legend>
    <label for="totalCases">Total Cases</label>
    <input type="text" name="totalCases">
    <label for="cases">Yesterday's Cases</label>
    <input type="text" name="cases">
    <label for="recoveries">Yesterday's Recoveries</label>
    <input type="text" name="recoveries">
    <label for="positivity">Yesterday's Positivity %</label>
    <input type="text" name="positivity">
    <label for="deaths">Yesterday's Deaths</label>
    <input type="text" name="deaths">
    <button type="submit">Submit</button>
  </fieldset>
  </form>
</div>