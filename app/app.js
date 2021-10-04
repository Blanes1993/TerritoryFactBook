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
        count = 0;

        for ( var i in record){
          if (record[i].City_Municipality == municipality){
            // var htmltag = document.querySelector('html');
            // console.log(htmltag);
            count = count + 1;
            var section = document.createElement('section');
            
            //region
            var region = record[i].Region;
            var regionElement = document.createElement('h5');
            var regionLabel = document.createElement('strong');
            var regionSpan = document.createElement('span');
            regionElement.classList.add('modal-title', 'p-2');
            regionLabel.append("Region: ");
            regionSpan.append(region);
            regionElement.append(regionLabel);
            regionElement.append(regionSpan);
            section.append(regionElement);


            //Province
            var province = record[i].Province;
            var provinceElement = document.createElement('h5');
            var provinceLabel = document.createElement('strong');
            var provinceSpan = document.createElement('span');
            provinceElement.classList.add('modal-title', 'p-2');
            provinceLabel.append("Province: ");
            provinceSpan.append(province);
            provinceElement.append(provinceLabel);
            provinceElement.append(provinceSpan);
            section.append(provinceElement);

            //Territory design
            var territoryDesign = record[i].Territory_Design;
            //create element
            var tdElement = document.createElement('h5');
            var tdLabel = document.createElement('strong');
            var tdSpan = document.createElement('span');
            //adding classes to element
            tdElement.classList.add('modal-title', 'p-2');
            //appending data to element --> ang naa sa sud sa parentheses kay maoy esud ddto sa element
            tdLabel.append("Method of Territory Design: ");
            tdSpan.append(territoryDesign);
            tdElement.append(tdLabel);
            tdElement.append(tdSpan);
            section.append(tdElement);

            //Population
            var populationRecord = record[i].Population;
            var prLabel1 = document.createElement('h5');
            var prLabel = document.createElement('h5');
            var prStrong1 = document.createElement('strong');
            var prStrong = document.createElement('strong');
            var prTable = document.createElement('table');
            var prThead = document.createElement('thead');
            var prTr = document.createElement('tr');
            var thCM = document.createElement('th');
            var thPPY = document.createElement('th');
            var thPCY = document.createElement('th');
            var thShare = document.createElement('th');
            prStrong1.append("Facts about Territory as a Political Unit");
            prLabel1.append(prStrong1);
            prLabel1.classList.add('p-2');
            section.append(prLabel1);
            prStrong.append("Names of Salespeople Assigned in the territory");
            prLabel.append(prStrong);
            prLabel.classList.add('p-2');
            section.append(prLabel);
            thCM.append("City and Municipality");
            thPPY.append("Population Prior Year");
            thPCY.append("population Current Year");
            thShare.append("% Share");
            prTable.classList.add('table', 'table-bordered');
            prTr.append(thCM);
            prTr.append(thPPY);
            prTr.append(thPCY);
            prTr.append(thShare);
            prThead.append(prTr);
            prTable.append(prThead);

            for(var j in populationRecord){
            var city_municipality = record[i].City_Municipality;
            var population = populationRecord[j].display_value;
            const populationSplit = population.split(",");
            var trow = document.createElement('tr');
            var thead = document.createElement('th');
            var prtbody = document.createElement('tbody');
            prtbody.classList.add('tbody');
            thead.append(city_municipality);
            trow.append(thead);
              for (var k in populationSplit){
              var td= populationSplit[k];
              var tdata = document.createElement('td');
              tdata.append(td);
              trow.append(tdata);
            }
            prtbody.append(trow);
            prTable.append(prtbody);
            }
            section.append(prTable);

             //Territory Classification
             var territoryClassification = record[i].Terrtory_Classification;
             var tcElement = document.createElement('h5');
             var tcLabel = document.createElement('strong');
             var tcSpan = document.createElement('span');
             tcElement.classList.add('modal-title', 'p-2');
             tcLabel.append("Territory Classification: ");
             tcSpan.append(territoryClassification);
             tcElement.append(tcLabel);
             tcElement.append(tcSpan);
             section.append(tcElement);
           
            //Names of Salespeople Assigned in the Territory
            var salesman = record[i].Names_of_Salesman;
            var salesLabel = document.createElement('h5');
            var salesStrong = document.createElement('strong');
            var salesTable = document.createElement('table');
            var salesThead = document.createElement('thead');
            var salesTr = document.createElement('tr');
            var salesName = document.createElement('th');
            var period = document.createElement('th');
            var rfl = document.createElement('th');
            salesStrong.append("Names of Salespeople Assigned in the territory");
            salesLabel.append(salesStrong);
            salesLabel.classList.add('p-2');
            section.append(salesLabel);
            salesName.append("Name of Salesman");
            period.append("Period");
            rfl.append("Reason/s for Leaving");
            salesTable.classList.add('table', 'table-bordered');
            salesTr.append(salesName);
            salesTr.append(period);
            salesTr.append(rfl);
            salesThead.append(salesTr);
            salesTable.append(salesThead);

            for(var j in salesman){
            var sales = salesman[j].display_value;
            const salesmanSplit = sales.split(",");
            var trow = document.createElement('tr');
            var salestbody = document.createElement('tbody');
            salestbody.classList.add('tbody-sm');
              for(var k in salesmanSplit){
                var td= salesmanSplit[k];
                var tdata = document.createElement('td');
                tdata.append(td);
                trow.append(tdata);
              }
              salestbody.append(trow);
              salesTable.append(salestbody);
            }
            section.append(salesTable);

            //Customers
            var customer= record[i].Customers;
            var csLabel = document.createElement('h5');
            var csStrong = document.createElement('strong');
            var csTable = document.createElement('table');
            var csThead = document.createElement('thead');
            var csTr = document.createElement('tr');
            var csName = document.createElement('th');
            var csCT = document.createElement('th');
            var csArea = document.createElement('th');
            var csAAMS = document.createElement('th');
            var csFQ = document.createElement('th');
            csStrong.append("Master List of Customers and Prospects");
            csLabel.append(csStrong);
            section.append(csLabel);
            csLabel.classList.add('p-2');
            csName.append("Customer Name");
            csCT.append("Channel Type");
            csArea.append("Area");
            csAAMS.append("Actual Ave. Monthly Sales");
            csFQ.append("FQ");
            csTable.classList.add('table', 'table-bordered');
            csTr.append(csName);
            csTr.append(csCT);
            csTr.append(csArea);
            csTr.append(csAAMS);
            csTr.append(csFQ);
            csThead.append(csTr);
            csTable.append(csThead);

            for(var j in customer){
            var customerdata = customer[j].display_value;
            const customerSplit = customerdata.split(",");
            var trow = document.createElement('tr');
            var cstbody = document.createElement('tbody');
            cstbody.classList.add('tbody-customer');
              for(var k in customerSplit){
                var td= customerSplit[k];
                var tdata = document.createElement('td');
                tdata.append(td);
                trow.append(tdata);
              }
              cstbody.append(trow);
              csTable.append(cstbody);
            }
            section.append(csTable);

             //Prospects
             var prospects= record[i].Prospects;
             var psLabel = document.createElement('h5');
             var psStrong = document.createElement('strong');
             var psTable = document.createElement('table');
             var psThead = document.createElement('thead');
             var psTr = document.createElement('tr');
             var psName = document.createElement('th');
             var psCT = document.createElement('th');
             var psArea = document.createElement('th');
             var psAAMS = document.createElement('th');
             var psFQ = document.createElement('th');
             psStrong.append("Prospect:");
             psLabel.append(psStrong);
             psLabel.classList.add('p-2');
             section.append(psLabel);
             psName.append("Propect's Name");
             psCT.append("Channel Type");
             psArea.append("Area");
             psAAMS.append("Actual Ave. Monthly Sales");
             psFQ.append("FQ");
             psTable.classList.add('table', 'table-bordered');
             psTr.append(psName);
             psTr.append(psCT);
             psTr.append(psArea);
             psTr.append(psAAMS);
             psTr.append(psFQ);
             psThead.append(psTr);
             psTable.append(psThead);

            for(var j in prospects){
            var prospectdata = prospects[j].display_value;
            const prospectSplit = prospectdata.split(",");
            var trow = document.createElement('tr');
            var pstbody = document.createElement('tbody');
            pstbody.classList.add('tbody-prospects');
              for(var k in prospectSplit){
                var td= prospectSplit[k];
                var tdata = document.createElement('td');
                tdata.append(td);
                trow.append(tdata);
              }
              pstbody.append(trow);
              psTable.append(pstbody);
            }
            section.append(psTable);

              //Territory Coverage Summary
            // var coverageSummary = record[i].Territory_Coverage_Summary;
            //Territory Coverage Summary
            // var coverageSummary = record[i].Territory_Coverage_Summary;
            // for(var j in coverageSummary){
            //   var summaryData = coverageSummary[j].display_value;
            //   const summarySplit = summaryData.split(",");
            //   var trow = document.createElement('tr');
            //   for(var k in summarySplit){
            //     var td= summarySplit[k];
            //     var tdata = document.createElement('td');
            //     tdata.append(td);
            //     trow.append(tdata);
            //   }
            //   //you can change to append
            //   document.querySelector('.tbody-summary').prepend(trow);
            // }
            //Territory Coverage Summary Subform
          
            
            //Key observation
            var key_observation = record[i].Key_Observations;
            var koElement = document.createElement('h5');
            var koStrong = document.createElement('strong');
            var koSpan = document.createElement('span');
            koElement.classList.add('p-2');
            koStrong.append("Key Observations: ");
            koSpan.append(key_observation);
            koElement.append(koStrong);
            koElement.append(koSpan);
            section.append(koElement);

            //Coverage plans
            var coveragePlans = record[i].Territory_Coverage_Plans;
            var tcpElement = document.createElement('h5');
            var tcpStrong = document.createElement('strong');
            var tcpSpan = document.createElement('span');
            tcpElement.classList.add('p-2');
            tcpStrong.append("Territory Coverage Plans: ");
            tcpSpan.append(coveragePlans);
            tcpElement.append(tcpStrong);
            tcpElement.append(tcpSpan);
            section.append(tcpElement);

            // Historical Sales Performance
            var salesAverage = record[i].Sales_Average_No_of_SKUs;
            var sy1 = record[i].Sales_Y1;
            var sy2 = record[i].Sales_Y2;
            var sy3 = record[i].Sales_Y3;

            var la = record[i].No_of_Listed_Accounts_Average_No_of_SKUs_Carried;
            var la_y1 = record[i].No_of_Listed_Accounts;
             var la_y2 = record[i].No_of_Listed_Accounts_Y2;
             var la_y3 = record[i].No_of_Listed_Accounts_Y3;

             var rb = record[i].Sales_Average_No_of_SKUs_Carried;
              var rb_y1 = record[i].Regularly_Buying_Y1;
             var rb_y2 = record[i].Regularly_Buying_Y2;
             var rb_y3 = record[i].Regularly_Buying_Y3;

             var ob = record[i].Occasionally_buying_Average_No_of_SKUs_Carried;
              var ob_y1 = record[i].Occassiona;
             var ob_y2 = record[i].Occasionally_Buying_Y2;
             var ob_y3 = record[i].Occasionally_Buying_Y3;

               var da = record[i].Dormant_Accounts_Average_No_of_SKUs_Carried;
              var da_y1 = record[i].Dormant_Accounts_Y1;
              var da_y2 = record[i].Dormant_Accounts_Y2;
              var da_y3 = record[i].Dormant_Accounts_Y3;

              var pr = record[i].Productivity_Rates_Average_No_of_SKUs_Carried;
              var pr_y1 = record[i].Productivity_Rates;
              var pr_y2 = record[i].Productivity_Rates1;
              var pr_y3 = record[i].Productivity_Rates_Y3;

            var hspElement = document.createElement('h5');
            var hspStrong = document.createElement('strong');
            var hspTable = document.createElement('table');
            var hspThead = document.createElement('thead');
            var hspTbody = document.createElement('tbody');
            var hspTr = document.createElement('tr');
            var hspBlank = document.createElement('th');
            var hspAve = document.createElement('th');
            var hspY1 = document.createElement('th');
            var hspY2 = document.createElement('th');
            var hspY3 = document.createElement('th');
           
            var sTr = document.createElement('tr');
            var sTd = document.createElement('td');
            var saTd = document.createElement('td');
            var saTdY1 = document.createElement('td');
            var saTdY2 = document.createElement('td');
            var saTdY3 = document.createElement('td');

            var lTr = document.createElement('tr');
            var lTd = document.createElement('td');
            var laTd = document.createElement('td');
            var laTdY1 = document.createElement('td');
            var laTdY2= document.createElement('td');
            var laTdY3 = document.createElement('td');
           
            var rTr = document.createElement('tr');
            var rTd = document.createElement('td');
            var rbTd = document.createElement('td');
            var rbTdY1 = document.createElement('td');
            var rbTdY2= document.createElement('td');
            var rbTdY3 = document.createElement('td');

            var bTr = document.createElement('tr');
            var bTd = document.createElement('td');
            var obTd = document.createElement('td');
            var obTdY1 = document.createElement('td');
            var obTdY2= document.createElement('td');
            var obTdY3 = document.createElement('td');

            var dTr = document.createElement('tr');
            var dTd = document.createElement('td');
            var daTd = document.createElement('td');
            var daTdY1 = document.createElement('td');
            var daTdY2= document.createElement('td');
            var daTdY3 = document.createElement('td');

            var pTr = document.createElement('tr');
            var pTd = document.createElement('td');
            var prTd = document.createElement('td');
            var prTdY1 = document.createElement('td');
            var prTdY2= document.createElement('td');
            var prTdY3 = document.createElement('td');

            hspStrong.append("Historical Sales Performance: ");
            hspElement.append(hspStrong);
            hspElement.classList.add('p-2');
            section.append(hspElement);
            hspBlank.append("");
            hspAve.append("Ave. No. of SKUs Carried");
            hspY1.append("Y1");
            hspY2.append("Y2");
            hspY3.append("Y3");
            hspTable.classList.add('table', 'table-bordered');
            hspTr.append(hspBlank);
            hspTr.append(hspAve);
            hspTr.append(hspY1);
            hspTr.append(hspY2);
            hspTr.append(hspY3);
            hspThead.append(hspTr);
            hspTable.append(hspThead);
          
            sTd.append("Sales");
            saTd.append(salesAverage);
            saTdY1.append(sy1);
            saTdY2.append(sy2);
            saTdY3.append(sy3);
            sTr.append(sTd);
            sTr.append(saTd);
            sTr.append(saTdY1);
            sTr.append(saTdY2);
            sTr.append(saTdY3);
            hspTbody.append(sTr);
            hspTable.append(hspTbody);

            lTd.append("No. of Listed Accounts");
            laTd.append(la);
            laTdY1.append(la_y1);
            laTdY2.append(la_y2);
            laTdY3.append(la_y3);
            lTr.append(lTd);
            lTr.append(laTd);
            lTr.append(laTdY1);
            lTr.append(laTdY2);
            lTr.append(laTdY3);
            hspTbody.append(lTr);
            hspTable.append(hspTbody);

            
            rTd.append("Regularly Buying");
            rbTd.append(rb);
            rbTdY1.append(rb_y1);
            rbTdY2.append(rb_y2);
            rbTdY3.append(rb_y3);
            rTr.append(rTd);
            rTr.append(rbTd);
            rTr.append(rbTdY1);
            rTr.append(rbTdY2);
            rTr.append(rbTdY3);
            hspTbody.append(rTr);
            hspTable.append(hspTbody);

            bTd.append("Occasionally Buying");
            obTd.append(ob);
            obTdY1.append(da_y1);
            obTdY2.append(da_y2);
            obTdY3.append(da_y3);
            bTr.append(bTd);
            bTr.append(obTd);
            bTr.append(obTdY1);
            bTr.append(obTdY2);
            bTr.append(obTdY3);
            hspTbody.append(bTr);
            hspTable.append(hspTbody);

            dTd.append("Dormant Accounts");
            daTd.append(da);
            daTdY1.append(ob_y1);
            daTdY2.append(ob_y2);
            daTdY3.append(ob_y3);
            dTr.append(dTd);
            dTr.append(daTd);
            dTr.append(daTdY1);
            dTr.append(daTdY2);
            dTr.append(daTdY3);
            hspTbody.append(dTr);
            hspTable.append(hspTbody);

            pTd.append("Productivity Rates");
            prTd.append(pr);
            prTdY1.append(pr_y1);
            prTdY2.append(pr_y2);
            prTdY3.append(pr_y3);
            pTr.append(pTd);
            pTr.append(prTd);
            pTr.append(prTdY1);
            pTr.append(prTdY2);
            pTr.append(prTdY3);
            hspTbody.append(pTr);
            hspTable.append(hspTbody);

            section.append(hspTable);
            

        //Key observation 1
            var key_observation1 = record[i].Key_Observations1;;
            var koElement1 = document.createElement('h5');
            var koStrong1 = document.createElement('strong');
            var koSpan1 = document.createElement('span');
            koElement1.classList.add('p-2');
            koStrong1.append("Key Observations(from the information above): ");
            koSpan1.append(key_observation1);
            koElement1.append(koStrong1);
            koElement1.append(koSpan1);
            section.append(koElement1);
            
             //sales avenue
 

            //Listed Accounts
     
      
           //regular buying
        
          


         //ocassional buying
       
             //dormant accounts
         

             //productive rates
         


          //    //Key observation 1
          //    var key_observation1 = record[i].Key_Observations1;
          //   
            
          //   //SWOT 1
          //   var strength = record[i].Strengths;
          //   var weakness = record[i].Weaknesses;
          //   var opportunities = record[i].Opportunities;
          //   var threats = record[i].Threats;
          //   var klp = record[i].Our_Key_Leverage_Points;
          //   var bi = record[i].Business_Implications;
          //   document.getElementById('strength').innerHTML = strength;
          //   document.getElementById('weakness').innerHTML = weakness;
          //   document.getElementById('opportunities').innerHTML = opportunities;
          //   document.getElementById('threats').innerHTML = threats;
          //   document.getElementById('klp').innerHTML = klp;
          //   document.getElementById('bi').innerHTML = bi;

          //   //Factors 
          //   var py = record[i].Previous_Year;
          //   var py2 = record[i].Previous_Year1;
          //   var cpy1 = record[i].Current;
          //   var cpy2 = record[i].Current_Planned_Year;
          //   document.getElementById('py1').innerHTML = py;
          //   document.getElementById('py2').innerHTML = py2;
          //   document.getElementById('cpy1').innerHTML = cpy1;
          //   document.getElementById('cpy2').innerHTML = cpy2;

          //   //Factors 2

          //   var factors = record[i].Positive2;
          //   //var factorElement = factors;
          //   document.getElementsByClassName('positive')[0].innerHTML = factors;
          //   var factors2 = record[i].Positive1;
          //   //var factorElement = factors;
          //   document.getElementsByClassName('positive2')[0].innerHTML = factors2;

          //   var factors = record[i].Negative;
          //   //var factorElement = factors;
          //   document.getElementsByClassName('negative')[0].innerHTML = factors;
          //   var factors2 = record[i].Negative_1;
          //   //var factorElement = factors;
          //   document.getElementsByClassName('negative2')[0].innerHTML = factors2;


          //   //Key observation 2
          //   var key_observation2 = record[i].Key_Observations_Historical_Performance_Sales_I_and_II;
          //   document.getElementById('key-obs2').innerHTML = key_observation2;

          //   //SWOT 2
          //   var strength2 = record[i].sStre;
          //   var weakness2 = record[i].Weaknesses1;
          //   var opportunities2 = record[i].Opportunities1;
          //   var threats2 = record[i].Threats1;
          //   var klp2 = record[i].Their_Key_Leverage_Points;
          //   var bi2 = record[i].Business_Implications_to_their_Company;
          //   document.getElementById('strength2').innerHTML = strength2;
          //   document.getElementById('weakness2').innerHTML = weakness2;
          //   document.getElementById('opportunities2').innerHTML = opportunities2;
          //   document.getElementById('threats2').innerHTML = threats2;
          //   document.getElementById('klp2').innerHTML = klp2;
          //   document.getElementById('bi2').innerHTML = bi2;

          //   //SWOT 2
          //   var strength3 = record[i].Strengths2;
          //   var weakness3 = record[i].Weaknesses2;
          //   var opportunities3 = record[i].Opportunities2;
          //   var threats3 = record[i].Threats2;
          //   var klp3 = record[i].Key_Leverage_Points;
          //   var bi3 = record[i].Business_Implications1;
          //   document.getElementById('strength3').innerHTML = strength3;
          //   document.getElementById('weakness3').innerHTML = weakness3;
          //   document.getElementById('opportunities3').innerHTML = opportunities3;
          //   document.getElementById('threats3').innerHTML = threats3;
          //   document.getElementById('klp3').innerHTML = klp3;
          //   document.getElementById('bi3').innerHTML = bi3;

          //   //Key observation 3
          //   var key_observation3 = record[i].Key_Observations2;
          //   document.getElementById('key-obs3').innerHTML = key_observation3;

          //   //mision & vision
          //   var mission = record[i].Our_Mission;
          //   var vision = record[i].Our_Mission_in_the_Territory;
          //   document.getElementById('mission').innerHTML = mission;
          //   document.getElementById('vision').innerHTML = vision;

          //   //core values
          //   var core_values = record[i].Core_VA;
          //   document.getElementById('core-values').innerHTML = core_values;

          //   //objectives 
          //   var financial = record[i].Objectives_in_the_Territory_Financial;
          //   var marketingSales = record[i].Objectives_in_the_Territory_Financial1;
          //   var operational = record[i].Objectives_in_the_Territory_Operational;
          //   var organizational = record[i].Objectives_in_the_Territory_Organizational;

          //   document.getElementById('financial').innerHTML = financial;
          //   document.getElementById('marketingSales').innerHTML = marketingSales;
          //   document.getElementById('operational').innerHTML = operational;
          //   document.getElementById('organizational').innerHTML = organizational;

          //   //strategies
          //   var financial2 = record[i].Our_Core_Strategies_Financial;
          //   var marketingSales2 = record[i].Our_Core_Strategies_Marketing_and_Sales;
          //   var operational2 = record[i].Our_Core_Strategies_Operational;
          //   var organizational2 = record[i].Our_Core_Strategies_Organizational;

          //   document.getElementById('financial2').innerHTML = financial2;
          //   document.getElementById('marketingSales2').innerHTML = marketingSales2;
          //   document.getElementById('operational2').innerHTML = operational2;
          //   document.getElementById('organizational2').innerHTML = organizational2;
          
          //  //CALENDAR OF ACTIVITIES IN THE TERRITORY
          //  var calendar = record[i].Calendar_of_Activities_in_the_Territory;
          //  // console.log(calendar);
          //   for(var j in calendar){
          //   var calendardata = calendar[j].display_value;
          //   const calendarSplit = calendardata.split(",");
          //   var trow = document.createElement('tr');
          //     for(var k in calendarSplit){
          //       var td= calendarSplit[k];
          //       var tdata = document.createElement('td');
          //       tdata.append(td);
          //       trow.append(tdata);
          //     }
          //     document.querySelector('.tbody-calendar').append(trow);
          //   }

          //   //metrics
          //   var metrics = record[i].Performance_Metrics;
          //   document.getElementById('metrics').innerHTML = metrics;

          //   //policy & procedure
          //   var general = record[i].General;
          //   var marketing = record[i].Marketing;
          //   var product = record[i].Product_Pipelining_Delisting;
          //   var pricing = record[i].Pricing;
          //   var ordering = record[i].Ordering_Invoicing;
          //   var promotion = record[i].Promotionn;
          //   var service = record[i].Customer_Service;

          //   document.getElementById('general').innerHTML = general;
          //   document.getElementById('marketing').innerHTML = marketing;
          //   document.getElementById('product').innerHTML = product;
          //   document.getElementById('pricing').innerHTML = pricing;
          //   document.getElementById('ordering').innerHTML = ordering;
          //   document.getElementById('promotion').innerHTML = promotion;
          //   document.getElementById('service').innerHTML = service;



          //    //Key observation 4
          //    var key_observation4 = record[i].Key_Observations4;
          //   document.getElementById('key-obs4').innerHTML = key_observation4;
         
          document.querySelector('.modal-body').append(section);
        }
        }
        if (count == 0) {
          var NoSection = document.createElement('section');
          NoSection.append("No Data Available");
          document.querySelector('.modal-body').append(NoSection);
        
      }

    });//end of zoho creator api
    

  });//end of zoho initialization
 
  };//end of selected function
}



// function hideData(){

//   document.getElementById("hideData1").innerHTML = "none";
//   document.getElementById("hideData2").innerHTML = "none";
//   document.getElementById("hideData3").innerHTML = "none";
//   document.getElementById("hideData4").innerHTML = "none";
//   document.getElementById("hideData5").innerHTML = "none";
//   document.getElementById("hideData6").innerHTML = "none";

// }