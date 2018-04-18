const URL = process.env.URL || "https://app.payable.com/login";
const WAIT = 5000;

const hours = [

  // { duration: '3.5', date: 'Oct 23, 2017', startTime: '18:00', notes: 'Class' },
  // { duration: '3.5', date: 'Oct 24, 2017', startTime: '18:00', notes: 'Class' },
  // { duration: '3.5', date: 'Oct 25, 2017', startTime: '18:00', notes: 'Class' },
  // { duration: '3.5', date: 'Oct 26, 2017', startTime: '18:00', notes: 'Class' },


  // { duration: '3.5', date: 'Aug 28, 2017', startTime: '18:00', notes: 'Class' },
  // { duration: '3.5', date: 'Aug 29, 2017', startTime: '18:00', notes: 'Class' },
  // { duration: '3.5', date: 'Aug 30, 2017', startTime: '18:00', notes: 'Class' },
  // { duration: '3.5', date: 'Aug 31, 2017', startTime: '18:00', notes: 'Class' },
  // { duration: '3.5', date: 'Oct 2, 2017', startTime: '18:00', notes: 'Class' },
  // { duration: '3.5', date: 'Oct 3, 2017', startTime: '18:00', notes: 'Class' },
  // { duration: '3.5', date: 'Oct 4, 2017', startTime: '18:00', notes: 'Class' },
  // { duration: '3.5', date: 'Oct 5, 2017', startTime: '18:00', notes: 'Class' },
  // { duration: '3.5', date: 'Oct 9, 2017', startTime: '18:00', notes: 'Class' },
  // { duration: '3.5', date: 'Oct 10, 2017', startTime: '18:00', notes: 'Class' },
  // { duration: '3.5', date: 'Oct 11, 2017', startTime: '18:00', notes: 'Class' },
  // { duration: '3.5', date: 'Oct 12, 2017', startTime: '18:00', notes: 'Class' },
  // { duration: '3.5', date: 'Oct 16, 2017', startTime: '18:00', notes: 'Class' },
  // { duration: '3.5', date: 'Oct 17, 2017', startTime: '18:00', notes: 'Class' },
  // { duration: '3.5', date: 'Oct 18, 2017', startTime: '18:00', notes: 'Class' },
  // { duration: '3.5', date: 'Oct 19, 2017', startTime: '18:00', notes: 'Class' },
  // { duration: '1', date: 'Aug 29, 2017', startTime: '9:30', notes: 'Meeting' },
  // { duration: '1', date: 'Sep 5, 2017', startTime: '9:30', notes: 'Meeting' },
  // { duration: '1', date: 'Sep 12, 2017', startTime: '9:30', notes: 'Meeting' },
  // { duration: '1', date: 'Sep 25, 2017', startTime: '9:30', notes: 'Meeting' },
  // { duration: '1', date: 'Oct 2, 2017', startTime: '9:30', notes: 'Meeting' },
  // { duration: '1', date: 'Oct 9, 2017', startTime: '9:30', notes: 'Meeting' },
  // { duration: '2', date: 'Sep 10, 2017', startTime: '12:00', notes: '1:1 Prep' },
  // { duration: '5', date: 'Sep 13, 2017', startTime: '4:30', notes: '1:1' },
  // { duration: '4', date: 'Sep 14, 2017', startTime: '18:00', notes: '1:1' },
  // { duration: '2', date: 'Sep 18, 2017', startTime: '19:00', notes: '1:1' },
  // { duration: '2', date: 'Oct 15, 2017', startTime: '10:30', notes: '1:1' },
  // { duration: '3', date: 'Sep 12, 2017', startTime: '12:00', notes: 'Event Prep' },
  // { duration: '3', date: 'Sep 15, 2017', startTime: '18:00', notes: 'Event' },
  // { duration: '3', date: 'Sep 20, 2017', startTime: '18:00', notes: 'Event' },
  // { duration: '3', date: 'Oct 12, 2017', startTime: '13:00', notes: 'Videos' },
  // { duration: '3.5', date: 'Sep 11, 2017', startTime: '14:00', notes: 'Course Dev' },
  // { duration: '3.5', date: 'Oct 16, 2017', startTime: '14:00', notes: 'Course Dev' }
]

module.exports = {
  "logging hours" : function (browser) {
    browser.url(URL);
    browser.useCss();
    browser.waitForElementVisible('input#email', WAIT);
    browser.setValue('input#email', 'genehallman@gmail.com');
    browser.waitForElementVisible('input#password', WAIT);
    browser.setValue('input#password', process.env.PASSWORD);
    browser.click('button[name="commit"]');

    for (var i in hours) {
      var e = hours[i];
      console.log("starting", e);
      browser.waitForElementVisible('.v1globalAddButton', WAIT);
      browser.click('.v1globalAddButton');
      browser.waitForElementVisible('button.v1accentPurple', WAIT);
      browser.click('button.v1accentPurple');
      browser.waitForElementVisible(".v1globalAddBox.expanded form", WAIT);
      browser.setValue('.v1globalAddBox.expanded form input.quantityField', e.duration);
      browser.clearValue('.v1globalAddBox.expanded form input.date');
      browser.setValue('.v1globalAddBox.expanded form input.date', e.date);
      browser.setValue('.v1globalAddBox.expanded form input.startTime', e.startTime);
      browser.click('.v1globalAddBox.expanded form .selectize-control');
      browser.click('.v1globalAddBox.expanded form .option[data-value="315425434"]');
      browser.setValue('.v1globalAddBox.expanded form textarea', e.notes);
      browser.click('.v1globalAddBox.expanded form button.v1accentPurple');
      browser.pause(2000);
      console.log("finished", e);
    }
  }
};
// input.date:visible
// input.startTime:visible
// input.endTime:visible
