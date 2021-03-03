import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Game2 from Game2

function Game1_4() {
	return (
		<Link to='/game/1_3'>
            <section class="d-flex justify-content-center align-items-center m-5">
				<div class="column customsection">
					<div class="backgroundtext align-items-center col-md">
						<h3 class="name">{{users_name}}</h3>
						<div class="line mb-5"></div>
						<div class="container d-flex justify-content-center px-5">
							<p class="mb-5 dialogue">
								Oh! Hey, there’s Joel! Eh… I should have enough time to just say hi.
							</p>
						</div>
					</div>
				</div>
			</section>
        </Link>
	);
}

export default Game1_4;
