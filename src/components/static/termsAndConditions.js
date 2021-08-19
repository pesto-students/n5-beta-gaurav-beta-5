import React from "react";
import { Container, Paper, Box } from "@material-ui/core";
import { Static } from "../../styles/static.styles";
function Tnc() {
	const listTxt = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aliquam tincidunt mauris eu risus.
                    Vestibulum auctor dapibus neque.
                    Nunc dignissim risus id metus.
                    Cras ornare tristique elit.
                    Vivamus vestibulum ntulla nec ante.
                    Praesent placerat risus quis eros.
                    Fusce pellentesque suscipit nibh.
                    Cras ornare tristique elit.
                    Vivamus vestibulum ntulla nec ante.
                    Praesent placerat risus quis eros.
                    Fusce pellentesque suscipit nibh.`.split("\n");

	return (
		<Static>
			<Container>
				<Paper className="paper">
					<Box className="heading">
						<h2>Terms & Conditions</h2>
					</Box>
					<Box>
						<ul>
							{listTxt.map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</ul>
					</Box>
				</Paper>
			</Container>
		</Static>
	);
}

export default Tnc;
