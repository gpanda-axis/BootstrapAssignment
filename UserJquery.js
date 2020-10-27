  $(document).ready(function () {
            var myarray = [];
            var data = "";

            $("#uid").focus();

            $("#add").click(function () {

            var reName=/^[a-zA-Z ]{4,30}$/;
            var id = $("#uid").val();
            var name = $("#uname").val();
            var role = $("#role").val();

                // Validation
                if(id.length==""){
                  alert("Enter a valid User Id");
                  return false;

                }

                else if(name.length ==""){
                  alert("Enter a valid User name");
                  return false;
                }
                else if(reName.test(name)==false){
                  alert("Enter a valid user name format,minimum 4 letters and maximum 30");
                  return false;
                }

                else if(role.length == ""){
                  alert("Enter a valid user role");
                  return false;
                }

                myarray.push({ 'id': id, 'name': name,'role':role});
                for (i = 0; i < myarray.length; i++) {
                    data = "<tr><td>" + myarray[i].id + "</td><td  class ='tname'> " + myarray[i].name +
                    "</td><td  class ='trole'>" + myarray[i].role + "</td><td>"+"<button type='button'class='btn btn-primary editBtn' data-toggle='modal' data-target='#myModal'>EDIT</button> &nbsp;<button type='button' class='btn btn-danger rowDelete'>X</button>"+"</td></tr>";

                }
                $("#tbody").append(data);

                $("#uid").val(" ");
                $("#uname").val(" ");
                $("#role").val(" ");
                $("#uid").focus();

            });

          $("#tbody").on('click', '.rowDelete', function () {
          $(this).closest('tr').remove();
          alert("One Record Removed");
           });

          //To Edit a row
        $('#tbody').on('click', '.editBtn',function (ele) {
            //the <tr> variable is use to set the parentNode from "ele
            var tr = ele.target.parentNode.parentNode;

            //I get the value from the cells (td) using the parentNode (var tr)
            var id = tr.cells[0].textContent;
            var userName = tr.cells[1].textContent;
            var userRole = tr.cells[2].textContent;

          //Prefill the fields with the gathered information
            $('#mid').val(id);
            $('#mname').val(userName);
            $('#mrole').val(userRole);

        });

        $("#save").click(function(){

          var id = $('#mid').val();
          var uname = $('#mname').val();
          var urole = $('#mrole').val();
          // Validation
            var reMname=/^[a-zA-Z ]{4,30}$/;


                if(uname.length ==""){
                  alert("Enter a valid User name");
                  return false;
                }
                else if(reMname.test(uname)==false){
                  alert("Enter a valid user name format,minimum 4 letters and maximum 30");
                  return false;
                }

                else if(urole.length == ""){
                  alert("Enter a valid user role");
                  return false;
                }
            // To save modal data into table
          $("#tbody > tr").each(function(){
                 if (id == $(this).find('td:eq(0)').text()){

                  $(this).find('td:eq(1)').text(uname);
                  $(this).find('td:eq(2)').text(urole);
                  console.log($(this).find('td:eq(1)').text(uname));
                  console.log($(this).find('td:eq(2)').text(urole));

                 }
            });
          });
        });
