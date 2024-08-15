function showModal() {
	document.body.insertAdjacentHTML(
		'beforeend',
		`
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
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
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          
                 <img src="./assets/images/bonuses/bonus-general.png" alt="bonus">
          </div>
        </div>
      </div>
          `
	);

	const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
	return modal.show();
}



	let counter = 0;

	function writeCircle() {
		const img = document.getElementById('rotatingImage');

		counter += 1;

	 return	counter === 1
			? (img.style.animation = `rotateForHundred 3s ease-in-out forwards`)
			: (img.style.animation = `rotate 3s ease ${1}`);

	}


