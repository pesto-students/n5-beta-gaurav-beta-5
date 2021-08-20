import React from "react";
import { Container, Paper, Box } from "@material-ui/core";
import { Static } from "../../styles/static.styles";
function Content() {
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
				<Paper className="paper" id="about">
					<Box className="heading">
						<h2>About Us</h2>
					</Box>
					<Box>
						<p>
							<b>
								Maecenas tristique auctor maximus. Curabitur sit
								amet dui velit?
							</b>
						</p>
						<p>
							Suspendisse vitae magna volutpat, sollicitudin erat
							sit amet, luctus dui. Vestibulum quis congue purus.
							Sed auctor varius leo, vitae convallis felis posuere
							sed. Suspendisse vitae magna volutpat, sollicitudin
							erat sit amet, luctus dui. Vestibulum quis congue
							purus. Sed auctor varius leo, vitae convallis felis
							posuere sed. Suspendisse vitae magna volutpat,
							sollicitudin erat sit amet, luctus dui. Vestibulum
							quis congue purus. Sed auctor varius leo, vitae
							convallis felis posuere sed. Suspendisse vitae magna
							volutpat, sollicitudin erat sit amet, luctus dui.
							Vestibulum quis congue purus. Sed auctor varius leo,
							vitae convallis felis posuere sed. Suspendisse vitae
							magna volutpat, sollicitudin erat sit amet, luctus
							dui. Vestibulum quis congue purus. Sed auctor varius
							leo, vitae convallis felis posuere sed.
						</p>
						<p>
							<b>
								Maecenas tristique auctor maximus. Curabitur sit
								amet dui velit?
							</b>
						</p>
						<p>
							Suspendisse vitae magna volutpat, sollicitudin erat
							sit amet, luctus dui. Vestibulum quis congue purus.
							Sed auctor varius leo, vitae convallis felis posuere
							sed
						</p>
						<p>
							<b>
								Maecenas tristique auctor maximus. Curabitur sit
								amet dui velit?
							</b>
						</p>
						<p>
							Suspendisse vitae magna volutpat, sollicitudin erat
							sit amet, luctus dui. Vestibulum quis congue purus.
							Sed auctor varius leo, vitae convallis felis posuere
							sed
						</p>
					</Box>
				</Paper>
				<Paper className="paper" id="faq">
					<Box className="heading">
						<h2>FAQ</h2>
					</Box>
					<Box>
						<p>
							<b>
								Maecenas tristique auctor maximus. Curabitur sit
								amet dui velit?
							</b>
						</p>
						<p>
							Suspendisse vitae magna volutpat, sollicitudin erat
							sit amet, luctus dui. Vestibulum quis congue purus.
							Sed auctor varius leo, vitae convallis felis posuere
							sed
						</p>
						<p>
							<b>
								Maecenas tristique auctor maximus. Curabitur sit
								amet dui velit?
							</b>
						</p>
						<p>
							Suspendisse vitae magna volutpat, sollicitudin erat
							sit amet, luctus dui. Vestibulum quis congue purus.
							Sed auctor varius leo, vitae convallis felis posuere
							sed
						</p>
						<p>
							<b>
								Maecenas tristique auctor maximus. Curabitur sit
								amet dui velit?
							</b>
						</p>
						<p>
							Suspendisse vitae magna volutpat, sollicitudin erat
							sit amet, luctus dui. Vestibulum quis congue purus.
							Sed auctor varius leo, vitae convallis felis posuere
							sed
						</p>
						<p>
							<b>
								Maecenas tristique auctor maximus. Curabitur sit
								amet dui velit?
							</b>
						</p>
						<p>
							Suspendisse vitae magna volutpat, sollicitudin erat
							sit amet, luctus dui. Vestibulum quis congue purus.
							Sed auctor varius leo, vitae convallis felis posuere
							sed
						</p>
					</Box>
				</Paper>
				<Paper className="paper" id="contact">
					<Box className="heading">
						<h2>Contact Us</h2>
					</Box>
					<Box>
						<p>E-Life.</p>
						<p>Contact Support: +91 22 55547787</p>
						<p>Email: contact@elife.com</p>
					</Box>
				</Paper>
			</Container>
		</Static>
	);
}

export default Content;
