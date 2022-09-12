import React from 'react'
import { useEffect } from 'react'
import { Navbar, Container, Nav, Form, Button, Image, Card, Stack } from 'react-bootstrap';

function MyApi(props) {
    const baseUrl = 'https://api.tvmaze.com/shows/112/seasons'

    const seasonFinder = props.seasonFinder
    const setFinder = props.setSeasonFinder

    const seasonData = props.seasonData
    const setData = props.setSeasonData

    const fetchSeasonData = async () => {
        const response = await fetch(baseUrl)
        const data = await response.json()
            .catch((error) => {
                console.log(error)
            });
        //console.log(data)
        setData(data)

    }

    const capturarInput = (e) => {
        setFinder(e.target.value)
        filterSeason(e.target.value)
    }

    const filterSeason = (seasonFiltered) => {
            var filterResult = seasonData.filter((season) => {
                if (season.number
                    .toString()
                    .toLowerCase()
                    .includes(seasonFiltered.toLowerCase())) {
                    return season;
                }
            });
            setData(filterResult)
    }


    const orderSeasons = () => {
        const reloadSeasons = seasonData.sort((a,b)=>(a.number > b.number)? 1:-1)
                return(reloadSeasons)             
        }


    useEffect(() => {
        fetchSeasonData();
    }, []);

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" style={{ fontFamily: 'Caveat Brush, cursive', fontSize: '5vh' }}><Image src='https://www.pngall.com/wp-content/uploads/4/Eric-South-Park-PNG-180x180.png' roundedCircle style={{ width: '20vh', height: '15vh' }} />  SOUTH PEDIA</Navbar.Brand>
                </Container>
                <Container className="d-flex justify-content-end">
                    <Nav className="text-center">
                        <Form className="d-flex justify-content-end">
                            <Form.Control
                                value={seasonFinder}
                                type="search"
                                placeholder="Buscar..."
                                className="me-2"
                                aria-label="Search"
                                onChange={capturarInput}
                            />
                            <Button variant="outline-light" className='searchButton'>Search</Button>
                        </Form>
                    </Nav>
                </Container>
            </Navbar>


            <div className=' content-display container p-5'>
            <Stack gap={2} className="col-md-2 mx-auto">
                <Button
                onClick={orderSeasons}
                variant="success"
                className='btn-dark' style={{width: '25vh'}}>Order Seasons</Button>
                </Stack>
            </div>
            <div className='ContentComponent container p-4' >
                {seasonData.map(data => (
                    <Card key={data.id} className='card' >
                        <Card.Img variant="top" src={data.image.original} style={{ width: 'auto', height: 'auto' }} />
                        <Card.Body>
                            <Card.Title>{'Temporada ' + data.number}</Card.Title>

                        </Card.Body>
                        <Card.Footer>
                            <small className="text-">{'From ' + data.premiereDate + ' to ' + data.endDate}</small>
                        </Card.Footer>
                    </Card>
                ))}
            </div>
        </>
    )
}

export default MyApi
