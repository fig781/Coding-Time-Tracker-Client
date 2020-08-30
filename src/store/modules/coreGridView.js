//import axios from 'axios'

const state = {
  year: 0,
  month: {
    name: '',
    number: 0,
  },
  //date needs to have year, month, date
  todaysDate: {
    month: {
      name: '',
      number: 0,
    },
    date: 1,
    year: 0,
  },
  firstDayOfWeekInMonth: 0,
  //make calendar an empty array
  //make a dayas a state and then create these
  calendar: [],
  oneCalendarDay: {
    id: 0,
    date: '',
    day: '',
    active: '0:00',
    passive: '0:00',
    coding: '0:00',
    project: '',
    desc: '',
    day_total: '0:00',
    week_total: '0:00',
  },
};

const getters = {
  Calendar: (state) => state.calendar,
  OneCalandarDay: (state) => state.oneCalendarDay,
  Year: (state) => state.year,
  Month: (state) => state.month,
};

const mutations = {
  setTodaysDateMonthYear: (state) => {
    const today = new Date();
    const monthFormat = new Intl.DateTimeFormat('en-US', {
      month: 'long',
    });
    //todaysDate
    state.todaysDate.month.number = today.getMonth();
    state.todaysDate.month.name = monthFormat.format(today);
    state.todaysDate.date = today.getDate();
    state.todaysDate.year = today.getFullYear();

    //year
    state.year = today.getFullYear();

    //month
    state.month.number = today.getMonth();
    state.month.name = monthFormat.format(today);

    //firstDayOfWeekInMonth
    state.firstDayOfWeekInMonth = new Date(
      `${state.month.name} ${today.getDate()}, ${today.getFullYear()} 06:00:00`
    ).getDay();
  },
  increaseOrDecreaseMonthandYear: (state, payload) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    if (payload == '+') {
      if (state.month.number === 11) {
        state.month.number = 0;
        state.month.name = months[state.month.number];
        state.year++;
      } else {
        state.month.number++;
        state.month.name = months[state.month.number];
      }
    } else if (payload == '-') {
      if (state.month.number === 0) {
        state.month.number = 11;
        state.month.name = months[state.month.number];
        state.year--;
      } else {
        state.month.number--;
        state.month.name = months[state.month.number];
      }
    } else {
      console.error('function missing correct parameter');
    }
  },
  //payload is the one number incriment for each day
  populateCalendarDate: (state, payload) => {
    state.oneCalendarDay.id = payload;

    const date = new Date();
    const dayFormat = new Intl.DateTimeFormat('en-US', { weekday: 'long' });
    date.setFullYear(state.year);
    date.setMonth(state.month.number);
    date.setDate(payload);

    const displayMonth = state.month.number + 1;
    state.oneCalendarDay.date = `${displayMonth}/${payload}`;
    state.oneCalendarDay.day = dayFormat.format(date);

    console.log(state.oneCalendarDay.day);

    state.calendar.push(state.oneCalendarDay);

    console.log(state.oneCalendarDay);
  },
};

//Used to run mutations asyncronusly
const actions = {};

//Constants used in mutations
// const numberOfDaysInMonth = {
//   'January':31,
//   'February':28,
//   'March':31,
//   'April':30,
//   'May':31,
//   'June':30,
//   'July':31,
//   'August':31,
//   'September':30,
//   'October':31,
//   'November':30,
//   'December':31
// }

// const daysOfWeek = [
//   'Sunday',
//   'Monday',
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   "Friday",
//   "Saturday"
// ]

export default {
  state,
  getters,
  actions,
  mutations,
};