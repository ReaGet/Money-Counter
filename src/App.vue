<template>
  <div class="container">
    <div class="calendar">
      <div class="calendar__header">
        <h1 class="calendar__title">{{currentMonth}}</h1>
        <div class="calendar__opts">
          <svg width="20px" height="20px" viewBox="0 0 200 200">
              <path d="M100.68,65a35,35,0,1,0,35,35A34.78,34.78,0,0,0,100.68,65Zm0,50a15,15,0,1,1,15-15A14.73,14.73,0,0,1,100.68,115Z"/>
              <path d="M169.68,108a6.59,6.59,0,0,1,0-11.5,26.75,26.75,0,0,0,9.5-36.5l-3.5-6c-7.5-12.5-23.5-17-36-9.5-4,2.5-9-.5-9-5.5V37.5A27.42,27.42,0,0,0,103.18,10h-5a27.74,27.74,0,0,0-27.5,27.5v1c0,5.5-6,8.5-10.5,6a27.05,27.05,0,0,0-37,10l-3,5.5c-7.5,12.5-3,29,9.5,36.5a6.59,6.59,0,0,1,0,11.5,26.75,26.75,0,0,0-9.5,36.5l3.5,5.5a27.05,27.05,0,0,0,37,10l1.5-1a5.89,5.89,0,0,1,9,5,25.82,25.82,0,0,0,26,26h8.5a25.61,25.61,0,0,0,25.5-25.5c0-4.5,4.5-7,8.5-5l1,.5c12.5,7.5,28.5,3,36-9.5l3.5-6A27.07,27.07,0,0,0,169.68,108Zm-10,17.5a7.18,7.18,0,0,1,2.5,9l-3.5,6c-1.5,3-5.5,4-8.5,2.5l-1-.5c-17-10-38.5,2.5-38.5,22a5.55,5.55,0,0,1-5.5,5.5h-8.5a5.78,5.78,0,0,1-6-6,26,26,0,0,0-39-22.5l-1.5,1a6.81,6.81,0,0,1-9.5-2.5l-3-5.5c-2-3-.5-7,2.5-9,17.5-10,17.5-36,0-46a7.18,7.18,0,0,1-2.5-9l3-6a6.71,6.71,0,0,1,9.5-2.5c18,10.5,40.5-2.5,40.5-23.5v-1a7.69,7.69,0,0,1,7.5-7.5h5a7.69,7.69,0,0,1,7.5,7.5V39c0,20,22,33,39.5,23,3-1.5,7-.5,8.5,2.5l3.5,6c2,3,.5,7-2.5,9C142.18,89.5,142.18,115,159.68,125.5Z"/>
          </svg>
        </div>
      </div>
      <div class="calendar__body">
        15000
      </div>
    </div>
  </div>
</template>

<script>
import {getHtml} from "@/utils/requests";
import {parseHtmlToArray} from "@/utils/parser";

export default {
  name: 'App',
  data() {
    return {
      monthNames: {
        '1': 'Январь',
        '2': 'Февраль',
        '3': 'Март',
        '4': 'Апрель',
        '5': 'Май',
        '6': 'Июнь',
        '7': 'Июль',
        '8': 'Август',
        '9': 'Сентябрь',
        '10': 'Октябрь',
        '11': 'Ноябрь',
        '12': 'Декабрь',
      },
      monthData: null,
      data: null,
    }
  },
  methods: {
    getData() {
      getHtml('http://localhost:8010/proxy')
          .then((res) => {
            // parseHtmlToArray(res).filter(m => );
            console.log(parseHtmlToArray(res));
          })
          .catch((res) => {
            console.log('Error: ', res)
          })
    },
    loop() {
      // console.log(this.data)
    }
  },
  mounted() {
    this.getData();
    setInterval(this.loop, 1000);
  },
  computed: {
    currentMonth() {
      return this.monthNames[new Date().getMonth() + 1];
    },
  }
}
</script>
<style>
  @import '@/assets/styles/style.css';
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .calendar {
    width: 100%;
    max-width: 400px;
  }

  .calendar__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    color: #ffc107;
  }

  .calendar__opts {
    display: flex;
    align-items: center;
    cursor: pointer;
    fill: #ffc107;
  }

  .calendar__opts:hover {
    fill: #543921;
  }

  .calendar__body {
    display: flex;
    padding: 40px 0 20px;
    justify-content: center;
    font-size: 120px;
    color: #f3f3f3;
    user-select: none;
    cursor: pointer;
    transition: color .07s;
  }

  .calendar__body:hover {
    color: #5d5050;
  }
</style>
