
import { Card, Container, ListGroup} from 'react-bootstrap'

export default function Packages(props) {
    const displayPackages = props.packages.map((eachPackage) => <li>{eachPackage}</li>)

    return (
        <div>
            {/* <div className="packages">
                <div className="packagesHeader">
                    <h1>Our Packages</h1>
                </div>
                <ul>
                    {displayPackages}
                </ul>
            </div> */}
               <Container className='my-3'>
                <Card>
                    <Card.Body>
                        <Card.Title>Our Packages</Card.Title>
                        <Card.Text>
                           Check out some of our packages! Every package is ethically sourced and organic!
                        </Card.Text>
                    </Card.Body>
                    <ListGroup>
                        {displayPackages}
                    </ListGroup>
                </Card>
            </Container>
        </div>
    )
}




