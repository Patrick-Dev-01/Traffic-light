function traffic_light(){
   // qual semaforo ira abrir primeiro 
   isVehicle = false;

   // pegar todas cores do semaforo de carros
   let vehicle_green = document.getElementById('green-light-vehicle');
   let vehicle_yellow = document.getElementById('yellow-light-vehicle');
   let vehicle_red = document.getElementById('red-light-vehicle');

   // pegar todas cores do semaforo de pedestres
   let pedestrian_green = document.getElementById('green-light-pedestrian');
   let pedestrian_red = document.getElementById('red-light-pedestrian');
      
   let vehicle = document.getElementById('vehicles');
   let pedestrian = document.getElementById('pedestrians');

   // eventos     
   vehicle.addEventListener('click', vehicles);
   pedestrian.addEventListener('click', vehicleAtention);
   
   function vehicles(){   
       vehicle_red.classList.remove('active');
       vehicle_red.style.boxShadow = 'none';
       pedestrian_green.classList.remove('active');
       pedestrian_green.style.boxShadow = 'none';

    // abrir o semaforo de veiculo    
       vehicle_green.classList.add('active');
       vehicle_green.style.boxShadow = '1px 1px 5px 8px rgb(1, 248, 1)';
       pedestrian_red.classList.add('active');
       pedestrian_red.style.boxShadow = '1px 1px 5px 8px red';
       
    // semaforo de veiculo foi ativado primeiro   
       isVehicle = true;
   }
    
    function vehicleAtention(){
        // se o primeiro semaforo ativado foi o veiculo
        if(isVehicle === true){   
           vehicle_green.classList.remove('active');
           vehicle_green.style.boxShadow = 'none';

           // luz amarela se ativa   
           vehicle_yellow.classList.add('active');
           vehicle_yellow.style.boxShadow = '1px 1px 5px 8px yellow';
        
           // apos 3 segundos abre chama a função que abre o semaforo de pedestres
           setTimeout(pedestrians, 3000)

           isVehicle = false;
        }
       // se o de pedestre for ativado primeiro     
        else{
           pedestrians();
        }
    }

    function pedestrians(){    
       pedestrian_red.classList.remove('active');
       pedestrian_red.style.boxShadow = 'none';
       vehicle_yellow.classList.remove('active');
       vehicle_yellow.style.boxShadow = 'none';
       
       // abrir semaforo de pedestres e fechar o de veiculos    
       vehicle_red.classList.add('active');
       vehicle_red.style.boxShadow = '1px 1px 5px 8px red';
       pedestrian_green.classList.add('active');
       pedestrian_green.style.boxShadow = '1px 1px 5px 8px rgb(1, 248, 1)';
    }
}