people={},people.listOfNames=[],people.data={},people.loadPeople=function(){var e=[["AT","Andrew Tinari"],["CK","Chad Paul Karty"],["CD","Clara Celeste Dobiesz Dykstra"],["DC","Dexter Callender"],["DP","Dongfang Pang"],["IN","Isabel Narea"],["JP","Julie Pedtke"],["MS","Miranda Shugars"],["NJ","Nishant Jacob"],["RN","Rachel Ka-Yen Ng"],["RS","Ray Santay"],["TZ","Taylor Zanke"],["VL","Valerie Lechene"],["VW","Violet Whitney"],["YK","Yassi Kazemzadeh"],["DT","Dan Taeyoung"]];_.each(e,function(e){people.data[e[0]]={},people.data[e[0]].name=e[1],people.data[e[0]].firstname=e[1].split(" ")[0]}),_.forEach(people.data,function(e,a){people.listOfNames.push(a.toUpperCase())})},people.getData=function(){return people.data},people.start=function(){people.loadPeople()};