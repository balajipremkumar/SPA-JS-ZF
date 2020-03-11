(function () {
    fetch('./Screen.json')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            appendData(data);
        })
        .catch((error) => {
            console.log(error);
        })

    function appendData(data) {
        var mainContainer = document.getElementById("myData");
        for (var i = 0;eachData = data[i], i < data.length; i++) {
            if(eachData.option && eachData.option.length > 0) {     
               for (var j=0; j < eachData.option.length; j++ ){
              var div = document.createElement('div');
                div.innerHTML =`<div>
                                 <label for=${eachData.option[j].value}> ${eachData.option[j].value}</label> 
                                 <input type=${data[i].type} id=${eachData.option[j].id} name=${eachData.option[j].id}>
                                </div>`;
              mainContainer.appendChild(div);
            //   div.innerHTML = `<div><label for=${data[i].name}>${data[i].name}</label>
            //   <select id=${eachData.option[j].id}>
            //     <option value= ${eachData.option[j].value}> ${eachData.option[j].value}</option>
            //   </select></div>`
            }
        }  
            var div = document.createElement('div');
            div.innerHTML = `<div class="form-group"> <label for=${data[i].name}>${data[i].name}</label> <input type=${data[i].type} class="form-control" id=${data[i].name} ${data[i].required}></div>`;
            mainContainer.appendChild(div);
                 
      }
    }

})();

    // for (var j=0; j < data.option.length; j++){
            //     var div = document.createElement('div');
            //     div.innerHTML =`<div>
            //     <input type=${data[i].type} id=${eachData.option[0].id} name=${eachData.option[0].id}
            //            checked>
            //     <label for=${eachData.option[0].value}>eachData.option[0].value</label>
            //   </div>
              
            //   <div>
            //     <input type="checkbox" id="horns" name="horns">
            //     <label for="horns">Horns</label>
            //   </div>`
            // }