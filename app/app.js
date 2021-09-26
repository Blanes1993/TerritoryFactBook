var items = document.querySelectorAll(".list li"),
      tab = [], index;
      var municipality;
      var message = "NO DATA";
      //var data;

      for(var i=0; i< items.length; i++){
        tab.push(items[i].innerHTML);
      }

      //console.log(tab.indexOf('Sitangkai')); to check if the tab index is correct
      //get selected element index
      for(var i = 0; i <items.length; i++){
        items[i].onclick = function() {   
        document.getElementById('myTable').style.display = 'block';
        document.getElementById('message').innerHTML = '';
        index =  tab.indexOf(this.innerHTML);
  
        //console.log(this.innerHTML);
        document.querySelector('.classMunicipality').innerHTML = this.innerHTML;
          municipality = this.innerHTML;
          
         var config = {
      reportName : "Territory_Fact_Book_Report",
      //criteria: "(City_Municipality == " +municipality+ ")"
    }
      

 
      //initialization zoho
      ZOHO.CREATOR.init()
      .then(function(data) {
      var queryParams = ZOHO.CREATOR.UTIL.getQueryParams();
      //get all records API
      ZOHO.CREATOR.API.getAllRecords(config).then(function(response){
        //callback block
      
        var record = response.data; 
        console.log(record);//to check if response is correct

        for ( var i in record){
          if (record[i].City_Municipality == municipality){
            
            //region
            var region = record[i].Region;
            document.getElementById("region").innerHTML = region;

            //Province
            var province = record[i].Province;
            document.getElementById("province").innerHTML = province;

            //Territory design
            var territoryDesign = record[i].Territory_Design;
            document.getElementById("territory-design").innerHTML = territoryDesign;

            //Territory Classification
            var territoryClassification = record[i].Terrtory_Classification;
           document.getElementById("classification").innerHTML = territoryClassification;

            //Population
            var populationRecord = record[i].Population;
            console.log(populationRecord);
            for(var j in populationRecord){
            var city_municipality = record[i].City_Municipality;
            var population = populationRecord[j].display_value;
            const populationSplit = population.split(",");
            var trow = document.createElement('tr');
            var thead = document.createElement('th');
            thead.append(city_municipality);
            trow.append(thead);
              for (var k in populationSplit){
              var td= populationSplit[k];
              var tdata = document.createElement('td');
              tdata.append(td);
              trow.append(tdata);
            }
            document.querySelector('.tbody').append(trow);

              }
            
           
            //Names of Salespeople Assigned in the Territory
            var salesman= record[i].Names_of_Salesman;

            for(var j in salesman){
            var sales = salesman[j].display_value;
            const salesmanSplit = sales.split(",");
              for(var k in salesmanSplit){
                var td= salesmanSplit[k];
                document.getElementsByClassName("sales")[k].innerHTML=td;
              }
            }

            //Customers
            var customer= record[i].Customers;

            for(var j in customer){
            var customerdata = customer[j].display_value;
            const customerSplit = customerdata.split(",");
              for(var k in customerSplit){
                var td= customerSplit[k];
                document.getElementsByClassName("customer")[k].innerHTML=td;
              }
            }

             //Prospects
             var prospects= record[i].Prospects;

            for(var j in prospects){
            var prospectdata = prospects[j].display_value;
            const prospectSplit = prospectdata.split(",");
              for(var k in prospectSplit){
                var td= prospectSplit[k];
                document.getElementsByClassName("prospects")[k].innerHTML=td;
              }
            }
            //Territory Coverage Summary
            var coverageSummary = record[i].Territory_Coverage_Summary;
            for(var j in coverageSummary){
              var summaryData = coverageSummary[j].display_value;
              const summarySplit = summaryData.split(",");
              for(var k in summarySplit){
                var td= summarySplit[k];
              
                document.getElementsByClassName("summary")[k].innerHTML=td;
              }
            }
            //Territory Coverage Summary Subform
          
            
            //Key observation
            var key_observation = record[i].Key_Observations;
            document.getElementById('key-obs').innerHTML = key_observation;
            //Coverage plans
            var coveragePlans = record[i].Territory_Coverage_Plans;
            document.getElementById('plans').innerHTML = coveragePlans;

            //Historical Sales Performance
            var salesAverage = record[i].Sales_Average_No_of_SKUs;
            document.getElementById('sales-ave').innerHTML = salesAverage;
           
             //sales avenue
             var y1 = record[i].Sales_Y1;
             var y2 = record[i].Sales_Y2;
             var y3 = record[i].Sales_Y3;
            document.getElementById('y1').innerHTML = y1;
            document.getElementById('y2').innerHTML = y2;
            document.getElementById('y3').innerHTML = y3;

            //Listed Accounts
            var la = record[i].No_of_Listed_Accounts_Average_No_of_SKUs_Carried;
            document.getElementById('la').innerHTML = la;

            var la_y1 = record[i].No_of_Listed_Accounts;
             var la_y2 = record[i].No_of_Listed_Accounts_Y2;
             var la_y3 = record[i].No_of_Listed_Accounts_Y3;
            document.getElementById('la-y1').innerHTML = la_y1;
            document.getElementById('la-y2').innerHTML = la_y2;
            document.getElementById('la-y3').innerHTML = la_y3;

            //regular buying
            var rb = record[i].Sales_Average_No_of_SKUs_Carried;
            document.getElementById('rb').innerHTML = rb;

            var rb_y1 = record[i].Regularly_Buying_Y1;
             var rb_y2 = record[i].Regularly_Buying_Y2;
             var rb_y3 = record[i].Regularly_Buying_Y3;
            document.getElementById('rb-y1').innerHTML = rb_y1;
            document.getElementById('rb-y2').innerHTML = rb_y2;
            document.getElementById('rb-y3').innerHTML = rb_y3;
            //ocassional buying
            var ob = record[i].Occasionally_buying_Average_No_of_SKUs_Carried;
            document.getElementById('ob').innerHTML = ob;

            var ob_y1 = record[i].Occassiona;
             var ob_y2 = record[i].Occasionally_Buying_Y2;
             var ob_y3 = record[i].Occasionally_Buying_Y3;
            document.getElementById('ob-y1').innerHTML = ob_y1;
            document.getElementById('ob-y2').innerHTML = ob_y2;
            document.getElementById('ob-y3').innerHTML = ob_y3;

             //dormant accounts
             var da = record[i].Dormant_Accounts_Average_No_of_SKUs_Carried;
            document.getElementById('da').innerHTML = da;

            var da_y1 = record[i].Dormant_Accounts_Y1;
             var da_y2 = record[i].Dormant_Accounts_Y2;
             var da_y3 = record[i].Dormant_Accounts_Y3;
            document.getElementById('da-y1').innerHTML = ob_y1;
            document.getElementById('da-y2').innerHTML = ob_y2;
            document.getElementById('da-y3').innerHTML = ob_y3;

             //productive rates
             var pr = record[i].Productivity_Rates_Average_No_of_SKUs_Carried;
            document.getElementById('pr').innerHTML = pr;

            var pr_y1 = record[i].Productivity_Rates;
             var pr_y2 = record[i].Productivity_Rates1;
             var pr_y3 = record[i].Productivity_Rates_Y3;
            document.getElementById('pr-y1').innerHTML = pr_y1;
            document.getElementById('pr-y2').innerHTML = pr_y2;
            document.getElementById('pr-y3').innerHTML = pr_y3;


             //Key observation 1
             var key_observation1 = record[i].Key_Observations1;
            document.getElementById('key-obs1').innerHTML = key_observation1;
            
            //SWOT 1
            var strength = record[i].Strengths;
            var weakness = record[i].Weaknesses;
            var opportunities = record[i].Opportunities;
            var threats = record[i].Threats;
            var klp = record[i].Our_Key_Leverage_Points;
            var bi = record[i].Business_Implications;
            document.getElementById('strength').innerHTML = strength;
            document.getElementById('weakness').innerHTML = weakness;
            document.getElementById('opportunities').innerHTML = opportunities;
            document.getElementById('threats').innerHTML = threats;
            document.getElementById('klp').innerHTML = klp;
            document.getElementById('bi').innerHTML = bi;

            //Factors 
            var py = record[i].Previous_Year;
            var py2 = record[i].Previous_Year1;
            var cpy1 = record[i].Current;
            var cpy2 = record[i].Current_Planned_Year;
            document.getElementById('py1').innerHTML = py;
            document.getElementById('py2').innerHTML = py2;
            document.getElementById('cpy1').innerHTML = cpy1;
            document.getElementById('cpy2').innerHTML = cpy2;

            //Factors 2

            var factors = record[i].Positive2;
            //var factorElement = factors;
            document.getElementsByClassName('positive')[0].innerHTML = factors;
            var factors2 = record[i].Positive1;
            //var factorElement = factors;
            document.getElementsByClassName('positive2')[0].innerHTML = factors2;

            var factors = record[i].Negative;
            //var factorElement = factors;
            document.getElementsByClassName('negative')[0].innerHTML = factors;
            var factors2 = record[i].Negative_1;
            //var factorElement = factors;
            document.getElementsByClassName('negative2')[0].innerHTML = factors2;


            //Key observation 2
            var key_observation2 = record[i].Key_Observations_Historical_Performance_Sales_I_and_II;
            document.getElementById('key-obs2').innerHTML = key_observation2;

            //SWOT 2
            var strength2 = record[i].sStre;
            var weakness2 = record[i].Weaknesses1;
            var opportunities2 = record[i].Opportunities1;
            var threats2 = record[i].Threats1;
            var klp2 = record[i].Their_Key_Leverage_Points;
            var bi2 = record[i].Business_Implications_to_their_Company;
            document.getElementById('strength2').innerHTML = strength2;
            document.getElementById('weakness2').innerHTML = weakness2;
            document.getElementById('opportunities2').innerHTML = opportunities2;
            document.getElementById('threats2').innerHTML = threats2;
            document.getElementById('klp2').innerHTML = klp2;
            document.getElementById('bi2').innerHTML = bi2;

            //SWOT 2
            var strength3 = record[i].Strengths2;
            var weakness3 = record[i].Weaknesses2;
            var opportunities3 = record[i].Opportunities2;
            var threats3 = record[i].Threats2;
            var klp3 = record[i].Key_Leverage_Points;
            var bi3 = record[i].Business_Implications1;
            document.getElementById('strength3').innerHTML = strength3;
            document.getElementById('weakness3').innerHTML = weakness3;
            document.getElementById('opportunities3').innerHTML = opportunities3;
            document.getElementById('threats3').innerHTML = threats3;
            document.getElementById('klp3').innerHTML = klp3;
            document.getElementById('bi3').innerHTML = bi3;

            //Key observation 3
            var key_observation3 = record[i].Key_Observations2;
            document.getElementById('key-obs3').innerHTML = key_observation3;

            //mision & vision
            var mission = record[i].Our_Mission;
            var vision = record[i].Our_Mission_in_the_Territory;
            document.getElementById('mission').innerHTML = mission;
            document.getElementById('vision').innerHTML = vision;

            //core values
            var core_values = record[i].Core_VA;
            document.getElementById('core-values').innerHTML = core_values;

            //objectives 
            var financial = record[i].Objectives_in_the_Territory_Financial;
            var marketingSales = record[i].Objectives_in_the_Territory_Financial1;
            var operational = record[i].Objectives_in_the_Territory_Operational;
            var organizational = record[i].Objectives_in_the_Territory_Organizational;

            document.getElementById('financial').innerHTML = financial;
            document.getElementById('marketingSales').innerHTML = marketingSales;
            document.getElementById('operational').innerHTML = operational;
            document.getElementById('organizational').innerHTML = organizational;

            //strategies
            var financial2 = record[i].Our_Core_Strategies_Financial;
            var marketingSales2 = record[i].Our_Core_Strategies_Marketing_and_Sales;
            var operational2 = record[i].Our_Core_Strategies_Operational;
            var organizational2 = record[i].Our_Core_Strategies_Organizational;

            document.getElementById('financial2').innerHTML = financial2;
            document.getElementById('marketingSales2').innerHTML = marketingSales2;
            document.getElementById('operational2').innerHTML = operational2;
            document.getElementById('organizational2').innerHTML = organizational2;
          
           //CALENDAR OF ACTIVITIES IN THE TERRITORY
           var calendar = record[i].Calendar_of_Activities_in_the_Territory;

            for(var j in calendar){
            var calendardata = calendar[j].display_value;
            const calendarSplit = calendardata.split(",");
              for(var k in calendarSplit){
                var td= calendarSplit[k];
                document.getElementsByClassName("calendar")[k].innerHTML=td;
              }
            }

            //metrics
            var metrics = record[i].Performance_Metrics;
            document.getElementById('metrics').innerHTML = metrics;

            //policy & procedure
            var general = record[i].General;
            var marketing = record[i].Marketing;
            var product = record[i].Product_Pipelining_Delisting;
            var pricing = record[i].Pricing;
            var ordering = record[i].Ordering_Invoicing;
            var promotion = record[i].Promotionn;
            var service = record[i].Customer_Service;

            document.getElementById('general').innerHTML = general;
            document.getElementById('marketing').innerHTML = marketing;
            document.getElementById('product').innerHTML = product;
            document.getElementById('pricing').innerHTML = pricing;
            document.getElementById('ordering').innerHTML = ordering;
            document.getElementById('promotion').innerHTML = promotion;
            document.getElementById('service').innerHTML = service;



             //Key observation 4
             var key_observation4 = record[i].Key_Observations4;
            document.getElementById('key-obs4').innerHTML = key_observation4;
          } else {
            document.getElementById('message').innerHTML = message;
            document.getElementById('myTable').style.display = 'none';
          }
          return null;
        }

    });//end of zoho creator api
    

  });//end of zoho initialization
  
  };//end of selected function
  
}



