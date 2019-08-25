// register templates
  const templates = 
  {
    popupIsAllDay: function() 
    {
      return 'All Day';
    },
    popupStateFree: function() {
      return 'Free';
    },
    popupStateBusy: function() {
      return 'Busy';
    },
    titlePlaceholder: function() {
      return 'Subject';
    },
    locationPlaceholder: function() {
      return 'Location';
    },
    startDatePlaceholder: function() {
      return 'Start date';
    },
    endDatePlaceholder: function() {
      return 'End date';
    },
    popupSave: function() {
      return 'Save';
    },
    popupUpdate: function() {
      return 'Update';
    },
    popupDetailDate: function(isAllDay, start, end) {
      var isSameDate = moment(start).isSame(end);
      var endFormat = (isSameDate ? '' : 'YYYY.MM.DD ') + 'hh:mm a';

      if (isAllDay) 
      {
        return moment(start).format('YYYY.MM.DD') + (isSameDate ? '' : ' - ' + moment(end).format('YYYY.MM.DD'));
      }

      return (moment(start).format('YYYY.MM.DD hh:mm a') + ' - ' + moment(end).format(endFormat));
    },
    popupDetailLocation: function(schedule) {
      return 'Location : ' + schedule.location;
    },
    popupDetailUser: function(schedule) {
      return 'User : ' + (schedule.attendees || []).join(', ');
    },
    popupDetailState: function(schedule) {
      return 'State : ' + schedule.state || 'Busy';
    },
    popupDetailRepeat: function(schedule) {
      return 'Repeat : ' + schedule.recurrenceRule;
    },
    popupDetailBody: function(schedule) {
      return 'Body : ' + schedule.body;
    },
    popupEdit: function() {
      return 'Edit';
    },
    popupDelete: function() {
      return 'Delete';
    }
  };

var cal = new tui.Calendar('#calendar', 
{
    defaultView: 'month',
    template: templates,
    useDetailPopup: true
});

cal.setOptions({month: {visibleWeeksCount: 4}}, true);
cal.changeView('month', true);


$( ".datepicker" ).datepicker(
{
    dateFormat: 'yy-mm-dd'
});


$(document).ready(function() 
{
	$('form').submit(function(event) 
	{
		console.log($('#titulo').val());
		console.log($('#data').val());
		cal.createSchedules([
		    {
		        id: '1',
		        calendarId: '1',
		        title: $('#titulo').val(),
		        body: 'my scdsjb',
		        category: 'time',
		        dueDateClass: '',
		        start:$('#data').val()+'T22:30:00+09:00',
		        isVisible: true
		    }
		]);	

		$('.tui-full-calendar-weekday-schedule-bullet').css('height', '0px');

		$('#myModal').modal('hide');

		return false;
	});	
});