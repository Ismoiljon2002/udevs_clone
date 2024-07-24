import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

function Team() {
    return (<section className="team" id="command">
        <Container>
            <Row>
                <Col md={6}>
                    <h1 className="title">Team</h1>

                    <p>For each project, we form a team that includes a project manager, business analyst, UI / UX designer, DevOps, QA engineer, backend and front-end developers.</p>

                    <h3>
                        <span>100+</span>
                        Dedicated team
                    </h3>
                </Col>
                <Col md={6} className="d-flex align-items-end">
                    <Image height={400} width={540} alt="image" src="https://udevs.io/static/teamIcon-7e3107c853b8ec1d129a87af0e68945a.svg" />
                </Col> 
            </Row>
            
        </Container>
    </section>);
}

export default Team;