import { Button, Card, CardBody, Col, Container, Row } from "react-bootstrap";
import { FaFacebookSquare, FaInstagram, FaTelegramPlane, FaTwitter, FaYoutube } from 'react-icons/fa'
import {TextField} from '@mui/material';
import { Textarea } from "@mui/joy";
import Image from "next/image";

function Contact() {
    return (<section className="contact" id="contact">
        <Container>

            <h1 className="title"> Contact us</h1>

            <Card className="contact-card">
                <CardBody>
                    <Row>
                        <Col md={6} className="p-4" >
                            <h4>Leave us a message</h4>

                            <form action="">
                            
                                <TextField
                                    className="mt-4"
                                    id="outlined-basic"
                                    label="Name"
                                    variant="outlined"
                                    fullWidth
                                    required
                                />
                                <TextField
                                    className="mt-4"
                                    id="outlined-basic"
                                    label="Your email"
                                    variant="outlined"
                                    fullWidth
                                    required
                                />
                                <Textarea
                                    className="mt-4 p-3"
                                    placeholder="Briefly describe your project"
                                    minRows={4}
                                    maxRows={4.5}
                                    fullWidth
                                />

                                <Button type="submit">Send</Button>

                            </form>
                        </Col>
                        <Col md={6} className="p-4" >
                            <p><a target="_blank" href="https://yandex.com/map-widget/v1/?um=constructor%3A3d9eefa927bd54bcc9e8fa398a73c8cafb60622737263c96ad9341c32c21fa69&source=constructor">
                                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDE0QzEzLjY1NjkgMTQgMTUgMTIuNjU2OSAxNSAxMUMxNSA5LjM0MzE1IDEzLjY1NjkgOCAxMiA4QzEwLjM0MzEgOCA5IDkuMzQzMTUgOSAxMUM5IDEyLjY1NjkgMTAuMzQzMSAxNCAxMiAxNFoiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTcuNjU3IDE2LjY1NjdMMTMuNDE0IDIwLjg5OTdDMTMuMDM5IDIxLjI3NDMgMTIuNTMwNiAyMS40ODQ4IDEyLjAwMDUgMjEuNDg0OEMxMS40NzA0IDIxLjQ4NDggMTAuOTYyIDIxLjI3NDMgMTAuNTg3IDIwLjg5OTdMNi4zNDMgMTYuNjU2N0M1LjIyNDIyIDE1LjUzNzkgNC40NjIzNCAxNC4xMTI0IDQuMTUzNjkgMTIuNTYwNkMzLjg0NTA0IDExLjAwODcgNC4wMDM0OSA5LjQwMDIyIDQuNjA5MDEgNy45Mzg0NEM1LjIxNDUyIDYuNDc2NjUgNi4yMzk5IDUuMjI3MjUgNy41NTU0OCA0LjM0ODIxQzguODcxMDcgMy40NjkxOCAxMC40MTc4IDMgMTIgM0MxMy41ODIyIDMgMTUuMTI4OSAzLjQ2OTE4IDE2LjQ0NDUgNC4zNDgyMUMxNy43NjAxIDUuMjI3MjUgMTguNzg1NSA2LjQ3NjY1IDE5LjM5MSA3LjkzODQ0QzE5Ljk5NjUgOS40MDAyMiAyMC4xNTUgMTEuMDA4NyAxOS44NDYzIDEyLjU2MDZDMTkuNTM3NyAxNC4xMTI0IDE4Ljc3NTggMTUuNTM3OSAxNy42NTcgMTYuNjU2N1YxNi42NTY3WiIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=" alt="" />  Ташкент,  Юнусабадский район, проспект Амира Темура, 129Б</a></p>
                            <p><a href="tel:+998336600999"> <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNiA0SDEwTDEyIDlMOS41IDEwLjVDMTAuNTcxIDEyLjY3MTUgMTIuMzI4NSAxNC40MjkgMTQuNSAxNS41TDE2IDEzTDIxIDE1VjE5QzIxIDE5LjUzMDQgMjAuNzg5MyAyMC4wMzkxIDIwLjQxNDIgMjAuNDE0MkMyMC4wMzkxIDIwLjc4OTMgMTkuNTMwNCAyMSAxOSAyMUMxNS4wOTkzIDIwLjc2MyAxMS40MjAyIDE5LjEwNjUgOC42NTY4MyAxNi4zNDMyQzUuODkzNSAxMy41Nzk4IDQuMjM3MDUgOS45MDA3NCA0IDZDNCA1LjQ2OTU3IDQuMjEwNzEgNC45NjA4NiA0LjU4NTc5IDQuNTg1NzlDNC45NjA4NiA0LjIxMDcxIDUuNDY5NTcgNCA2IDQiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K" alt="Phone" />  +998 33 66 00 999</a></p>
                            <p><a href="mailto:azizbek.b@udevs.io" target="_blank"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5IDVINUMzLjg5NTQzIDUgMyA1Ljg5NTQzIDMgN1YxN0MzIDE4LjEwNDYgMy44OTU0MyAxOSA1IDE5SDE5QzIwLjEwNDYgMTkgMjEgMTguMTA0NiAyMSAxN1Y3QzIxIDUuODk1NDMgMjAuMTA0NiA1IDE5IDVaIiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTMgN0wxMiAxM0wyMSA3IiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==" alt="Email icon" />  azizbek.b@udevs.io</a></p>
                            <p><a href="https://t.me/azizbekhadirov" target="_blank" className="text-primary"> <FaTelegramPlane /> t.me/azizbekhadirov</a></p>

                            <a href="#"> <FaYoutube /> </a>
                            <a href="#"> <FaInstagram /> </a>
                            <a href="#"> <FaFacebookSquare /> </a>
                            <a href="#"> <FaTwitter /> </a>

                            <iframe src="https://yandex.com/map-widget/v1/?um=constructor%3A3d9eefa927bd54bcc9e8fa398a73c8cafb60622737263c96ad9341c32c21fa69&source=constructor" ></iframe>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Container>
    </section>);
}

export default Contact;