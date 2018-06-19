import React, {Component} from "react";
import Day from "./day.js";

export default class Calendar extends Component {
    constructor() {
        super();

        //uses these in the functions below to get the right order, starting with the current month and going through a full year
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var numberDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; 

        // currentMonth and currentDay are the INDEXES not the strings of the current month and day
        // todaysDate returns a number between 1 and 31 to match the date
        var date = new Date();
        var currentMonth = date.getMonth();
        var currentDay = date.getDay();
        var currentDate = date.getDate();

        //gets first day of each month
        currentDay -= (currentDate - 1);
        while(currentDay < 0) {
            currentDay += 7;
        }

        //puts the months in order
        var monthsInOrder = months.splice(currentMonth);
        var daysInOrder = numberDays.splice(currentMonth);
        for(var i=0; i<currentMonth; i++) {
            monthsInOrder.push(months[i]);
            daysInOrder.push(numberDays[i])
        }

        //gets the index of the first day of each month
        function getFirstDay() {
            var firstDayFirstMonth = currentDay;
            var firstDayArr = [];
            for(var i=0; i<11; i++) {
                firstDayFirstMonth += daysInOrder[i];
                while(firstDayFirstMonth > 6) {
                    firstDayFirstMonth -= 7;
                }
                firstDayArr.push(firstDayFirstMonth);
            }
            firstDayArr.unshift(currentDay);
            return firstDayArr;
        }

        this.state = {
            monthsIndex: {January: 0, February: 1, March: 2, April: 3, May: 4, June: 5, July: 6, August: 7, September: 8, October: 9, November: 10, December: 11},
            months: monthsInOrder,
            daysInEachMonth: daysInOrder,
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            firstDay: getFirstDay()
        }
        this.makeCalendar = this.makeCalendar.bind(this);
    }

    makeCalendar = (index, firstDay) => {
        var daysArr = [];
        var count = (firstDay-1);
        var uniqueID = 0;
        for(var i=1; i<=this.state.daysInEachMonth[index]; i++) {
            var thisMonth = this.state.months[index];
            count >= 6 ? count = 0 : count++ ;
            uniqueID++;
            daysArr.push(<Day displayFn={this.props.displayEventInfo} weekDay={this.state.days[count]} day={uniqueID} month={this.state.monthsIndex[thisMonth]} events={this.props.events[`${this.state.monthsIndex[thisMonth]} ${uniqueID}`]} />);
        }
        return daysArr;
    }

   

    render() {
        return (
            <div className="flex-container">
                <div className={`months ${this.state.months[0]}`}>
                    <h1 className="monthTitle">{this.state.months[0]}</h1>
                    <div className="days"> Monday | Tuesday | Wednesday | Thursday | Friday | Saturday | Sunday </div>
                    <div className="dates">
                        {this.makeCalendar(0, this.state.firstDay[0])}
                    </div>
                </div>
                <div className={`months ${this.state.months[1]}`}>
                    <h1 className="monthTitle">{this.state.months[1]}</h1>
                    <div className="days"> Monday | Tuesday | Wednesday | Thursday | Friday | Saturday | Sunday </div>
                    <div className="dates">
                        {this.makeCalendar(1, this.state.firstDay[1])}
                    </div>
                </div>
                <div className={`months ${this.state.months[2]}`}>
                    <h1 className="monthTitle">{this.state.months[2]}</h1>
                    <div className="days"> Monday | Tuesday | Wednesday | Thursday | Friday | Saturday | Sunday </div>
                    <div className="dates">
                        {this.makeCalendar(2, this.state.firstDay[2])}
                    </div>
                </div>
                <div className={`months ${this.state.months[3]}`}>
                    <h1 className="monthTitle">{this.state.months[3]}</h1>
                    <div className="days"> Monday | Tuesday | Wednesday | Thursday | Friday | Saturday | Sunday </div>
                    <div className="dates">
                        {this.makeCalendar(3, this.state.firstDay[3])}
                    </div>
                </div>
                <div className={`months ${this.state.months[4]}`}>
                    <h1 className="monthTitle">{this.state.months[4]}</h1>
                    <div className="days"> Monday | Tuesday | Wednesday | Thursday | Friday | Saturday | Sunday </div>
                    <div className="dates">
                        {this.makeCalendar(4, this.state.firstDay[4])}
                    </div>
                </div>
                <div className={`months ${this.state.months[5]}`}>
                    <h1 className="monthTitle">{this.state.months[5]}</h1>
                    <div className="days"> Monday | Tuesday | Wednesday | Thursday | Friday | Saturday | Sunday </div>
                    <div className="dates">
                        {this.makeCalendar(5, this.state.firstDay[5])}
                    </div>
                </div>
                <div className={`months ${this.state.months[6]}`}>
                    <h1 className="monthTitle">{this.state.months[6]}</h1>
                    <div className="days"> Monday | Tuesday | Wednesday | Thursday | Friday | Saturday | Sunday </div>
                    <div className="dates">
                        {this.makeCalendar(6, this.state.firstDay[6])}
                    </div>
                </div>
                <div className={`months ${this.state.months[7]}`}>
                    <h1 className="monthTitle">{this.state.months[7]}</h1>
                    <div className="days"> Monday | Tuesday | Wednesday | Thursday | Friday | Saturday | Sunday </div>
                    <div className="dates">
                        {this.makeCalendar(7, this.state.firstDay[7])}
                    </div>
                </div>
                <div className={`months ${this.state.months[8]}`}>
                    <h1 className="monthTitle">{this.state.months[8]}</h1>
                    <div className="days"> Monday | Tuesday | Wednesday | Thursday | Friday | Saturday | Sunday </div>
                    <div className="dates">
                        {this.makeCalendar(8, this.state.firstDay[8])}
                    </div>
                </div>
                <div className={`months ${this.state.months[9]}`}>
                    <h1 className="monthTitle">{this.state.months[9]}</h1>
                    <div className="days"> Monday | Tuesday | Wednesday | Thursday | Friday | Saturday | Sunday </div>
                    <div className="dates">
                        {this.makeCalendar(9, this.state.firstDay[9])}
                    </div>
                </div>
                <div className={`months ${this.state.months[10]}`}>
                    <h1 className="monthTitle">{this.state.months[10]}</h1>
                    <div className="days"> Monday | Tuesday | Wednesday | Thursday | Friday | Saturday | Sunday </div>
                    <div className="dates">
                        {this.makeCalendar(10, this.state.firstDay[10])}
                    </div>
                </div>
                <div className={`months ${this.state.months[11]}`}>
                    <h1 className="monthTitle">{this.state.months[11]}</h1>
                    <div className="days"> Monday | Tuesday | Wednesday | Thursday | Friday | Saturday | Sunday </div>
                    <div className="dates">
                        {this.makeCalendar(11, this.state.firstDay[11])}
                    </div>
                </div>
            </div>
        )
    }
}