var calendario;
var eventos;
var contador=0;

var calend = 
{

  init: function()
  {
    eventos = calend.getEvento();

    // calendario.setOptions({month: {visibleWeeksCount: 4}}, true);
    // calendario.changeView('month', true);
  },
  addEvent: function(titulo,data,nivel)
  {
      var objeto = 
      {
          "id": contador,
          "name": titulo,
          "startdate": data,
          "color": nivel,
          'url':'javascript:void()'
      };

      eventos['monthly'].push(objeto);

      $('.calendario').empty();

      let div = "<div class='monthly' id='mycalendar'></div>";

      $('.calendario').append(div);

      $('#mycalendar').monthly({
        mode: 'event',
        dataType: 'json',
        events: eventos
      });
  },
  updateEvent: function()
  {

  },
  removeEvent: function()
  {

  },
  getEvento: function()
  {
      eventos= {
        "monthly": [
          
        ]
      };

      return eventos;
  },
  loadListeners: function()
  {
    $(document).ready(function() 
    {
      $('#mycalendar').monthly({
        mode: 'event',
        dataType: 'json',
        events: eventos
      });

      $('form').submit(function(event) 
      {
        let titulo = $('#titulo').val();
        let data = $('#data').val();
        let nivel = $('#nivel').val();

        calend.addEvent(titulo,data,nivel);

        $('#myModal').modal('hide');

        return false;
      }); 
    });
  }
}

calend.init();
calend.loadListeners();



$( ".datepicker" ).datepicker(
{
    dateFormat: 'yy-mm-dd'
});



  
