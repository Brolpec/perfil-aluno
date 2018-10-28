$(function() {
  
  
  var g1 = new JustGage({
      id: "gauge1",
      value: 52,
      min: 0,
      max: 100,
      title: "Holidays",
	  label: 'PP'
    });
  var g2 = new JustGage({
    id: "gauge2",
    value: 8,
    min: 0,
    max: 10,
    title: "Shifts",
    label: 'PR'
    
  });    
  
  $( window ).resize(function() {
    $('#gauge1')[0].innerHTML = '';
    $('#gauge2')[0].innerHTML = '';
    var g1 = new JustGage({
      id: "gauge1",
      value: 52,
      min: 0,
      max: 100,
      title: "Holidays",
	  label: 'PP'
    });
  var g2 = new JustGage({
    id: "gauge2",
    value: 8.1,
    min: 0,
    max: 10,
    title: "Shifts",
    label: 'PR'
    
  }); 
  });
  
});