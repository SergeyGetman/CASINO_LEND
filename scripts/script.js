function showModal() {
	document.body.insertAdjacentHTML(
		'beforeend',
		`
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">

          
              <img src="./assets/images/bonuses/bonus_plus_100.png" alt="bonus">
 
        </div>
      </div>
          `
	);

	const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
	return modal.show();
}

function showModal2() {
	document.body.insertAdjacentHTML(
		'beforeend',
		`
            <div class="modal fade" id="winner-modal-100" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          
                 <img id="rotatingImage" src="./assets/images/bonuses/bonus-general.png" alt="bonus">
          </div>
        </div>
      </div>
          `
	);

	const modal = new bootstrap.Modal(document.getElementById('winner-modal-100'));
	return modal.show();
}



function checkedValueSpin(spinCount) {

  switch (spinCount) {
      case 1:
          showModal2();
          break;
      case 2:
          showModal();
          checCountForRedirectUser+=1;
          break;
      default:
          alert("This is impossible");
          break;
  }
}

	let counter = 0;
  let timeStemp = 3000;

	function writeCircle() {
		const img = document.getElementById('rotatingImage');

		counter += 1;
    

	 	counter === 1
			? (img.style.animation = `rotateForHundred 3s ease-in-out forwards`)
			: (img.style.animation = `rotate 3s ease ${1}`) && checCountForRedirectUser(counter);

      setTimeout(() => {
         checkedValueSpin(counter)
         checCountForRedirectUser(counter);
      }, timeStemp)


	}

  function checCountForRedirectUser(count){
    console.log('count', count);
    
    if(count === 2){
      setTimeout(() => {
        document.getElementById('showModalBtn').click();
      }, timeStemp)
      
    }
  }


