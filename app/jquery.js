
$(document).ready(function(){
    //region 9
    $(".dropdown").click(function(){
      $("#collapseExample").toggle();
    });
    //region 10
    $(".dropdown2").click(function(){
      $("#collapseExample2").toggle();
    });
    //region 11
    $(".dropdown3").click(function(){
      $("#collapseExample3").toggle();
    });
    //region 12
    $(".dropdown4").click(function(){
      $("#collapseExample4").toggle();
    });
     //region 13
     $(".dropdown5").click(function(){
      $("#collapseExample5").toggle();
    });
    //END OF PARENT TABLE

    //REGION 9
    //ZAMBOANGA DEL NORTE sub row collapsible
    $(".dropdown-list").click(function(){
      $("#dropdownMenu").toggle();
    });
    //ZAMBOANGA DEL SUR sub row collapsible
    $(".dropdown-list2").click(function(){
      $("#dropdownMenu2").toggle();
    });
    //ZAMBOANGA SIBUGAY sub row collapsible
    $(".dropdown-list3").click(function(){
      $("#dropdownMenu3").toggle();
    });


    //REGION 10 
    //BUKIDNON sub row collapsible
    $(".dropdown-list4").click(function(){
      $("#dropdownMenu4").toggle();
    });

     //CAMIGUIN sub row collapsible
     $(".dropdown-list5").click(function(){
      $("#dropdownMenu5").toggle();
    });
    //LANAO DEL NORTE sub row collapsible
    $(".dropdown-list6").click(function(){
      $("#dropdownMenu6").toggle();
    });
     //MISAMIS OCCIDENTAL sub row collapsible
     $(".dropdown-list7").click(function(){
      $("#dropdownMenu7").toggle();
    });
     //MISAMIS ORIENTAL sub row collapsible
     $(".dropdown-list8").click(function(){
      $("#dropdownMenu8").toggle();
    });

    //REGION 11 
    //DAVAO DE ORO sub row collapsible
    $(".dropdown-list9").click(function(){
      $("#dropdownMenu9").toggle();
    });

     //DAVAO DEL NORTE sub row collapsible
     $(".dropdown-list10").click(function(){
      $("#dropdownMenu10").toggle();
    });
    //DAVAO DEL SUR sub row collapsible
    $(".dropdown-list11").click(function(){
      $("#dropdownMenu11").toggle();
    });
     //DAVAO OCCIDENTAL sub row collapsible
     $(".dropdown-list12").click(function(){
      $("#dropdownMenu12").toggle();
    });
     //DAVAO ORIENTAL sub row collapsible
     $(".dropdown-list13").click(function(){
      $("#dropdownMenu13").toggle();
    });

    // REGION 12 
    //COTABATO sub row collapsible
    $(".dropdown-list14").click(function(){
      $("#dropdownMenu14").toggle();
    });

     //SARANGANI sub row collapsible
     $(".dropdown-list15").click(function(){
      $("#dropdownMenu15").toggle();
    });
    //SOUTH COTABATO sub row collapsible
    $(".dropdown-list16").click(function(){
      $("#dropdownMenu16").toggle();
    });
     //DAVAO OCCIDENTAL sub row collapsible
     $(".dropdown-list17").click(function(){
      $("#dropdownMenu17").toggle();
    });


    // BANGSAMORO AUTONOMOUS REGION IN MUSLIM MINDANAO
    //BASILAN sub row collapsible
    $(".dropdown-list18").click(function(){
      $("#dropdownMenu18").toggle();
    });

     //LANAO DEL SUR sub row collapsible
     $(".dropdown-list19").click(function(){
      $("#dropdownMenu19").toggle();
    });

     //MAGUINDANAO sub row collapsible
     $(".dropdown-list20").click(function(){
      $("#dropdownMenu20").toggle();
    });

    //SULU sub row collapsible
    $(".dropdown-list21").click(function(){
      $("#dropdownMenu21").toggle();
    });

     //TAWI-TAWI sub row collapsible
     $(".dropdown-list22").click(function(){
      $("#dropdownMenu22").toggle();
    });

      // $("#municipality").click(function(){
      //   $("#exampleModal").show();
      // })


      $(".list-group-item").click(function(){
        $("#exampleModal").show();
        //  var municipality = $(this).text();
        // console.log(municipality);
          
      var items = document.querySelectorAll(".list li"),
      tab = [], index;
      for(var i=0; i< items.length; i++){
        tab.push(items[i].innerHTML);
      }
      //console.log(tab.indexOf('Sitangkai'));
      //get selected element index
      for(var i = 0; i <items.length; i++){
        items[i].onclick = function() {
        index =  tab.indexOf(this.innerHTML);
  
        console.log(this.innerHTML);
        document.querySelector('.classMunicipality').innerHTML = this.innerHTML;
        };
      }
      
      

      // document.querySelector("classMunicipality").innerHTML = municipality;
       
      //  var municipalityName = document.createElement("h1");
      //     municipalityName.className = "classMunicipality";
      //  var municipalityValue = municipality;
      //     municipalityName.append(municipalityValue);
      //     document.querySelector(".modal-body").appendChild(municipalityName);

      //  var config = {
      //    reportName : "Territory_Fact_Book_Report",
      //    criteria: "(City_Municipality==" + municipality+ ")"
      //  }
       //initialization zoho
      //  ZOHO.CREATOR.init()
      // .then(function(data) {
      //  var queryParams = ZOHO.CREATOR.UTIL.getQueryParams();
    
     //get all records API
    //  ZOHO.CREATOR.API.getAllRecords(config).then(function(response){
    //  //callback block
    //  var record = response.data; 
    //    for (var rec in record){
    //      var region = record[rec].Region;
    //      //console.log(region);
       
    //    } 
    //  });
    //});
      });

      
  //end
  });