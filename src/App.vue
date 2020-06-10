<template>
  <div id="app">
    <table>
      <tbody>
        <tr v-for="(row,i) in calender" :key="i">
          <td
            v-for="(cell, j) in row"
            :key="`${j}-${i}`"
            :id="`${j}-${i}`"
            v-on:click="cellClick"
            v-on:click.right="markCell"
          >{{ cell.screen }}</td>
        </tr>
      </tbody>
    </table>

    <button v-on:click="returnNext2Weeks"></button>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      calender: this.createNestedArray(7, 3)
    };
  },
  methods: {
    createNestedArray(x, y) {
      let nestedArray = [];
      for (let i = 0; i < y; i++) {
        nestedArray.push([]);
        for (let j = 0; j < x; j++) {
          //information of individual cell
          nestedArray[i][j] = {
            screen: "X",
            hasAppointmentsAvailable: false,
            id: `${j}-${i}`,
            isMarked: false
          };
        }
      }
      return nestedArray;
    },
    returnNext2Weeks: function() {
      Date.prototype.addDays = function(days) {
        var dat = new Date(this.valueOf());
        dat.setDate(dat.getDate() + days);
        return dat;
      };

      // create the array
      let dates = [];

      // define the interval of your dates
      var currentDate = new Date();

      // create a loop between the interval
      while (dates.length < 14) {
        // add one day
        currentDate = currentDate.addDays(1);

        // add on array
        dates.push(currentDate);
      }

      console.log(dates)
    }
  }
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

td,
th {
  border: 1px solid black;
}
</style>
