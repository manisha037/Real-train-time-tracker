let stationCode8 = document.querySelector("#stationCode8");
let tableAppend8 = document.querySelector('#tableAppend8');

let submitbtn8 = document.querySelector('.submit-btn8');

let flag8 = true;

let resultBox8 = document.querySelector('.resultBox8');

submitbtn8.addEventListener('click',()=>{
    event.preventDefault(); // Stops webpage from reloading automatically after form submission

        if(stationCode8.value=="code"){
            alert("Please select station code");
            return;
        }

        
        // API Call
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '85385a3127msha8c2f3f26b71ee5p115400jsn3f051379381c', // Change rapidapi key here
                'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
            }
        };
                

        fetch(`https://irctc1.p.rapidapi.com/api/v1/searchStation?query=${stationCode8.value}`, options)
        .then(response =>response.json())
        .then(response =>{
             console.log(response);
             for(let i=0; i<response.data.length; i++){
                if(response.data[i].code=="BJU"){
                    let tr8 = document.createElement('tr');
                    tr8.innerHTML = `<td><a href="#">${response.data[i].eng_name}</a></td><td class="amount">${response.data[i].state_name}</td>`;
                    tableAppend8.appendChild(tr8);
                    break;
                }
            }
        })
        .catch(err => console.error(err));



            // Show resultBox
            if(flag8){
                resultBox8.style.display = 'grid';
                flag8 = false;
            }


});

