var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
    var employees = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class="bulleted">';
    for (var i=0; i<employees.length; i += 1) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
xhr.open('GET', '../data/employees.json');
xhr.send();

var roomRequest = new XMLHttpRequest();
roomRequest.onreadystatechange = function() {
    if (roomRequest.readyState === 4 && roomRequest.status === 200) {
        var confRoom = JSON.parse(roomRequest.responseText);
        var statusRoom = '<ul class="rooms"';
        for (var i = 0; i < confRoom.length; i++) {
            if (confRoom[i].available === true) {
                statusRoom += '<li class="empty">';
            } else {
                statusRoom += '<li class="full">';
            }
            statusRoom += confRoom[i].room;
            statusRoom += '</li>';
        }
        statusRoom += '</ul>';
        document.getElementById('roomList').innerHTML = statusRoom;
    }
};
roomRequest.open('GET', '../data/rooms.json');
roomRequest.send();
