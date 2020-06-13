<template>
  <div id="app">
    <table>
      <tbody>
        <tr v-for="(row,i) in calender" :key="i">
          <td v-for="(cell, j) in row" :key="`${j}-${i}`" :id="`${j}-${i}`">{{ cell.screen }}</td>
        </tr>
      </tbody>
    </table>

    <button v-on:click="displayDates"></button>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      calender: this.createNestedArray(7, 3),
      dayIndex: 4
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
        // console.log(dat)
        dat.setDate(dat.getDate() + days);

        // console.log(dat)
        return dat;
      };

      // create the array
      let dates = [];

      let days = [];
      // define the interval of your dates
      var currentDate = new Date();
      // let day = currentDate.getUTCDate();
      // console.log(day);

      // create a loop between the interval
      while (dates.length < 14) {
        days.push(currentDate.getDate());
        // add one day
        dates.push(currentDate);
        currentDate = currentDate.addDays(1);

        // add on array
      }
      return days;
    },
    displayDates: function() {
      // let next2Weeks = this.returnNext2Weeks()

      let currentDate = new Date();
      let y = currentDate.getDay()
      let x = 0;
      // let idk = currentDate.getDate();



      // console.log(typeof y )

      let next2WeeksDate = this.returnNext2Weeks();

      console.log(typeof y, y)
      // this.calender[x][startHere].screen = "p.easefs"

      // this.calender[x][y].screen = `${idk}`

      // console.log(next2WeeksDate[0], "why undefined")
      for (let i = 0; i < next2WeeksDate.length; i++) {
        if (!this.calender[x][y]) {
          x++;
          y = 0;
          continue;
        }
        this.calender[x][y].screen = `${next2WeeksDate[i]}`;
        y++;
      }
      // console.log(this.returnNext2Weeks())
    }
  }
};

// this.returnNext2Weeks()
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
